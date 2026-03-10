# Backend Infrastructure Documentation

## Project Overview

This repository contains the backend system and administrative infrastructure for the **Sonashri Engineering & Solutions website**.

The backend powers the dynamic functionality of the website, including:

- Case Study management system
- Training & Career form submissions
- Admin authentication and dashboard
- Media storage handling
- API endpoints used by the frontend application

The system is built using a **Node.js backend architecture** with a **MySQL database**, and deployed using modern cloud infrastructure.

This document explains the **architecture, hosting services, and deployment pipeline** so the project can be maintained, transferred, or extended by future developers.

---

# Technology Stack

## Backend Runtime
- Node.js
- Express.js

## Database
- MySQL (Hosted on Railway)

## File Storage
- Cloudinary

## Backend Hosting
- Render

## Frontend
- React (Vite)

---

# System Architecture


Frontend (React / Vite)
│
│ API Requests
▼
Backend Server (Node.js + Express)
Hosted on Render
│
├──────────────► MySQL Database (Railway)
│
└──────────────► Cloudinary (Media Storage)


---

# Data Flow

1. A user interacts with the frontend website.
2. The frontend sends API requests to the backend server.
3. The backend processes the request and:

   - Reads or writes structured data to **MySQL (Railway)**
   - Uploads or retrieves media files from **Cloudinary**

4. The backend returns structured responses to the frontend.

---

# Hosting Infrastructure

## Backend Hosting — Render

The backend API server is deployed on **Render**.

Render is responsible for:

- Running the Node.js server
- Managing environment variables
- Handling backend uptime
- Exposing API endpoints used by the frontend

---

## Deployment Flow


Developer pushes code → GitHub repository
│
▼
Render detects update
│
▼
Render builds and deploys Node.js server
│
▼
Backend API becomes live


---

# Environment Variables

Configured inside the **Render dashboard**.

Example variables:


PORT=
DATABASE_URL=

CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=

JWT_SECRET=


⚠️ Never commit `.env` files or credentials to GitHub.

---

# Database — Railway (MySQL)

The application database is hosted using **Railway MySQL**.

Railway provides:

- Managed MySQL hosting
- Secure remote database connection
- Persistent data storage

---

## Database Responsibilities

The database stores:

- Case studies
- Admin credentials
- Training & career form submissions
- Other structured application data

---

## Connection Format

Example connection string:


mysql://username:password@host:port/database


Or using individual environment variables:


DB_HOST=
DB_PORT=
DB_USER=
DB_PASSWORD=
DB_NAME=


The backend uses these credentials to establish a connection to the Railway MySQL instance.

---

# Media Storage — Cloudinary

Cloudinary is used for storing and delivering media assets.

Typical use cases include:

- Case study images
- Media uploaded via admin panel

Instead of storing files directly on the server, files are uploaded to **Cloudinary**, and only the **secure URL** is stored in the MySQL database.

---

## Media Upload Flow


Admin uploads image
│
▼
Backend API receives file
│
▼
File uploaded to Cloudinary
│
▼
Cloudinary returns secure URL
│
▼
URL stored in MySQL database


---

# Admin System

The admin panel allows administrators to manage dynamic website content.

Admin capabilities include:

- Creating case studies
- Editing case studies
- Publishing or unpublishing case studies
- Viewing Training & Career form submissions

The admin panel communicates with backend API endpoints secured using **authentication middleware**.

---

# Project Structure (Backend)

Typical backend folder structure:


server
│
├── config
│ ├── database.js
│ └── cloudinary.js
│
├── controllers
│
├── middleware
│ └── adminAuth.js
│
├── routes
│ └── admin
│
├── uploads
│
├── utils
│
└── index.js


---

# Deployment Checklist

If the project is handed over to another developer or organization, the following services must be accessible.

## Required Accounts

- Render (Backend hosting)
- Railway (MySQL database)
- Cloudinary (Media storage)
- GitHub (Source code)

---

# Steps for Redeployment

1. Clone the GitHub repository

2. Install dependencies


npm install


3. Configure environment variables

4. Ensure database credentials are valid

5. Deploy backend service to Render

6. Verify API endpoints and database connectivity

---

# Service Dependency Summary

| Service | Purpose |
|-------|--------|
| Render | Backend hosting |
| Railway | MySQL database |
| Cloudinary | Media storage |
| GitHub | Source code repository |
| React (Vite) | Frontend application |

---

# Maintenance Notes

The backend infrastructure is designed to be:

- Modular
- Maintainable
- Easily deployable
- Cloud-service independent

If infrastructure changes are required in the future, equivalent alternatives can be used.

| Current Service | Possible Alternatives |
|---------------|----------------------|
| Render | AWS, DigitalOcean, Vercel |
| Railway | AWS RDS, PlanetScale |
| Cloudinary | AWS S3, Firebase Storage |

---

# Important Notes for Future Developers

- Never commit `.env` or credentials to GitHub.
- Always use environment variables for secrets.
- Database migrations or schema changes should be documented.
- Media files should always be uploaded via **Cloudinary** to maintain CDN delivery.

---

# Original Implementation Notice

This system architecture, backend structure, database schema, and deployment pipeline were designed and implemented as part of the initial development of the **Sonashri Engineering & Solutions website**.

At the time of deployment, the system was verified to function correctly with the following infrastructure:

- Backend hosted on **Render**
- MySQL database hosted on **Railway**
- Media storage managed via **Cloudinary**
- Frontend connected via backend API endpoints

Any modifications made to the codebase, infrastructure configuration, database schema, environment variables, hosting services, or deployment pipeline after the original handover may affect system stability and functionality.

Future developers or maintainers are responsible for validating any changes they introduce.

---

# System Validity Period

The backend infrastructure supporting the following modules is maintained for a fixed support period:

- Case Study Module
- Training & Career Form
- Admin Panel

Support validity:

**March 2026 – March 2028**

After this period:

- Backend maintenance and support are no longer guaranteed.
- Dynamic modules may be disabled unless infrastructure is renewed or maintained by the client or another developer.

The frontend website may remain accessible independently of the backend services.

---

# Handover Responsibility

If the system is transferred to another developer, agency, or organization, the following resources must be handed over:

- GitHub repository access
- Render service access
- Railway database credentials
- Cloudinary account credentials
- Environment variable configuration

Failure to transfer these credentials may prevent proper maintenance.

---

# Disclaimer

This documentation is provided to assist future developers in understanding the original system architecture and deployment workflow.

While effort has been made to ensure accuracy, infrastructure services and platform behaviors may ev
