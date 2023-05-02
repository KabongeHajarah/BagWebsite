var sidemenu =document.getElementById("side-menu");
function openmenu() {
    sidemenu.style.right="0";
}
function closemenu() {
    sidemenu.style.right="-200px";
}

//cart functionality
let cartItems = [];
let addToCartBtn = document.getElementsByClassName("Add-2Chart");
addToCartBtn.addEventListener("click", addToCart);

function addToCart() {
    let itemName = document.getElementById("item-name").textContent;
    let itemPrice = document.getElementById("item-price").textContent;
    let itemQuantity = 1;
    let item = { name: itemName, price: itemPrice, quantity: itemQuantity };
    cartItems.push(item);
  }
  
  let cartIcon = document.getElementById("cart");
cartIcon.textContent = cartItems.length;

//to loop through and display
function displayCart() {
    let categoriesN= document.getElementById("categories");
    categoriesN.innerHTML = ""; // clear the container first
    for (let i = 0; i < cartItems.length; i++) {
      let item = cartItems[i];
      let itemDiv = document.createElement("div");
      itemDiv.innerHTML = `
        <h3>${item.name}</h3>
        <p>${item.price}</p>
        <p>${item.quantity}</p>
      `;
      categoriesN.appendChild(itemDiv);


    }
  }
  cartIcon.addEventListener("click", displayCart);

  


