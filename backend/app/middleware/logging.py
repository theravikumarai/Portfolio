"""
Request Logging Middleware.
"""

import time

from starlette.middleware.base import BaseHTTPMiddleware
from starlette.requests import Request

from app.core.logger import logger


class LoggingMiddleware(BaseHTTPMiddleware):

    async def dispatch(self, request: Request, call_next):

        start_time = time.time()

        response = await call_next(request)

        process_time = round((time.time() - start_time) * 1000, 2)

        request_id = getattr(request.state, "request_id", "N/A")

        logger.info(
            "%s | %s | %s | %s | %.2f ms",
            request.method,
            request.url.path,
            response.status_code,
            request_id,
            process_time,
        )

        return response