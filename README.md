<div align="center">
  <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop&q=60" alt="BusinessHub Banner" width="100%" height="300" style="object-fit: cover; border-radius: 10px;" />

  <br />
  <br />

  # 🚀 BusinessHub — Local Business Directory

  **Discover, List, and Manage Local Businesses with Ease.**
  
  A modern, responsive, and full-stack web platform built for communities to connect with local services. Featuring role-based access, targeted advertisements, and dynamic directory management.

  [![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
  [![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
  [![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
  [![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)](https://expressjs.com/)
  [![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
</div>

---

## ✨ Key Features

- 🏢 **Dynamic Business Directory**: Browse, search, and filter businesses by name, category, location, and pincode.
- 🔐 **Role-Based Access Control**: 
  - **Users**: Register, login, create, and manage their own business listings.
  - **Admins**: Full control over all users, businesses, categories, and site-wide advertisements.
- 📢 **Advertisement Engine**: Admins can configure targeted ads across different pages (Home, Categories, Directory, Details).
- 🎨 **Modern UI/UX**: Fully responsive, mobile-first design built with Tailwind CSS, featuring beautiful gradients, hover effects, and dark mode support.
- ⚡ **Lightning Fast**: Powered by Vite on the frontend and an in-memory MongoDB server on the backend for zero-setup local development.

---

## 🛠 Technology Stack

### Frontend
- **React.js** (v19) - UI Library
- **Vite** - Next Generation Frontend Tooling
- **Tailwind CSS** (v4) - Utility-first CSS framework
- **React Router Dom** - Declarative routing
- **Google OAuth** - Seamless social login

### Backend
- **Node.js & Express.js** - Robust REST API
- **MongoDB Memory Server** - In-memory database (requires zero local MongoDB installation!)
- **Mongoose** - Elegant MongoDB object modeling
- **JWT (JSON Web Tokens)** - Secure authentication
- **Bcrypt.js** - Password hashing

---

## 🚀 Quick Start Guide

Get the project up and running locally in under 2 minutes.

### Prerequisites
- [Node.js](https://nodejs.org/) (v16 or higher)
- npm or yarn

### 1. Clone the repository
```bash
git clone <your-repo-url>
cd BusinessHub
```

### 2. Start the Backend Server
The backend utilizes `mongodb-memory-server`, meaning it automatically seeds itself on startup!

```bash
cd backend
npm install
npm run dev
```
*Server will start running on **http://localhost:5000***

### 3. Start the Frontend Application
In a new terminal window:

```bash
cd frontend
npm install
npm run dev
```
*App will start running on **http://localhost:5173***

> ⚠️ **Note:** Ensure the backend is running *before* starting the frontend to ensure all API calls proxy correctly.

---

## 🔑 Default Admin Credentials

Upon starting the backend, a default admin account is automatically seeded into the database.

| Field    | Value                      |
|----------|----------------------------|
| **Email**    | `admin@businesshub.com`    |
| **Password** | `admin123`                   |

---

## 📁 Project Structure

```text
BusinessHub/
├── frontend/                  # React + Vite application
│   ├── src/
│   │   ├── components/        # Reusable UI components
│   │   ├── pages/             # Route components
│   │   ├── utils/             # API helpers and utilities
│   │   ├── App.jsx            # Main application router
│   │   └── main.jsx           # React entry point
│   └── package.json
│
├── backend/                   # Node.js + Express API
│   ├── models/                # Mongoose schemas (User, Business, Ad, Category)
│   ├── middleware/            # JWT Auth & Admin checks
│   ├── data.js                # Initial seed data
│   ├── server.js              # Express app & API routes
│   └── package.json
│
└── README.md                  # Project documentation
```

---

## 🔌 API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Authenticate user & get token

### Businesses
- `GET /api/businesses` - Get all businesses (supports filtering)
- `GET /api/businesses/:id` - Get a specific business
- `POST /api/businesses` - Create a new business (Auth required)
- `PUT /api/businesses/:id` - Update a business (Auth/Owner required)
- `DELETE /api/businesses/:id` - Delete a business (Auth/Owner required)

### Advertisements
- `GET /api/ads` - Fetch ads by page
- `POST /api/ads` - Create an ad (Admin only)
- `PUT /api/ads/:id` - Update an ad (Admin only)
- `DELETE /api/ads/:id` - Delete an ad (Admin only)

### Admin / Users
- `GET /api/users` - List all users (Admin only)
- `POST /api/users` - Create a user (Admin only)
- `DELETE /api/users/:id` - Delete a user & their businesses (Admin only)

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

<div align="center">
  <i>Built with ❤️ for local businesses.</i>
</div>
