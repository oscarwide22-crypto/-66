# Spark Capital - Institutional Venture Capital Platform

A modern, high-performance web application built with React 19, Vite, TypeScript, and Tailwind CSS.

## 🚀 Deployment & Hosting Guide

This repository is pre-configured for seamless deployment on **Netlify**, **GitHub Pages**, and **Vercel**.

### 1. Push to GitHub
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
git push -u origin main
```

### 2. Deploy to Netlify
1. Log in to [Netlify](https://app.netlify.com/).
2. Click **Add new site** > **Import an existing project**.
3. Select **GitHub** and select this repository.
4. Netlify will automatically detect the pre-configured settings from `netlify.toml`:
   - **Build Command**: `npm run build`
   - **Publish directory**: `dist`
5. Click **Deploy Site**.

### 3. Image & Static Asset Configuration
- **ES Module Asset Bundling**: All local images (`src/assets/images/`) are imported via TypeScript ES module imports in `src/data.ts`. Vite bundles and hashes these images during `npm run build` so they load reliably across all CDNs, Netlify subdomains, and GitHub Pages.
- **Static Public Backup**: Images are also placed in `public/assets/images/` to support direct static URLs.

---

## 🛠️ Local Development & Build

```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Build for production
npm run build
```
