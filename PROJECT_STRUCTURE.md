# Project Structure

## Overview
This is a Next.js 16 portfolio project with 3D elements using Three.js and Framer Motion.

## Directory Structure

```
portofolio-3d/
├── public/                 # Static assets
│   ├── models/            # 3D model files
│   └── *.svg              # SVG icons
├── src/
│   ├── app/               # Next.js App Router
│   │   ├── api/          # Backend API routes
│   │   │   └── contact/  # Contact form endpoint
│   │   ├── layout.tsx    # Root layout
│   │   ├── page.tsx      # Home page
│   │   └── globals.css   # Global styles
│   ├── components/       # React components
│   │   ├── canvas/       # 3D canvas components
│   │   ├── dom/          # Regular DOM components (sections)
│   │   └── ui/           # Reusable UI components
│   ├── data/             # Static data (projects, services, navigation)
│   ├── lib/              # Utility functions and constants
│   └── types/            # TypeScript type definitions
└── [config files]        # package.json, tsconfig.json, etc.
```

## Backend (API Routes)
- `/api/contact` - Contact form submission endpoint

## Frontend Components

### Canvas Components (3D)
- `Hero3D.tsx` - Main 3D hero scene
- `HeroModel.tsx` - 3D model for hero section
- `SceneEffects.tsx` - 3D scene effects and particles
- `ThreeCanvas.tsx` - Canvas wrapper component

### DOM Components (Sections)
- `Navbar.tsx` - Navigation bar
- `HeroSection.tsx` - Hero/landing section
- `AboutSection.tsx` - About me section
- `ProjectsSection.tsx` - Projects showcase
- `ServicesSection.tsx` - Services offered
- `ContactSection.tsx` - Contact form
- `Footer.tsx` - Footer section

### UI Components (Reusable)
- `Button.tsx` - Animated button component
- `InteractiveCard.tsx` - 3D tilt card effect
- `AnimatedBackground.tsx` - Particle background
- `MagneticButton.tsx` - Magnetic hover button
- `SectionHeading.tsx` - Section title component
- `SplineEmbed.tsx` - Spline 3D embed wrapper

## Data Files
- `projects.ts` - Project portfolio data
- `services.ts` - Services offered data
- `navigation.ts` - Navigation menu items
- `constants.ts` - Personal information and constants

## Key Technologies
- **Framework**: Next.js 16 with App Router
- **3D**: Three.js (@react-three/fiber, @react-three/drei)
- **Animation**: Framer Motion
- **Styling**: Tailwind CSS
- **Language**: TypeScript