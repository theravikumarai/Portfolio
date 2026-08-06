"""
Date and time utility functions.
"""

from datetime import datetime
from datetime import UTC

from app.core.constants import DATETIME_FORMAT, TIMEZONE


def get_current_datetime() -> datetime:
    """
    Returns current timezone-aware datetime.
    """
    return datetime.now(UTC)


def get_current_timestamp() -> str:
    """
    Returns formatted current timestamp.

    Example:
        2026-07-21 18:45:22
    """
    return get_current_datetime().strftime(DATETIME_FORMAT)


def datetime_to_string(value: datetime) -> str:
    """
    Convert datetime to string.
    """
    return value.strftime(DATETIME_FORMAT)


def string_to_datetime(value: str) -> datetime:
    """
    Convert string to datetime.
    """
    return datetime.strptime(value, DATETIME_FORMAT)