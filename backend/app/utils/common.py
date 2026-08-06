from typing import Any


def is_empty(value: Any) -> bool:
    """
    Returns True if value is None or empty.
    """

    if value is None:
        return True

    if isinstance(value, str):
        return value.strip() == ""

    if isinstance(value, (list, tuple, set, dict)):
        return len(value) == 0

    return False


def success_response(
    message: str,
    data: Any = None,
) -> dict:
    """
    Standard success response.
    """

    return {
        "success": True,
        "message": message,
        "data": data,
    }


def error_response(
    message: str,
    error: Any = None,
) -> dict:
    """
    Standard error response.
    """

    return {
        "success": False,
        "message": message,
        "error": error,
    }