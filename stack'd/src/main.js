// Smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Dynamic year in footer (if needed)
document.addEventListener("DOMContentLoaded", () => {
  const year = new Date().getFullYear();
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = year;
});

document.getElementById("careerForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const position = document.getElementById("position");
  const message = document.getElementById("message");
  const success = document.getElementById("careerSuccess");
  
  if (name.value && email.value && position.value && message.value) {
    success.classList.remove("d-none");
    this.reset();
    setTimeout(() => success.classList.add("d-none"), 5000);
  }
});
const foodItems = [
  {
    name: "Classic Stack",
    image: "./images/burger1.jpg",
    desc: "Juicy double patty with cheddar, lettuce and our signature sauce.",
    price: 8.99
  },
  {
    name: "Spicy Inferno",
    image: "./images/burger2.jpg",
    desc: "Triple beef stack with jalapeños, chipotle mayo and pepper jack.",
    price: 10.49
  },
  {
    name: "Veggie Delight",
    image: "./images/burger3.jpg",
    desc: "Grilled portobello mushroom, avocado, tomato and basil aioli.",
    price: 7.99
  },
  {
    name: "BBQ Beast",
    image: "./images/burger4.jpg",
    desc: "Smoky BBQ ribs, crispy onions and pickles in a brioche bun.",
    price: 11.25
  },
  {
    name: "Cheesy Crave",
    image: "./images/burger5.jpg",
    desc: "Melted cheese layers, double meat and garlic butter drizzle.",
    price: 9.75
  },
  {
    name: "Stack’d Chicken",
    image: "./images/burger6.png",
    desc: "Buttermilk fried chicken, tangy slaw, and spicy honey drizzle.",
    price: 8.50
  },
  {
    name: "Breakfast Stack",
    image: "./images/burger7.jpg",
    desc: "Bacon, egg, cheese, hashbrown – all-day breakfast style!",
    price: 7.49
  },
  {
    name: "Truffle Melt",
    image: "./images/burger8.jpg",
    desc: "Beef patty with truffle mayo, caramelized onions and gruyère.",
    price: 12.25
  },
  {
    name: "Korean Kick",
    image: "./images/burger9.webp",
    desc: "Kimchi, gochujang glaze, sesame pickles and crispy beef.",
    price: 10.75
  }
];


const menuContainer = document.getElementById("menuCards");

foodItems.forEach(item => {
  const card = document.createElement("div");
  card.className = "col-12 col-md-6 col-lg-4 d-flex";
  card.innerHTML = `
    <div class="menu-card w-100 d-flex flex-column justify-content-between">
      <img src="${item.image}" class="img-fluid rounded mb-3" alt="${item.name}">
      <h5 class="fw-bold">${item.name}</h5>
      <p>${item.desc}</p>
      <p class="price-tag text-success fw-bold mb-2">$${item.price.toFixed(2)}</p>
      <button class="btn btn-primary mt-auto add-to-cart">Add to Cart</button>
    </div>
  `;
  card.querySelector('.add-to-cart').addEventListener('click', () => addToCart(item));
  menuContainer.appendChild(card);
});

const cart = JSON.parse(localStorage.getItem("stackd-cart")) || [];
function addToCart(item) {
  const existingItem = cart.find(i => i.name === item.name);
  if (existingItem) {
    existingItem.qty = (existingItem.qty || 1) + 1;
  } else {
    cart.push({ ...item, qty: 1 });
  }
  localStorage.setItem("stackd-cart", JSON.stringify(cart));
  renderCart();
}

function renderCart() {
  const cartItemsContainer = document.getElementById("cartItems");
  const cartTotalElement = document.getElementById("cartTotal");

  cartItemsContainer.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    const qty = item.qty || 1;
    total += item.price * qty;

    const itemDiv = document.createElement("div");
    itemDiv.classList.add("d-flex", "justify-content-between", "border-bottom", "py-2");
    itemDiv.innerHTML = `
      <span>${item.name} x${qty}</span>
      <span>$${(item.price * qty).toFixed(2)}</span>
    `;

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.classList.add("btn", "btn-danger", "btn-sm", "remove-item");
    removeButton.addEventListener("click", () => {
      cart.splice(index, 1);
      localStorage.setItem("stackd-cart", JSON.stringify(cart));
      renderCart();
    });

    itemDiv.appendChild(removeButton);
    cartItemsContainer.appendChild(itemDiv);
  });

  cartTotalElement.textContent = total.toFixed(2);
}






