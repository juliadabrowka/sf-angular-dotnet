# 🛠️ Travel Agency Web Application for Women 

This is a full-stack web application built with **Angular 19**, **.NET Core**, **Entity Framework Core**, and **Microsoft SQL Server**. It consists of two Angular applications and one shared library. The system is divided into:

- 🌐 **Main Web Application** – The website
- 🔧 **Back Office** – An admin dashboard
- 🧱 **Shared UI Library** – A reusable library of components used by both apps

This project is organized as a monorepo, containing all frontend and backend applications in a single repository.
---

## 🗂️ Project Structure

```
├── client/
  ├── projets/
  │   ├── sf/              # main Website
  │   └── backoffice/      # admin panel
  │   └── base/            # shared library with reusable UI components
├── server/
│   ├── Controllers/     # API endpoints
│   ├── Data/            # EF Core DbContext and database migrations
│   ├── DTOs/            # Data Transfer Objects used to move data between layers
│   └── Models/          # Entity models and Data Transfer Objects (DTOs)
│   └── Repositories/    # Data access layer (queries and persistence logic)
│   └── Services/        # Business logic and domain services
└── README.md            # This file (Project documentation)
```
---

## 🧰 Tech Stack

### Frontend

- **Angular 19**
- **NgRx (Signal-based state management)** for managing global application state
- **RxJS**
- **ng-zorro** – Ant Design UI components for Angular
- **Font Awesome** – Icon set and toolkit
- **Elfsight Widget** – Integration for displaying Facebook reviews
- **Shared UI Library** for consistent reusable components

### Backend

- **ASP.NET Core Web API**
- **Entity Framework Core**
- **Microsoft SQL Server**

---

## ⚙️ Features

### Web Application (Public)

- Displays content, forms, and live Facebook reviews using Elfsight widget
- Modern, responsive UI with ng-zorro components and Font Awesome icons
- Built using the shared component library for consistency

### Back Office (Admin Panel)

- Admin dashboard with secure login
- CRUD operations for website content
- Content, user, and data management

### Base - Shared UI Library

- Reusable Angular components
- Unified UI style across applications
- Simplified development and maintenance

---

## 📦 Database

- EF Core for ORM and migrations
- SQL Server as the data store
- Auto-generated schema via EF Core

## 🛡️ Security & Authentication

Authentication and role-based access can be handled using ASP.NET Identity or JWT tokens, particularly for admin
operations.
