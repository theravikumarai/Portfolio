"""
Notification Manager.
"""
from app.core.settings import settings
from app.notifications.notification_formatter import NotificationFormatter
from app.notifications.sns_service import SNSService
from app.notifications.telegram_service import TelegramService
from app.notifications.whatsapp_service import WhatsAppService
from app.repositories.notification_repository import NotificationRepository
from app.schemas.contact import ContactRequest
from app.schemas.notification import NotificationResult

from app.core.logger import logger

class NotificationManager:
    """Notification manager."""

    @staticmethod
    def notify_contact_received(
        contact_id: str,
        contact: ContactRequest,
    ) -> list[NotificationResult]:
        """
        Send notifications.

        Args:
            contact_id: Contact identifier.
            contact: Contact request.

        Returns:
            List of notification results.
        """

        message = NotificationFormatter.contact_received(contact)

        results: list[NotificationResult] = []

        if settings.ENABLE_SNS:
            results.append(SNSService.send(message))

        if settings.ENABLE_TELEGRAM:
            results.append(TelegramService.send(message))

        if settings.ENABLE_WHATSAPP:
            results.append(WhatsAppService.send(message))

        try:
            notification_id = NotificationRepository.save(
                contact_id=contact_id,
                results=results,
            )

            logger.info(
                "Notification record created: %s",
                notification_id,
            )

        except Exception:
            logger.exception(
                "Failed to persist notification results."
            )

        return results