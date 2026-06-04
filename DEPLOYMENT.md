# GitHub Pages Deployment Guide

## Important: Using Your Personal GitHub Account

Since your current GitHub profile is linked to your company, you'll need to either:
- **Option A:** Create a new personal GitHub account for your media kit
- **Option B:** Use a different existing personal account

## Quick Setup Instructions

### Step 0: Setup Personal GitHub Account (if needed)
1. Sign out of your company GitHub account
2. Go to https://github.com/signup
3. Create a new account with your personal email (e.g., saranyasidharth00@gmail.com)
4. Choose a username like `saranyasidharth` or similar
5. Verify your email

### Step 1: Configure Git with Personal Account
```bash
# Set your personal Git credentials for this project
cd "c:\Users\saranya.sidharth\Desktop\media-kit"
git config user.name "Your Name"
git config user.email "your-personal-email@gmail.com"
```

### Step 2: Initialize Git Repository
```bash
git init
git add .
git commit -m "Initial commit: Media kit website"
```

### Step 3: Create GitHub Repository
1. **Make sure you're logged into your PERSONAL GitHub account**
2. Go to https://github.com/new
3. Repository name: `media-kit`
4. Description: "Professional media kit for @saranya_sidharth"
5. Keep it **Public** (required for free GitHub Pages)
6. **Do NOT** initialize with README, .gitignore, or license
7. Click "Create repository"

### Step 4: Push to GitHub
```bash
# Replace YOUR-USERNAME with your personal GitHub username
git remote add origin https://github.com/YOUR-USERNAME/media-kit.git
git branch -M main
git push -u origin main
```

**Note:** When you run `git push`, you'll be prompted to login. Use your **personal GitHub account** credentials.

### Step 5: Enable GitHub Pages
1. Go to your repository: https://github.com/YOUR-USERNAME/media-kit
2. Click **Settings** tab
3. Click **Pages** in the left sidebar
4. Under "Source", select **Deploy from a branch**
5. Under "Branch", select **main** and **/ (root)**
6. Click **Save**

### Step 6: Access Your Site
After 1-2 minutes, your site will be live at:
**https://YOUR-USERNAME.github.io/media-kit/**

Replace `YOUR-USERNAME` with your actual personal GitHub username.

---

## Alternative: Custom Domain (Optional)

If you want to use a custom domain like `mediakit.saranyasidharth.com`:

1. Add a `CNAME` file to your repository with your domain
2. Configure DNS settings with your domain provider
3. In GitHub Pages settings, add your custom domain

---

## Updating Your Media Kit

Whenever you make changes:

```bash
git add .
git commit -m "Update media kit"
git push
```

Changes will be live in 1-2 minutes.

---

## Troubleshooting

**Site not loading?**
- Wait 2-3 minutes after first deployment
- Check Settings > Pages for deployment status
- Ensure repository is public

**CSS/Styles not working?**
- The `.nojekyll` file prevents this issue
- Clear browser cache and refresh

---

## Files Included

- `index.html` - Your media kit website
- `.nojekyll` - Ensures proper GitHub Pages rendering
- `.gitignore` - Excludes unnecessary files from Git
- `README.md` - Project documentation
- `DEPLOYMENT.md` - This deployment guide
