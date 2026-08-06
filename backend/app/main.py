"""
Application Entry Point.
"""

from contextlib import asynccontextmanager

from fastapi import FastAPI

from app.api.router import api_router
from app.core.logger import logger
from app.core.settings import settings
from app.exceptions.handlers import register_exception_handlers
from app.middleware.cors import register_cors
from app.middleware.logging import LoggingMiddleware
from app.middleware.request_id import RequestIDMiddleware


# ==========================================================
# Application Lifespan
# ==========================================================

@asynccontextmanager
async def lifespan(app: FastAPI):

    logger.info("=" * 60)
    logger.info("%s started", settings.APP_NAME)
    logger.info("Environment : %s", settings.APP_ENV)
    logger.info("Version     : %s", settings.APP_VERSION)
    logger.info("=" * 60)

    yield

    logger.info("Application shutdown.")


# ==========================================================
# FastAPI Application
# ==========================================================

app = FastAPI(
    title=settings.APP_NAME,
    version=settings.APP_VERSION,
    docs_url="/docs",
    redoc_url="/redoc",
    openapi_url="/openapi.json",
    lifespan=lifespan,
)


# ==========================================================
# Root Endpoint
# ==========================================================

@app.get("/", tags=["Root"])
async def root():
    return {
        "service": settings.APP_NAME,
        "version": settings.APP_VERSION,
        "environment": settings.APP_ENV,
        "status": "running",
        "docs": "/docs",
        "health": "/api/v1/health",
    }


# ==========================================================
# Middleware
# ==========================================================

register_cors(app)

app.add_middleware(RequestIDMiddleware)
app.add_middleware(LoggingMiddleware)


# ==========================================================
# Exception Handlers
# ==========================================================

register_exception_handlers(app)


# ==========================================================
# API Routes
# ==========================================================

app.include_router(api_router)