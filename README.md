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

## Deployment

### Backend Deployment (Render)

1. Push your code to GitHub
2. Go to [Render](https://render.com)
3. Create a new Web Service
4. Connect your GitHub repository
5. Configure:
   - Root Directory: `server`
   - Build Command: `npm install`
   - Start Command: `npm start`
6. Add environment variables:
   - `MONGODB_URI` - Your MongoDB Atlas connection string
   - `JWT_SECRET` - A secure random string
   - `CLIPDROP_API` - Your ClipDrop API key
   - `NODE_ENV` - `production`

### Frontend Deployment (Vercel)

1. Go to [Vercel](https://vercel.com)
2. Import your GitHub repository
3. Configure:
   - Root Directory: `client`
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. Add environment variable:
   - `VITE_BACKEND_URL` - Your deployed backend URL (e.g., `https://your-app.onrender.com`)
5. Deploy

### Alternative: Frontend on Netlify

1. Go to [Netlify](https://netlify.com)
2. Import your GitHub repository
3. Configure:
   - Base directory: `client`
   - Build command: `npm run build`
   - Publish directory: `client/dist`
4. Add environment variable:
   - `VITE_BACKEND_URL` - Your deployed backend URL
5. Deploy

## Environment Variables

### Server (.env)
```env
PORT=4000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secure_jwt_secret
CLIPDROP_API=your_clipdrop_api_key
NODE_ENV=production
```

### Client (.env)
```env
VITE_BACKEND_URL=your_backend_url
```

## API Endpoints

### User Routes
- `POST /api/user/register` - Register new user
- `POST /api/user/login` - Login user
- `GET /api/user/credits` - Get user credits (authenticated)

### Image Routes
- `POST /api/image/generate-image` - Generate AI image (authenticated)
- `GET /api/image/generations` - Get user's generation history (authenticated)
- `GET /api/image/generation/:id` - Get specific generation (authenticated)

## Getting ClipDrop API Key

1. Visit [ClipDrop APIs](https://clipdrop.co/apis)
2. Sign up or log in
3. Navigate to API section
4. Copy your API key

## License

MIT
