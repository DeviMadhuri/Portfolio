# Devi Madhuri Portfolio

A stunning, modern portfolio website for an AWS Data Engineer. Built with React, TypeScript, Tailwind CSS, and GSAP animations.

![Portfolio Preview](src/assets/profile.jpg)

## 🚀 Live Demo

**Website:** [https://devi-madhuri-portfolio.vercel.app](https://devi-madhuri-portfolio.vercel.app)

## ✨ Features

- **Modern Dark Theme** - Elegant near-black design with sophisticated animations
- **Interactive Particle Background** - Canvas-based particle system with mouse interaction
- **GSAP Animations** - Smooth scroll-triggered animations throughout
- **3D Project Carousel** - Interactive 3D card carousel for showcasing projects
- **Responsive Design** - Fully responsive across all devices
- **Contact Form** - Functional form with validation
- **Timeline Experience** - Animated professional journey timeline

## 🛠️ Tech Stack

- **Framework:** React 18 + TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui
- **Animations:** GSAP + ScrollTrigger
- **Icons:** Lucide React

## 📁 Project Structure

```
├── public/              # Static assets
│   ├── hero-profile.jpg
│   └── project-*.jpg
├── src/
│   ├── sections/        # Page sections
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Projects.tsx
│   │   ├── Skills.tsx
│   │   ├── Experience.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   └── Navigation.tsx
│   ├── components/ui/   # shadcn/ui components
│   ├── App.tsx
│   ├── App.css
│   ├── index.css
│   └── main.tsx
├── .github/workflows/   # GitHub Actions
├── index.html
├── vite.config.ts
├── tailwind.config.js
└── package.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js 20+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/YOUR_USERNAME/devi-madhuri-portfolio.git
cd devi-madhuri-portfolio
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

### Option 1: GitHub Pages (Free)

1. Push code to GitHub repository
2. Go to **Settings > Pages**
3. Select **GitHub Actions** as source
4. The workflow will automatically deploy on every push to `main`

### Option 2: Vercel (Recommended)

1. Go to [vercel.com](https://vercel.com)
2. Import your GitHub repository
3. Framework preset: **Vite**
4. Build command: `npm run build`
5. Output directory: `dist`
6. Deploy!

### Option 3: Netlify

1. Go to [netlify.com](https://netlify.com)
2. Drag and drop the `dist` folder, or connect GitHub repo
3. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`

## 🎨 Customization

### Update Personal Information

Edit these files to customize:

- `src/sections/Hero.tsx` - Name, title, description
- `src/sections/About.tsx` - Bio, skills, stats
- `src/sections/Projects.tsx` - Project details
- `src/sections/Experience.tsx` - Work history
- `src/sections/Contact.tsx` - Contact info, social links

### Update Images

Replace images in the `public/` folder:
- `hero-profile.jpg` - Your professional photo
- `project-1.jpg` to `project-5.jpg` - Project screenshots

### Change Colors

Edit `src/index.css` to modify the color scheme:

```css
:root {
  --background: 0 0% 0.4%;  /* Near black */
  --foreground: 0 0% 100%;   /* White */
  /* ... */
}
```

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

## 📄 License

MIT License - feel free to use this template for your own portfolio!

## 🙏 Credits

- Design & Development: Devi Madhuri
- Icons: [Lucide](https://lucide.dev)
- UI Components: [shadcn/ui](https://ui.shadcn.com)
- Animations: [GSAP](https://greensock.com/gsap)

---

**Connect with me:**
- LinkedIn: [linkedin.com/in/devi-madhuri1205](https://linkedin.com/in/devi-madhuri1205)
- GitHub: [github.com/YOUR_USERNAME](https://github.com/YOUR_USERNAME)
