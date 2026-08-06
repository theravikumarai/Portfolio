"""
Contact Repository.

Responsible for coordinating persistence
for contact requests.
"""

from typing import Any

from app.core.logger import logger
from app.repositories.dynamodb_repository import DynamoDBRepository
from app.repositories.s3_repository import S3Repository


class ContactRepository:
    """Repository responsible for persisting contact requests."""

    @staticmethod
    def save(
        payload: dict[str, Any],
        metadata: dict[str, Any],
    ) -> dict[str, Any]:
        """
        Persist a contact request.

        Workflow:
            1. Generate S3 object key.
            2. Upload complete payload to S3.
            3. Store searchable metadata in DynamoDB.
            4. Return persistence result.

        Args:
            payload: Complete contact payload.
            metadata: Searchable metadata.

        Returns:
            Persistence result.
        """

        contact_id = payload["contact_id"]
        received_at = payload["received_at"]

        # Example:
        # contacts/2026/07/22/4f9d1d77-acde.json
        date_path = received_at[:10].replace("-", "/")
        s3_key = f"contacts/{date_path}/{contact_id}.json"

        logger.info(
            "Persisting contact request. contact_id=%s",
            contact_id,
        )

        # Store complete request in S3
        S3Repository.upload(
            key=s3_key,
            data=payload,
        )

        logger.info(
            "Contact payload uploaded to S3. key=%s",
            s3_key,
        )

        # Create metadata copy
        metadata_to_save = {
            **metadata,
            "s3_key": s3_key,
        }

        # Store searchable metadata
        DynamoDBRepository.save(metadata_to_save)

        logger.info(
            "Contact metadata stored in DynamoDB. contact_id=%s",
            contact_id,
        )

        return {
            "saved": True,
            "contact_id": contact_id,
            "s3_key": s3_key,
        }