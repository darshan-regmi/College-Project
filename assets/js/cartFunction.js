// Add to Cart Functionality
function addToCart(productId, productName, productPrice) {
  // Get existing cart data from localStorage
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  // Add new product to the cart
  cart.push({
    id: productId,
    name: productName,
    price: productPrice,
  });

  // Save updated cart back to localStorage
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${productName} has been added to the cart!`);
}
