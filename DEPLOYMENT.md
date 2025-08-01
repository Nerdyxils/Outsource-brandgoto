# BrandGoto Tech Outsourcing - Deployment Guide

## Netlify Deployment

This project is configured for easy deployment on Netlify with comprehensive SEO optimization.

### Quick Deploy

1. **Connect to Netlify:**
   - Push your code to GitHub/GitLab/Bitbucket
   - Connect your repository to Netlify
   - Netlify will automatically detect the build settings

2. **Build Settings (Auto-detected):**
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
   - **Node version:** 18

### Manual Deployment

If you prefer manual deployment:

```bash
# Install dependencies
npm install

# Build for production
npm run build

# Deploy to Netlify (requires Netlify CLI)
npm run deploy
```

### Environment Variables

No environment variables are required for this project.

### Custom Domain Setup

1. **Add Custom Domain in Netlify:**
   - Go to Site settings > Domain management
   - Add custom domain: `outsourcing.brandgoto.com`
   - Configure DNS records as instructed by Netlify

2. **SSL Certificate:**
   - Netlify automatically provides SSL certificates
   - Force HTTPS redirect is enabled in `netlify.toml`

### SEO Features Included

✅ **Meta Tags:** Complete Open Graph and Twitter Card support  
✅ **Structured Data:** JSON-LD schema markup  
✅ **Sitemap:** XML sitemap for search engines  
✅ **Robots.txt:** Search engine crawling instructions  
✅ **Canonical URLs:** Prevent duplicate content issues  
✅ **Performance:** Optimized loading with preconnect hints  
✅ **PWA Support:** Web manifest for mobile installation  
✅ **Security Headers:** XSS protection, frame options, etc.  

### Performance Optimizations

- **Caching:** Static assets cached for 1 year
- **Compression:** Gzip compression enabled
- **CDN:** Global CDN distribution
- **Preconnect:** External resources preconnected
- **Image Optimization:** Responsive images with proper formats

### Monitoring

After deployment, monitor:
- **Page Speed:** Use Google PageSpeed Insights
- **SEO:** Check Google Search Console
- **Analytics:** Set up Google Analytics 4
- **Uptime:** Netlify provides uptime monitoring

### Troubleshooting

**Build Failures:**
- Ensure Node.js version 18+ is used
- Check for missing dependencies
- Verify all imports are correct

**SEO Issues:**
- Validate structured data with Google's Rich Results Test
- Check meta tags with Facebook Sharing Debugger
- Test Twitter Card with Twitter Card Validator

### Support

For deployment issues:
1. Check Netlify build logs
2. Verify all files are committed
3. Ensure build command works locally
4. Contact BrandGoto support team 