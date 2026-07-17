# Brindhavan Naturals — Website Project Brief

> Hand this file to Claude Code. Put it in your project folder alongside the logo
> image, open the folder in your terminal, run `claude`, and say:
> "Read PROJECT_BRIEF.md and build this website."

---

## 1. The business

- **Brand name:** Brindhavan Naturals (Tamil: பிருந்தாவன் நேச்சுரல்ஸ்)
- **Run by:** SKS Agro Enterprises
- **What they do:** Traditional *chekku* (wooden cold-press) oils and natural
  provisions, made locally in Nagercoil.
- **Taglines:** "Traditional Chekku Cold-Pressed Oils" · "Fresh 'N' Crush" · "100% Pure & Real"
- **Address:** #185 A, Ganeshapuram Road, Nagercoil - 629 002, Tamil Nadu, India
- **Order / enquiries (WhatsApp & phone):** +91 73054 54755

**Positioning / story to convey:** authentic, chemical-free, freshly pressed the
traditional way. Emphasise purity, the wooden-press (chekku/marachekku) heritage,
and freshness. Warm, trustworthy, homely tone — not a slick corporate feel.

---

## 2. Brand identity

**Logo:** Use the provided logo image (bullock + chekku illustration with the
"Brindhavan naturals" wordmark). Place the logo file in the project and reference
it directly — don't recreate it. Sample exact colors from it if you want to
fine-tune the values below.

**Colors** (sampled from the logo — treat as the palette):

| Role | Hex |
|------|-----|
| Deep green (primary / headers / footer) | `#285B52` |
| Orange (calls-to-action, accents) | `#F26A1E` |
| Lime green (secondary accent, highlights) | `#8CBE3F` |
| Cream (light section backgrounds) | `#F7F3E9` |
| Ink (body text) | `#1F2A24` |
| White | `#FFFFFF` |

**Type & feel:** clean, friendly sans-serif for body; a slightly bolder display
face for headings is welcome. Rounded "pill" buttons echo the "Fresh 'N' Crush"
badge. Generous spacing, natural/organic feel, subtle leaf motifs are fine but
keep it uncluttered.

**Trust badges to feature:** 100% Pure & Real · Premium Quality · Freshly Packed ·
No Chemicals Added (cold-pressed oils) · Delivery Available.

---

## 3. Products & prices

Product photos: use tasteful **placeholder images** for now (labelled so they're
easy to swap later). Real bottle photos will replace them.

### Hero products — Cold-Pressed Oils (each in 500 ml & 1 L)

| Product | 500 ml | 1 Litre |
|---------|--------|---------|
| Cold-Pressed Coconut Oil | ₹190 | ₹380 |
| Cold-Pressed Groundnut Oil | ₹175 | ₹350 |
| Cold-Pressed Sesame Oil | ₹210 | ₹420 |

### More Natural Products

| Product | Size | Price |
|---------|------|-------|
| Marthandam Honey | 500 g | ₹160 |
| Marthandam Honey | 1 kg | ₹320 |
| Panam Karupatti (Palm Jaggery) | 500 g | ₹240 |
| Panam Karupatti (Palm Jaggery) | 1 kg | ₹470 |
| Panam Kalkandu (Palm Candy) | 200 g | ₹160 |
| Nattu Sakkarai (Country Sugar) | 500 g | ₹40 |
| Nattu Sakkarai (Country Sugar) | 1 kg | ₹80 |
| Himalayan Pink Salt | 1 kg | ₹80 |

> Keep prices in one easily editable data file/array so they can be updated in
> one place. Show "Delivery available (delivery charge extra)" near pricing.

---

## 4. Ordering flow — WhatsApp only (no online payment for v1)

Every product has an **"Order on WhatsApp"** button. It opens WhatsApp with a
pre-filled message naming the product and size, so the customer just hits send.

Use the `wa.me` deep link with a URL-encoded message. Pattern:

```
https://wa.me/917305454755?text=<url-encoded message>
```

Example for a specific product:

```
https://wa.me/917305454755?text=Hi%20Brindhavan%20Naturals%2C%20I'd%20like%20to%20order%3A%0ACold-Pressed%20Coconut%20Oil%20-%201%20Litre%20(%E2%82%B9380)%0AName%3A%0AAddress%3A
```

- A general "Order on WhatsApp" button in the header/hero can use a generic
  greeting message.
- Also expose the number as a normal `tel:` link (`tel:+917305454755`) for calls.
- No cart, no checkout, no payment gateway in v1. (Can be added later.)

---

## 5. Pages & structure

Single-page site is fine (sections with smooth scroll), or multi-page — your call.
Must be **mobile-first**; most visitors arrive on phones.

1. **Header / nav** — logo, links (Products, About, Contact), sticky "Order on
   WhatsApp" button.
2. **Hero** — logo/brand, tagline "Traditional Chekku Cold-Pressed Oils · Fresh 'N'
   Crush", one line on purity/freshness, primary WhatsApp CTA.
3. **Trust strip** — the badges from section 2 as small icon+label items.
4. **Cold-Pressed Oils** — the three hero products as cards: image, name, short
   blurb, 500 ml & 1 L prices, "Order on WhatsApp" button per product.
5. **More Natural Products** — grid of the remaining items with sizes/prices and
   WhatsApp buttons.
6. **Our Story / About** — the chekku heritage, 100% natural, no chemicals, made
   in Nagercoil.
7. **Contact / Order** — WhatsApp number (big), phone link, address, embedded
   Google Map of Ganeshapuram Road, Nagercoil, and "Delivery available*".
8. **Footer** — brand, SKS Agro Enterprises, address, WhatsApp, copyright, and a
   line for **FSSAI licence no. [ADD YOURS]** (required for selling edible oil in
   India — leave a clearly-marked placeholder).

---

## 6. Tech approach

- Prefer a **static site**: plain HTML/CSS/JS, or a lightweight framework
  (Astro / Vite) — whatever deploys most simply to Netlify/Vercel/Cloudflare Pages.
- No backend, database, or login needed for v1.
- Keep product data in a single JSON/JS array so prices and items are easy to edit.
- Responsive, fast, accessible. Optimise images. Good SEO basics: page title,
  meta description, and local keywords (cold pressed oil Nagercoil, chekku oil,
  groundnut/sesame/coconut oil, etc.).
- Add simple structured data (LocalBusiness) for local search if easy.

---

## 7. Assets checklist (to add to the project folder)

- [x] Logo image (provided)
- [ ] Real product photos (using placeholders until then)
- [ ] Favicon (can be generated from the logo)
- [ ] FSSAI licence number for the footer
- [ ] Optional: a short "about" paragraph in the owner's own words

---

## 8. Deployment

1. Push the project to a Git repo (GitHub).
2. Connect the repo to **Netlify**, **Vercel**, or **Cloudflare Pages** (free tier).
3. In the host's dashboard, add the custom domain and follow its DNS instructions.
4. Update the domain's DNS records at your registrar to point to the host.
5. Enable HTTPS (automatic on all three hosts) and go live.

*(Ask Claude Code to walk you through these deploy steps when the site is ready.)*
