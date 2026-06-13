<div align="center">

# ✈️ Flight Price App

**Check live flight prices between any two cities — instantly.**

![Next.js](https://img.shields.io/badge/Next.js-14-000000?style=flat-square&logo=next.js&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-20.x-339933?style=flat-square&logo=node.js&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)
![Express](https://img.shields.io/badge/Express-4.x-000000?style=flat-square&logo=express&logoColor=white)

[Features](#-features) · [Quick Start](#-quick-start) · [Project Structure](#-project-structure) · [API](#-api-reference)

</div>

---

## What is this?

A full-stack web app where users can search flight prices between two cities. The frontend is built with **Next.js + Tailwind CSS** and talks to a **Node.js + Express** backend API that returns flight price data.

---

## ✨ Features

- 🔍 Search flights between any two cities
- 💰 Instant price results from the backend API
- 📱 Fully responsive design with Tailwind CSS
- ⚡ Server-side rendering with Next.js
- 🔗 Clean REST API built with Express

---

## 🖥️ Project Structure

```
flight-price-project/
│
├── flight-price-frontend/     ← Next.js frontend
│   ├── pages/                 ← Next.js pages
│   ├── components/            ← Reusable UI components
│   ├── styles/                ← Tailwind CSS config
│   └── package.json
│
├── flight-price-api/          ← Node.js + Express backend
│   ├── server.js              ← Main API server
│   └── package.json
│
└── README.md
```

---

## ⚡ Quick Start

### Prerequisites
- [Node.js](https://nodejs.org) v18 or higher
- npm (comes with Node.js)

### 1. Clone the repo

```bash
git clone https://github.com/Shubh-6657/flight-price-project.git
cd flight-price-project
```

### 2. Start the backend

```bash
cd flight-price-api
node server.js
```

Backend runs at `http://localhost:5000`

### 3. Start the frontend

Open a new terminal:

```bash
cd flight-price-frontend
npm install
npm run dev
```

Frontend runs at `http://localhost:3000`

### 4. Open in browser

```
http://localhost:3000
```

---

## 📡 API Reference

Base URL: `http://localhost:5000`

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/flights` | Get all available flights |
| `GET` | `/api/flights?from=DEL&to=BOM` | Search flights by route |

### Example Response

```json
{
  "flights": [
    {
      "id": 1,
      "from": "Delhi",
      "to": "Mumbai",
      "price": 4599,
      "airline": "IndiGo",
      "duration": "2h 10m"
    }
  ]
}
```

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | Next.js 14, Tailwind CSS |
| Backend | Node.js, Express.js |
| API | REST |
| Styling | Tailwind CSS |

---

## 🚀 Future Improvements

- [ ] Real flight data integration (Skyscanner / Amadeus API)
- [ ] Date picker for departure & return
- [ ] Sort by price / duration
- [ ] User authentication & saved searches
- [ ] Price history chart

---

## 📄 License

MIT — use it however you want.

---

<div align="center">
Built with ☕ by <a href="https://github.com/Shubh-6657">Shubh Agrahari</a>
</div>
