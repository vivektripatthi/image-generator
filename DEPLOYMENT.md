# Deployment Guide for Imagify

## Quick Deployment Steps

### Option 1: Deploy to Render (Backend) + Vercel (Frontend) - RECOMMENDED

#### Step 1: Setup MongoDB Atlas (Database)

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free account and cluster
3. Click "Connect" → "Connect your application"
4. Copy the connection string (looks like: `mongodb+srv://username:password@cluster.mongodb.net/`)
5. Replace `<password>` with your actual password
6. Add `/imagify` at the end: `mongodb+srv://username:password@cluster.mongodb.net/imagify`

#### Step 2: Push to GitHub

```bash
# Add all files
git add .

# Commit
git commit -m "Initial commit"

# Create a new repository on GitHub, then:
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

#### Step 3: Deploy Backend to Render

1. Go to [Render.com](https://render.com) and sign up
2. Click "New +" → "Web Service"
3. Connect your GitHub repository
4. Configure:
   - **Name**: imagify-backend (or any name)
   - **Root Directory**: `server`
   - **Environment**: Node
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
5. Click "Advanced" and add Environment Variables:
   - `MONGODB_URI` = Your MongoDB Atlas connection string
   - `JWT_SECRET` = Any random secure string (e.g., `8f3a9c2e7b1d4f6a5e8c9b2d7f4a6e1c3b5d8f2a4c6e9b1d3f5a7c9e2b4d6f8a`)
   - `CLIPDROP_API` = Your ClipDrop API key
   - `NODE_ENV` = `production`
6. Click "Create Web Service"
7. Wait for deployment (5-10 minutes)
8. **Copy your backend URL** (e.g., `https://imagify-backend.onrender.com`)

#### Step 4: Deploy Frontend to Vercel

1. Go to [Vercel.com](https://vercel.com) and sign up
2. Click "Add New" → "Project"
3. Import your GitHub repository
4. Configure:
   - **Framework Preset**: Vite
   - **Root Directory**: `client`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Add Environment Variable:
   - `VITE_BACKEND_URL` = Your Render backend URL (from Step 3)
6. Click "Deploy"
7. Wait for deployment (2-5 minutes)
8. Your app is live! 🎉

---

### Option 2: Deploy to Railway (Backend) + Netlify (Frontend)

#### Backend on Railway

1. Go to [Railway.app](https://railway.app)
2. Sign up with GitHub
3. Click "New Project" → "Deploy from GitHub repo"
4. Select your repository
5. Add a service → Select "server" directory
6. Add Environment Variables:
   - `MONGODB_URI`
   - `JWT_SECRET`
   - `CLIPDROP_API`
   - `NODE_ENV=production`
7. Railway will auto-deploy
8. Copy your backend URL

#### Frontend on Netlify

1. Go to [Netlify.com](https://netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Connect to GitHub and select your repository
4. Configure:
   - **Base directory**: `client`
   - **Build command**: `npm run build`
   - **Publish directory**: `client/dist`
5. Add Environment Variable:
   - `VITE_BACKEND_URL` = Your Railway backend URL
6. Click "Deploy"

---

### Option 3: All-in-One Vercel Deployment

You can deploy both frontend and backend on Vercel:

#### Backend on Vercel

1. Go to [Vercel.com](https://vercel.com)
2. Import your repository
3. Configure:
   - **Root Directory**: `server`
   - **Framework Preset**: Other
4. Add all environment variables
5. Deploy

#### Frontend on Vercel

1. Create another project on Vercel
2. Import the same repository
3. Configure:
   - **Root Directory**: `client`
   - **Framework Preset**: Vite
4. Add `VITE_BACKEND_URL` environment variable
5. Deploy

---

## Important Notes

### MongoDB Atlas Setup
- Make sure to whitelist all IP addresses (0.0.0.0/0) in Network Access
- Or add your deployment platform's IP addresses

### Environment Variables Checklist

**Backend:**
- ✅ MONGODB_URI
- ✅ JWT_SECRET
- ✅ CLIPDROP_API
- ✅ NODE_ENV=production

**Frontend:**
- ✅ VITE_BACKEND_URL

### CORS Configuration
The server is already configured to accept requests from any origin. If you want to restrict it to your frontend domain only, update `server/server.js`:

```javascript
app.use(cors({ origin: 'https://your-frontend-domain.vercel.app' }))
```

### Free Tier Limitations

**Render Free Tier:**
- Service spins down after 15 minutes of inactivity
- First request after inactivity may take 30-60 seconds

**Vercel Free Tier:**
- 100GB bandwidth per month
- Serverless function timeout: 10 seconds

**Railway Free Tier:**
- $5 free credit per month
- No sleep time

### Troubleshooting

**Backend not connecting to MongoDB:**
- Check MongoDB Atlas connection string
- Verify IP whitelist includes 0.0.0.0/0
- Ensure database user has read/write permissions

**Frontend can't reach backend:**
- Verify VITE_BACKEND_URL is correct
- Check backend is deployed and running
- Ensure no trailing slash in VITE_BACKEND_URL

**ClipDrop API errors:**
- Verify API key is correct
- Check ClipDrop account has credits
- Ensure API key is active

---

## Post-Deployment

1. Test user registration
2. Test login
3. Test image generation
4. Monitor logs for any errors

## Custom Domain (Optional)

Both Vercel and Netlify offer free custom domain setup:
1. Purchase a domain (Namecheap, GoDaddy, etc.)
2. Add domain in your deployment platform
3. Update DNS records as instructed

---

## Need Help?

- Render Docs: https://render.com/docs
- Vercel Docs: https://vercel.com/docs
- Netlify Docs: https://docs.netlify.com
- MongoDB Atlas Docs: https://docs.atlas.mongodb.com
