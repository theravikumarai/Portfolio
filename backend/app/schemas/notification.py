"""
Notification schemas.
"""

from pydantic import BaseModel


class NotificationResult(BaseModel):
    """Result of a notification delivery."""

    channel: str
    success: bool
    message: str
    error: str | None = None