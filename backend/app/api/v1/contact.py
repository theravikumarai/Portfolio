"""
Contact API endpoints.
"""

from fastapi import APIRouter, status

from app.schemas.contact import ContactRequest, ContactResponse
from app.services.contact_service import ContactService

router = APIRouter(
    prefix="/contact",
    tags=["Contact"],
)


@router.post(
    "",
    response_model=ContactResponse,
    status_code=status.HTTP_201_CREATED,
    summary="Submit a contact request",
    description="Accepts a contact request and stores it in the backend.",
)
def submit_contact(
    contact: ContactRequest,
) -> ContactResponse:
    """
    Submit a contact request.

    Args:
        contact: Validated contact request.

    Returns:
        ContactResponse
    """

    result = ContactService.submit_contact(contact)

    return ContactResponse(**result)