// Enable/disable checkout button based on location
function checkLocationAndToggleCheckout() {
  const location = document.getElementById('cartLocation')?.value.trim();
  const checkoutBtn = document.querySelector('.cart-summary .btn.btn-primary');
  if (checkoutBtn) {
    checkoutBtn.disabled = !location;
    checkoutBtn.style.opacity = location ? '1' : '0.6';
    checkoutBtn.style.cursor = location ? 'pointer' : 'not-allowed';
  }
}

// On DOMContentLoaded, check location and set button state
document.addEventListener('DOMContentLoaded', () => {
  const savedLocation = localStorage.getItem('cartLocation');
  if (savedLocation && document.getElementById('cartLocation')) {
    document.getElementById('cartLocation').value = savedLocation;
  }
  checkLocationAndToggleCheckout();
  if (document.getElementById('cartLocation')) {
    document.getElementById('cartLocation').addEventListener('input', checkLocationAndToggleCheckout);
  }
});
// Save and show location for cart
function saveCartLocation() {
  const location = document.getElementById('cartLocation').value.trim();
  if (location) {
    localStorage.setItem('cartLocation', location);
    document.getElementById('cartLocationSaved').style.display = 'block';
    setTimeout(() => {
      document.getElementById('cartLocationSaved').style.display = 'none';
    }, 2000);
  }
}

// Load location if saved
document.addEventListener('DOMContentLoaded', () => {
  const savedLocation = localStorage.getItem('cartLocation');
  if (savedLocation && document.getElementById('cartLocation')) {
    document.getElementById('cartLocation').value = savedLocation;
  }
});
// Sample products data with local slipper images
const products = [
  {
    id: 1,
    name: "Premium Comfort Slippers",
    category: "premium",
    price: 600,
    originalPrice: 999,
    image: "pic/WhatsApp Image 2026-03-06 at 3.05.35 PM.jpeg",
    description: "Ultra-soft premium comfort slippers",
    rating: 4.8,
    reviews: 234,
  },
  {
    id: 2,
    name: "Cozy Thermal Slippers",
    category: "premium",
    price: 600,
    originalPrice: 999,
    image: "pic/WhatsApp Image 2026-03-06 at 3.05.36 PM (1).jpeg",
    description: "Insulated for warmth and comfort",
    rating: 4.7,
    reviews: 189,
  },
  {
    id: 3,
    name: "Classic Style Slippers",
    category: "premium",
    price: 600,
    originalPrice: 999,
    image: "pic/WhatsApp Image 2026-03-06 at 3.05.36 PM.jpeg",
    description: "Classic design with premium finish",
    rating: 4.6,
    reviews: 156,
  },
  {
    id: 4,
    name: "Spa Comfort Slippers",
    category: "premium",
    price: 600,
    originalPrice: 999,
    image: "pic/WhatsApp Image 2026-03-06 at 3.05.37 PM (1).jpeg",
    description: "Spa-quality comfort for your feet",
    rating: 4.9,
    reviews: 312,
  },
  {
    id: 5,
    name: "Casual Cotton Slippers",
    category: "premium",
    price: 600,
    originalPrice: 999,
    image: "pic/WhatsApp Image 2026-03-06 at 3.05.37 PM (2).jpeg",
    description: "Breathable cotton perfect for everyday",
    rating: 4.4,
    reviews: 128,
  },
  {
    id: 6,
    name: "Support Comfort Slippers",
    category: "premium",
    price: 600,
    originalPrice: 999,
    image: "pic/WhatsApp Image 2026-03-06 at 3.05.37 PM (3).jpeg",
    description: "Arch support for foot health",
    rating: 4.8,
    reviews: 267,
  },
  {
    id: 7,
    name: "Soft Plush Slippers",
    category: "premium",
    price: 600,
    originalPrice: 999,
    image: "pic/WhatsApp Image 2026-03-06 at 3.05.37 PM.jpeg",
    description: "Super soft plush exterior with comfort",
    rating: 4.5,
    reviews: 198,
  },
  {
    id: 8,
    name: "Lightweight Summer Slippers",
    category: "premium",
    price: 600,
    originalPrice: 999,
    image: "pic/WhatsApp Image 2026-03-06 at 3.05.38 PM (1).jpeg",
    description: "Perfect for warm weather use",
    rating: 4.3,
    reviews: 95,
  },
  {
    id: 9,
    name: "Premium Luxury Slippers",
    category: "premium",
    price: 600,
    originalPrice: 999,
    image: "pic/WhatsApp Image 2026-03-06 at 3.05.38 PM (2).jpeg",
    description: "Luxury design with premium materials",
    rating: 5.0,
    reviews: 89,
  },
  {
    id: 10,
    name: "Comfort Daily Slippers",
    category: "premium",
    price: 600,
    originalPrice: 999,
    image: "pic/WhatsApp Image 2026-03-06 at 3.05.40 PM.jpeg",
    description: "Comfortable slippers for daily use",
    rating: 4.6,
    reviews: 142,
  },
];

let cart = [];
let filteredProducts = [...products];
let currentFilter = "all";
let orderHistory = []; // Store all completed orders

// Initialize the app
document.addEventListener("DOMContentLoaded", () => {
  renderProducts(products);
  setupEventListeners();
  loadCart();
  loadOrderHistory(); // Load past orders
  populateReturnDropdown(); // Populate return dropdown on page load
});

// Setup event listeners
function setupEventListeners() {
  document.getElementById("cartIcon").addEventListener("click", openCart);
  document.getElementById("searchBox").addEventListener("input", handleSearch);
}

// Render products
function renderProducts(productsToRender) {
  const productsGrid = document.getElementById("productsGrid");

  if (productsToRender.length === 0) {
    productsGrid.innerHTML =
      '<p style="grid-column: 1/-1; text-align: center; padding: 40px;">No products found</p>';
    return;
  }

  productsGrid.innerHTML = productsToRender
    .map((product) => {
      const discount = Math.round(
        ((product.originalPrice - product.price) / product.originalPrice) * 100,
      );
      return `
            <div class="product-card">
                <img src="${product.image}" alt="${product.name}" class="product-image" onclick="openImageModal('${product.image}', '${product.name}')" onerror="this.src='https://via.placeholder.com/500x500?text=Slippers'">
                <div class="product-info">
                    <h3 class="product-name">${product.name}</h3>
                    <p class="product-description">${product.description}</p>
                    <div class="product-rating">
                        ${"★".repeat(Math.floor(product.rating))} 
                        <span style="color: #666;">(${product.reviews} reviews)</span>
                    </div>
                    <div style="display: flex; align-items: center;">
                        <span class="product-price">₹${product.price.toFixed(0)}</span>
                        <span class="product-original-price">₹${product.originalPrice.toFixed(0)}</span>
                        ${discount > 0 ? `<span class="product-discount">-${discount}%</span>` : ""}
                    </div>
                    <button class="btn btn-add" onclick="addToCart(${product.id})">Add to Cart</button>
                </div>
            </div>
        `;
    })
    .join("");
}

// Add to cart
function addToCart(productId) {
  const product = products.find((p) => p.id === productId);
  const existingItem = cart.find((item) => item.id === productId);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      ...product,
      quantity: 1,
    });
  }

  saveCart();
  updateCartCount();
  showNotification(`${product.name} added to cart!`);
  populateReturnDropdown(); // Update return dropdown when cart changes
}

// Remove from cart
function removeFromCart(productId) {
  cart = cart.filter((item) => item.id !== productId);
  saveCart();
  updateCartCount();
  renderCart();
  populateReturnDropdown(); // Update return dropdown when cart changes
}

// Update quantity
function updateQuantity(productId, change) {
  const item = cart.find((item) => item.id === productId);
  if (item) {
    item.quantity += change;
    if (item.quantity <= 0) {
      removeFromCart(productId);
    } else {
      saveCart();
      renderCart();
      populateReturnDropdown(); // Update return dropdown when cart changes
    }
  }
}

// Request return for a product
function requestReturn(productId, productName, source = "Cart") {
  const returnDetails = {
    productId: productId,
    productName: productName,
    source: source,
    timestamp: new Date().toLocaleString(),
    type: "return",
  };

  // Send WhatsApp notification for return request
  sendReturnNotification(returnDetails);

  // Show confirmation to user
  alert(
    `Return request sent for "${productName}"!\n\nOur team will contact you within 24 hours to process your return.`,
  );

  // Reset dropdown selection
  document.getElementById("returnProductSelect").value = "";
}

// Send return notification via WhatsApp
function sendReturnNotification(returnDetails) {
  const message = `🔄 Return Request Alert!\n\n📦 Product: ${returnDetails.productName}\n🆔 Product ID: ${returnDetails.productId}\n📅 From: ${returnDetails.source}\n⏰ Time: ${returnDetails.timestamp}\n\nMT Store - Customer wants to return this product!`;

  // If using Twilio (automatic)
  if (
    typeof WHATSAPP_CONFIG !== "undefined" &&
    WHATSAPP_CONFIG.method === "twilio"
  ) {
    sendReturnViaTwilio(returnDetails, message);
  }
  // If using Webhook service
  else if (
    typeof WHATSAPP_CONFIG !== "undefined" &&
    WHATSAPP_CONFIG.method === "webhook"
  ) {
    sendReturnViaWebhook(returnDetails, message);
  }
  // Manual mode - open WhatsApp Web
  else {
    sendReturnViaWhatsAppWeb(message);
  }
}

// Twilio integration for returns
function sendReturnViaTwilio(returnDetails, message) {
  const twilioConfig = WHATSAPP_CONFIG.twilio;

  fetch(twilioConfig.backendUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      message: message,
      to: "+91" + WHATSAPP_CONFIG.recipient.phoneNumber.replace("91", ""),
      returnDetails: returnDetails,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log("Return WhatsApp sent via Twilio:", data);
      showNotification("Return request sent to Admin!");
    })
    .catch((err) => {
      console.error("Error sending return WhatsApp via Twilio:", err);
      sendReturnViaWhatsAppWeb(message);
    });
}

// Webhook integration for returns
function sendReturnViaWebhook(returnDetails, message) {
  const webhookConfig = WHATSAPP_CONFIG.webhook;

  fetch(webhookConfig.url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + webhookConfig.apiKey,
    },
    body: JSON.stringify({
      message: message,
      phone: "+91" + WHATSAPP_CONFIG.recipient.phoneNumber.replace("91", ""),
      returnDetails: returnDetails,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log("Return WhatsApp sent via Webhook:", data);
      showNotification("Return request sent to Admin!");
    })
    .catch((err) => {
      console.error("Error sending return WhatsApp via Webhook:", err);
      sendReturnViaWhatsAppWeb(message);
    });
}

// Manual mode for returns - Open WhatsApp Web
function sendReturnViaWhatsAppWeb(message) {
  const phoneNumber = WHATSAPP_CONFIG
    ? WHATSAPP_CONFIG.recipient.phoneNumber
    : "919363750020";
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  window.open(whatsappURL, "_blank");

  console.log("Return WhatsApp manual notification initiated");
  console.log("Message:", message);
}

// Update cart count
function updateCartCount() {
  const count = cart.reduce((total, item) => total + item.quantity, 0);
  document.getElementById("cartCount").textContent = count;
}

// Open cart
function openCart() {
  document.getElementById("cartModal").classList.add("active");
  renderCart();
  populateReturnDropdown();
}

// Populate return dropdown with cart items AND past ordered items
function populateReturnDropdown() {
  const returnSelect = document.getElementById("returnProductSelect");
  const currentValue = returnSelect.value;

  // Clear existing options except the first one
  returnSelect.innerHTML = '<option value="">Select product to return</option>';

  // Add current cart items with label
  if (cart.length > 0) {
    const cartGroup = document.createElement("optgroup");
    cartGroup.label = "🛒 Current Cart Items";

    cart.forEach((item) => {
      const option = document.createElement("option");
      option.value = `cart_${item.id}`;
      option.textContent = `${item.name} (Qty: ${item.quantity})`;
      cartGroup.appendChild(option);
    });

    returnSelect.appendChild(cartGroup);
  }

  // Add past ordered items with label
  if (orderHistory.length > 0) {
    const ordersGroup = document.createElement("optgroup");
    ordersGroup.label = "📦 Past Orders";

    orderHistory.forEach((order) => {
      order.items.forEach((item) => {
        const option = document.createElement("option");
        option.value = `order_${order.orderId}_${item.id}`;
        option.textContent = `${item.name} (Qty: ${item.quantity}) - ${order.date}`;
        ordersGroup.appendChild(option);
      });
    });

    returnSelect.appendChild(ordersGroup);
  }

  // Restore previous selection if it still exists
  if (
    currentValue &&
    returnSelect.querySelector(`option[value="${currentValue}"]`)
  ) {
    returnSelect.value = currentValue;
  }
}

// Initiate return request from footer
function initiateReturnRequest() {
  const returnSelect = document.getElementById("returnProductSelect");
  const selectedValue = returnSelect.value;

  if (!selectedValue) {
    alert("Please select a product to return first!");
    return;
  }

  let selectedItem = null;
  let source = ""; // Track where the item came from

  // Check if it's from current cart
  if (selectedValue.startsWith("cart_")) {
    const productId = parseInt(selectedValue.replace("cart_", ""));
    selectedItem = cart.find((item) => item.id == productId);
    source = "Current Cart";
  }
  // Check if it's from past orders
  else if (selectedValue.startsWith("order_")) {
    const parts = selectedValue.replace("order_", "").split("_");
    const orderId = parts[0];
    const productId = parseInt(parts[1]);

    for (const order of orderHistory) {
      if (order.orderId == orderId) {
        selectedItem = order.items.find((item) => item.id == productId);
        source = `Order ${orderId} (${order.date})`;
        break;
      }
    }
  }

  if (!selectedItem) {
    alert("Selected product not found!");
    return;
  }

  requestReturn(selectedItem.id, selectedItem.name, source);
}

// Close cart
function closeCart() {
  document.getElementById("cartModal").classList.remove("active");
}

// Open image modal
function openImageModal(imageSrc, altText) {
  const modal = document.getElementById("imageModal");
  const modalImage = document.getElementById("modalImage");

  modalImage.src = imageSrc;
  modalImage.alt = altText;
  modal.classList.add("active");
}

// Close image modal
function closeImageModal() {
  document.getElementById("imageModal").classList.remove("active");
}

// Close modals when clicking outside
document.addEventListener("click", (e) => {
  const cartModal = document.getElementById("cartModal");
  const imageModal = document.getElementById("imageModal");

  if (e.target === cartModal) {
    closeCart();
  }
  if (e.target === imageModal) {
    closeImageModal();
  }
});

// Close modals with Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeCart();
    closeImageModal();
  }
});

// Render cart items
function renderCart() {
  const cartItemsContainer = document.getElementById("cartItems");

  if (cart.length === 0) {
    cartItemsContainer.innerHTML =
      '<div class="empty-cart"><p>Your cart is empty</p></div>';
    document.getElementById("cartTotal").textContent = "0.00";
    return;
  }

  cartItemsContainer.innerHTML = cart
    .map(
      (item) => `
        <div class="cart-item">
            <div class="cart-item-info">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">₹${item.price.toFixed(0)}</div>
                <div class="cart-item-qty">
                    <button onclick="updateQuantity(${item.id}, -1)">−</button>
                    <span style="min-width: 30px; text-align: center;">${item.quantity}</span>
                    <button onclick="updateQuantity(${item.id}, 1)">+</button>
                    <button class="btn-remove" onclick="removeFromCart(${item.id})">Remove</button>
                </div>
            </div>
            <div style="font-weight: 600; color: var(--primary-color);">
                ₹${(item.price * item.quantity).toFixed(0)}
            </div>
        </div>
    `,
    )
    .join("");

  updateCartTotal();
}

// Update cart total
function updateCartTotal() {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  document.getElementById("cartTotal").textContent = total.toFixed(0);
}

// Filter by price
function filterByPrice(category) {
  currentFilter = category;

  // Update active button
  document.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.classList.remove("active");
  });
  event.target.classList.add("active");

  if (category === "all") {
    filteredProducts = [...products];
  } else {
    filteredProducts = products.filter((p) => p.category === category);
  }

  renderProducts(filteredProducts);
}

// Search functionality
function handleSearch(e) {
  const query = e.target.value.toLowerCase();

  const searchResults = products.filter(
    (product) =>
      product.name.toLowerCase().includes(query) ||
      product.description.toLowerCase().includes(query),
  );

  renderProducts(searchResults);
}

// Checkout
function checkout() {

  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }

  // Check if location is added
  const location = (document.getElementById('cartLocation') && document.getElementById('cartLocation').value.trim()) || localStorage.getItem('cartLocation');
  if (!location) {
    alert("Please add your delivery location before checking out.");
    if (document.getElementById('cartLocation')) {
      document.getElementById('cartLocation').focus();
    }
    return;
  }

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const orderDate = new Date().toLocaleString();
  const orderId = Date.now(); // Use timestamp as order ID

  const orderDetails = {
    items: cart.map((item) => `${item.name} x${item.quantity}`).join(", "),
    total: total.toFixed(0),
    timestamp: orderDate,
    address: location,
  };

  // Save order to history for returns
  const orderHistory_item = {
    orderId: orderId,
    date: new Date().toLocaleDateString(),
    items: cart.map((item) => ({
      id: item.id,
      name: item.name,
      quantity: item.quantity,
      price: item.price,
    })),
    total: total,
    timestamp: orderDate,
  };

  orderHistory.push(orderHistory_item);
  saveOrderHistory();

  // Send WhatsApp notification
  sendWhatsAppNotification(orderDetails);

  alert(
    `Thank you for your order!\n\nTotal: ₹${total.toFixed(0)}\n\nYour slippers will be delivered within 3-5 business days.`,
  );

  cart = [];
  saveCart();
  updateCartCount();
  document.getElementById("cartModal").classList.remove("active");
  renderCart();
  populateReturnDropdown(); // Update return dropdown after checkout
}

// Send WhatsApp Notification
function sendWhatsAppNotification(orderDetails) {
  const message = `🎉 New Order Alert!\n\n📦 Items: ${orderDetails.items}\n💰 Total: ₹${orderDetails.total}\n📅 Time: ${orderDetails.timestamp}\n📍 Address: ${orderDetails.address}\n\nMT Store - Customer Order`;

  // If using Twilio (automatic)
  if (
    typeof WHATSAPP_CONFIG !== "undefined" &&
    WHATSAPP_CONFIG.method === "twilio"
  ) {
    sendViaTwilio(orderDetails, message);
  }
  // If using Webhook service
  else if (
    typeof WHATSAPP_CONFIG !== "undefined" &&
    WHATSAPP_CONFIG.method === "webhook"
  ) {
    sendViaWebhook(orderDetails, message);
  }
  // Manual mode - open WhatsApp Web
  else {
    sendViaWhatsAppWeb(message);
  }
}

// Twilio integration
function sendViaTwilio(orderDetails, message) {
  const twilioConfig = WHATSAPP_CONFIG.twilio;

  // Send to your backend which will use Twilio API
  fetch(twilioConfig.backendUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      message: message,
      to: "+91" + WHATSAPP_CONFIG.recipient.phoneNumber.replace("91", ""),
      orderDetails: orderDetails,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log("WhatsApp sent via Twilio:", data);
      showNotification("Notification sent to Admin WhatsApp!");
    })
    .catch((err) => {
      console.error("Error sending WhatsApp via Twilio:", err);
      sendViaWhatsAppWeb(message); // Fallback to manual
    });
}

// Webhook integration
function sendViaWebhook(orderDetails, message) {
  const webhookConfig = WHATSAPP_CONFIG.webhook;

  fetch(webhookConfig.url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + webhookConfig.apiKey,
    },
    body: JSON.stringify({
      message: message,
      phone: "+91" + WHATSAPP_CONFIG.recipient.phoneNumber.replace("91", ""),
      orderDetails: orderDetails,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log("WhatsApp sent via Webhook:", data);
      showNotification("Notification sent to Admin WhatsApp!");
    })
    .catch((err) => {
      console.error("Error sending WhatsApp via Webhook:", err);
      sendViaWhatsAppWeb(message); // Fallback to manual
    });
}

// Manual mode - Open WhatsApp Web (user sends manually)
function sendViaWhatsAppWeb(message) {
  const phoneNumber = WHATSAPP_CONFIG
    ? WHATSAPP_CONFIG.recipient.phoneNumber
    : "919363750020";
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  // Open in new window
  window.open(whatsappURL, "_blank");

  console.log("WhatsApp manual notification initiated");
  console.log("Message:", message);
}

// Notification
function showNotification(message) {
  const notification = document.createElement("div");
  notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background-color: #27ae60;
        color: white;
        padding: 15px 20px;
        border-radius: 5px;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        z-index: 300;
        animation: slideIn 0.3s;
    `;
  notification.textContent = message;
  document.body.appendChild(notification);

  setTimeout(() => {
    notification.remove();
  }, 3000);
}

// Local Storage functions
function saveCart() {
  localStorage.setItem("mtStoreCart", JSON.stringify(cart));
}

function loadCart() {
  const savedCart = localStorage.getItem("mtStoreCart");
  if (savedCart) {
    cart = JSON.parse(savedCart);
    updateCartCount();
    populateReturnDropdown(); // Update return dropdown when cart is loaded
  }
}

// Order history storage functions
function saveOrderHistory() {
  localStorage.setItem("mtStoreOrderHistory", JSON.stringify(orderHistory));
}

function loadOrderHistory() {
  const savedOrders = localStorage.getItem("mtStoreOrderHistory");
  if (savedOrders) {
    orderHistory = JSON.parse(savedOrders);
  }
}

// Add animation styles
const style = document.createElement("style");
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
`;
document.head.appendChild(style);
