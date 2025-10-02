# IE Global - Development Guide

This guide provides comprehensive documentation for developers working on the IE Global website.

## 🏗️ Architecture Overview

The IE Global website is built with a modern, performance-first architecture:

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS with custom design tokens
- **Components**: shadcn/ui with custom variants
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Zod validation
- **Type Safety**: Full TypeScript coverage

## 🎨 Design System

### Color Tokens

Our design system uses semantic color tokens that can be referenced in Tailwind:

```typescript
// Brand Colors
theme('colors.brand')        // #2A7FFF - Primary brand color
theme('colors.brand.700')    // #1E63CC - Darker blue for hover states
theme('colors.brand.accent') // #18C8D8 - Cyan accent for highlights

// Background Colors (Dark-first)
theme('colors.bg')           // #0A0A0B - Primary background
theme('colors.bg.900')       // #0E0F12 - Elevated surfaces (cards, modals)
theme('colors.bg.800')       // #14161A - Secondary surfaces (form inputs)
theme('colors.bg.700')       // #1B1F25 - Tertiary surfaces (borders)

// Text Colors
theme('colors.foreground')   // #FFFFFF - Primary text
theme('colors.gray.200')     // #E3E8EF - Lightest text (headings)
theme('colors.gray.300')     // #C4CBD4 - Secondary text (body)
theme('colors.gray.400')     // #9AA3AF - Tertiary text (captions)

// Semantic Colors
theme('colors.status.success') // #10B981 - Success states
theme('colors.status.warning') // #F59E0B - Warning states
theme('colors.status.error')   // #EF4444 - Error states
```

### Typography Scale

We use a fluid typography scale with clamp() functions:

```css
/* Available classes */
.text-step--1  /* clamp(12px, 0.75vw, 13px) */
.text-step-0   /* clamp(16px, 1vw, 18px) */
.text-step-1   /* clamp(18px, 1.25vw, 20px) */
.text-step-2   /* clamp(22px, 1.6vw, 24px) */
.text-step-3   /* clamp(26px, 2vw, 30px) */
.text-step-4   /* clamp(32px, 2.6vw, 38px) */
.text-step-5   /* clamp(40px, 3.2vw, 48px) */
```

### Font Families

```css
.font-sans     /* Inter - Body text */
.font-display  /* General Sans - Headings */
.font-mono     /* JetBrains Mono - Code */
```

## 🧩 Component Library

### Button Component

```tsx
import { Button } from '@/components/ui/button';

// Variants
<Button variant="primary">Primary Action</Button>
<Button variant="secondary">Secondary Action</Button>
<Button variant="ghost">Subtle Action</Button>
<Button variant="glass">Glass Effect</Button>

// Sizes
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>

// With loading state
<Button loading={true}>Loading...</Button>

// With icon
<Button icon={<ArrowRight />}>Get Started</Button>
```

### Card Component

```tsx
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

// Variants
<Card variant="plain">Default card</Card>
<Card variant="glass">Glass effect card</Card>
<Card variant="bordered">Bordered card</Card>

// Interactive
<Card interactive={true}>Hoverable card</Card>

// Complete example
<Card variant="glass" interactive>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
  </CardHeader>
  <CardContent>
    Card content goes here
  </CardContent>
</Card>
```

### Smart CTA Component

Our AI-enhanced CTA component that rotates messaging:

```tsx
import { SmartCTA } from '@/components/smart-cta';

<SmartCTA variant="primary" size="lg" />
```

## 📱 Page Structure

### Static Pages

All pages are statically generated for GitHub Pages compatibility:

- `/` - Home page with Hero, Stats, Timeline
- `/services` - Services overview
- `/services/websites` - Detailed website service page
- `/work` - Case studies overview
- `/work/techcorp-ecommerce` - Detailed case study
- `/about` - About page with team and values
- `/contact` - Contact form and information

### Dynamic Content

Content is managed through TypeScript data files:

```typescript
// Services data
import { getAllServices, getServiceBySlug } from '@/lib/data/services';

// Case studies data
import { getAllCaseStudies, getCaseStudyBySlug } from '@/lib/data/case-studies';
```

## 🎭 AI-Enhanced Features

### Smart CTA Personalization

The SmartCTA component rotates messaging based on time and user interaction:

```tsx
// Automatically rotates between:
// - "Start a project" / "Ship in weeks, not months"
// - "Get AI-powered results" / "20-40% better conversions"
// - "Launch faster" / "Sub-second performance"
// - "Hit your targets" / "Measurable business growth"
```

### Performance Monitoring

Built-in performance tracking for Core Web Vitals:

- LCP (Largest Contentful Paint) < 2.0s
- TTFB (Time to First Byte) < 200ms
- CLS (Cumulative Layout Shift) < 0.02
- INP (Interaction to Next Paint) < 200ms

## ♿ Accessibility Features

### WCAG AA Compliance

- Keyboard navigation support
- Screen reader friendly
- Focus management
- ARIA labels and descriptions
- Color contrast ratios ≥ 4.5:1

### Reduced Motion Support

```css
@media (prefers-reduced-motion: reduce) {
  /* All animations are disabled */
}
```

## 🔧 Development Workflow

### Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

### Code Style

- Use TypeScript for all components
- Follow the existing component patterns
- Use semantic HTML elements
- Implement proper error boundaries
- Add loading states for async operations

### Performance Guidelines

- Keep JavaScript bundle ≤ 120KB gzip
- Optimize images with next/image
- Use dynamic imports for large components
- Implement proper caching strategies
- Monitor Core Web Vitals

## 📊 SEO & Analytics

### Structured Data

JSON-LD structured data is included in the root layout:

```typescript
// Organization schema
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "IE Global",
  "url": "https://ie-global.example",
  "logo": "https://ie-global.example/logo.png"
}
```

### Meta Tags

Each page includes comprehensive meta tags:

- Title (50-60 characters)
- Description (140-160 characters)
- Open Graph tags
- Twitter Cards
- Canonical URLs

## 🚀 Deployment

### GitHub Pages

The site is optimized for GitHub Pages deployment:

1. All pages are statically generated
2. No dynamic routes that require server-side rendering
3. Proper 404 handling
4. Sitemap and robots.txt included

### Environment Variables

```bash
# Required for production
NEXT_PUBLIC_SITE_URL=https://ie-global.example

# Optional analytics
NEXT_PUBLIC_ANALYTICS=vercel
POSTHOG_KEY=phc_xxx

# Form handling
TURNSTILE_SITE_KEY=xxx
TURNSTILE_SECRET_KEY=xxx
```

## 🧪 Testing

### Performance Testing

```bash
# Lighthouse CI
npm run lighthouse

# Bundle analysis
npm run analyze
```

### Accessibility Testing

```bash
# Axe accessibility testing
npm run test:a11y
```

## 📝 Content Management

### Adding New Services

1. Add service data to `/src/lib/data/services.ts`
2. Create static page at `/src/app/services/[slug]/page.tsx`
3. Update navigation if needed

### Adding Case Studies

1. Add case study data to `/src/lib/data/case-studies.ts`
2. Create static page at `/src/app/work/[slug]/page.tsx`
3. Update work index page

### Updating Team Information

Edit the team array in `/src/app/about/page.tsx`

## 🔍 Troubleshooting

### Common Issues

1. **Build errors**: Check TypeScript types and imports
2. **Styling issues**: Verify Tailwind classes and custom CSS
3. **Performance issues**: Check bundle size and image optimization
4. **Accessibility issues**: Run axe tests and check color contrast

### Debug Tools

- React Developer Tools
- Next.js DevTools
- Lighthouse
- Axe DevTools

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com/)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [WCAG Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

## 🤝 Contributing

1. Follow the existing code patterns
2. Add proper TypeScript types
3. Include accessibility features
4. Test performance impact
5. Update documentation as needed

---

For questions or support, contact the development team or refer to the main README.md file.
