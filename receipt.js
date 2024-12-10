function clearCart() {
    cart = {};
    localStorage.removeItem("cart");
    displayCartItems();
    updateCartTotal();
}
function returnHome() {
    location.replace("menu.html");
    localStorage.removeItem('totalPrice');
    localStorage.removeItem('cart');
    localStorage.removeItem('tipamount');
}
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (40 - 20 + 1)) + 20 + " minutes.";
}