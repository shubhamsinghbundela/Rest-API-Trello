# 🚀 REST API Trello (Backend)

A scalable and modular backend for a **Trello-like task management system**, built using **Node.js, Express, and MongoDB**.

---

## 📌 Project Overview

This backend enables users to:

* 🔐 Authentication (Signup / Signin)
* 🏢 Create and manage organizations
* 👥 Add or remove members
* 📋 Create boards within organizations
* ✅ Manage tasks (Create, Update, Delete)

The project follows a **clean architecture pattern** to ensure scalability, maintainability, and proper separation of concerns.

---

## 🧠 Motivation

Initially, this project was built in a **simple, unstructured way**.

Later, it was refactored into a **modular and scalable REST API architecture**.

👉 Read the initial version here:
**Building a Trello - Backend from Scratch**
https://shubhamsinghbundela.hashnode.dev/building-a-trello-backend-from-scratch

---

## 🏗️ Folder Structure

```
src/
├── common/
│   ├── config/
│   │   └── db.js
│   ├── middleware/
│   │   └── error.middleware.js
│   └── utils/
│       ├── api-error.js
│       └── api-response.js
│
├── modules/
│   ├── auth/
│   │   ├── auth.controller.js
│   │   ├── auth.middleware.js
│   │   ├── auth.model.js
│   │   ├── auth.routes.js
│   │   └── auth.service.js
│   │
│   ├── org/
│   │   ├── org.controller.js
│   │   ├── org.middleware.js
│   │   ├── org.model.js
│   │   ├── org.routes.js
│   │   └── org.service.js
│   │
│   ├── board/
│   │   ├── board.controller.js
│   │   ├── board.middleware.js
│   │   ├── board.model.js
│   │   ├── board.routes.js
│   │   └── board.service.js
│   │
│   └── task/
│       ├── task.controller.js
│       ├── task.middleware.js
│       ├── task.model.js
│       ├── task.routes.js
│       └── task.service.js
│
└── app.js
```

---

## ⚙️ Tech Stack

* **Node.js**
* **Express.js**
* **MongoDB** (Mongoose)

---

## ✨ Features

### 🔐 Authentication

* User Signup
* User Signin
* JWT-based authentication

### 🏢 Organization

* Create organization
* Add members
* Remove members

### 📋 Board

* Create boards within organizations

### ✅ Task Management

* Create tasks
* Update task status (**Todo → In Progress → Done**)
* Delete tasks

---

## 🔄 API Flow

```
Request → Route → Controller → Service → Database → Response
```

---

## 📦 Installation

```bash
git clone https://github.com/your-username/rest-api-trello.git
cd rest-api-trello
npm install
```

---

## 🔐 Environment Variables

Create a `.env` file in the root directory:

```env
PORT=3000
NODE_ENV=development
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

---

## ▶️ Run the Project

```bash
npm run dev
```

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a new branch (`feature/your-feature`)
3. Commit your changes
4. Push to your branch
5. Open a Pull Request

---

## ⭐ Support

If you like this project, consider giving it a ⭐ on GitHub!
