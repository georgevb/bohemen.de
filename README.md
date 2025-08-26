# Peter van Bohemen Photography Portfolio

A professional photography portfolio website built with Astro, Tailwind CSS, and Decap CMS.

## Features

- **Modern Design**: Clean, minimal design focused on showcasing photography
- **Responsive**: Mobile-first responsive design
- **Performance Optimized**: Fast loading with image optimization and lazy loading
- **CMS Integration**: Easy content management with Decap CMS
- **SEO Friendly**: Semantic HTML and proper meta tags
- **Accessibility**: WCAG compliant and keyboard navigation support

## Tech Stack

- **Framework**: Astro 5.x
- **Styling**: Tailwind CSS
- **CMS**: Decap CMS (formerly Netlify CMS)
- **Hosting**: Netlify
- **Images**: Optimized with responsive srcsets

## Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

## CMS Access

Access the CMS at `/admin` after deployment. You'll need to set up Netlify Identity for authentication.

## Deployment

1. Connect your repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Enable Netlify Identity
5. Configure Git Gateway in Netlify Identity settings

## Content Management

The CMS allows editing:
- Hero section images and text
- About section content and photos
- Portfolio images with categories
- Client testimonials
- Contact information
- Site settings

## Performance

The site is optimized for:
- Core Web Vitals
- Image optimization with WebP support
- Lazy loading for images
- Minimal JavaScript bundle
- Efficient CSS with Tailwind purging

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- IE11+ with graceful degradation

## License

© 2024 Peter van Bohemen. All rights reserved.