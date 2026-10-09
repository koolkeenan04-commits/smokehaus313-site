# Smokehaus 313 storefront site

Static custom site for `Smokehaus 313`.

## Project files

- `index.html`: Home — hero, live status, and cards linking to every page
- `pull-up.html`: Pull Up — the vibe/about story and the photo wall placeholders
- `shelves.html`: Shelves — product/category placeholder cards
- `shop.html`: Shop — Shopify-powered featured product board
- `hours.html`: Hours & Location — weekly hours, live status, location placeholder
- `contact.html`: Contact — Instagram DM CTA and pending contact details
- `styles.css`: shared site styling for all pages
- `app.js`: age gate, live open/closed status, mobile menu, scroll-reveal animations
- `assets/logo.png`: current logo asset

## What is already wired up

- Smokehaus 313 branding
- Separate landing pages with a shared header, nav, and footer
- Active-page highlight in the nav plus a mobile hamburger menu
- 21+ age gate that carries across pages (remembered per browser session)
- Store hours with live open/closed status
- Instagram link
- Placeholder sections for photos and product/category content
- Shopify collection wiring with a safe coming-soon state until the store is public
- Scroll-triggered fade-ins and subtle hover effects (respects reduced motion)
- Storefront-only messaging
- Static hosting-friendly structure (plain HTML/CSS/JS, no build step)

## What still needs to be added before final launch

- Street address
- Phone number
- Google Maps embed or directions link
- Real storefront and interior photos
- Final product or brand copy
- Logo cleanup if you want a white or transparent version instead of the current dark background image

## Recommended workflow

Use `GitHub` for the code and `Vercel` for the live site.

### Suggested repo name

`smokehaus313-site`

### GitHub flow

1. Create a new GitHub repo named `smokehaus313-site`.
2. Push this folder to that repo.
3. Keep making edits locally and push changes when you want the site updated.

### Vercel flow

1. Sign in to Vercel.
2. Import the `smokehaus313-site` GitHub repo.
3. Let Vercel deploy it as a static site.
4. After the first deploy works, attach the final custom domain.

This project does not need a framework build step. Vercel can serve it directly from the repository root.

## Push commands

Run these inside the project folder after you create the GitHub repo:

```powershell
git branch -M main
git add .
git commit -m "Initial Smokehaus 313 site"
git remote add origin https://github.com/YOUR-USERNAME/smokehaus313-site.git
git push -u origin main
```

## Domain note

`smokehaus313` by itself is not a complete public website domain. When you are ready to go live, you will want a real domain such as:

- `smokehaus313.com`
- `smokehaus313shop.com`
- `smokehaus313detroit.com`

## Good next content upgrades

- Replace the current logo image with a transparent or white-background version
- Add the shop address and map section
- Add real storefront photos
- Swap placeholder product copy for final categories or featured brands
