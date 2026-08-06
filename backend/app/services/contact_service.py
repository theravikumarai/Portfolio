"""
Contact Service.

Contains business logic for contact requests.
"""

from datetime import UTC, datetime
from typing import Any

from app.core.logger import logger
from app.notifications.notification_manager import NotificationManager
from app.repositories.contact_repository import ContactRepository
from app.schemas.contact import ContactRequest
from app.utils.id_generator import generate_contact_id


class ContactService:
    """Business service for contact operations."""

    @staticmethod
    def submit_contact(contact: ContactRequest) -> dict[str, Any]:
        """
        Process a contact request.

        Workflow:
            1. Generate contact ID.
            2. Generate received timestamp.
            3. Build payload for S3.
            4. Build metadata for DynamoDB.
            5. Persist contact request.
            6. Trigger notifications.
            7. Return API response.

        Args:
            contact: Validated contact request.

        Returns:
            Service response.
        """

        logger.info(
            "Processing contact request from email=%s",
            contact.email,
        )

        # Generate business values
        contact_id = generate_contact_id()

        received_at = (
            datetime.now(UTC)
            .replace(microsecond=0)
            .isoformat()
            .replace("+00:00", "Z")
        )

        # Complete payload stored in S3
        payload = {
            "contact_id": contact_id,
            "received_at": received_at,
            **contact.model_dump(),
        }

        # Searchable metadata stored in DynamoDB
        metadata = {
            "contact_id": contact_id,
            "received_at": received_at,
            "name": contact.name,
            "email": contact.email,
            "subject": "Portfolio Contact",
        }

        logger.info(
            "Persisting contact request. contact_id=%s",
            contact_id,
        )

        repository_result = ContactRepository.save(
            payload=payload,
            metadata=metadata,
        )

        logger.info(
            "Contact request persisted successfully. contact_id=%s",
            contact_id,
        )

        # Trigger notifications without impacting API response
        try:
            NotificationManager.notify_contact_received(
                contact_id=contact_id,
                contact=contact,
            )

            logger.info(
                "Notifications triggered successfully. contact_id=%s",
                contact_id,
            )

        except Exception:
            logger.exception(
                "Failed to process notifications. contact_id=%s",
                contact_id,
            )

        return {
            "success": True,
            "message": "Contact request received successfully.",
            "data": {
                "contact_id": contact_id,
                "received_at": received_at,
                "storage": repository_result,
            },
        }