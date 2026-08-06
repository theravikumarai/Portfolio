import boto3

from app.core.settings import settings


class AWSClients:
    """
    Singleton AWS clients.

    Credentials are automatically resolved by boto3:
    - Local machine: AWS CLI / AWS Profile / Environment Variables
    - AWS Lambda: IAM Execution Role
    """

    def __init__(self):
        session = boto3.Session(
            region_name=settings.AWS_REGION
        )

        self.s3 = session.client("s3")
        self.sns = session.client("sns")
        self.dynamodb = session.resource("dynamodb")


aws = AWSClients()

s3_client = aws.s3
sns_client = aws.sns
dynamodb_resource = aws.dynamodb