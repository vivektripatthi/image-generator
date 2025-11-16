# Imagify - AI Image Generation Platform

A full-stack web application for generating AI images using ClipDrop API.

## Features

- User authentication (Login/Signup)
- AI-powered image generation
- Credit-based system
- User dashboard with generation history
- Responsive design with Tailwind CSS

## Tech Stack

### Frontend
- React 19
- Vite
- Tailwind CSS
- Axios
- React Router
- Framer Motion

### Backend
- Node.js
- Express
- MongoDB with Mongoose
- JWT Authentication
- bcrypt for password hashing
- ClipDrop API for image generation

## Local Development

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or Atlas)
- ClipDrop API key

### Setup

1. **Clone the repository**
```bash
git clone <your-repo-url>
cd Imagify-master
```

2. **Setup Server**
```bash
cd server
npm install
```

Create `server/.env`:
```env
PORT=4000
MONGODB_URI=mongodb://localhost:27017
JWT_SECRET=your_jwt_secret_key
CLIPDROP_API=your_clipdrop_api_key
NODE_ENV=development
```

3. **Setup Client**
```bash
cd client
npm install
```

Create `client/.env`:
```env
VITE_BACKEND_URL=http://localhost:4000
```

4. **Run the application**

Terminal 1 (Server):
```bash
cd server
npm run server
```

Terminal 2 (Client):
```bash
cd client
npm run dev
```

Visit `http://localhost:5173`
