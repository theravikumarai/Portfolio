"""
Central API Router.

All application routes should be registered here.
"""

from fastapi import APIRouter

from app.api.v1.health import router as health_router
from app.api.v1.contact import router as contact_router
from app.api.v1.notifications import router as notification_router


api_router = APIRouter(prefix="/api/v1")

# ==========================================================
# Health Routes
# ==========================================================

# Health
api_router.include_router(
    health_router,
    tags=["Health"],
)

# Contact
api_router.include_router(
    contact_router,
    tags=["Contact"],
)

# Notifications
api_router.include_router(
    notification_router,
    tags=["Notifications"],
)