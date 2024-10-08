let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Function to add an item to the cart
function addToCart(product) {
    cart.push(product);
    alert(`${product.name} has been added to your cart!`);
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Function to display cart items in the cart page
function displayCartItems() {
    const cartItemsContainer = document.getElementById('cartItems');
    cartItemsContainer.innerHTML = ''; // Clear previous content

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
    } else {
        cart.forEach((item, index) => {
            const itemElement = document.createElement('div');
            itemElement.className = 'cart-item';
            itemElement.innerHTML = `
                <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                <div class="cart-item-details">
                    <h3>${item.name}</h3>
                    <p>Price: $${item.price}</p>
                    <button class="remove-from-cart" onclick="removeFromCart(${index})">Remove</button>
                </div>
            `;
            cartItemsContainer.appendChild(itemElement);
        });
    }
}

// Call this function on page load to display the items
window.onload = displayCartItems;

// Function to remove an item from the cart
function removeFromCart(index) {
    // Remove the item at the specified index
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart)); // Update local storage
    displayCartItems(); // Refresh cart display
}

// Function to proceed to buy now (implement as needed)
function buyNow() {
    alert(`Proceeding to payment.`);
    // Implement the buy now functionality here, e.g., redirect to a payment page
}

const images = document.querySelectorAll('.hero-image');
let currentIndex = 0;

function rotateImages() {
    images[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].classList.add('active');
}

// Rotate images every 10 seconds
setInterval(rotateImages, 10000);


