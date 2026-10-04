const price = {
  idli: 30,
  vada: 40,
  coffee: 25,
  dosa: 80
};

const qty = {
  idli: 0,
  vada: 0,
  coffee: 0,
  dosa: 0
};

const names = {
  idli: "Idli",
  vada: "Medu Vada",
  coffee: "Filter Coffee",
  dosa: "Masala Dosa"
};

function changeQty(item, value) {
  qty[item] += value;

  if (qty[item] < 0) qty[item] = 0;

  document.getElementById(item + "-qty").innerText = qty[item];

  updateTotal();
}

function updateTotal() {
  let subtotal = 0;
  let html = "";

  for (let item in qty) {
    if (qty[item] > 0) {
      let amount = qty[item] * price[item];
      subtotal += amount;
      html += `<p>${names[item]} × ${qty[item]} <span style="float:right">₹${amount}</span></p>`;
    }
  }

  if (html === "") {
    html = "<p>No items added.</p>";
  }

  document.getElementById("order-items").innerHTML = html;

  let gst = Math.round(subtotal * 0.05);
  let delivery = subtotal > 0 ? 20 : 0;
  let total = subtotal + gst + delivery;

  document.getElementById("gst").innerText = "₹" + gst;
  document.getElementById("delivery").innerText = "₹" + delivery;
  document.getElementById("grand-total").innerText = "₹" + total;
}

function placeOrder() {
  if (qty.idli + qty.vada + qty.coffee + qty.dosa === 0) {
    alert("Please add items first.");
    return;
  }

  alert("Order placed! Total: " + document.getElementById("grand-total").innerText);
  window.open("https://wa.me/9028471911?text="+message,"_blank");
}