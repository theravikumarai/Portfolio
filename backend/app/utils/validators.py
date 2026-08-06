"""
Reusable validation functions.
"""

import re


EMAIL_REGEX = r"^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$"

PHONE_REGEX = r"^\+?[1-9]\d{9,14}$"


def is_valid_email(email: str) -> bool:
    """
    Validate email address.
    """
    return bool(re.match(EMAIL_REGEX, email))


def is_valid_phone(phone: str) -> bool:
    """
    Validate international phone number.
    """
    return bool(re.match(PHONE_REGEX, phone))


def is_valid_string(value: str) -> bool:
    """
    Check if string contains non-whitespace characters.
    """
    return bool(value and value.strip())