"""
Notification message formatter.
"""

from app.schemas.contact import ContactRequest


class NotificationFormatter:

    @staticmethod
    def contact_received(contact: ContactRequest) -> str:
        return f"""
📩 New Contact Received

Name: {contact.name}
Email: {contact.email}
Subject: "New Portfolio Contact"

Message:
{contact.message}
""".strip()