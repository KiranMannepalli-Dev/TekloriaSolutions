# Mainframe - Creative Agency Hero Page

This project is a bespoke, full-screen hero landing page for a creative agency named "Mainframe". It features a cinematic, dark-mode first aesthetic built with React, TypeScript, Vite, and Tailwind CSS v4.

## Features

- **Interactive Background Video:** A high-quality background video that scrubs forward and backward smoothly in response to horizontal mouse movement.
- **Custom Typography:** Integration of specific web fonts (`HelveticaNowDisplay-Medium` for headings and `HelveticaNowDisplayW01-Rg` for body text).
- **Typewriter Animation:** A custom React hook that reveals the hero copy character by character, complete with a blinking cursor.
- **Micro-interactions:** Pill buttons that fade in and slide up after page load. Includes an interactive "copy to clipboard" button for email.
- **Responsive Mobile Navigation:** A custom-built hamburger menu that animates into a full-screen, backdrop-blurred overlay menu on smaller devices.
- **Tailwind v4 Monochrome Design System:** A tailored high-contrast theme defined entirely via Tailwind v4 CSS variables.

## Tech Stack

- **React 18**
- **TypeScript**
- **Vite**
- **Tailwind CSS v4**

## Getting Started

1. **Install Dependencies:**
   ```bash
   npm install
   ```

2. **Start the Development Server:**
   ```bash
   npm run dev
   ```

3. **Build for Production:**
   ```bash
   npm run build
   ```

## Design System

The underlying design system relies heavily on pure blacks (`#000000`) and pure whites (`#FFFFFF`), with an extended greyscale palette configured in `src/index.css`. All interactive elements follow an inverted hover logic to maintain high visual contrast.

---

## 🔄 Recent Updates & Additions (Tekloria)

### 1. About Page - Team Section Updates
The team section was streamlined to focus on the core leadership: **Kiran Mannepalli** and **Revanth Bandi**. The grid layout was adjusted to center the profiles perfectly across all devices.

### 2. Portfolio Page - Previous Works Section
The "Previous Works" section was overhauled to include visual mockups and direct live links for six recent client projects:
- **Dental Clinic Platform** ([Live Link](https://dental-clinic-api-henna.vercel.app/))
- **Winev Bike Rentals** ([Live Link](https://winev-bike-rentals.vercel.app/))
- **Elite Real Estate** ([Live Link](https://elite-realestate.web.app/))
- **Home Dream Interio** ([Live Link](https://home-dream-interio.vercel.app/))
- **Core Engine** ([Live Link](https://cro-engine-seven.vercel.app/))
- **Mentor OS AI** ([Live Link](https://mentor-ai-web-chi.vercel.app/))

The layout was upgraded to a responsive image-focused grid (`grid-cols-1 sm:grid-cols-2 md:grid-cols-3`).

### 3. Services Page - New AI & Automation Offerings
Expanded the agency's digital capabilities by introducing two new dedicated service cards:
- **AI Chatbots & Agents**: Deploy intelligent conversational agents and autonomous AI systems. Features Custom SVG illustration (`Chat bot-pana.svg`).
- **Business Automations**: Streamline operations with intelligent workflow automations. Features Custom SVG illustration (`Design Process-cuate.svg`).
