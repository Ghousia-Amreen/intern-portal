# 🧑‍💻 Intern Portal – Full Stack Project

This is a simple full stack intern portal built as part of the Round 1 Task submission.

It includes a dummy login page, a dashboard showing intern details, rewards, and a backend API serving dummy data.

---

## 🚀 Features

### ✅ Frontend
- Dummy Login/Signup page (no real auth)
- Dashboard showing:
  - Intern name
  - Referral code (dummy)
  - Total donations raised (from backend)
  - Rewards/unlockables section (static)

### ✅ Backend
- REST API (Node.js + Express)
- Returns dummy JSON data:
  - Intern name
  - Referral code
  - Total donations raised

---

## 📁 Project Structure

```
intern-portal/
├── frontend/       --> HTML, CSS, JS files
│   └── index.html
├── backend/        --> Node.js + Express backend
│   ├── index.js
│   └── package.json
├── screenshots/    --> Dashboard image
│   ├── dashboard.png
└── README.md
```

---

## 🔧 How to Run Locally

### Backend
1. Go to the `backend` folder:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the server:
   ```bash
   node index.js
   ```

The backend will run on `http://localhost:3000` (or your configured port).

### Frontend
1. Open the `frontend/index.html` file in your browser
2. The page will fetch data from the backend and show it on the dashboard

---



## 🛠️ Tech Stack

- Frontend: HTML, CSS, JavaScript
- Backend: Node.js, Express
- Hosting: Not hosted / Local only

---

## 📸 Screenshots

### Dashboard
![Dashboard Screenshot](screenshots/dashboard.png)



---

## 👤 Author

- Name: Ghousia Amreen
- Task: Round 1 Full Stack Intern Portal
- Submitted on: August 2025