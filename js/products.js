/* =========================================================================
   Brindhavan Naturals — product data
   Edit prices/products HERE only. The site renders from this file.
   To use a real photo: drop it in assets/products/ and update `image` below.
   ========================================================================= */

const WHATSAPP_NUMBER = "917305454755"; // country code + number, digits only

/* Hero products — cold-pressed oils */
const OILS = [
  {
    name: "Cold-Pressed Coconut Oil",
    blurb: "Sweet-smelling, crystal-clear oil from sun-dried copra. Perfect for cooking, hair & skin.",
    image: "assets/products/coconut-oil.jpg",
    highlights: ["Unrefined", "Cold-Pressed", "Pure & Natural"],
    sizes: [
      { label: "500 ml", price: 190 },
      { label: "1 Litre", price: 380 },
    ],
  },
  {
    name: "Cold-Pressed Groundnut Oil",
    blurb: "Rich, nutty flavour that takes everyday cooking back to grandma's kitchen.",
    image: "assets/products/groundnut-oil.jpg",
    highlights: ["Unrefined", "Cold-Pressed", "Pure & Natural"],
    sizes: [
      { label: "500 ml", price: 175 },
      { label: "1 Litre", price: 350 },
    ],
  },
  {
    name: "Cold-Pressed Sesame Oil",
    blurb: "Traditional nallennai — deep aroma, ideal for cooking, pickles and oil baths.",
    image: "assets/products/sesame-oil.jpg",
    highlights: ["Unrefined", "Cold-Pressed", "Pure & Natural"],
    sizes: [
      { label: "500 ml", price: 210 },
      { label: "1 Litre", price: 420 },
    ],
  },
];

/* More natural products
   Order matters: rendered in a 3-column grid, so this order controls
   which products share a row (row 1 = first 3, row 2 = next 2, etc). */
const PROVISIONS = [
  {
    name: "Panam Kalkandu (Palm Candy)",
    blurb: "Crunchy palm sugar candy, gentle on the throat.",
    image: "assets/products/kalkandu.jpg",
    highlights: ["Handmade", "Naturally Sweet"],
    sizes: [
      { label: "200 g", price: 160 },
    ],
  },
  {
    name: "Himalayan Pink Salt",
    blurb: "Mineral-rich rock salt, ground fine for daily use.",
    image: "assets/products/pink-salt.jpg",
    highlights: ["Mineral-Rich", "Finely Ground"],
    sizes: [
      { label: "1 kg", price: 80 },
    ],
  },
  {
    name: "Nattu Sakkarai (Country Sugar)",
    blurb: "Golden unrefined cane sugar with natural minerals.",
    image: "assets/products/nattu-sakkarai.jpg",
    highlights: ["Unrefined", "Mineral-Rich"],
    sizes: [
      { label: "500 g", price: 40 },
      { label: "1 kg", price: 80 },
    ],
  },
  {
    name: "Marthandam Honey",
    blurb: "Pure multi-floral honey from the Marthandam hills.",
    image: "assets/products/honey.jpg",
    highlights: ["Pure & Raw", "No Additives"],
    sizes: [
      { label: "500 g", price: 160 },
      { label: "1 kg", price: 320 },
    ],
  },
  {
    name: "Panam Karupatti (Palm Jaggery)",
    blurb: "Unrefined palm jaggery — nature's healthy sweetener.",
    image: "assets/products/karupatti.jpg",
    highlights: ["Unrefined", "Chemical-Free"],
    sizes: [
      { label: "500 g", price: 240 },
      { label: "1 kg", price: 470 },
    ],
  },
];
