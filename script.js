const menuToggle = document.getElementById("menuToggle");
const mobileNav = document.getElementById("mobileNav");
const cartCountEl = document.getElementById("cartCount");
const cartToast = document.getElementById("cartToast");
const addButtons = document.querySelectorAll(".add-cart-btn");

let cartItems = [];
let toastTimer;

// Mobile menu toggle
if (menuToggle && mobileNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = mobileNav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  mobileNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileNav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

// Show toast feedback
function showToast(message) {
  cartToast.textContent = message;
  cartToast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    cartToast.classList.remove("show");
  }, 2400);
}

// Add to cart counter
addButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const name = btn.dataset.item;
    const price = parseFloat(btn.dataset.price);
    cartItems.push({ name, price });
    cartCountEl.textContent = String(cartItems.length);
    showToast(`Added ${name} ($${price.toFixed(2)}) to your bag`);
  });
});