let cart = {};

if (localStorage.getItem("cart")) {
    cart = JSON.parse(localStorage.getItem("cart"));
    displayCartItems();
    updateCartTotal();
}


function addToCart(item) {
    var parentElement = item.parentNode;
    var itemName = parentElement.children[0].textContent;
    var itemPrice = parentElement.children[1].textContent;
    if (cart[itemName]) {
        alert(`${itemName} is already in the cart!`);
    } else {
        cart[itemName] = { price: itemPrice, quantity: 1 };
        displayCartItems();
        updateCartTotal();
        localStorage.setItem("cart", JSON.stringify(cart));
        alert(`${itemName} is added to the cart!`);
    }
}

function displayCartItems() {
    const cartItemsContainer = document.querySelector(".cart-items");
    cartItemsContainer.innerHTML = "";

    for (let itemName in cart) {
        const item = cart[itemName];
        console.log(item);
        const cartRow = document.createElement("div");
        cartRow.classList.add("cart-row");
        const cartRowHTML = `
        <div class="cart-item cart-column">
          <span class="cart-item-title">${itemName}</span>
        </div>
        <span class="cart-price cart-column">${(item.price)}</span>
        <div class="cart-quantity cart-column">
          <input class="cart-quantity-input" type="number" min = 1 value="${
            item.quantity
          }" data-item-name="${itemName}">
          <button onclick="removeFromCart('${itemName}')" class="btn btn-danger">REMOVE</button>
        </div>
      `;
        cartRow.innerHTML = cartRowHTML;
        cartItemsContainer.append(cartRow);
    }
    let quantityInputs = document.querySelectorAll(".cart-quantity-input");
    quantityInputs.forEach((input) => {
        input.addEventListener("change", (event) => {
            let newQuantity = parseInt(event.target.value);
            var itemName = event.target.getAttribute("data-item-name");
            updateQuantity(itemName, newQuantity);
        });
    });
}

function removeFromCart(itemName) {
    delete cart[itemName];
    displayCartItems();
    updateCartTotal();
    localStorage.setItem("cart", JSON.stringify(cart));
}

function updateCartTotal() {
    let total = 0;

    for (let itemName in cart) {
        price = (cart[itemName].price).substring(1);
        total += parseFloat(price) * cart[itemName].quantity;
    }
    document.querySelector(".cart-total-price").innerText =
        "$" + total.toFixed(2);
}

function clearCart() {
    cart = {};
    localStorage.removeItem("cart");
    displayCartItems();
    updateCartTotal();
}


function updateQuantity(itemName, quantity) {
    if (cart[itemName]) {
        cart[itemName].quantity = quantity;
        updateCartTotal();
        localStorage.setItem("cart", JSON.stringify(cart));
    }
}
let quantityInputs = document.querySelectorAll(".cart-quantity-input");
quantityInputs.forEach((input) => {
    input.addEventListener("change", (event) => {
        let newQuantity = parseInt(event.target.value);
        let itemName = event.target.getAttribute("data-item-name");
        updateQuantity(itemName, newQuantity);
    });
});

function updateQuantity(itemName, quantity) {
    if (cart[itemName]) {
        cart[itemName].quantity = quantity;
        updateCartTotal();
        localStorage.setItem("cart", JSON.stringify(cart));
    }
}

function purchaseProducts() {
    if (Object.keys(cart).length === 0) {
        alert("Your cart is empty!");
    } else {
        localStorage.setItem("cart", JSON.stringify(cart));

        alert('Time for Checkout!');

        location.replace("payment.html");
    }
}


window.onload = function() {
    let name = localStorage.getItem('name');
    
};


function openForm1() {
    let inputs = document.querySelectorAll('input.requiredcard')
    for (const input of inputs) {
        input.removeAttribute("required")
    }
    document.getElementById('forms').style.display = "block"
    document.getElementById('cardcredit').setAttribute("hidden", "hidden")
    document.getElementById('cash').removeAttribute("hidden")
};

function openForm2() {
    let inputs = document.querySelectorAll('input.requiredcard')
    for (const input of inputs) {
        input.setAttribute("required", '')
    }
    document.getElementById('forms').style.display = "block"
    document.getElementById('cardcredit').removeAttribute("hidden")
    document.getElementById('cash').setAttribute("hidden", "hidden")
};

function back() {
    document.getElementById('forms').style.display = "none"
};


function checkNumb(event) {
    var asciikey = event.keyCode ? event.keyCode : event.charCode; //: event.which ? event.which
    if (asciikey === 13 || (asciikey >= 48 && asciikey <= 57)) {
        return true;
    } else {
        alert('Error!\nPlease input only numbers in that field!')
        return false;
    }
    
};

function formCheck() {
    let valid = true;
    if (valid) {
        location.replace("receipt.html")
    }
}





function updateTotalWithTip() {
    let totalElement = document.querySelector('.cart-total-price');
    let total = parseFloat(totalElement.textContent.substring(1));

    let tipElements = document.querySelectorAll('.tip');
    let totalTip = 0;
    tipElements.forEach((tipElement) => {
        let tip = parseFloat(tipElement.value);
        if (!isNaN(tip) && tip >= 0) {
            totalTip += tip;
        }
    });

    total += totalTip;
    localStorage.setItem('tipamount', totalTip);

    totalElement.textContent = `$${total.toFixed(2)}`;
}


function addTipToTotal() {
    let totalElement = document.querySelector('.cart-total-price');
    let total = parseFloat(totalElement.textContent.substring(1));
    let tip = parseFloat(localStorage.getItem('tipamount'));
    total += tip;
    totalElement.textContent = `$${total.toFixed(2)}`;
}
