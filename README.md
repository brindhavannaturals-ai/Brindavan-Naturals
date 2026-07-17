# Brindhavan Naturals — Website

Static website for **Brindhavan Naturals** (SKS Agro Enterprises, Nagercoil) —
traditional chekku cold-pressed oils and natural provisions, with WhatsApp-based
ordering. No build step, no backend — plain HTML/CSS/JS.

## Editing products & prices

Everything (names, blurbs, sizes, prices, images) lives in **`js/products.js`**.
Edit that one file and the whole site updates.

## Swapping in real product photos

1. Drop the photo into `assets/products/` (e.g. `coconut-oil.jpg`).
2. In `js/products.js`, change that product's `image` path to the new file.

The current `.svg` files there are labelled placeholders.

## Changing the WhatsApp number

Edit `WHATSAPP_NUMBER` at the top of `js/products.js`
(country code + number, digits only).

## Before going live

- [ ] Add the FSSAI licence number in `index.html` (search for `ADD FSSAI`).
- [ ] Replace placeholder images with real product photos.

## Running locally

Open `index.html` directly in a browser, or serve the folder:

```
npx serve .
```

## Deploying

Push to GitHub, then connect the repo to Netlify / Vercel / Cloudflare Pages
(free tier). No build command needed — publish directory is the repo root.
