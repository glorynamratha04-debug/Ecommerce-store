let total = 0;

function addToCart(product, price){

    let cart = document.getElementById("cart");

    let item = document.createElement("li");

    item.innerText = product + " - ₹" + price;

    cart.appendChild(item);

    total += price;

    document.getElementById("total").innerText =
    "Total: ₹" + total;
}