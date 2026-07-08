let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price, image) {

    let found = cart.find(item => item.name === name);

    if (found) {
        found.qty++;
    } else {
        cart.push({
            name: name,
            price: price,
            image: image,
            qty: 1
        });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    updateCart();
}

function updateCart() {

    let total = 0;
    let items = 0;

    cart.forEach(item => {
        total += item.price * item.qty;
        items += item.qty;
    });

    // Home/Grocery page Cart Count
    if (document.getElementById("cart")) {
        document.getElementById("cart").innerText = items;
    }

    // Total Price
    if (document.getElementById("total")) {
        document.getElementById("total").innerText = "₹" + total;
    }
    let checkoutTotal = document.getElementById("checkoutTotal");

if (checkoutTotal) {
    checkoutTotal.innerText = "₹" + total;
}

    // Cart Page
    if (document.getElementById("cartItems")) {

        let html = "";

        cart.forEach(item => {

            html += `
            <div class="card">

                <img src="${item.image}" style="width:120px;height:120px;object-fit:contain;">

                <h3>${item.name}</h3>

                <p>Price : ₹${item.price}</p>

                <button onclick="decrease('${item.name}')">-</button>

                <span style="padding:10px">${item.qty}</span>

                <button onclick="increase('${item.name}')">+</button>

                <h3>Total : ₹${item.price * item.qty}</h3>

            </div>
            `;

        });

        document.getElementById("cartItems").innerHTML = html;
    }
}

function increase(name) {

    let item = cart.find(i => i.name === name);

    if (item) {
        item.qty++;
        localStorage.setItem("cart", JSON.stringify(cart));
        updateCart();
    }
}

function decrease(name) {

    let item = cart.find(i => i.name === name);

    if (item) {

        item.qty--;

        if (item.qty <= 0) {
            cart = cart.filter(i => i.name !== name);
        }

        localStorage.setItem("cart", JSON.stringify(cart));
        updateCart();
    }
}

updateCart();
function loginUser(){

let name=document.getElementById("name").value;

let mobile=document.getElementById("mobile").value;

if(name===""||mobile===""){

alert("Please Fill All Details");

return;

}

localStorage.setItem("username",name);

localStorage.setItem("mobile",mobile);

alert("Login Successful");

window.location="index.html";

}
function placeOrder(){

let name=document.getElementById("customerName").value;
let mobile=document.getElementById("customerMobile").value;
let address=document.getElementById("customerAddress").value;

if(name===""||mobile===""||address===""){
alert("Please fill all details");
return;
}

alert("🎉 Order Placed Successfully!");

localStorage.removeItem("cart");
cart=[];

window.location="index.html";

}