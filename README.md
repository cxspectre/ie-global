# IE Global - AI-driven Digital Agency

A modern, high-performance website built with Next.js 15, React Server Components, and Tailwind CSS.

## Features

- ⚡ **Performance First**: Sub-second load times with edge rendering
- 🎨 **Modern Design**: Dark-first UI with glass effects and smooth animations
- ♿ **Accessible**: WCAG AA compliant with keyboard navigation
- 📱 **Responsive**: Mobile-first design that works on all devices
- 🔍 **SEO Optimized**: Structured data, meta tags, and performance budgets
- 🛡️ **Secure**: Security headers and form validation

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS with custom design tokens
- **Components**: shadcn/ui with custom variants
- **Animations**: Framer Motion
- **Forms**: React Hook Form with Zod validation
- **Icons**: Lucide React
- **Fonts**: Inter, General Sans, JetBrains Mono

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Set up environment variables**:
   ```bash
   cp .env.local.example .env.local
   # Edit .env.local with your configuration
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── contact/           # Contact page with form
│   ├── services/          # Services pages
│   │   └── [slug]/        # Dynamic service pages
│   ├── work/              # Case studies
│   │   └── [slug]/        # Dynamic case study pages
│   ├── globals.css        # Global styles and design tokens
│   ├── layout.tsx         # Root layout with metadata
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   ├── ui/                # shadcn/ui components
│   ├── navbar.tsx         # Navigation component
│   ├── hero.tsx           # Hero section
│   ├── timeline.tsx       # 4D framework timeline
│   ├── stats.tsx          # Statistics component
│   └── contact-form.tsx   # Contact form
├── lib/                   # Utility functions
│   ├── actions/           # Server actions
│   ├── data/              # Static data and content
│   └── utils.ts           # Utility functions
└── types/                 # TypeScript type definitions
```

## Design System

### Colors
- **Primary**: `#2A7FFF` (IE Blue)
- **Accent**: `#18C8D8` (Cyan)
- **Background**: `#0A0A0B` (Dark)
- **Text**: `#FFFFFF` (White)

### Typography
- **Display**: General Sans (700/800)
- **Body**: Inter (400/500/600)
- **Code**: JetBrains Mono

### Spacing
- Base unit: 8px
- Responsive: clamp() functions for fluid scaling

## Performance Budgets

- **LCP**: < 2.0s on 4G
- **TTFB**: < 200ms (edge)
- **CLS**: < 0.02
- **INP**: < 200ms
- **JS Bundle**: ≤ 120KB gzip

## Accessibility

- WCAG 2.2 AA compliant
- Keyboard navigation support
- Screen reader friendly
- Focus management
- Reduced motion support

## SEO Features

- Structured data (JSON-LD)
- Open Graph tags
- Twitter Cards
- Sitemap generation
- Meta descriptions
- Canonical URLs

## Deployment

The site is optimized for deployment on Vercel:

```bash
npm run build
npm run start
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

© 2024 IE Global. All rights reserved.

