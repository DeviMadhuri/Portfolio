# Deployment Guide - Devi Madhuri Portfolio

This guide will walk you through deploying your portfolio to GitHub and publishing it online.

---

## 📋 Prerequisites

Before you start, make sure you have:

1. **GitHub Account** - Sign up at [github.com](https://github.com) if you don't have one
2. **Git installed** on your local machine
3. **Node.js 20+** installed

---

## 🚀 Step-by-Step Deployment

### Step 1: Create a GitHub Repository

1. Go to [github.com](https://github.com) and log in
2. Click the **+** button (top right) → **New repository**
3. Repository name: `devi-madhuri-portfolio`
4. Description: `AWS Data Engineer Portfolio`
5. Make it **Public**
6. **DO NOT** initialize with README (we already have one)
7. Click **Create repository**

### Step 2: Push Code to GitHub

Open your terminal/command prompt and run these commands:

```bash
# Navigate to your project folder
cd /path/to/your/portfolio

# Initialize Git (if not already done)
git init

# Add all files
git add .

# Commit with a message
git commit -m "Initial portfolio commit"

# Add your GitHub repository as remote
# Replace YOUR_USERNAME with your actual GitHub username
git remote add origin https://github.com/YOUR_USERNAME/devi-madhuri-portfolio.git

# Push to GitHub
git push -u origin main
```

If you see an error about "main" branch, try:
```bash
git branch -M main
git push -u origin main
```

### Step 3: Deploy to GitHub Pages (Free Hosting)

1. Go to your repository on GitHub
2. Click **Settings** tab
3. Scroll down to **Pages** (left sidebar)
4. Under "Build and deployment":
   - Source: Select **GitHub Actions**
5. The workflow file (`.github/workflows/deploy.yml`) is already configured
6. Go to **Actions** tab to see the deployment progress
7. Once complete, your site will be at:
   `https://YOUR_USERNAME.github.io/devi-madhuri-portfolio`

---

## 🌐 Alternative Deployment Options

### Option A: Vercel (Recommended - Fastest)

1. Go to [vercel.com](https://vercel.com) and sign up with GitHub
2. Click **Add New Project**
3. Import your `devi-madhuri-portfolio` repository
4. Framework Preset: Select **Vite**
5. Build Command: `npm run build`
6. Output Directory: `dist`
7. Click **Deploy**
8. Your site will be live in seconds!

**Custom Domain (Optional):**
- Go to Project Settings → Domains
- Add your custom domain
- Follow DNS configuration instructions

### Option B: Netlify

1. Go to [netlify.com](https://netlify.com) and sign up
2. Click **Add new site** → **Import an existing project**
3. Connect to GitHub and select your repository
4. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Click **Deploy site**

### Option C: Cloudflare Pages

1. Go to [dash.cloudflare.com](https://dash.cloudflare.com)
2. Go to **Pages** → **Create a project**
3. Connect to GitHub
4. Select your repository
5. Build settings:
   - Build command: `npm run build`
   - Build output directory: `dist`
6. Click **Save and Deploy**

---

## 🔄 Making Updates

After making changes to your portfolio:

```bash
# Add changes
git add .

# Commit
git commit -m "Update: description of changes"

# Push to GitHub
git push
```

If using GitHub Actions, the site will automatically redeploy!

---

## 🛠️ Troubleshooting

### Issue: "git push" fails

**Solution:**
```bash
# Check if remote is set
git remote -v

# If not set, add it
git remote add origin https://github.com/YOUR_USERNAME/devi-madhuri-portfolio.git

# Try pushing again
git push -u origin main
```

### Issue: GitHub Actions deployment fails

**Check:**
1. Go to **Actions** tab in your repository
2. Click on the failed workflow
3. Read the error message

**Common fixes:**
- Make sure `vite.config.ts` has `base: '/'`
- Ensure all dependencies are in `package.json`
- Check that build completes locally: `npm run build`

### Issue: Images not showing on deployed site

**Solution:**
- Images should be in `public/` folder
- Reference them with absolute paths: `/image-name.jpg`
- Rebuild and redeploy

---

## 📁 Project Files Overview

```
devi-madhuri-portfolio/
├── .github/workflows/deploy.yml  # Auto-deployment config
├── public/                       # Static images
│   ├── hero-profile.jpg
│   └── project-*.jpg
├── src/                         # Source code
│   └── sections/                # Page sections
├── .gitignore                   # Git ignore rules
├── README.md                    # Project documentation
├── vite.config.ts               # Vite configuration
├── package.json                 # Dependencies
└── DEPLOYMENT_GUIDE.md          # This file
```

---

## 🎨 Customization Checklist

Before deploying, update these:

- [ ] **Hero Section** (`src/sections/Hero.tsx`)
  - [ ] Name
  - [ ] Title
  - [ ] Description
  - [ ] Profile image in `public/hero-profile.jpg`

- [ ] **About Section** (`src/sections/About.tsx`)
  - [ ] Bio text
  - [ ] Skills list
  - [ ] Stats numbers

- [ ] **Projects** (`src/sections/Projects.tsx`)
  - [ ] Project titles
  - [ ] Descriptions
  - [ ] Tech stacks
  - [ ] Images in `public/project-*.jpg`

- [ ] **Experience** (`src/sections/Experience.tsx`)
  - [ ] Work history
  - [ ] Achievements

- [ ] **Contact** (`src/sections/Contact.tsx`)
  - [ ] Email address
  - [ ] Location
  - [ ] Social links (LinkedIn, GitHub, Twitter)

- [ ] **Footer** (`src/sections/Footer.tsx`)
  - [ ] Social links

---

## 📞 Need Help?

If you encounter issues:

1. Check the **GitHub Actions** logs for error messages
2. Test locally first: `npm run build`
3. Review the [Vite deployment docs](https://vitejs.dev/guide/static-deploy.html)
4. Check [GitHub Pages troubleshooting](https://docs.github.com/en/pages)

---

## ✅ Quick Deployment Summary

```bash
# 1. Create GitHub repo (on github.com)

# 2. Push your code
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/devi-madhuri-portfolio.git
git push -u origin main

# 3. Enable GitHub Pages (Settings > Pages > GitHub Actions)

# 4. Done! Site will be live at:
# https://YOUR_USERNAME.github.io/devi-madhuri-portfolio
```

---

**Happy deploying! 🚀**
