"""
Custom application exceptions.
"""


class ApplicationException(Exception):
    """
    Base application exception.
    """

    def __init__(
        self,
        message: str,
        status_code: int = 500,
    ):
        self.message = message
        self.status_code = status_code
        super().__init__(message)


class ValidationException(ApplicationException):
    """
    Validation related exception.
    """

    def __init__(self, message: str):
        super().__init__(message, 400)


class StorageException(ApplicationException):
    """
    S3/DynamoDB related exception.
    """

    def __init__(self, message: str):
        super().__init__(message, 500)


class NotificationException(ApplicationException):
    """
    SNS/Telegram/Twilio exception.
    """

    def __init__(self, message: str):
        super().__init__(message, 500)


class ResourceNotFoundException(ApplicationException):
    """
    Resource not found.
    """

    def __init__(self, message: str):
        super().__init__(message, 404)


class UnauthorizedException(ApplicationException):
    """
    Unauthorized request.
    """

    def __init__(self, message: str = "Unauthorized"):
        super().__init__(message, 401)