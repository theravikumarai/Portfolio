# Portfolio Website

A full-stack portfolio application built with **React**, **FastAPI**, and **AWS Serverless**.

The frontend is built with React and deployed on Vercel. The backend is a FastAPI application running on AWS Lambda behind API Gateway. Contact requests submitted through the website are validated, stored, and processed through a notification pipeline.

## Architecture

```
React (Vercel)
        │
        ▼
API Gateway
        │
        ▼
AWS Lambda (FastAPI + Mangum)
        │
   ┌────┴────┐
   ▼         ▼
Amazon S3  DynamoDB
        │
        ▼
Notification Service
   ├── Amazon SNS
   ├── Telegram
   └── WhatsApp
```

## Technology Stack

### Frontend

* React
* Vite
* Axios

### Backend

* FastAPI
* Pydantic
* Mangum
* Boto3

### AWS

* AWS Lambda
* Amazon API Gateway
* Amazon S3
* Amazon DynamoDB
* Amazon SNS
* Amazon CloudWatch

## Project Structure

```
Portfolio/
├── backend/
│   ├── app/
│   ├── scripts/
│   ├── tests/
│   ├── lambda_handler.py
│   └── requirements.txt
│
├── frontend/
│   ├── public/
│   ├── src/
│   ├── package.json
│   └── vite.config.js
│
├── .github/
├── .gitignore
└── README.md
```

## API

### Health Check

```
GET /api/v1/health
```

### Contact

```
POST /api/v1/contact
```

Example request:

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Hello Ravi!"
}
```

## Configuration

The backend uses environment variables for AWS resources, notification services, and application configuration.

```
AWS_REGION=
AWS_S3_BUCKET_NAME=
DYNAMODB_CONTACT_TABLE=
AWS_SNS_TOPIC_ARN=

TELEGRAM_BOT_TOKEN=
TELEGRAM_CHAT_ID=

WHATSAPP_ACCESS_TOKEN=
WHATSAPP_PHONE_NUMBER_ID=
WHATSAPP_RECIPIENT_NUMBER=

ALLOWED_ORIGINS=
```

## Deployment

### Frontend

Deploy to Vercel.

### Backend

* Package the FastAPI application
* Deploy to AWS Lambda
* Configure API Gateway
* Configure IAM permissions
* Set environment variables

## Roadmap

* Authentication
* Admin dashboard
* Email notifications
* CI/CD
* Docker
* Infrastructure as Code
* Automated testing

## Copyright

© 2026 Ravi Kumar.

This repository is provided for portfolio and demonstration purposes only. The source code may not be copied, modified, or redistributed without prior permission.
