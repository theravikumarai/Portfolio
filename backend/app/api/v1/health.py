"""
Health Check API.
"""

from fastapi import APIRouter

from app.core.constants import HEALTHY
from app.core.settings import settings
from app.schemas.health import HealthResponse
from app.utils.datetime_utils import get_current_timestamp

router = APIRouter()


@router.get(
    "/health",
    response_model=HealthResponse
)
async def health_check():

    return HealthResponse(
        status=HEALTHY,
        app_name=settings.APP_NAME,
        version=settings.APP_VERSION,
        environment=settings.APP_ENV,
        timestamp=get_current_timestamp(),
    )

