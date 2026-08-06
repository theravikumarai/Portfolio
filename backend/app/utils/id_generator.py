"""
Reusable ID generation utilities.
"""

from uuid import uuid4


def generate_uuid() -> str:
    """
    Generate a random UUID4 string.

    Returns:
        str: UUID string
    """
    return str(uuid4())


def generate_contact_id() -> str:
    """
    Generate a unique contact identifier.
    """
    return f"contact-{uuid4().hex}"


def generate_notification_id() -> str:
    """
    Generate a unique notification identifier.
    """
    return f"notification-{uuid4().hex}"