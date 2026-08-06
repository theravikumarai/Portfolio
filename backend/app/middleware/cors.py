"""
CORS configuration.
"""
from app.core.settings import settings

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware


def register_cors(app: FastAPI):

    app.add_middleware(
        CORSMiddleware,
        allow_origins=settings.ALLOWED_ORIGINS.split(","),
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )


# allow_origins=[
#     "https://your-vercel-domain.vercel.app"
# ]  ---> replace during deployments