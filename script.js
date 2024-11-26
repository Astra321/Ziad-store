const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}

// Product database with actual data and images
const products = [
    {
        id: "playstation-5",
        name: "PlayStation 5",
        brand: "Sony",
        category: "Gaming Consoles",
        price: 499.99,
        image: "images/products/ps5.jpg",
        description: "Next-gen gaming console with 4K graphics"
    },
    {
        id: "airpods-pro",
        name: "AirPods Pro (2nd Generation)",
        brand: "Apple",
        category: "Accessories",
        price: 249.99,
        image: "images/products/tech1.jpg",
        description: "Active noise cancelling wireless earbuds"
    },
    {
        id: "apple-watch-series-8",
        name: "Apple Watch Series 8",
        brand: "Apple",
        category: "Wearables",
        price: 399.99,
        image: "images/products/tech2.jpg",
        description: "Advanced health monitoring smartwatch"
    },
    {
        id: "dell-xps-15",
        name: "Dell XPS 15",
        brand: "Dell",
        category: "Laptops",
        price: 1999.99,
        image: "images/products/laptop3.jpg",
        description: "Premium 15-inch laptop with 4K display"
    },
    {
        id: "echo-dot",
        name: "Echo Dot (5th Gen)",
        brand: "Amazon",
        category: "Smart Home",
        price: 49.99,
        image: "images/products/tech6.jpg",
        description: "Smart speaker with Alexa"
    },
    {
        id: "galaxy-s23-ultra",
        name: "Samsung Galaxy S23 Ultra",
        brand: "Samsung",
        category: "Smartphones",
        price: 1199.99,
        image: "images/products/phone4.jpg",
        description: "Premium Android smartphone with S Pen"
    },
    {
        id: "galaxy-tab-s8",
        name: "Samsung Galaxy Tab S8",
        brand: "Samsung",
        category: "Tablets",
        price: 699.99,
        image: "images/products/tech4.jpg",
        description: "High-performance Android tablet"
    },
    {
        id: "ipad-pro",
        name: "iPad Pro",
        brand: "Apple",
        category: "Tablets",
        price: 799.99,
        image: "images/products/tech3.jpg",
        description: "Powerful tablet with M2 chip"
    },
    {
        id: "iphone-14-pro-max",
        name: "iPhone 14 Pro Max",
        brand: "Apple",
        category: "Smartphones",
        price: 1099.99,
        image: "images/products/phone5.jpg",
        description: "Premium iPhone with Dynamic Island"
    },
    {
        id: "iphone-15-pro-max",
        name: "iPhone 15 Pro Max",
        brand: "Apple",
        category: "Smartphones",
        price: 1199.99,
        image: "images/products/phone1.jpg",
        description: "Latest flagship iPhone with A17 Pro chip"
    },
    {
        id: "macbook-pro-16",
        name: "MacBook Pro 16",
        brand: "Apple",
        category: "Laptops",
        price: 2499.99,
        image: "images/products/laptop2.jpg",
        description: "Professional laptop with M2 Pro/Max chip"
    },
    {
        id: "macbook-pro",
        name: "MacBook Pro M2",
        brand: "Apple",
        category: "Laptops",
        price: 1299.99,
        image: "images/products/laptop1.jpg",
        description: "Powerful laptop with M2 chip"
    },
    {
        id: "macos-sonoma",
        name: "macOS Sonoma",
        brand: "Apple",
        category: "Software",
        price: 29.99,
        image: "images/products/os2.jpg",
        description: "Latest macOS operating system"
    },
    {
        id: "pixel-8-pro",
        name: "Google Pixel 8 Pro",
        brand: "Google",
        category: "Smartphones",
        price: 999.99,
        image: "images/products/phone3.jpg",
        description: "Advanced AI-powered smartphone"
    },
    {
        id: "rog-gaming-laptop",
        name: "ROG Gaming Laptop",
        brand: "ASUS",
        category: "Laptops",
        price: 1799.99,
        image: "images/products/laptop4.jpg",
        description: "High-performance gaming laptop"
    },
    {
        id: "rog-strix-g15",
        name: "ROG Strix G15",
        brand: "ASUS",
        category: "Laptops",
        price: 1599.99,
        image: "images/products/laptop5.jpg",
        description: "Premium gaming laptop"
    },
    {
        id: "rtx-4080",
        name: "NVIDIA GeForce RTX 4080",
        brand: "NVIDIA",
        category: "Components",
        price: 1199.99,
        image: "images/products/tech8.jpg",
        description: "High-end graphics card"
    },
    {
        id: "samsung-s24-ultra",
        name: "Samsung Galaxy S24 Ultra",
        brand: "Samsung",
        category: "Smartphones",
        price: 1299.99,
        image: "images/products/phone2.jpg",
        description: "Latest flagship Samsung smartphone"
    },
    {
        id: "sony-wh-1000xm5",
        name: "Sony WH-1000XM5",
        brand: "Sony",
        category: "Accessories",
        price: 399.99,
        image: "images/products/acc1.jpg",
        description: "Premium noise-cancelling headphones"
    },
    {
        id: "sony-wh1000xm4",
        name: "Sony WH-1000XM4",
        brand: "Sony",
        category: "Accessories",
        price: 349.99,
        image: "images/products/acc2.jpg",
        description: "High-end wireless headphones"
    },
    {
        id: "ubuntu-pro",
        name: "Ubuntu Pro",
        brand: "Canonical",
        category: "Software",
        price: 49.99,
        image: "images/products/os3.jpg",
        description: "Enterprise Linux distribution"
    },
    {
        id: "windows-11-pro",
        name: "Windows 11 Pro",
        brand: "Microsoft",
        category: "Software",
        price: 199.99,
        image: "images/products/os1.jpg",
        description: "Latest Windows operating system"
    }
];

// Add categories for filtering
const categories = [...new Set(products.map(product => product.category))];
const brands = [...new Set(products.map(product => product.brand))];

// Enhanced search functionality
function searchProducts() {
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');
    const searchTerm = searchInput.value.toLowerCase().trim();

    if (searchTerm === '') {
        searchResults.innerHTML = '';
        searchResults.style.display = 'none';
        return;
    }

    // Enhanced search algorithm
    const filteredProducts = products.filter(product => {
        const searchString = [
            product.name,
            product.brand,
            product.category,
            product.description,
            ...(product.searchTerms || [])
        ].join(' ').toLowerCase();

        return searchString.includes(searchTerm);
    });

    // Sort results by relevance
    filteredProducts.sort((a, b) => {
        const aRelevance = calculateRelevance(a, searchTerm);
        const bRelevance = calculateRelevance(b, searchTerm);
        return bRelevance - aRelevance;
    });

    displaySearchResults(filteredProducts.slice(0, 5)); // Show top 5 results
}

function calculateRelevance(product, searchTerm) {
    let score = 0;
    
    // Exact name match gets highest score
    if (product.name.toLowerCase().includes(searchTerm)) score += 10;
    
    // Brand match
    if (product.brand.toLowerCase().includes(searchTerm)) score += 5;
    
    // Category match
    if (product.category.toLowerCase().includes(searchTerm)) score += 3;
    
    // Search
    if (product.description.toLowerCase().includes(searchTerm)) score += 2;
    
    // Search terms
    if (product.searchTerms && product.searchTerms.includes(searchTerm)) score += 1;
    
    return score;
}

function displaySearchResults(results) {
    const searchResults = document.getElementById('searchResults');
    
    if (results.length === 0) {
        searchResults.innerHTML = '<p class="no-results">No products found</p>';
        searchResults.style.display = 'block';
        return;
    }

    const html = results.map(product => `
        <a href="products/${product.id}.html" class="search-result-item">
            <img src="${product.image}" alt="${product.name}">
            <div class="search-result-info">
                <h4>${product.name}</h4>
                <span class="brand">${product.brand}</span>
                <span class="price">$${product.price.toFixed(2)}</span>
            </div>
        </a>
    `).join('');
    
    searchResults.innerHTML = html;
    searchResults.style.display = 'block';
}

// Add event listeners
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        // Debounce search for better performance
        let searchTimeout;
        searchInput.addEventListener('input', () => {
            clearTimeout(searchTimeout);
            searchTimeout = setTimeout(searchProducts, 300);
        });

        // Close search results when clicking outside
        document.addEventListener('click', (e) => {
            const searchResults = document.getElementById('searchResults');
            if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
                searchResults.style.display = 'none';
            }
        });
    }
});

function displayCategoryProducts(categoryProducts) {
    const container = document.querySelector('.pro-container');
    container.innerHTML = '';

    categoryProducts.forEach(product => {
        container.innerHTML += `
            <div class="pro">
                <img src="../${product.image}" alt="${product.name}">
                <div class="des">
                    <span>${product.brand}</span>
                    <h5>${product.name}</h5>
                    <div class="star">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                    <h4>$${product.price}</h4>
                </div>
                <a href="../products/${product.name.toLowerCase().replace(/ /g, '-')}.html">
                    <i class="fas fa-shopping-cart cart"></i>
                </a>
            </div>
        `;
    });
}

// Filter functionality
function setupFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const products = document.querySelectorAll('.pro');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');
            
            const filterValue = btn.getAttribute('data-filter');
            
            products.forEach(product => {
                if (filterValue === 'all') {
                    product.style.display = 'block';
                } else {
                    const productBrand = product.querySelector('.des span').textContent.toLowerCase();
                    if (productBrand === filterValue) {
                        product.style.display = 'block';
                    } else {
                        product.style.display = 'none';
                    }
                }
            });
        });
    });
}

// Initialize filters when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    if (document.querySelector('.filter-btn')) {
        setupFilters();
    }
});

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        cart.addItem(product);
        alert('Product added to cart!');
    }
}