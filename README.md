# Natthamon Kosem - Modern Engineering Portfolio (Nuxt 4)

A modern, high-tech, interactive portfolio website for **Ms. Natthamon Kosem (Nut)** — Computer Engineer & Back-end Developer.

Built with **Nuxt 4**, **Tailwind CSS**, and modern web standards. Pre-configured with **Nitro Vercel Preset** for instant serverless deployment.

---

## Features & Highlights (ลูกเล่น & จุดเด่น)

- **Nuxt 4 Architecture**: Built on Nuxt `^4.5.2` with Vue 3 Composition API and fast SSR.
- **Bilingual Switcher (EN / TH)**: Seamless one-click language toggle across all content.
- **Interactive Background Canvas**: Real-time particle constellation and mesh grid responsive to mouse movements.
- **Interactive 3D Bento Grid**: 14 technical projects (Backend, AI/ML, IoT, Fullstack) with real-time 3D perspective tilt and interactive modal details.
- **Interactive Developer CLI Terminal**: Built-in bash-like terminal modal (`help`, `skills`, `projects`, `experience`, `education`, `contact`, `ai`, `resume`).
- **Modern Dialogs (`@starting-style`)**: Smooth entry/exit animations conforming to modern web guidance.
- **"AI Behind the Build" Showcase**: Full transparent disclosure of the 4-step AI orchestration process (ChatGPT, Antigravity IDE, Antigravity CLI, Vercel).
- **Vercel Zero-Config Deployment**: Output directory and Nitro engine tuned for Vercel Serverless / Edge.

---

## Project Structure

```
├── app.vue                         # Main application layout & section orchestration
├── assets/
│   └── css/main.css                # Tailwind directives, custom glassmorphism & dialog styles
├── components/
│   ├── BackgroundCanvas.vue        # Interactive HTML5 particle constellation
│   ├── FloatingDock.vue            # Glassmorphic dock navigation & language toggle
│   ├── HeroSection.vue             # Hero intro, stats counter, live status badge
│   ├── ExperienceSection.vue       # Work experience & education git-tree timeline
│   ├── ProjectsBento.vue           # 3D Tilt bento grid with category filters
│   ├── SkillsMatrix.vue            # Categorized engineering competencies & progress meters
│   ├── AiShowcaseSection.vue       # AI Behind the Build pipeline & prompt inspect modal
│   ├── InteractiveTerminalModal.vue# Runnable developer terminal emulator
│   └── ContactSection.vue          # Interactive contact cards with confetti copy
├── composables/
│   └── useLanguage.ts              # Reactive EN/TH language state
├── data/
│   └── profile.json                # Complete normalized resume dataset (Bilingual)
├── nuxt.config.ts                  # Nuxt 4 config with Nitro preset 'vercel'
├── package.json                    # Nuxt 4 scripts and dependencies
├── tailwind.config.js              # Dark cyber theme colors & typography
└── vercel.json                     # Vercel deployment specification
```

---

## Getting Started

### 1. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 2. Build for Production
```bash
npm run build
```
This automatically compiles the project and generates `.vercel/output/` according to the Vercel Build Output API v3.

---

## Deploying to Vercel (วิธี Deploy ขึ้น Vercel)

### Option A: Via GitHub (Recommended)
1. Push this directory to your GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "feat: complete Nuxt 4 portfolio with AI showcase"
   git branch -M main
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Vercel will automatically detect **Nuxt.js** and deploy it with zero configuration!

### Option B: Via Vercel CLI (1-Command Instant Deploy)
```bash
npx vercel
```
Or deploy the prebuilt output directly:
```bash
npx vercel deploy --prebuilt
```

---

## AI Behind the Build (เบื้องหลังการสร้าง)

1. **ChatGPT**: Data Architecture — Normalized raw resume text into structured bilingual `data/profile.json`.
2. **Antigravity IDE**: System Architecture — Nuxt 4 scaffold, Nitro Vercel configuration, TypeScript types.
3. **Antigravity IDE**: UI & Layout Engine — Glassmorphism, 3D Tilt Bento grid, Canvas particles, and modern CSS `@starting-style` modal dialogs.
4. **Antigravity CLI**: DevOps & Release — Production build compilation, verification, and Vercel release readiness.
