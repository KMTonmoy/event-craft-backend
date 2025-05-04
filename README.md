# 🎉 EventCraft Backend

EventCraft is a complete Event Planning and Participation System that enables users to create, manage, and join events. This backend is built with **Node.js**, **Express**, **Prisma**, and **PostgreSQL**, providing a robust and scalable API to power the EventCraft frontend.

## 🛠️ Tech Stack

- **Node.js** – Fast, scalable server-side runtime
- **Express.js** – Lightweight, flexible backend framework
- **Prisma ORM** – Type-safe database access with PostgreSQL
- **PostgreSQL** – Reliable relational database
- **JWT** – Secure authentication with HTTP-only cookies
- **Zod** – Schema validation for data safety
 
## ✨ Features

- 🔐 User Authentication & Role-Based Access (User/Admin)
- 📅 Event Management
  - Create, update, and delete events
  - Public/Private and Free/Paid options
- 👥 Participant System
  - Join events
  - View participants (admin control)
- 💌 Invitations
  - Send and accept invitations for private events
- 💳 Payments
  - Payment integration for paid events
  - Track payment status
- ⭐ Featured Events
  - Mark and highlight special events
- 📝 Reviews
  - Post-event reviews with rating and comments
- 📦 RESTful API following clean controller-service architecture



## 🚀 Getting Started

Follow these steps to get the backend up and running on your local machine:

### 1. Clone the Repository

```bash
git clone https://github.com/KMTonmoy/event-craft-backend.git
cd eventcraft-backend
npm install
npm run dev
```


 
## 📌 ENV SETUP

- NODE_ENV=development
- PORT=5000

- BCRYPT_SALT_ROUNDS=000
- DATABASE_URL=YOUR URL
- JWT_ACCESS_TOKEN_SECRET=yourAccessTokenSecretKeyHere
- JWT_ACCESS_TOKEN_EXPIRES_IN=1h
- JWT_REFRESH_TOKEN_SECRET=yourRefreshTokenSecretKeyHere
- JWT_REFRESH_TOKEN_EXPIRES_IN=7d
- FRONTEND_BASE_URL=http://localhost:3000
- BACKEND_BASE_URL=http://localhost:5000
 
 



## 📌 Notes

- All routes are protected using JWT and follow strict access controls.
- Admins have access to moderate all user activities and event data.
- Integrated with third-party payment gateways for smooth transactions.

---

 
