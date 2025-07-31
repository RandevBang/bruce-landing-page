# Bruce Trades Landing Page

A modern, responsive landing page for Bruce Trades, designed to help Australian tradespeople quickly obtain insurance quotes and learn about comprehensive coverage options. Built with Next.js, React, and Tailwind CSS.

## Project Overview

**Bruce Trades Landing Page** is a professional, conversion-focused site for trades insurance in Australia. It features a quick quote form, trust indicators, and detailed information about coverage options, all styled with a custom brand palette.

## Features

- **Hero Section:** Highlights the value proposition and key benefits (fast coverage, comprehensive insurance, instant quotes).
- **Business Logos:** Displays trusted partner/placeholder business logos and trust indicators.
- **Why Choose Us:** Explains unique selling points and the simple 3-step process to get insured.
- **Quote Form:** Embedded instant quote form (via iframe) for tradespeople to get personalized insurance quotes in under 2 minutes.
- **Footer:** Company info, insurance types, trade coverage, and support links.
- **Fully Responsive:** Optimized for all devices.
- **Custom Branding:** Uses Bruce brand colors and modern UI components.

## Tech Stack

- [Next.js 15](https://nextjs.org/) (App Router)
- [React 19](https://react.dev/)
- [Tailwind CSS 3](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Radix UI](https://www.radix-ui.com/) (for Slot)
- [Lucide React](https://lucide.dev/icons/)
- [class-variance-authority](https://cva.style/) & [clsx](https://github.com/lukeed/clsx)

## Deployment

This project uses GitHub Actions for automated CI/CD deployment to Vercel. Every push to the main branch triggers a production deployment, and pull requests get preview deployments.

## Getting Started

### Prerequisites
- Node.js 18+
- npm (comes with Node.js)

### Installation

1. **Clone the repository:**
   ```bash
   git clone <repo-url>
   cd bruce-landing-page
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Run the development server:**
   ```bash
   npm run dev
   ```
   The app will be available at [http://localhost:3000](http://localhost:3000).

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

- `src/app/` – Next.js app directory (main entry, layout, global styles)
- `src/components/sections/` – Main landing page sections (Hero, BusinessLogos, WhyChooseUs, QuoteForm, Footer)
- `src/components/ui/` – Reusable UI components (e.g., Button)
- `src/lib/` – Utility functions
- `tailwind.config.ts` – Tailwind CSS configuration
- `postcss.config.js` – PostCSS plugins (Tailwind, Autoprefixer)
- `tsconfig.json` – TypeScript configuration

## Customization

- **Branding:** Update colors in `src/app/globals.css` and `tailwind.config.ts`.
- **Logos:** Replace placeholder business names/logos in `BusinessLogos.tsx` with real partner logos.
- **Quote Form:** The embedded form is loaded via iframe from an external provider. Update the `src` in `QuoteForm.tsx` if your provider changes.
- **Content:** Edit section components in `src/components/sections/` to update text, features, or add new sections.

## License

This project is for demonstration and internal use. Contact Bruce Insurance for commercial licensing or inquiries.

---

© 2024 Bruce Insurance. All rights reserved. 