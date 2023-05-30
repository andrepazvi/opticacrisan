
const addToCartButtons = document.querySelectorAll(".btn-lente");


addToCartButtons.forEach((button) => {
  button.addEventListener("click", addToCart);
});


function addToCart(event) {
  event.preventDefault();

  const card = event.target.closest(".card-boot");
  const title = card.querySelector(".card-title").textContent;
  const price = card.querySelector(".card-text").textContent;

  const product = {
    title,
    price,
  };


  const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];


  cartItems.push(product);

  localStorage.setItem("cartItems", JSON.stringify(cartItems));

  alert("Producto agregado al carrito");

  updateCart();
}

function removeFromCart(index) {
  const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];


  if (index >= 0 && index < cartItems.length) {

    cartItems.splice(index, 1);


    localStorage.setItem("cartItems", JSON.stringify(cartItems));


    updateCart();


    alert("Producto eliminado del carrito");
  }
}


function updateCart() {
  const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  const cartContainer = document.querySelector("#cartContainer");


  cartContainer.innerHTML = "";

  let total = 0;

  cartItems.forEach((item, index) => {
 
    const listItem = document.createElement("li");
    listItem.textContent = `${item.title} - ${item.price}`;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Eliminar";
    deleteButton.addEventListener("click", () => {
      removeFromCart(index);
    });

    listItem.appendChild(deleteButton);
    cartContainer.appendChild(listItem);


    const itemPrice = parseFloat(item.price.replace("$", ""));
    total += itemPrice;
  });


  const totalElement = document.createElement("li");
  totalElement.textContent = `Total: $${total.toFixed(3)}`;
  cartContainer.appendChild(totalElement);
}


window.addEventListener("DOMContentLoaded", () => {
  
  updateCart();
});

