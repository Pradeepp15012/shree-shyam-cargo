# Shree Shyam Cargo Packers & Movers

Full-stack lead generation website for a logistics company using React + Vite + Tailwind CSS on the frontend and Node.js + Express + MongoDB on the backend.

## Structure

- `client/` - Vite React app
- `server/` - Express API with MongoDB, JWT auth, and lead management

## Features

- Responsive marketing website with animated sections
- Sticky call and WhatsApp CTAs
- Home, About, Services, Contact, Get Quote, and Admin pages
- Quote and contact forms with validation
- Distance and travel-time estimation using Google Maps Distance Matrix
- MongoDB-backed lead capture
- JWT-protected admin dashboard for managing leads
- SEO basics: meta tags, sitemap, robots, semantic content
- Rate limiting, Helmet, CORS, validation, and spam prevention

## Setup

### 1. Frontend

```bash
cd client
npm install
npm run dev
```

### 2. Backend

```bash
cd server
npm install
npm run dev
```

## Environment

Create `client/.env` from `client/.env.example` and `server/.env` from `server/.env.example`.

## Deployment

- Frontend: Vercel
- Backend: Render or Railway
- Database: MongoDB Atlas

