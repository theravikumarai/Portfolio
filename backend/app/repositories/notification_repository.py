"""
Repository for storing notification results.
"""

from datetime import UTC, datetime

from botocore.exceptions import BotoCoreError, ClientError

from app.core.aws import dynamodb_resource
from app.core.logger import logger
from app.core.settings import settings
from app.exceptions.custom_exceptions import StorageException
from app.schemas.notification import NotificationResult
from app.utils.id_generator import generate_notification_id


class NotificationRepository:
    """Repository for notification persistence."""

    @staticmethod
    def save(
        contact_id: str,
        results: list[NotificationResult],
    ) -> str:
        """
        Save notification results.

        Args:
            contact_id: Contact identifier.
            results: Notification results.

        Returns:
            bool
        """

        try:

            table = dynamodb_resource.Table(
                settings.DYNAMODB_NOTIFICATION_TABLE
            )
            notification_id = generate_notification_id()
            item = {
                "notification_id": notification_id,
                "contact_id": contact_id,
                "created_at": datetime.now(
                    UTC
                ).isoformat(),
                "results": [
                    result.model_dump()
                    for result in results
                ],
            }

            table.put_item(Item=item)

            logger.info(
                "Notification results saved for contact: %s",
                contact_id,
            )

            return notification_id

        except (
            ClientError,
            BotoCoreError,
        ) as exc:

            logger.exception(
                "Failed to save notification results."
            )

            raise StorageException(
                message="Unable to save notification results."
            ) from exc