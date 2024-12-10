function signUp(){
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let pass = document.getElementById("pass").value;

    if (email == "" || pass == "") {
        alert("Please fill the forms");
    } 
else{
        localStorage.setItem('name', name); 
        localStorage.setItem(email, pass);
        alert("Account Created");
        location.replace("login.html");
    }
}

function login(){
    let email = document.getElementById("email").value;
    let pass = document.getElementById("pass").value;

    if (localStorage.getItem(email)) {
        if (pass == localStorage.getItem(email)) {
            location.replace("menu.html");
            alert("Login Successful");
        } 
else if (pass == "") {
            alert("Login Failed please enter your password");
        }
    } 
else if (email == "") {
        alert("Login Failed please enter your email");
    } 
else if (localStorage.getItem(email) == null || pass == "") {
        alert("Login Failed Unknown credential combination");
    }
}
function customerLogout(){
    localStorage.clear()
    localStorage.setItem('Original-Menu', orgMenu)
    
    location.replace('login.html')
}
const orgMenu = `
<div id ="menus">
    <div class="barky-food">
    <div id="food-contain">
        <div  class="item product-item">
            <img id ="product-img" width="200" src="BAKERY-STYLE-CHOCOLATE-CHIP-COOKIES-9-637x637-1-500x500.jpg" alt="">
            <input type="checkbox" id="checkedItem" class = "checkedItems" >
            <div class="products-item-details">
                <h3 class="product-title">Chocolate chip cookies</h3>
                <p class="product-price">$29</p>
                <button onclick="addToCart(this)" class="btn prime-btn product-btn">Add To Cart</button>
            </div>
        </div>
        <div  class="item product-item">
            <img id ="product-img" width="200" src="Cherry-Pie.jpg" alt="">
            <input type="checkbox" id="checkedItem" class = "checkedItems" >
            <div class="products-item-details">
                <h3 class="product-title">Cherry Pie</h3>
                <p class="product-price">$30</p>
                <button onclick="addToCart(this)" class="btn prime-btn product-btn">Add To Cart</button>
            </div>
        </div>
        <div  class="item product-item">
            <img id ="product-img" width="200" src="chocolate cake" alt="">
            <input type="checkbox" id="checkedItem" class = "checkedItems" >
            <div class="products-item-details">
            <h3 class="product-title">chocolate cake</h3>
                <p class="product-price">$50</p>
                <button onclick="addToCart(this)" class="btn prime-btn product-btn">Add To Cart</button>
            </div>
        </div>
        <div  class="item product-item">
            <img id ="product-img" width="200" src="ciabatta-25-1200.jpg" alt="">
            <input type="checkbox" id="checkedItem" class = "checkedItems" >
            <div class="products-item-details">
                <h3 class="product-title">ciabatta</h3>
                <p class="product-price">$35.00</p>
                <button onclick="addToCart(this)" class="btn prime-btn product-btn">Add To Cart</button>
            </div>
        </div>
        <div  class="item product-item">
            <img id ="product-img" width="200" src="Classic-Apple-Pie.jpg" alt="">
            <input type="checkbox" id="checkedItem" class = "checkedItems" >
            <div class="products-item-details">
            <h3 class="product-title">Apple pie</h3>
                <p class="product-price">$30</p>
                <button onclick="addToCart(this)" class="btn prime-btn product-btn">Add To Cart</button>
            </div>
        </div> 
        <div  class="item product-item">
            <img id ="product-img" width="200" src="coffee-cake.jpg" alt="">
            <input type="checkbox" id="checkedItem" class = "checkedItems" >
            <div class="products-item-details">
            <h3 class="product-title">Donuts</h3>
                <p class="product-price">$50</p>
                <button onclick="addToCart(this)" class="btn prime-btn product-btn">Add To Cart</button>
            </div>
        </div> 
        <div  class="item product-item">
            <img id ="product-img" width="200" src="croissant.jpg" alt="">
            <input type="checkbox" id="checkedItem" class = "checkedItems" >
            <div class="products-item-details">
            <h3 class="product-title">croissant</h3>
                <p class="product-price">$10.99</p>
                <button onclick="addToCart(this)" class="btn prime-btn product-btn">Add To Cart</button>
            </div>
        </div> 
        <div  class="item product-item">
            <img id ="product-img" width="200" src="dinner-rolls.jpg" alt="">
            <input type="checkbox" id="checkedItem" class = "checkedItems" >
            <div class="products-item-details">
            <h3 class="product-title">dinner rolls</h3>
                <p class="product-price">$10.99</p>
                <button onclick="addToCart(this)" class="btn prime-btn product-btn">Add To Cart</button>
            </div>
        </div> 
        <div  class="item product-item">
            <img id ="product-img" width="200" src="gingerbread-cookies.jpg" alt="">
            <input type="checkbox" id="checkedItem" class = "checkedItems" >
            <div class="products-item-details">
            <h3 class="product-title">gingerbread cookies</h3>
                <p class="product-price">$10.99</p>
                <button onclick="addToCart(this)" class="btn prime-btn product-btn">Add To Cart</button>
            </div>
        </div> 
        <div  class="item product-item">
            <img id ="product-img" width="200" src="keylime-pie.jpg" alt="">
            <input type="checkbox" id="checkedItem" class = "checkedItems" >
            <div class="products-item-details">
            <h3 class="product-title">keyline pie</h3>
                <p class="product-price">$10.99</p>
                <button onclick="addToCart(this)" class="btn prime-btn product-btn">Add To Cart</button>
            </div>
        </div> 
        <div  class="item product-item">
            <img id ="product-img" width="200" src="Lemon-Meringue-Pie-Featured.png" alt="">
            <input type="checkbox" id="checkedItem" class = "checkedItems" >
            <div class="products-item-details">
            <h3 class="product-title">Lemon Meringue Pie</h3>
                <p class="product-price">$10.99</p>
                <button onclick="addToCart(this)" class="btn prime-btn product-btn">Add To Cart</button>
            </div>
        </div> 
        <div  class="item product-item">
            <img id ="product-img" width="200" src="lemon-pound-cake.jpg" alt="">
            <input type="checkbox" id="checkedItem" class = "checkedItems" >
            <div class="products-item-details">
            <h3 class="product-title">lemon pound cake</h3>
            <p class="product-price">$10.99</p>
                
                <button onclick="addToCart(this)" class="btn prime-btn product-btn">Add To Cart</button>
            </div>
        </div> 
        <div  class="item product-item">
            <img id ="product-img" width="200" src="Lemon-Sugar-Cookies-3.25.jpg" alt="">
            <input type="checkbox" id="checkedItem" class = "checkedItems" >
            <div class="products-item-details">
            <h3 class="product-title">lemon sugar cookies</h3>
            <p class="product-price">$10.99</p>
                
                <button onclick="addToCart(this)" class="btn prime-btn product-btn">Add To Cart</button>
            </div>
        </div> 
        <div  class="item product-item">
            <img id ="product-img" width="200" src="Oatmeal-Cookies.jpg" alt="">
            <input type="checkbox" id="checkedItem" class = "checkedItems" >
            <div class="products-item-details">
            <h3 class="product-title">Oatmeal Cookies</h3>
            <p class="product-price">$10.99</p>
                
                <button onclick="addToCart(this)" class="btn prime-btn product-btn">Add To Cart</button>
            </div>
        </div> 
        <div  class="item product-item">
            <img id ="product-img" width="200" src="old-fashioned-pumpkin-pie-1200x1200-1.jpg" alt="">
            <input type="checkbox" id="checkedItem" class = "checkedItems" >
            <div class="products-item-details">
            <h3 class="product-title">pumpkin pie</h3>
            <p class="product-price">$10.99</p>
                
                <button onclick="addToCart(this)" class="btn prime-btn product-btn">Add To Cart</button>
            </div>
        </div> 
        <div  class="item product-item">
            <img id ="product-img" width="200" src="pecan-pie.jpg" alt="">
            <input type="checkbox" id="checkedItem" class = "checkedItems" >
            <div class="products-item-details">
            <h3 class="product-title">pecan pie</h3>
            <p class="product-price">$10.99</p>
                
                <button onclick="addToCart(this)" class="btn prime-btn product-btn">Add To Cart</button>
            </div>
        </div> 
        <div  class="item product-item">
            <img id ="product-img" width="200" src="rosemaryfocacciawhole_alexandraskitchen.jpg" alt="">
            <input type="checkbox" id="checkedItem" class = "checkedItems" >
            <div class="products-item-details">
            <h3 class="product-title">lemon pound cake</h3>
            <p class="product-price">$10.99</p>
                
                <button onclick="addToCart(this)" class="btn prime-btn product-btn">Add To Cart</button>
            </div>
        </div> 
        <div  class="item product-item">
            <img id ="product-img" width="200" src="soft-pretzels.png" alt="">
            <input type="checkbox" id="checkedItem" class = "checkedItems" >
            <div class="products-item-details">
            <h3 class="product-title">soft pretzel</h3>
            <p class="product-price">$5.99</p>
                
                <button onclick="addToCart(this)" class="btn prime-btn product-btn">Add To Cart</button>
            </div>
        </div> 
        <div  class="item product-item">
            <img id ="product-img" width="200" src="Snickerdoodle.jpg" alt="">
            <input type="checkbox" id="checkedItem" class = "checkedItems" >
            <div class="products-item-details">
            <h3 class="product-title">Snickerdoodle cookie</h3>
            <p class="product-price">$10.99</p>
                
                <button onclick="addToCart(this)" class="btn prime-btn product-btn">Add To Cart</button>
            </div>
        </div> 
        <div  class="item product-item">
            <img id ="product-img" width="200" src="sourdough-for-beginners-25-scaled.jpg" alt="">
            <input type="checkbox" id="checkedItem" class = "checkedItems" >
            <div class="products-item-details">
            <h3 class="product-title">sour dough bread</h3>
            <p class="product-price">$10.99</p>
                
                <button onclick="addToCart(this)" class="btn prime-btn product-btn">Add To Cart</button>
            </div>
        </div> 
    </div>
    </div>`
let firstLogin = false
function staffLogin() {

    let staffId = document.getElementById('staffU').value;
    let staffPass = document.getElementById('Staffpass').value;

    if (staffId === '142658' && staffPass === 'P@ssW)rD200') {
        localStorage.setItem('manager', true)
        alert('You are now in manager mode.')
        if (firstLogin === false) {
            localStorage.setItem('Original-Menu', orgMenu)
        }
        location.replace('edit.html')
    } 
else{
        alert('Login failed')
    }
}
function staffLogout(){
    sessionStorage.setItem('manager', false)
    location.replace('stafflogin.html')   
}

