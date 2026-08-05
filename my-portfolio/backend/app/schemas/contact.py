"""
Contact request and response schemas.
"""
from typing import Any

from pydantic import BaseModel, EmailStr, Field, ConfigDict


class ContactRequest(BaseModel):
    """
    Contact form request payload.
    """

    model_config = ConfigDict(
        json_schema_extra={
            "example": {
                "name": "Ravi Kumar",
                "email": "ravi@example.com",
                "message": "I would like to discuss an AI/ML project."
            }
        }
    )

    name: str = Field(
        ...,
        min_length=2,
        max_length=100,
        description="Full name of the sender",
    )

    email: EmailStr = Field(
        ...,
        description="Sender email address",
    )

    message: str = Field(
        ...,
        min_length=2,
        max_length=5000,
        description="Message body",
    )


class ContactResponse(BaseModel):
    """
    Standard Contact API response.
    """

    success: bool
    message: str
    data: dict[str, Any] | None = None