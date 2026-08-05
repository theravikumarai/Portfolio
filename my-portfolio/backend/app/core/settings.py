"""
Application Settings
"""

from functools import lru_cache
from pathlib import Path
from typing import Optional

from pydantic import Field
from pydantic_settings import BaseSettings, SettingsConfigDict

BASE_DIR = Path(__file__).resolve().parent.parent.parent


class Settings(BaseSettings):

    model_config = SettingsConfigDict(
        env_file=BASE_DIR / ".env",
        env_file_encoding="utf-8",
        case_sensitive=True,
        extra="ignore",
    )

    # ======================================================
    # Application
    # ======================================================

    APP_NAME: str = "Portfolio Backend"
    APP_VERSION: str = "1.0.0"
    APP_ENV: str = "dev"

    # ======================================================
    # AWS
    # ======================================================

    AWS_REGION: str = "ap-south-1"

    # ======================================================
    # S3
    # ======================================================

    AWS_S3_BUCKET_NAME: Optional[str] = None

    # Leave these optional.
    # In Lambda we will use IAM Role instead of access keys.
    AWS_ACCESS_KEY_ID: Optional[str] = None
    AWS_SECRET_ACCESS_KEY: Optional[str] = None

    # ======================================================
    # DynamoDB
    # ======================================================

    DYNAMODB_CONTACT_TABLE: Optional[str] = None
    DYNAMODB_NOTIFICATION_TABLE: Optional[str] = None

    # ======================================================
    # SNS
    # ======================================================

    AWS_SNS_TOPIC_ARN: Optional[str] = None

    # ======================================================
    # Telegram
    # ======================================================

    TELEGRAM_BOT_TOKEN: Optional[str] = None
    TELEGRAM_CHAT_ID: Optional[str] = None

    # ======================================================
    # WhatsApp
    # ======================================================

    WHATSAPP_ACCESS_TOKEN: Optional[str] = None
    WHATSAPP_PHONE_NUMBER_ID: Optional[str] = None
    WHATSAPP_BUSINESS_ACCOUNT_ID: Optional[str] = None
    WHATSAPP_RECIPIENT_NUMBER: Optional[str] = None

    # ======================================================
    # Feature Flags
    # ======================================================

    ENABLE_SNS: bool = True
    ENABLE_TELEGRAM: bool = True
    ENABLE_WHATSAPP: bool = False

    # ======================================================
    # API
    # ======================================================

    ALLOWED_ORIGINS: str = (
        "https://theravikumarai.vercel.app,"
        "http://localhost:3000,"
        "http://localhost:5173"
    )


@lru_cache
def get_settings() -> Settings:
    return Settings()


settings = get_settings()