# Felicia Tan — Portfolio

Minimalist personal portfolio built with **Angular 17**, designed with a dark aesthetic and T1-inspired red accents.

## ✨ Features

- Custom animated cursor
- Typewriter hero animation
- Scroll-triggered reveal animations
- Responsive design
- Floating particle effects
- Tab-based experience section
- Project cards with hover effects
- Resume download button
- Auto-deploy to GitHub Pages via GitHub Actions

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start local dev server
npm start
# → open http://localhost:4200
```

## 📦 Build & Deploy

### Manual deploy to GitHub Pages
```bash
npm run build:prod
```

### Auto-deploy (recommended)
1. Push code to the `main` branch
2. GitHub Actions automatically builds and deploys to `gh-pages` branch
3. In your repo → Settings → Pages → set source to `gh-pages` branch

## 🔧 Customisation

### Update your info
All content is in the component files under `src/app/components/`:
- `hero/` — name, tagline, social links
- `about/` — bio, email for contact
- `skills/` — tech stack groups
- `education/` — degrees and modules
- `experience/` — work history
- `projects/` — featured + other projects
- `contact/` — email address

### Add your resume
Place your PDF at:
```
src/assets/resume/felicia-tan-resume.pdf
```

### Update social links
Search for `https://github.com` and `https://linkedin.com` and replace with your actual profile URLs.

### Update email
Search for `felicia@email.com` and replace with your real email.

## 🎨 Design Tokens

All colours, fonts, and spacing live in `src/styles.scss` under `:root {}`. The key accent colour is `--red: #c6011f` (T1 red).

## 📁 Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── navbar/
│   │   ├── hero/
│   │   ├── about/
│   │   ├── skills/
│   │   ├── education/
│   │   ├── experience/
│   │   ├── projects/
│   │   └── contact/
│   ├── services/
│   │   └── reveal.service.ts
│   └── app.component.ts
├── assets/
│   └── resume/        ← drop your PDF here
└── styles.scss        ← global design tokens
```

## 🛠 Tech Stack

- Angular 17 (standalone components)
- SCSS with CSS custom properties
- GitHub Actions CI/CD
- angular-cli-ghpages
