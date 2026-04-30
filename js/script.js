const products = [
  // =========================
  // 🍎 APPLE
  // =========================
  { id: 1, code: "MBPRO-M3-001", name: "MacBook Pro M3 Max", price: 2499, category: "laptop", img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800" },
  { id: 101, code: "MBAIR-M2-002", name: "MacBook Air M2", price: 1299, category: "laptop", img: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800" },

  // =========================
  // 💻 ASUS
  // =========================
  { id: 9, code: "ASUS-ROG-G16-004", name: "ASUS ROG Zephyrus G16", price: 2799, category: "laptop", img: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=800" },
  { id: 201, code: "ASUS-TUF-A15", name: "ASUS TUF A15", price: 1399, category: "laptop", img: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=800" },
  { id: 202, code: "ASUS-ZENBOOK-14", name: "ASUS ZenBook 14", price: 1199, category: "laptop", img: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=800" },
  { id: 203, code: "ASUS-ROG-STRIX-G15", name: "ASUS ROG Strix G15", price: 1899, category: "laptop", img: "https://images.unsplash.com/photo-1602080858428-57174f9431cf?w=800" },
  { id: 204, code: "ASUS-VIVOBOOK-16", name: "ASUS VivoBook 16", price: 999, category: "laptop", img: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800" },
  { id: 205, code: "ASUS-EXPERTBOOK", name: "ASUS ExpertBook B9", price: 1599, category: "laptop", img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800" },

  // =========================
  // 💻 DELL
  // =========================
  { id: 6, code: "DELLXPS-15-003", name: "Dell XPS 15", price: 1999, category: "laptop", img: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=800" },
  { id: 301, code: "DELL-INSPIRON-14", name: "Dell Inspiron 14", price: 899, category: "laptop", img: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=800" },
  { id: 302, code: "DELL-ALIENWARE-M18", name: "Alienware M18", price: 3299, category: "laptop", img: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=800" },
  { id: 303, code: "DELL-LATITUDE-7440", name: "Dell Latitude 7440", price: 1499, category: "laptop", img: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800" },
  { id: 304, code: "DELL-XPS-13", name: "Dell XPS 13", price: 1399, category: "laptop", img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800" },
  { id: 305, code: "DELL-G15", name: "Dell G15 Gaming", price: 1299, category: "laptop", img: "https://images.unsplash.com/photo-1602080858428-57174f9431cf?w=800" },

  // =========================
  // 💻 HP
  // =========================
  { id: 401, code: "HP-SPECTRE-X360", name: "HP Spectre x360", price: 1599, category: "laptop", img: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800" },
  { id: 402, code: "HP-ENVY-15", name: "HP Envy 15", price: 1399, category: "laptop", img: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=800" },
  { id: 403, code: "HP-OMEN-16", name: "HP Omen 16", price: 1899, category: "laptop", img: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=800" },
  { id: 404, code: "HP-PAVILION-14", name: "HP Pavilion 14", price: 899, category: "laptop", img: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=800" },
  { id: 405, code: "HP-ELITEBOOK-840", name: "HP EliteBook 840", price: 1499, category: "laptop", img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800" },

  // =========================
  // 💻 LENOVO
  // =========================
  { id: 501, code: "LENOVO-LEGION-5", name: "Lenovo Legion 5", price: 1499, category: "laptop", img: "https://images.unsplash.com/photo-1602080858428-57174f9431cf?w=800" },
  { id: 502, code: "LENOVO-THINKPAD-X1", name: "ThinkPad X1 Carbon", price: 1999, category: "laptop", img: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800" },
  { id: 503, code: "LENOVO-IDEAPAD-5", name: "Lenovo IdeaPad 5", price: 899, category: "laptop", img: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=800" },
  { id: 504, code: "LENOVO-YOGA-9I", name: "Lenovo Yoga 9i", price: 1499, category: "laptop", img: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=800" },
  { id: 505, code: "LENOVO-LEGION-7", name: "Lenovo Legion 7", price: 2199, category: "laptop", img: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=800" },

  // =========================
  // 💻 MSI
  // =========================
  { id: 10, code: "MSI-RAIDER-GE78-005", name: "MSI Raider GE78 HX", price: 2699, category: "laptop", img: "https://images.unsplash.com/photo-1602080858428-57174f9431cf?w=800" },
  { id: 601, code: "MSI-STEALTH-16", name: "MSI Stealth 16", price: 2399, category: "laptop", img: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=800" },
  { id: 602, code: "MSI-KATANA-15", name: "MSI Katana 15", price: 1499, category: "laptop", img: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=800" },
  { id: 603, code: "MSI-CYBORG-14", name: "MSI Cyborg 14", price: 1299, category: "laptop", img: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=800" },
  { id: 604, code: "MSI-TITAN-GT77", name: "MSI Titan GT77", price: 3999, category: "laptop", img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800" },
  { id: 605, code: "MSI-BRAVO-17", name: "MSI Bravo 17", price: 1599, category: "laptop", img: "https://images.unsplash.com/photo-1602080858428-57174f9431cf?w=800" },

  // =========================
  // 🖥 DESKTOPS
  // =========================
  { id: 3, code: "RTX-5090-ULTRA-006", name: "RTX 5090 Ultra PC", price: 4500, category: "desktop", img: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=800" },
  { id: 7, code: "ASUS-ROG-DESK-007", name: "ASUS ROG Desktop", price: 3500, category: "desktop", img: "https://images.unsplash.com/photo-1591488320449-011701bb6704?w=800" },
  { id: 11, code: "MSI-GAMING-DESK-008", name: "MSI Gaming Desktop", price: 3299, category: "desktop", img: "https://images.unsplash.com/photo-1593640495253-23196b27a87f?w=800" },
  { id: 12, code: "CORSAIR-ICU5K-009", name: "Corsair iCUE 5000X", price: 3799, category: "desktop", img: "https://images.unsplash.com/photo-1616628182509-3d9f5c5d67a4?w=800" },
  { id: 13, code: "ALIENWARE-R16-010", name: "Alienware Aurora R16", price: 4299, category: "desktop", img: "https://images.unsplash.com/photo-1624705002806-5d72df19c3b3?w=800" },

  // =========================
  // 🎮 ACCESSORIES
  // =========================
  { id: 4, code: "LOGITECH-MXM3-011", name: "Logitech MX Master 3", price: 99, category: "accessory", img: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=800" },
  { id: 5, code: "STEELSERIES-APEX-012", name: "SteelSeries Apex Pro", price: 199, category: "accessory", img: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=800" },
  { id: 8, code: "CORSAIR-K95-013", name: "Corsair K95 Keyboard", price: 229, category: "accessory", img: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=800" },
  { id: 14, code: "RAZER-BASILISK-014", name: "Razer Basilisk V3", price: 69, category: "accessory", img: "https://images.unsplash.com/photo-1613145993487-2ecb2f6a8f2a?w=800" },
  { id: 15, code: "HYPERX-CLOUD2-015", name: "HyperX Cloud II Headset", price: 99, category: "accessory", img: "https://images.unsplash.com/photo-1585386959984-a415522316e4?w=800" }
];

let cart = JSON.parse(localStorage.getItem('TECH_CART')) || [];
let currentFilter = 'all';
let modalQty = 1;

// Load products from localStorage or use defaults
function loadProducts() {
    const savedProducts = JSON.parse(localStorage.getItem('TECH_PRODUCTS'));
    return savedProducts && savedProducts.length > 0 ? savedProducts : products;
}

let allProducts = loadProducts();

// Initial Load
document.addEventListener('DOMContentLoaded', () => {
    renderAllProducts();
    updateCartUI();
    setupEventListeners();
    initializeScrollAnimations();
    
    // Smooth Loader Fade
    setTimeout(() => {
        const loader = document.getElementById('loader');
        if (loader) {
            loader.style.opacity = '0';
            setTimeout(() => loader.style.display = 'none', 500);
        }
    }, 1000);
});

// Setup all event listeners
function setupEventListeners() {
    // Navbar & Mobile Menu
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
    const closeMobileMenuBtn = document.getElementById('closeMobileMenu');
    
    if (hamburger) hamburger.onclick = toggleMobileMenu;
    if (closeMobileMenuBtn) closeMobileMenuBtn.onclick = closeMobileMenu;
    if (mobileMenuOverlay) mobileMenuOverlay.onclick = closeMobileMenu;
    
    // Navbar
    const cartBtn = document.getElementById('cartBtn') || document.querySelector('.cart-icon');
    const closeCart = document.getElementById('closeCart');
    const cartOverlay = document.getElementById('cartOverlay');
    const checkoutBtn = document.getElementById('checkoutBtn');
    const backToTop = document.getElementById('backToTop');
    const closeProductModal = document.getElementById('closeProductModal');
    const productModal = document.getElementById('productModal');
    
    if (cartBtn) cartBtn.onclick = openCart;
    if (closeCart) closeCart.onclick = closeCartSidebar;
    if (cartOverlay) cartOverlay.onclick = closeCartSidebar;
    if (checkoutBtn) checkoutBtn.onclick = goToCheckout;
    if (backToTop) backToTop.onclick = scrollToTop;
    if (closeProductModal) closeProductModal.onclick = closeProductDetails;
    if (productModal) productModal.onclick = (e) => {
        if (e.target === productModal) closeProductDetails();
    };
    
    // Modal quantity controls
    const modalIncreaseBtn = document.getElementById('increaseQty');
    const modalDecreaseBtn = document.getElementById('decreaseQty');
    
    if (modalIncreaseBtn) modalIncreaseBtn.onclick = increaseModalQty;
    if (modalDecreaseBtn) modalDecreaseBtn.onclick = decreaseModalQty;
    
    // Add to cart from modal
    const addToCartFromModal = document.getElementById('addToCartFromModal');
    if (addToCartFromModal) {
        addToCartFromModal.onclick = () => {
            const productId = parseInt(addToCartFromModal.dataset.productId);
            for (let i = 0; i < modalQty; i++) {
                addToCart(productId);
            }
            closeProductDetails();
            showToast(`Added ${modalQty} item(s) to cart!`);
        };
    }
    
    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        const navbar = document.getElementById('navbar');
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
            if (backToTop) backToTop.classList.add('show');
        } else {
            navbar.classList.remove('scrolled');
            if (backToTop) backToTop.classList.remove('show');
        }
    });
    
    // Search
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', handleSearch);
        searchInput.addEventListener('blur', () => {
            setTimeout(() => {
                document.getElementById('searchSuggestions').classList.remove('active');
            }, 200);
        });
        searchInput.addEventListener('focus', () => {
            if (searchInput.value.trim()) {
                document.getElementById('searchSuggestions').classList.add('active');
            }
        });
    }
    
    // Close search suggestions when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.search-box') && !e.target.closest('.search-box-hero')) {
            document.getElementById('searchSuggestions').classList.remove('active');
        }
    });
}

// ========== SCROLL ANIMATION INITIALIZATION ==========
// Initialize scroll reveal animations for all elements
function initializeScrollAnimations() {
    // Create Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1, // Trigger when 10% of element is visible
        rootMargin: '0px 0px -100px 0px' // Trigger slightly before element enters viewport
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Determine animation type based on element type
                let animationClass = 'animate-fadeInUp'; // Default animation

                if (entry.target.classList.contains('section-title')) {
                    animationClass = 'animate-fadeInDown';
                } else if (entry.target.classList.contains('product-card')) {
                    animationClass = 'animate-scaleIn';
                } else if (entry.target.classList.contains('filter-btn')) {
                    animationClass = 'animate-slideUp';
                } else if (entry.target.classList.contains('promo-banner')) {
                    animationClass = 'animate-rotateIn';
                }

                // Apply animation class
                entry.target.classList.add(animationClass);
                
                // Stop observing once animated
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all elements that should animate
    const elementsToAnimate = document.querySelectorAll(
        '.product-section, .section-title, .product-card, .filter-btn, .promo-banner, .promo-content'
    );

    elementsToAnimate.forEach((element) => {
        observer.observe(element);
    });
}

// Render all products in sections
function renderAllProducts() {
    const laptops = allProducts.filter(p => p.category === 'laptop');
    const desktops = allProducts.filter(p => p.category === 'desktop');
    const accessories = allProducts.filter(p => p.category === 'accessory');
    
    renderProductsGrid(laptops, 'laptopGrid');
    renderProductsGrid(desktops, 'desktopGrid');
    renderProductsGrid(accessories, 'accessoryGrid');
    
    // Show all products view
    document.getElementById('allProductsView').style.display = 'block';
    document.getElementById('filteredProductsView').style.display = 'none';
}

// Render products in a specific grid
function renderProductsGrid(items, gridId) {
    const grid = document.getElementById(gridId);
    if (!grid) return;
    
    grid.innerHTML = items.map(p => `
        <div class="product-card" onclick="openProductDetails(${p.id})">
            <img src="${p.img}" alt="${p.name}" loading="lazy">
            <h3>${p.name}</h3>
            <p class="price">$${p.price.toLocaleString()}</p>
            <button onclick="event.stopPropagation(); addToCart(${p.id})">Add to Cart</button>
        </div>
    `).join('');
}

// Render Product Grid
function renderProducts(items) {
    const grid = document.getElementById('productGrid');
    if (!grid) return;
    
    grid.innerHTML = items.map(p => `
        <div class="product-card" onclick="openProductDetails(${p.id})">
            <img src="${p.img}" alt="${p.name}" loading="lazy">
            <h3>${p.name}</h3>
            <p class="price">$${p.price.toLocaleString()}</p>
            <button onclick="event.stopPropagation(); addToCart(${p.id})">Add to Cart</button>
        </div>
    `).join('');
}

// Cart Functionality
function addToCart(id) {
    const p = allProducts.find(prod => prod.id === id);
    if (!p) return;
    
    const exists = cart.find(item => item.id === id);
    if (exists) {
        exists.qty++;
    } else {
        cart.push({ ...p, qty: 1 });
    }
    updateCartUI();
    showToast(`${p.name} added to cart!`);
}


// function updateCartUI() {
//     localStorage.setItem('TECH_CART', JSON.stringify(cart));
//     const cartCount = document.getElementById('cart-count');
//     if (cartCount) {
//         cartCount.innerText = cart.reduce((acc, i) => acc + i.qty, 0);
//     }
    
//     const cartItemsContainer = document.getElementById('cart-items-container');
//     if (cartItemsContainer) {
//         cartItemsContainer.innerHTML = cart.map(item => `
//             <div class="cart-item">
//                 <div>
//                     <h4>${item.name}</h4>
//                     <p class="price">$${item.price.toLocaleString()} × ${item.qty}</p>
//                 </div>
//                 <button onclick="removeFromCart(${item.id})">
//                     <i class="fas fa-trash"></i>
//                 </button>
//             </div>
//         `).join('');
//     }
    
//     const total = cart.reduce((acc, i) => acc + (i.price * i.qty), 0);
//     const cartTotal = document.getElementById('cart-total');
//     if (cartTotal) {
//         cartTotal.innerText = `$${total.toLocaleString()}`;
//     }
// }
function updateCartUI() {
    localStorage.setItem('TECH_CART', JSON.stringify(cart));

    const cartCount = document.getElementById('cart-count');
    if (cartCount) {
        cartCount.innerText = cart.reduce((acc, i) => acc + i.qty, 0);
    }

    const cartItemsContainer = document.getElementById('cart-items-container');

    if (cartItemsContainer) {
        cartItemsContainer.innerHTML = cart.map(item => `
            <div class="cart-item">
                <div>
                    <h4>${item.name}</h4>
                    
                    <div class="qty-controls">
                        <button onclick="decreaseQty(${item.id})">-</button>
                        <span>${item.qty}</span>
                        <button onclick="increaseQty(${item.id})">+</button>
                    </div>

                    <p class="price">$${(item.price * item.qty).toLocaleString()}</p>
                </div>

                <button onclick="removeFromCart(${item.id})">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `).join('');
    }

    const total = cart.reduce((acc, i) => acc + (i.price * i.qty), 0);
    const cartTotal = document.getElementById('cart-total');
    if (cartTotal) {
        cartTotal.innerText = `$${total.toLocaleString()}`;
    }
}

function removeFromCart(id) {
    cart = cart.filter(i => i.id !== id);
    updateCartUI();
    showToast('Item removed from cart');
}
function increaseQty(id) {
    const item = cart.find(i => i.id === id);
    if (item) {
        item.qty++;
        updateCartUI();
    }
}

function decreaseQty(id) {
    const item = cart.find(i => i.id === id);
    if (!item) return;

    if (item.qty > 1) {
        item.qty--;
    } else {
        cart = cart.filter(i => i.id !== id);
    }

    updateCartUI();
}

// Modal Quantity Controls
function increaseModalQty() {
    modalQty++;
    document.getElementById('productQuantity').innerText = modalQty;
}

function decreaseModalQty() {
    if (modalQty > 1) {
        modalQty--;
        document.getElementById('productQuantity').innerText = modalQty;
    }
}

// UI Toggles
function openCart() {
    const cartSidebar = document.getElementById('cartSidebar');
    const cartOverlay = document.getElementById('cartOverlay');
    if (cartSidebar) cartSidebar.classList.add('active');
    if (cartOverlay) cartOverlay.style.display = 'block';
}

function closeCartSidebar() {
    const cartSidebar = document.getElementById('cartSidebar');
    const cartOverlay = document.getElementById('cartOverlay');
    if (cartSidebar) cartSidebar.classList.remove('active');
    if (cartOverlay) cartOverlay.style.display = 'none';
}

function goToCheckout() {
    if (cart.length === 0) {
        showToast('Your cart is empty!', 'error');
        return;
    }
    window.location.href = 'checkout.html';
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Search and Filter Logic
function handleSearch(e) {
    const val = e.target.value.toLowerCase().trim();
    const suggestionBox = document.getElementById('searchSuggestions');
    
    if (val === '') {
        suggestionBox.classList.remove('active');
        renderAllProducts();
        document.getElementById('allProductsView').style.display = 'block';
        document.getElementById('filteredProductsView').style.display = 'none';
        return;
    }
    
    // Filter by name, code, or price range
    let filtered = allProducts.filter(p => {
        const name = p.name.toLowerCase();
        const code = p.code.toLowerCase();
        const price = p.price;
        
        // Search by name
        if (name.includes(val)) return true;
        
        // Search by code
        if (code.includes(val)) return true;
        
        // Search by price range (e.g., "100-500" or "under 100" or "above 2000")
        if (val.includes('-')) {
            const [minStr, maxStr] = val.split('-');
            const min = parseFloat(minStr);
            const max = parseFloat(maxStr);
            if (!isNaN(min) && !isNaN(max)) {
                return price >= min && price <= max;
            }
        }
        
        // Search by "under" prefix (e.g., "under 500")
        if (val.startsWith('under ')) {
            const max = parseFloat(val.replace('under ', ''));
            if (!isNaN(max)) return price <= max;
        }
        
        // Search by "above" or "over" prefix (e.g., "above 2000" or "over 3000")
        if (val.startsWith('above ') || val.startsWith('over ')) {
            const prefix = val.startsWith('above ') ? 'above ' : 'over ';
            const min = parseFloat(val.replace(prefix, ''));
            if (!isNaN(min)) return price >= min;
        }
        
        return false;
    });
    
    // Show suggestions
    showSearchSuggestions(filtered, val);
    
    // Show filtered view
    document.getElementById('allProductsView').style.display = 'none';
    document.getElementById('filteredProductsView').style.display = 'block';
    
    renderProducts(filtered);
}

// Show search suggestions
function showSearchSuggestions(results, query) {
    const suggestionBox = document.getElementById('searchSuggestions');
    
    if (results.length === 0) {
        suggestionBox.innerHTML = '<div class="search-suggestion-item" style="cursor: default; padding: 1rem; text-align: center; color: var(--text-dimmer);">No products found matching "<strong>' + query + '</strong>"</div>';
        suggestionBox.classList.add('active');
        return;
    }
    
    const maxSuggestions = 8;
    const displayResults = results.slice(0, maxSuggestions);
    
    suggestionBox.innerHTML = displayResults.map(p => `
        <div class="search-suggestion-item" onclick="openProductDetails(${p.id})">
            <div style="flex: 1;">
                <div style="color: var(--text-main); font-weight: 600; margin-bottom: 0.2rem;">${p.name}</div>
                <div class="suggestion-code">${p.code}</div>
            </div>
            <div class="suggestion-price">$${p.price.toLocaleString()}</div>
        </div>
    `).join('');
    
    if (results.length > maxSuggestions) {
        suggestionBox.innerHTML += `<div class="search-suggestion-item" style="cursor: default; text-align: center; padding: 0.5rem; background: var(--glass); color: var(--text-dim); font-size: 0.8rem;">+${results.length - maxSuggestions} more results</div>`;
    }
    
    suggestionBox.classList.add('active');
}

function filterCategory(category) {
    currentFilter = category;
    
    // Update filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    const categoryNames = { 'laptop': 'Laptops', 'desktop': 'Desktops', 'accessory': 'Accessories', 'all': 'All Products' };
    const targetBtn = Array.from(document.querySelectorAll('.filter-btn')).find(btn => 
        btn.textContent.includes(categoryNames[category])
    );
    if (targetBtn) targetBtn.classList.add('active');
    
    closeCartSidebar();
    let filtered = category === 'all' ? allProducts : allProducts.filter(p => p.category === category);
    
    // Show filtered view
    document.getElementById('allProductsView').style.display = 'none';
    document.getElementById('filteredProductsView').style.display = 'block';
    
    renderProducts(filtered);
    document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
}

function showAllProducts() {
    // Update filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.filter-btn')[0].classList.add('active');
    
    currentFilter = 'all';
    renderAllProducts();
    document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
}

function filterBrand(brandFilter) {
    const [brand, category] = brandFilter.split('-');
    
    // Update filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    const categoryNames = { 'laptop': 'Laptops', 'desktop': 'Desktops', 'accessory': 'Accessories' };
    const categoryBtn = Array.from(document.querySelectorAll('.filter-btn')).find(btn => 
        btn.textContent.includes(categoryNames[category])
    );
    if (categoryBtn) categoryBtn.classList.add('active');
    
    closeCartSidebar();
    let filtered = allProducts.filter(p => p.category === category && p.name.toLowerCase().includes(brand.toLowerCase()));
    
    // Show filtered view
    document.getElementById('allProductsView').style.display = 'none';
    document.getElementById('filteredProductsView').style.display = 'block';
    
    renderProducts(filtered);
    document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
}

// Toast Notifications
function showToast(message, type = 'success') {
    const container = document.getElementById('toast-container');
    if (!container) return;
    
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
        <span>${message}</span>
    `;
    
    container.appendChild(toast);
    
    setTimeout(() => {
        toast.style.animation = 'slideOut 0.4s ease';
        setTimeout(() => toast.remove(), 400);
    }, 3000);
}

// Product Details Modal
function openProductDetails(productId) {
    const product = allProducts.find(p => p.id === productId);
    if (!product) return;
    
    const modal = document.getElementById('productModal');
    if (!modal) return;
    
    // Get category-specific specs
    let specs = [];
    if (product.category === 'laptop') {
        specs = ['Intel Core i7/i9 Processor', '16GB/32GB RAM', '512GB/1TB SSD', '14-16" Display', 'NVIDIA RTX Graphics', '16+ Hour Battery'];
    } else if (product.category === 'desktop') {
        specs = ['Intel Core i9 / AMD Ryzen 9', '32GB DDR5 RAM', '2TB NVMe SSD', 'NVIDIA RTX 4090/5090', '850W+ Power Supply', 'Advanced Cooling System'];
    } else if (product.category === 'accessory') {
        specs = ['Premium Build Quality', 'Ergonomic Design', 'High Precision', 'Wireless/USB Connection', 'Long Battery Life', 'Multi-Device Support'];
    }
    
    // Get category-specific description
    let description = '';
    if (product.category === 'laptop') {
        description = 'Ultra-powerful laptop designed for professionals and creators. Features cutting-edge processing power, stunning display, and exceptional portability for on-the-go productivity.';
    } else if (product.category === 'desktop') {
        description = 'Premium desktop workstation for high-performance computing. Engineered for gaming, content creation, and professional applications with incredible speed and reliability.';
    } else if (product.category === 'accessory') {
        description = 'Premium peripheral accessory built with precision engineering. Combines comfort, durability, and advanced features for an enhanced computing experience.';
    }
    
    // Populate modal with product data
    // document.getElementById('modalProductImage').src = product.img;
    const img = document.getElementById('modalProductImage');

    img.src = product.img || 'https://via.placeholder.com/800x600?text=No+Image';
    img.alt = product.name;
    document.getElementById('modalProductName').innerText = product.name;
    document.getElementById('modalProductPrice').innerText = `$${product.price.toLocaleString()}`;
    document.getElementById('modalProductCategory').innerText = product.category.charAt(0).toUpperCase() + product.category.slice(1);
    
    // Update description and specs
    document.querySelector('.product-description').innerText = description;
    const specsList = document.querySelector('.product-specs ul');
    specsList.innerHTML = specs.map(spec => `<li>${spec}</li>`).join('');
    
    // Reset quantity to 1 for new product
    modalQty = 1;
    document.getElementById('productQuantity').innerText = 1;
    
    // Store product ID for add to cart
    const addBtn = document.getElementById('addToCartFromModal');
    if (addBtn) addBtn.dataset.productId = productId;
    
    // Show modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    closeCartSidebar();
}

function closeProductDetails() {
    const modal = document.getElementById('productModal');
    if (modal) modal.classList.remove('active');
    document.body.style.overflow = '';
}

// Success Modal
function showSuccessModal(orderId, cartItems, total) {
    const overlay = document.createElement('div');
    overlay.className = 'success-modal-overlay active';
    overlay.id = 'successOverlay';
    
    const modal = document.createElement('div');
    modal.className = 'success-modal active';
    modal.innerHTML = `
        <div class="success-modal-icon">
            <i class="fas fa-check-circle"></i>
        </div>
        <h2>Order Confirmed!</h2>
        <p>Thank you for your purchase. Your order is being processed.</p>
        <div class="order-id">Order ID: ${orderId}</div>
        <p style="font-size: 0.9rem; color: var(--text-dimmer);">
            A confirmation email has been sent to your email address with tracking information.
        </p>
        <div class="success-modal-buttons">
            <button class="btn-success" onclick="window.location.href='index.html'">Continue Shopping</button>
            <button class="btn-success-secondary" onclick="window.print()">Print Receipt</button>
        </div>
    `;
    
    document.body.appendChild(overlay);
    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';
    
    // Close when clicking outside
    overlay.onclick = () => {
        overlay.remove();
        modal.remove();
        document.body.style.overflow = '';
    };
}

// Add slide out animation
const style = document.createElement('style');
style.textContent = `
    @keyframes slideOut {
        to { transform: translateX(-400px); opacity: 0; }
    }
`;
document.head.appendChild(style);

// Mobile Menu Functions
function toggleMobileMenu() {
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
    
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    mobileMenuOverlay.classList.toggle('active');
    
    // Prevent body scroll when menu is open
    if (mobileMenu.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
}

function closeMobileMenu() {
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
    
    hamburger.classList.remove('active');
    mobileMenu.classList.remove('active');
    mobileMenuOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

function toggleMobileDropdown(button) {
    const dropdownMenu = button.nextElementSibling;
    const isOpen = dropdownMenu.style.display === 'block';
    
    // Close all other dropdowns
    document.querySelectorAll('.mobile-dropdown-menu').forEach(menu => {
        menu.style.display = 'none';
    });
    
    // Toggle current dropdown
    dropdownMenu.style.display = isOpen ? 'none' : 'block';
    
    // Rotate chevron icon
    const icon = button.querySelector('i');
    if (icon) {
        icon.style.transform = isOpen ? 'rotate(0deg)' : 'rotate(180deg)';
    }
}