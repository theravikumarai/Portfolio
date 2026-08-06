"""
Telegram Notification Service.
"""

import requests

from app.core.logger import logger
from app.core.settings import settings
from app.schemas.notification import NotificationResult


class TelegramService:
    """Telegram notification service."""

    @staticmethod
    def send(message: str) -> NotificationResult:
        """
        Send a Telegram notification.

        Args:
            message: Notification message.

        Returns:
            NotificationResult
        """

        url = (
            f"https://api.telegram.org/bot"
            f"{settings.TELEGRAM_BOT_TOKEN}/sendMessage"
        )

        payload = {
            "chat_id": settings.TELEGRAM_CHAT_ID,
            "text": message,
        }

        try:
            response = requests.post(
                url,
                json=payload,
                timeout=10,
            )

            response.raise_for_status()

            logger.info("Telegram notification sent successfully.")

            return NotificationResult(
                channel="telegram",
                success=True,
                message="Telegram notification sent successfully.",
            )

        except requests.RequestException as exc:

            logger.exception("Telegram notification failed.")

            return NotificationResult(
                channel="telegram",
                success=False,
                message="Failed to send Telegram notification.",
                error=str(exc),
            )