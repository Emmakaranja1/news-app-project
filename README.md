# React + Vite

# 📰 News App — Vite + React

A learning-focused news website built using **Vite + React**, with simple authentication, routing, filtering, and a 5-star rating system using the Context API. The project uses **regular CSS** (no frameworks) and a `db.json` file served via `json-server`.

---

## ✨ Features

- 🔐 Authentication (mock login)
- 🧭 React Router for page navigation
- 📰 News listing from `db.json`
- 🔍 Filtering by search and category
- ⭐ 5-star rating system (Context API)
- 💾 Mock backend via `json-server`
- 🎨 Styled using regular CSS (no frameworks)
- 🚀 Deployed via [Vercel](https://vercel.com/)

---

## 📁 Project Structure

src/
├── assets/ # Static assets (images, icons, etc.)
├── components/ # Reusable UI components
│ ├── Navbar.jsx
│ ├── NewsCard.jsx
│ ├── Filter.jsx
│ └── RatingStars.jsx
├── context/ # Context API (auth & ratings)
│ └── AuthContext.jsx
├── pages/ # Page components
│ ├── Home.jsx
│ ├── Login.jsx
│ └── NewsDetails.jsx
├── App.jsx # App routing & layout
├── main.jsx # Entry point
├── index.css # Global CSS

---

## ⚙️ Getting Started

### 1. Clone the repository


git clone https://github.com/your-username/news-app.git
cd news-app


 Install dependencies
npm install
3. Start the development server

npm run dev
Open http://localhost:5174

📡 Setup Mock API
npm install -g json-server

Create db.json in root:

{
  "news": [
    {
      "id": 1,
      "title": "React 18 Released!",
      "content": "New features like automatic batching, transitions...",
      "category": "Technology",
      "rating": 4
    },
    {
      "id": 2,
      "title": "Vite 5 is blazing fast",
      "content": "Vite 5 introduces plugin enhancements and performance...",
      "category": "Development",
      "rating": 5
    }
  ]
}

json-server --watch db.json --port 3000

🧠 Authentication
This app uses a very basic context-based login system for learning purposes. There's no password handling or security features. To log in, simply enter a username.

⭐ Rating System
Implemented using the Context API. Users can click on stars to update the rating (persisted to db.json via a PATCH request).

🔍 Filtering
Filter by search term (title or content)

Filter by category (optional)

🚀 Deployment on Vercel
Push your code to GitHub.

Go to vercel.com, log in, and import your GitHub repo.

Vercel will auto-detect it's a Vite + React project.

Use the default build settings:

Build Command: npm run build

Output Directory: dist

Click Deploy.

Optional: To use the db.json backend in production, consider hosting it via services like Render or Railway, or replace it with a real API.

📄 License
MIT License. Feel free to fork, experiment, and learn!

👨‍💻 Author
Made with ❤️ for learning by Emma Karanja
                             John Kamau


This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
