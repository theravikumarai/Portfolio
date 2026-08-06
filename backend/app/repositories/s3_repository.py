"""
S3 Repository.

Responsible for all Amazon S3 operations.
"""

import json
from typing import Any

from botocore.exceptions import BotoCoreError, ClientError

from app.core.aws import s3_client
from app.core.logger import logger
from app.core.settings import settings
from app.exceptions.custom_exceptions import StorageException


class S3Repository:
    """Repository for Amazon S3 operations."""

    @staticmethod
    def upload(
        key: str,
        data: dict[str, Any],
    ) -> str:
        """
        Upload JSON data to Amazon S3.

        Args:
            key: S3 object key.
            data: Dictionary to upload.

        Returns:
            Uploaded S3 object key.

        Raises:
            StorageException
        """

        try:
            s3_client.put_object(
                Bucket=settings.AWS_S3_BUCKET_NAME,
                Key=key,
                Body=json.dumps(data, default=str),
                ContentType="application/json",
            )

            logger.info("Successfully uploaded object to S3: %s", key)

            return key

        except (ClientError, BotoCoreError) as exc:

            logger.exception("S3 upload failed.")

            raise StorageException(
                message="Unable to upload contact request to S3."
            ) from exc