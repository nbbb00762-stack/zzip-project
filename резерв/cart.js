/**
 * Shopping Cart Logic
 * Manages adding, removing, and displaying cart items using localStorage.
 */

const CART_KEY = 'shoppingCart';

// Get cart from localStorage
function getCart() {
    return JSON.parse(localStorage.getItem(CART_KEY)) || [];
}

// Save cart to localStorage and update UI
function saveCart(cart) {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
    updateCartCounter();
}

// Add a product to the cart
function addToCart(product) {
    const cart = getCart();
    const existingItem = cart.find(item => item.name === product.name);

    if (existingItem) {
        existingItem.quantity = (existingItem.quantity || 1) + 1;
    } else {
        product.quantity = 1;
        cart.push(product);
    }

    saveCart(cart);
    alert(`✓ "${product.name}" себетке қосылды`);
}

// Update the cart counter icon in the header
function updateCartCounter() {
    const cart = getCart();
    const totalItems = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
    const counterElements = document.querySelectorAll('.cart-counter');

    counterElements.forEach(el => {
        if (totalItems > 0) {
            el.textContent = totalItems;
            el.style.display = 'flex';
        } else {
            el.style.display = 'none';
        }
    });
}

// --- Functions for the Cart Page (cart.html) ---

function renderCartPage() {
    const cart = getCart();
    const container = document.getElementById('cart-items-container');
    const summaryEl = document.getElementById('cart-summary');
    const emptyMsgEl = document.getElementById('cart-empty-message');
    const totalPriceEl = document.getElementById('cart-total-price');

    if (!container || !summaryEl || !emptyMsgEl) return;

    if (cart.length === 0) {
        summaryEl.style.display = 'none';
        emptyMsgEl.style.display = 'block';
        return;
    }

    container.innerHTML = '';
    let totalPrice = 0;

    cart.forEach(item => {
        const itemEl = document.createElement('div');
        itemEl.className = 'cart-item';
        itemEl.innerHTML = `
            <img src="${item.img}" alt="${item.name}" class="cart-item-img">
            <div class="cart-item-info">
                <h3>${item.name}</h3>
                <span class="price">${item.price}</span>
            </div>
            <div class="cart-item-actions">
                <span class="quantity">x ${item.quantity}</span>
                <button class="cart-item-remove-btn" onclick="removeFromCart('${item.name}')" title="Өшіру">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
                </button>
            </div>
        `;
        container.appendChild(itemEl);
        totalPrice += (item.priceValue || 0) * item.quantity;
    });

    totalPriceEl.textContent = `₸${totalPrice.toLocaleString('ru-RU')}`;
    summaryEl.style.display = 'block';
    emptyMsgEl.style.display = 'none';
}

function removeFromCart(productName) {
    let cart = getCart();
    cart = cart.filter(item => item.name !== productName);
    saveCart(cart);
    renderCartPage(); // Re-render the cart page
}

// Run on all pages to ensure counter is up-to-date
document.addEventListener('DOMContentLoaded', updateCartCounter);