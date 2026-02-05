# Samboosik & Knafeh - Cat Website

## Overview
A beautiful, agency-quality static website showcasing two beloved cats - Samboosik and Knafeh. The site features their stories, personalities, photo galleries, and family relationships with smooth animations and a warm, elegant design.

## Current State
The website is fully functional with:
- Hero section with animated elements and cat photos
- Individual profile sections for both cats with detailed information
- Photo gallery with hover effects
- Stories and memories section
- Family relationships section featuring their humans and cousin pets
- Dark/light theme toggle
- Smooth scroll navigation
- Responsive design for all devices

## Recent Changes
- February 2026: Initial website creation with all sections complete

## User Preferences
- Agency-quality design with warm, elegant color palette
- Orange/amber primary color scheme to match the cats
- Playfair Display for display headings, Plus Jakarta Sans for body text
- Framer Motion animations for smooth interactions

## Project Architecture

### Frontend Structure
```
client/src/
├── pages/
│   ├── home.tsx          # Main landing page with all sections
│   └── not-found.tsx     # 404 page
├── components/
│   ├── theme-provider.tsx  # Dark/light theme context
│   ├── theme-toggle.tsx    # Theme toggle button
│   └── ui/                 # Shadcn UI components
├── App.tsx               # Main app with routing and providers
└── index.css             # Tailwind CSS with custom theme colors
```

### Key Components
- **Navigation**: Fixed header with smooth scroll navigation and theme toggle
- **HeroSection**: Full-screen hero with animated title and cat photo collage
- **ProfilesSection**: Detailed profiles for Samboosik and Knafeh
- **GallerySection**: Photo grid with hover effects
- **StoriesSection**: Card-based stories and fun facts
- **FamilySection**: Information about family members and other pets

### Assets
All cat photos are stored in `attached_assets/` and imported directly into the React components.

## Design Tokens
The color scheme uses warm orange and cream tones:
- Primary: `24 75% 50%` (warm orange)
- Background: `35 30% 96%` (warm cream)
- Card: `35 35% 98%` (off-white)

Both light and dark themes are configured in `client/src/index.css`.

## Running the Project
The project runs with `npm run dev` which starts:
- Express server for the backend
- Vite dev server for hot reloading
- Frontend served on port 5000
