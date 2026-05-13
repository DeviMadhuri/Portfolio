# Devi Madhuri Portfolio

A stunning, modern portfolio website for an AWS Data Engineer & AI/LLM Specialist with 5+ years of experience. Built with React, TypeScript, Tailwind CSS, and GSAP animations.

![Portfolio Preview](public/profile.jpg)

## 🚀 Live Demo

**Website:** [https://devi-madhuri-portfolio.vercel.app](https://devi-madhuri-portfolio.vercel.app)

## ✨ Features

- **Modern Dark Theme** - Elegant near-black design with sophisticated animations
- **Interactive Animations** - GSAP scroll-triggered animations throughout
- **AI/LLM Showcase** - Dedicated section for AI capabilities and projects
- **5+ Years Experience** - Complete professional timeline and achievements
- **Responsive Design** - Fully responsive across all devices
- **Contact Form** - Functional form with validation
- **Timeline Experience** - Animated professional journey timeline
- **Projects Showcase** - 6 featured projects with impact metrics
- **Skills Dashboard** - Proficiency bars and tech stack

## 🛠️ Tech Stack

- **Framework:** React 18 + TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui compatible
- **Animations:** GSAP + ScrollTrigger
- **Icons:** Lucide React
- **Linting:** ESLint 9+

## 📁 Project Structure

```
├── public/              # Static assets
│   ├── profile.jpg
│   └── projects/
├── src/
│   ├── sections/        # Page sections
│   │   ├── Navigation.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Experience.tsx
│   │   ├── AIIntegration.tsx
│   │   ├── Projects.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── App.tsx
│   ├── App.css
│   ├── index.css
│   └── main.tsx
├── index.html
├── vite.config.ts
├── tsconfig.json
├── tailwind.config.js
├── eslint.config.js
└── package.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js 20+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/DeviMadhuri/Portfolio.git
cd Portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## 📦 Deployment Options

### Option 1: Vercel (Recommended)

1. Go to [vercel.com](https://vercel.com)
2. Import your GitHub repository
3. Framework preset: **Vite**
4. Build command: `npm run build`
5. Output directory: `dist`
6. Deploy!

### Option 2: GitHub Pages

1. Push code to GitHub repository
2. Go to **Settings > Pages**
3. Select **GitHub Actions** as source
4. The workflow will automatically deploy on every push to `main`

### Option 3: Netlify

1. Go to [netlify.com](https://netlify.com)
2. Connect your GitHub repo
3. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`

## 🎨 Customization

### Update Personal Information

Edit these files to customize:

- `src/sections/Hero.tsx` - Name, title, description
- `src/sections/About.tsx` - Bio, skills, stats
- `src/sections/Skills.tsx` - Technical skills
- `src/sections/Experience.tsx` - Work history
- `src/sections/AIIntegration.tsx` - AI/LLM expertise
- `src/sections/Projects.tsx` - Project details
- `src/sections/Contact.tsx` - Contact info, social links

### Update Images

Replace images in the `public/` folder:
- `profile.jpg` - Your professional photo
- Add project screenshots for featured projects

### Change Colors

Edit `src/index.css` to modify the color scheme:

```css
:root {
  --primary: 263 70% 50%;        /* Purple */
  --accent: 263 70% 50%;         /* Accent color */
  --background: 0 0% 0.4%;       /* Near black */
  /* ... */
}
```

## 📝 Content Sections

### 1. **Hero**
- Eye-catching headline emphasizing 5+ years experience
- CTA buttons for calls-to-action
- Key metrics (projects, experience, clients)

### 2. **About**
- Professional summary
- Core competencies
- Education & certifications
- Professional goals

### 3. **Skills**
- 4 skill categories with proficiency bars
- AWS, Data Engineering, AI/ML, Development
- Tech stack showcase

### 4. **Experience**
- Timeline of 4 past roles
- Detailed achievements
- Certifications and awards

### 5. **AI Integration** (NEW)
- 6 AI capability cards (LLM, RAG, Real-time, etc.)
- Current AI projects
- Available consulting services

### 6. **Projects**
- 6 featured projects with impact metrics
- Technology used for each project
- Links to GitHub and live demos

### 7. **Contact**
- Contact form with validation
- Multiple contact methods
- Social media links

## 🔧 Troubleshooting

### Build fails with TypeScript errors
```bash
npm run build 2>&1 | head -50
```

### Images not loading
- Ensure images are in the `public/` folder
- Use absolute paths: `/image-name.jpg`

### Animations not working
- Check GSAP is installed: `npm list gsap`
- Verify ScrollTrigger is registered in `App.tsx`

### Port already in use
```bash
npm run dev -- --port 3000
```

## 📄 License

MIT License - feel free to use this template for your own portfolio!

## 🙏 Credits

- Design & Development: Devi Madhuri
- Icons: [Lucide](https://lucide.dev)
- Animations: [GSAP](https://greensock.com/gsap)
- UI Framework: [Tailwind CSS](https://tailwindcss.com)

---

**Connect with me:**
- LinkedIn: [linkedin.com/in/devi-madhuri1205](https://linkedin.com/in/devi-madhuri1205)
- GitHub: [github.com/DeviMadhuri](https://github.com/DeviMadhuri)
- Email: your.email@example.com
