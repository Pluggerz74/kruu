# KRUU

Premium photo booth experience website — a luxury product landing page focused on memories, emotion, and effortless celebration.

## Stack

- **Vite** — build tooling
- **React 19** — UI
- **TypeScript** — type safety

No backend, no routing library, no animation frameworks. Lightweight foundation ready for visual and interaction polish.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Scripts

| Command         | Description              |
| --------------- | ------------------------ |
| `npm run dev`   | Start development server |
| `npm run build` | Production build         |
| `npm run preview` | Preview production build |

## Project structure

```
src/
├── assets/
│   ├── images/
│   │   ├── hero/          # 3D hero & hero photography
│   │   ├── product/       # Product reveal imagery
│   │   ├── events/        # Event type photography
│   │   └── gallery/       # App & gallery previews
│   └── icons/
├── components/
│   ├── layout/            # Container, Section
│   ├── sections/          # Landing page sections (1–11)
│   └── ui/                # Button, Accordion
├── data/                  # Content & FAQ data
├── pages/                 # HomePage
└── styles/                # Layout, components, sections
```

## Page architecture

Single landing page with eleven semantic sections:

1. Hero / The Promise
2. Emotional Story
3. Product Reveal
4. How It Works
5. Experience Flow
6. Event Types
7. App / Digital Gallery
8. Trust / Social Proof
9. Pricing / Booking Entry
10. FAQ
11. Final CTA

## Design tokens

Color palette prepared for future agents:

- Ivory White (`--color-ivory`)
- Warm Stone (`--color-stone`)
- Champagne Gold (`--color-gold`)
- Deep Graphite (`--color-graphite`)

## For future agents

- **Visual polish** — typography, spacing refinement, photography integration
- **Fake-3D hero** — replace `[data-hero-3d-placeholder]` in HeroSection
- **Motion** — subtle scroll reveals and transitions
- **Navigation** — sticky header with section anchors
- **Booking flow** — connect CTAs to real availability/booking system
