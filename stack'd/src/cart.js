let checkoutCart = JSON.parse(localStorage.getItem("stackd-cart")) || [];

function updateCheckoutCart() {
  const list = document.getElementById("checkout-cart");
  const totalEl = document.getElementById("checkout-total");
  list.innerHTML = "";
  let total = 0;

  checkoutCart.forEach((item, index) => {
    const qty = item.qty || 1;
    const li = document.createElement("li");
    li.className =
      "list-group-item d-flex justify-content-between align-items-center";

    const infoDiv = document.createElement("div");
    infoDiv.innerHTML = `
        <strong>${item.name}</strong><br />
        <small>$${item.price.toFixed(2)} each</small>
      `;

    const controlDiv = document.createElement("div");
    controlDiv.className = "d-flex align-items-center gap-2";

    const input = document.createElement("input");
    input.type = "number";
    input.min = "1";
    input.value = qty;
    input.className = "form-control form-control-sm";
    input.style.width = "60px";
    input.addEventListener("change", (e) => {
      const newQty = parseInt(e.target.value);
      if (newQty >= 1) {
        checkoutCart[index].qty = newQty;
        localStorage.setItem("stackd-cart", JSON.stringify(checkoutCart));
        updateCheckoutCart();
      }
    });

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "✕";
    removeBtn.className = "btn btn-sm btn-outline-danger";
    removeBtn.addEventListener("click", () => {
      checkoutCart.splice(index, 1);
      localStorage.setItem("stackd-cart", JSON.stringify(checkoutCart));
      updateCheckoutCart();
    });

    controlDiv.appendChild(input);
    controlDiv.appendChild(removeBtn);

    li.appendChild(infoDiv);
    li.appendChild(controlDiv);
    list.appendChild(li);

    total += item.price * qty;
  });

  totalEl.textContent = total.toFixed(2);
}

document.getElementById("checkout-form").addEventListener("submit", (e) => {
  e.preventDefault();

  const order = {
    name: document.getElementById("name").value,
    address: document.getElementById("address").value,
    phone: document.getElementById("phone").value,
    items: checkoutCart,
    total: document.getElementById("checkout-total").textContent,
    timestamp: new Date().toISOString(),
  };

  console.log("Order submitted:", order);

  localStorage.removeItem("stackd-cart");

  const modal = new bootstrap.Modal(document.getElementById("orderModal"));
  modal.show();
  setTimeout(() => {
    window.location.href = "index.html";
  }, 5000);
});

updateCheckoutCart();
