"""
WhatsApp Notification Service using Meta Cloud API.
"""

import requests

from app.core.logger import logger
from app.core.settings import settings
from app.schemas.notification import NotificationResult


class WhatsAppService:
    """Meta WhatsApp Cloud API notification service."""

    @staticmethod
    def send(message: str) -> NotificationResult:
        """
        Send a WhatsApp notification.

        Args:
            message: Notification message.

        Returns:
            NotificationResult
        """

        url = (
            f"https://graph.facebook.com/v23.0/"
            f"{settings.WHATSAPP_PHONE_NUMBER_ID}/messages"
        )

        headers = {
            "Authorization": f"Bearer {settings.WHATSAPP_ACCESS_TOKEN}",
            "Content-Type": "application/json",
        }

        payload = {
            "messaging_product": "whatsapp",
            "to": settings.WHATSAPP_RECIPIENT_NUMBER,
            "type": "text",
            "text": {
                "body": message,
            },
        }

        try:
            response = requests.post(
                url,
                headers=headers,
                json=payload,
                timeout=10,
            )

            response.raise_for_status()

            response_data = response.json()
            print(response.status_code)
            print(response_data)

            message_id = (
                response_data
                .get("messages", [{}])[0]
                .get("id")
            )

            logger.info(
                "WhatsApp notification sent successfully. "
                "Message ID: %s",
                message_id,
            )

            return NotificationResult(
                channel="whatsapp",
                success=True,
                message="WhatsApp notification sent successfully.",
            )

        except requests.RequestException as exc:

            logger.exception(
                "Failed to send WhatsApp notification."
            )

            return NotificationResult(
                channel="whatsapp",
                success=False,
                message="Failed to send WhatsApp notification.",
                error=str(exc),
            )