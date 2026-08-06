"""
SNS Notification Service.
"""

from botocore.exceptions import BotoCoreError, ClientError

from app.core.aws import sns_client
from app.core.logger import logger
from app.core.settings import settings
from app.schemas.notification import NotificationResult


class SNSService:
    """AWS SNS notification service."""

    @staticmethod
    def send(message: str) -> NotificationResult:
        """
        Publish a message to AWS SNS.

        Args:
            message: Notification message.

        Returns:
            NotificationResult
        """

        try:

            response = sns_client.publish(
                TopicArn=settings.AWS_SNS_TOPIC_ARN,
                Subject="Portfolio Contact Notification",
                Message=message,
            )

            logger.info(
                "SNS message published successfully. MessageId=%s",
                response["MessageId"],
            )

            return NotificationResult(
                channel="sns",
                success=True,
                message="SNS notification sent successfully.",
            )

        except (ClientError, BotoCoreError) as exc:

            logger.exception("SNS publish failed.")

            return NotificationResult(
                channel="sns",
                success=False,
                message="Failed to publish SNS notification.",
                error=str(exc),
            )