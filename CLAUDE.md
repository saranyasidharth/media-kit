# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static HTML media kit website for the Instagram creator @saranya_sidharth. The entire site is contained in a single `index.html` file with embedded CSS and JavaScript. No build tools, package managers, or complex tooling required.

**Key files:**
- `index.html` - Complete media kit webpage (all HTML, CSS, and JavaScript in one file)
- `README.md` - User-facing guide for editing and exporting to PDF
- `DEPLOYMENT.md` - Instructions for deploying to GitHub Pages

## Making Changes

### Editing Content & Statistics

The media kit contains hardcoded statistics and information. To update:

1. Open `index.html` in a text editor (VS Code, Notepad, etc.)
2. Use Find & Replace to locate and update values:
   - Follower count: search `5,092` or `5K+`
   - Profile views: search `1.7L` or `170K`
   - Engagement metrics: search relevant numbers
   - Contact info: search email `saranyasidharth00@gmail.com` or phone

### Customizing Colors

The site uses CSS custom properties (variables) defined in the `:root` section (around line 17-33). To change the color scheme:

```css
--primary-color: #FF6B9D;        /* Main pink */
--secondary-color: #C44569;      /* Deep rose */
--accent-color: #FFA07A;         /* Coral accent */
--text-dark: #1a1a2e;            /* Dark text */
```

Modify these values to update the entire design consistently. The colors are used in gradients, shadows, and interactive elements throughout the site.

### Adding or Modifying Sections

The HTML is structured with semantic sections:
- **Hero section** (`.hero`) - Profile name, handle, tagline
- **Stats grid** (`.stats-grid`) - Key metrics display
- **Audience demographics** - Demographics section with charts
- **Services offered** - Service cards
- **Contact section** - Email, phone, Instagram handle

To add or modify content, edit the corresponding HTML structure within each section and ensure styling matches the existing pattern.

## Browser Testing

To view changes locally:

1. Save `index.html`
2. Open it in a modern browser (Chrome, Edge, Safari, Firefox)
3. Refresh the page to see updates (Ctrl+R or Cmd+R)
4. Use browser DevTools (F12) to inspect styles and layout

## PDF Export

Users can export the media kit to PDF using their browser's print function (Ctrl+P). The design uses `@media print` CSS rules to optimize for PDF output—ensure any changes maintain print-friendly styling (background colors, legibility, layout).

## Deployment

The site is deployed to GitHub Pages. See `DEPLOYMENT.md` for setup instructions. After pushing to the `main` branch, changes are live within 1-2 minutes.

To deploy locally for testing, simply open `index.html` in a browser.

## Performance & Accessibility Notes

- The site uses web fonts from Google Fonts (`Inter`, `Cormorant Garamond`)—keep font loading performant
- Ensure sufficient color contrast for accessibility (text on gradient backgrounds)
- The page uses CSS Grid and Flexbox for responsive layout; test on mobile devices (use browser DevTools to simulate)
- No JavaScript frameworks or build transpilation—vanilla JavaScript only

## Common Development Tasks

### Update follower count or metrics
Search and replace the numeric value in `index.html`.

### Change the color scheme
Update the CSS custom properties in the `:root` section.

### Add a new service or testimonial
Add a new card element to the relevant section following the existing HTML structure and class conventions.

### Test responsive design
Open DevTools (F12) and use the device emulation tool to preview on mobile (375px, 768px, 1024px breakpoints).

### Check PDF export quality
Print to PDF using Chrome/Edge with "Background graphics" enabled; verify layout, colors, and readability.
