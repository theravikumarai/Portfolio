from typing import Any

from pydantic import BaseModel


class ErrorResponse(BaseModel):

    success: bool

    message: str

    errors: Any | None = None