"""
Global exception handlers.
"""

from fastapi import FastAPI, Request
from fastapi.responses import JSONResponse
from fastapi.exceptions import RequestValidationError

from app.core.logger import logger
from app.exceptions.custom_exceptions import ApplicationException


async def application_exception_handler(
    request: Request,
    exc: ApplicationException,
):
    """
    Handle custom application exceptions.
    """

    logger.error(f"{request.url.path} | {exc.message}")

    return JSONResponse(
        status_code=exc.status_code,
        content={
            "success": False,
            "message": exc.message,
        },
    )


async def validation_exception_handler(
    request: Request,
    exc: RequestValidationError,
):
    """
    Handle FastAPI validation errors.
    """

    logger.error(f"{request.url.path} | Validation Error")

    return JSONResponse(
        status_code=422,
        content={
            "success": False,
            "message": "Validation Error",
            "errors": exc.errors(),
        },
    )


async def generic_exception_handler(
    request: Request,
    exc: Exception,
):
    """
    Handle unexpected exceptions.
    """

    logger.exception(exc)

    return JSONResponse(
        status_code=500,
        content={
            "success": False,
            "message": "Internal Server Error",
        },
    )


def register_exception_handlers(app: FastAPI):
    """
    Register all exception handlers.
    """

    app.add_exception_handler(
        ApplicationException,
        application_exception_handler,
    )

    app.add_exception_handler(
        RequestValidationError,
        validation_exception_handler,
    )

    app.add_exception_handler(
        Exception,
        generic_exception_handler,
    )