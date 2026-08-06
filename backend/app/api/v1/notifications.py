"""
Notification Endpoints.

Implementation will be added in Phase 5.
"""

from fastapi import APIRouter

router = APIRouter(
    prefix="/notifications",
    tags=["Notifications"],
)


@router.get(
    "/status",
    summary="Notification Service Status",
)
async def notification_status():
    """
    Temporary endpoint.

    Will be replaced with real notification APIs
    during Phase 5.
    """

    return {
        "service": "Notification",
        "status": "Not Implemented Yet",
    }