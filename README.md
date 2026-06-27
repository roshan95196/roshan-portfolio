# Roshan Kumar — Developer Portfolio

A premium SaaS-style developer portfolio built with Next.js 15, TypeScript, Tailwind CSS, Framer Motion, and ShadCN UI.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI:** ShadCN UI + Lucide React
- **Animations:** Framer Motion
- **Forms:** React Hook Form + Zod
- **Email:** Resend
- **Theme:** next-themes (Dark/Light)

## Getting Started

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

```env
RESEND_API_KEY=re_your_api_key_here
CONTACT_EMAIL=roshankumar95196@gmail.com
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

## Project Structure

```
src/
├── app/              # Next.js App Router pages & API
├── components/
│   ├── layout/       # Navbar, Footer, Theme toggle
│   ├── sections/     # Page sections (Hero, About, etc.)
│   ├── shared/       # Reusable UI components
│   └── ui/           # ShadCN UI primitives
├── data/             # Content data (profile, skills, projects)
├── hooks/            # Custom React hooks
├── lib/              # Utilities, SEO, validations
└── types/            # TypeScript interfaces
```

## Deployment

Deploy to [Vercel](https://vercel.com) for optimal Next.js performance.

Before deploying:
1. Add your resume PDF to `public/resume/`
2. Update LinkedIn/GitHub URLs in `src/data/profile.ts`
3. Configure Resend API key and verified domain
4. Add an OG image at `public/og-image.png`

## License

MIT
