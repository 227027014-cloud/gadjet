
// GADGET ZONE WEBSITE

// HOME PAGE NAVIGATION

function goToProducts() {
    window.location.href = "products.html";
}

function goToCart() {
    window.location.href = "cart.html";
}

function goToLogin() {
    window.location.href = "login.html";
}

// WISHLIST STORAGE

function addToWishlist(product) {

    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    let existing = wishlist.find(item => item.id === product.id);

    if (existing) {
        alert("This product is already in your Wishlist!");
        return;
    }

    wishlist.push(product);

    localStorage.setItem("wishlist", JSON.stringify(wishlist));

    alert("Product added to Wishlist successfully!");
}


// CART STORAGE

function addToCart(product) {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let existing = cart.find(item => item.id === product.id);

    if (existing) {
        existing.quantity++;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    alert("Product added to Cart successfully!");
}




// CONTACT MESSAGE

function sendMessage(event) {

    event.preventDefault();

    alert("Thank you! Your message has been submitted successfully.");

    event.target.reset();

}


// LOGIN

function loginUser(event) {

    event.preventDefault();

    alert("Login functionality will be connected in the next step.");

}


// REGISTER

function registerUser(event) {

    event.preventDefault();

    alert("Registration functionality will be connected in the next step.");

}


// ORDER CONFIRMATION

function confirmOrder() {

    alert("Your order has been placed successfully!");

    localStorage.removeItem("cart");

    window.location.href = "success.html";

}