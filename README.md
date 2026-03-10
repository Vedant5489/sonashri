Backend Infrastructure Documentation
Project Overview

This repository contains the backend system and administrative infrastructure for the Sonashri Engineering & Solutions website.

The backend powers dynamic website functionality including:

Case Study management system

Training & Career form submissions

Admin authentication and dashboard

Media storage handling

API endpoints used by the frontend application

The system is built using a Node.js backend architecture with a MySQL database and deployed using modern cloud infrastructure.

This document explains the architecture, hosting services, and deployment pipeline so that the project can be maintained, transferred, or extended by future developers if required.

Technology Stack
Backend Runtime

Node.js

Express.js

Database

MySQL (Hosted on Railway)

File Storage

Cloudinary

Backend Hosting

Render

Frontend

React (Vite)

System Architecture
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
Data Flow

A user interacts with the frontend website.

The frontend sends API requests to the backend server.

The backend processes the request and:

Reads or writes structured data to MySQL (Railway).

Uploads or retrieves media files from Cloudinary.

The backend returns structured responses to the frontend.

Hosting Infrastructure
Backend Hosting — Render

The backend API server is deployed on Render.

Render is responsible for:

Running the Node.js server

Managing environment variables

Handling backend uptime

Exposing API endpoints used by the frontend

Deployment Flow

Typical deployment pipeline:

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
Environment Variables (Configured in Render)

Typical required variables:

PORT=
DATABASE_URL=
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
JWT_SECRET=

These values must be configured inside the Render dashboard and should never be committed to GitHub.

Database — Railway (MySQL)

The application database is hosted using Railway MySQL.

Railway provides:

Managed MySQL database hosting

Secure remote connection

Persistent storage for application data

Database Responsibilities

The database stores:

Case studies

Admin credentials

Training and career form submissions

Any additional structured application data

Connection Format

Example connection string format:

mysql://username:password@host:port/database

Or via environment variables:

DB_HOST=
DB_PORT=
DB_USER=
DB_PASSWORD=
DB_NAME=

The backend uses these credentials to establish a connection to the Railway MySQL instance.

Media Storage — Cloudinary

Cloudinary is used for storing and delivering media assets used by the website.

Typical usage includes:

Case study images

Uploaded media from admin panel

Instead of storing image files directly on the backend server, files are uploaded to Cloudinary and the resulting secure URL is stored in the MySQL database.

Media Upload Flow
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
Admin System

The admin panel allows administrators to manage dynamic content of the website.

Admin capabilities include:

Creating case studies

Editing case studies

Publishing or unpublishing case studies

Viewing training & career form submissions

The admin panel communicates with backend API endpoints secured with authentication middleware.

Project Structure (Backend)

Typical backend folder structure:

server
│
├── config
│   ├── database.js
│   ├── cloudinary.js
│
├── controllers
│
├── middleware
│   ├── adminAuth.js
│
├── routes
│   ├── admin
│
├── uploads
│
├── utils
│
└── index.js
Deployment Checklist

If the project is handed over to another developer or organization, the following services must be accessible:

Required Accounts

Render (Backend hosting)

Railway (MySQL database)

Cloudinary (Media storage)

GitHub (Source code)

Steps for Redeployment

Clone the GitHub repository.

Install dependencies.

npm install

Configure environment variables.

Ensure database access credentials are valid.

Deploy backend service to Render.

Verify API endpoints and database connectivity.

Service Dependency Summary
Service	Purpose
Render	Backend hosting
Railway	MySQL database
Cloudinary	Media storage
GitHub	Source code repository
React (Vite)	Frontend application
Maintenance Notes

The backend infrastructure is designed to be:

Modular

Maintainable

Easily deployable

Cloud-service independent (services can be replaced if needed)

If infrastructure changes are required in the future, equivalent alternatives can be used:

Current Service	Possible Alternatives
Render	AWS, DigitalOcean, Vercel
Railway	AWS RDS, PlanetScale
Cloudinary	AWS S3, Firebase Storage
Important Notes for Future Developers

Never commit .env or credentials to GitHub.

Always use environment variables for secrets.

Database migrations or schema changes should be documented.

Media files must always be uploaded through Cloudinary to maintain CDN delivery.
