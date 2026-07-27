# 🚀 Portfolio Website & Serverless Backend

> A production-ready full-stack portfolio application built with
> **React**, **FastAPI**, and **AWS Serverless** architecture.

![React](https://img.shields.io/badge/Frontend-React-61DAFB?logo=react)
![FastAPI](https://img.shields.io/badge/Backend-FastAPI-009688?logo=fastapi)
![AWS](https://img.shields.io/badge/Cloud-AWS-FF9900?logo=amazonaws)
![Lambda](https://img.shields.io/badge/Compute-Lambda-orange) ![API
Gateway](https://img.shields.io/badge/API-Gateway-blue)
![License](https://img.shields.io/badge/License-MIT-green)

------------------------------------------------------------------------

## 📖 Overview

This project is a modern portfolio website with a production-grade
serverless backend.

Visitors can submit a contact request from the portfolio website. The
request is validated, stored, and notifications are sent through
multiple channels.

------------------------------------------------------------------------

## ✨ Features

-   Responsive React + Vite frontend
-   FastAPI REST backend
-   AWS Lambda deployment
-   Amazon API Gateway
-   Amazon S3 persistence
-   Amazon DynamoDB metadata storage
-   Amazon SNS notifications
-   Telegram notifications
-   WhatsApp notification support
-   Structured logging
-   Request ID middleware
-   Global exception handling
-   Repository & Service Layer architecture
-   Environment-based configuration

------------------------------------------------------------------------

## 🏗️ Architecture

``` text
React (Vercel)
      │
      ▼
API Gateway
      │
      ▼
AWS Lambda
(FastAPI + Mangum)
      │
 ┌────┴──────────────┐
 ▼                   ▼
Amazon S3      DynamoDB
      │
      ▼
Notification Service
 ├── Telegram
 ├── SNS
 └── WhatsApp
```

------------------------------------------------------------------------

## 🛠 Tech Stack

### Frontend

-   React
-   Vite
-   Axios
-   CSS

### Backend

-   FastAPI
-   Pydantic
-   Mangum
-   Boto3
-   Uvicorn

### AWS

-   Lambda
-   API Gateway
-   S3
-   DynamoDB
-   SNS
-   CloudWatch
-   IAM

------------------------------------------------------------------------

## 📂 Project Structure

``` text
portfolio-project/
├── frontend/
│   ├── src/
│   └── public/
│
├── backend/
│   ├── app/
│   │   ├── api/
│   │   ├── services/
│   │   ├── repositories/
│   │   ├── middleware/
│   │   ├── schemas/
│   │   ├── exceptions/
│   │   ├── core/
│   │   └── main.py
│   └── requirements.txt
```

------------------------------------------------------------------------

## 🔗 API

### Health

``` http
GET /api/v1/health
```

### Contact

``` http
POST /api/v1/contact
```

Example:

``` json
{
  "name":"John Doe",
  "email":"john@example.com",
  "message":"Hello Ravi!"
}
```

------------------------------------------------------------------------

## ⚙️ Environment Variables

Example backend configuration:

``` env
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

------------------------------------------------------------------------

## 🚀 Deployment

### Frontend

-   Deploy using Vercel

### Backend

-   Package FastAPI
-   Deploy to AWS Lambda
-   Configure API Gateway
-   Configure IAM Role
-   Configure Environment Variables

------------------------------------------------------------------------

## 📈 Logging

-   Structured logging
-   CloudWatch integration
-   Request ID tracking
-   Exception logging

------------------------------------------------------------------------

## 🔮 Future Improvements

-   Authentication
-   Admin dashboard
-   Email notifications
-   CI/CD pipeline
-   Docker deployment
-   Terraform / CloudFormation
-   Unit & Integration tests

------------------------------------------------------------------------

## 👨‍💻 Author

**Ravi Kumar**

-   AI Enginner


------------------------------------------------------------------------

## 📄 License

This project is licensed under the MIT License.
