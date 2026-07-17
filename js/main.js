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
