/* Brindhavan Naturals — rendering & WhatsApp ordering */

const RUPEE = "₹";

function waLink(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function orderMessage(product, size) {
  return (
    `Hi Brindhavan Naturals, I'd like to order:\n` +
    `${product.name} - ${size.label} (${RUPEE}${size.price})\n` +
    `Name:\nAddress:`
  );
}

const GENERIC_MESSAGE =
  "Hi Brindhavan Naturals! I'd like to place an order. Please share the details.";

function productCard(product, eager) {
  const card = document.createElement("article");
  card.className = "card";

  const sizeButtons = product.sizes
    .map(
      (s, i) =>
        `<button type="button" class="size-pill${i === 0 ? " active" : ""}" data-index="${i}">
           ${s.label} — ${RUPEE}${s.price}
         </button>`
    )
    .join("");

  card.innerHTML = `
    <div class="card-img-wrap">
      <img src="${product.image}" alt="${product.name}" loading="${eager ? "eager" : "lazy"}" />
    </div>
    <div class="card-body">
      <h3>${product.name}</h3>
      <p class="card-blurb">${product.blurb}</p>
      <div class="size-picker" role="group" aria-label="Choose size">${sizeButtons}</div>
      <a class="btn btn-whatsapp card-order" href="#" target="_blank" rel="noopener">
        <span class="wa-icon" aria-hidden="true"></span>Order on WhatsApp
      </a>
    </div>`;

  const orderBtn = card.querySelector(".card-order");
  const pills = card.querySelectorAll(".size-pill");

  function selectSize(index) {
    pills.forEach((p, i) => p.classList.toggle("active", i === index));
    orderBtn.href = waLink(orderMessage(product, product.sizes[index]));
  }

  pills.forEach((pill) =>
    pill.addEventListener("click", () => selectSize(Number(pill.dataset.index)))
  );
  selectSize(0);

  return card;
}

function renderGrid(id, products, eager) {
  const grid = document.getElementById(id);
  products.forEach((p) => grid.appendChild(productCard(p, eager)));
}

renderGrid("oils-grid", OILS, true);
renderGrid("provisions-grid", PROVISIONS, false);

/* Generic WhatsApp CTAs (header, hero, contact) */
document.querySelectorAll("[data-wa-generic]").forEach((a) => {
  a.href = waLink(GENERIC_MESSAGE);
});

/* Footer year */
document.getElementById("year").textContent = new Date().getFullYear();

/* ---------- Scroll-reveal animations ---------- */
/* Tag elements that should animate in as they enter the viewport. */
const REVEAL_DIRECTIONS = ["left", "up", "right"];

document.querySelectorAll(".section-title, .section-sub, .delivery-note").forEach((el) => {
  el.classList.add("reveal");
});

document.querySelectorAll(".trust-item").forEach((el, i) => {
  el.classList.add("reveal");
  el.dataset.reveal = "zoom";
  el.style.transitionDelay = `${i * 90}ms`;
});

document.querySelectorAll(".card-grid").forEach((grid) => {
  [...grid.children].forEach((card, i) => {
    card.classList.add("reveal");
    card.dataset.reveal = REVEAL_DIRECTIONS[i % REVEAL_DIRECTIONS.length];
    card.style.transitionDelay = `${(i % 3) * 120}ms`;
  });
});

document.querySelectorAll(".about-inner p").forEach((el, i) => {
  el.classList.add("reveal");
  el.style.transitionDelay = `${i * 100}ms`;
});

document.querySelectorAll(".process-step").forEach((el, i) => {
  el.classList.add("reveal");
  el.dataset.reveal = "zoom";
  el.style.transitionDelay = `${i * 150}ms`;
});

document.querySelectorAll(".contact-info").forEach((el) => {
  el.classList.add("reveal");
  el.dataset.reveal = "left";
});
document.querySelectorAll(".contact-map").forEach((el) => {
  el.classList.add("reveal");
  el.dataset.reveal = "right";
});

if (!("IntersectionObserver" in window)) {
  document.querySelectorAll(".reveal").forEach((el) => el.classList.add("in-view"));
}

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
);

document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));
