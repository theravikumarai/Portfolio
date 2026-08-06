"""
AWS Lambda entry point.
"""

from mangum import Mangum
from app.main import app

handler = Mangum(
    app,
    lifespan="on",
    api_gateway_base_path="/prod",
)