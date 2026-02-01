# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

<!-- What we offer section homepage -->

src/
├── components/
│ └── WhatWeOffer.jsx
├── styles/
│ └── whatWeOffer.css
├── assets/
│ ├── product-design.jpg
│ └── prototyping.jpg

<!-- What we offer pages wireframe -->

[ Services Page ]
│
├── Navbar
│
├── Hero Video Section
│ ├── Fullscreen / near-fullscreen video
│ ├── Domain title
│ └── Short bullet overlay (what this service does)
│
├── Domain Overview Section
│ ├── Heading: “Why Our <Domain> Services”
│ └── Bullet points (customer benefits)
│
├── Interactive Capability Explorer (3 JS components)
│ ├── Clickable list (right or top)
│ ├── Image + explanation (left)
│ └── Only one active at a time
│
├── Selected Case Studies
│ ├── 2–3 cards
│ └── “View More” CTA (later)
│
└── Footer

<!-- File Structure -->

src/
├── pages/
│ ├── ProductDesign.jsx
│ └── Prototyping.jsx
│
├── components/services/
│ ├── ServicesHero.jsx
│ ├── ServicesOverview.jsx
│ ├── CapabilityExplorer.jsx
│ └── ServicesCaseStudies.jsx
│
├── layouts/
│ └── ServicesLayout.jsx
│
├── data/
│ ├── productDesign.js
│ └── prototyping.js
│
└── styles/services/
├── servicesHero.css
├── servicesOverview.css
├── capabilityExplorer.css
└── servicesCaseStudies.css
