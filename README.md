🚀 AI Resume Analyzer – Frontend
# 🚀 AI Resume Analyzer – Frontend

This is the frontend for the AI Resume Analyzer project.

Built using:

- ⚛ React (Vite)
- 🎨 Tailwind CSS
- 🔗 Axios
- 🔐 JWT Authentication

It connects to the FastAPI backend to:

- Register & Login users
- Upload resume (PDF)
- Analyze resume using AI
- View dashboard insights
- Dark / Light theme toggle

---

## 📌 Features

- 🔐 User Authentication (Login / Register)
- 📤 Resume Upload (PDF)
- 🤖 AI Resume Analysis
- 📊 Dashboard with:
  - Total resumes
  - Average score
  - Best resume score
  - Detailed AI insights
- 🌙 Dark / Light Mode
- 📱 Fully Responsive UI

---

## 🛠 Tech Stack

| Technology | Usage |
|------------|--------|
| React + Vite | Frontend framework |
| Tailwind CSS | Styling |
| Axios | API calls |
| React Router | Routing |
| JWT | Authentication |

---

# 🖥 How To Run This Project

## 1️⃣ Clone Repository

```bash
git clone https://github.com/rashid-star/ai-resume-frontend.git
cd ai-resume-frontend
2️⃣ Install Dependencies
npm install
3️⃣ Start Development Server
npm run dev

App will run at:

http://localhost:5173
⚙ Backend Requirement

This frontend requires the backend running at:

http://localhost:8000

Backend Repo:
👉 https://github.com/rashid-star/ai-resume-backend

🔐 Environment Configuration

If deploying, create a .env file:

VITE_API_URL=http://localhost:8000

And use in api.js:

baseURL: import.meta.env.VITE_API_URL
📁 Project Structure
src/
 ├── components/
 │    ├── Navbar.jsx
 │    ├── ResumeCard.jsx
 ├── pages/
 │    ├── Login.jsx
 │    ├── Register.jsx
 │    ├── Dashboard.jsx
 │    ├── Upload.jsx
 ├── api/
 │    └── api.js
 ├── App.jsx
 ├── main.jsx
🎯 Future Improvements

Admin Panel

Resume Download Report (PDF)

Role-based dashboard

Better analytics charts

AI improvement suggestions comparison

👨‍💻 Author

Mohammad Rashid

GitHub: https://github.com/rashid-star

⭐ If you like this project, give it a star!
git add README.md
git commit -m "Added README"
git push
