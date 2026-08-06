"""
DynamoDB Repository.

Responsible for all DynamoDB operations.

Phase 3.1:
    Placeholder implementation.

Future:
    - Insert item
    - Update item
    - Query item
"""

from typing import Any

from botocore.exceptions import BotoCoreError, ClientError

from app.core.aws import dynamodb_resource
from app.core.logger import logger
from app.core.settings import settings
from app.exceptions.custom_exceptions import StorageException

class DynamoDBRepository:
    """Repository for DynamoDB operations."""

    @staticmethod
    def save(item: dict[str, Any]) -> bool:
        """
        Save metadata into DynamoDB.

        Args:
            item: Metadata dictionary.

        Returns:
            True if saved successfully.

        Raises:
            StorageException
        """

        try:

            table = dynamodb_resource.Table(
                settings.DYNAMODB_CONTACT_TABLE
            )
            logger.info("AWS Region: %s", settings.AWS_REGION)
            logger.info("DynamoDB Table: %s", settings.DYNAMODB_CONTACT_TABLE)
            table.put_item(Item=item)

            logger.info(
                "Metadata saved to DynamoDB: %s",
                item["contact_id"],
            )

            return True

        except (ClientError, BotoCoreError) as exc:

            logger.exception("Failed to save metadata to DynamoDB.")

            raise StorageException(
                message="Unable to save metadata to DynamoDB."
            ) from exc