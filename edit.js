// window.onload = function() {

//     document.getElementById('menus').contentEditable = true

// }
let priceChange = document.querySelectorAll('.product-price')
function removeSelected() {
    const checkedItems = document.querySelectorAll('.checkedItems')
    checkedItems.forEach(item => {

        if (item.checked) {
            var card = item.parentElement
            removeItem(card)
        }

    })
};
function removeItem(divToRemove) {
    divToRemove.remove()
  }
  function addItems(){
    const mainItemsContainer = document.querySelector("#food-contain");
    let productTitle = document.getElementById('productName').value
    let foodPrice = document.getElementById('product-price').value
    let productImg = document.getElementById('product-img').value
    let newProdut = document.createElement('div')
    newProdut.classList.add('item')
    newProdut.classList.add('product-item')
    const newItem = `
    <img id ="productimg" width="200" src="${productImg}" alt="${productTitle}">
    <div class="products-item-details">
      <h3 class="product-title">${productTitle}</h3>
        <p class="product-price">${foodPrice}</p>
        <button onclick="addToCart(this)" class="btn prime-btn product-btn">Add To Cart</button>
    </div>`
    newProdut.innerHTML = newItem;
    mainItemsContainer.appendChild(newProdut)

    clearInputs()
  }
function clearInputs(){
    let clearAllInputTags = document.querySelectorAll('input');
    clearAllInputTags.forEach(eachInput => eachInput.value = '');
  }
  
  function displayItems() {
      let sessionMenu = sessionStorage.getItem('Original-Menu')
      var displayMenu = document.getElementById("display-menu")
      console.log(displayMenu)
      displayMenu.innerHTML = sessionMenu
  
  
}
function save() {
    var testdiv = document.getElementById('menus').outerHTML
    alert(testdiv)
    localStorage.setItem('Original-Menu', testdiv)
    console.log(localStorage.getItem('Original-Menu'))
}