# Deployment Guide for IE Global Website

## Quick Deploy Options

### Option 1: Vercel (Recommended)
1. Go to [vercel.com](https://vercel.com)
2. Sign up/login with GitHub
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Next.js and deploy
6. Your site will be live at `https://your-project.vercel.app`

### Option 2: Netlify
1. Go to [netlify.com](https://netlify.com)
2. Sign up/login with GitHub
3. Click "New site from Git"
4. Connect your GitHub repository
5. Build settings: `npm run build`
6. Publish directory: `.next`
7. Deploy!

### Option 3: GitHub Pages (Static Export)
1. Add to `next.config.js`:
```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
}
```
2. Run `npm run build`
3. Push to GitHub
4. Enable GitHub Pages in repository settings

## Environment Variables

Create these in your deployment platform:

```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_ANALYTICS=vercel
```

## Custom Domain

1. Buy a domain (Namecheap, GoDaddy, etc.)
2. In Vercel/Netlify, go to Domain settings
3. Add your custom domain
4. Update DNS records as instructed

## Performance Optimization

- Images are already optimized with Next.js Image component
- CSS is purged with Tailwind
- JavaScript is code-split automatically
- Static generation for all pages

## Monitoring

- Vercel Analytics (built-in)
- Google Analytics (add GA4 ID)
- Lighthouse scores should be 95+ across all categories

## Troubleshooting

### Build Errors
- Check Node.js version (18+ required)
- Run `npm install` locally first
- Check for TypeScript errors

### Runtime Errors
- Check browser console
- Verify environment variables
- Check deployment logs

## Support

For issues, check:
1. [Next.js Documentation](https://nextjs.org/docs)
2. [Vercel Documentation](https://vercel.com/docs)
3. [Tailwind CSS Documentation](https://tailwindcss.com/docs)
