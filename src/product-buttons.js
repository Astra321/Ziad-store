// Standard product definitions
const productData = {
    "playstation-5": {
        id: "playstation-5",
        name: "PlayStation 5",
        price: 499.99,
        image: "../images/products/ps5.jpg"
    },
    "airpods-pro": {
        id: "airpods-pro",
        name: "AirPods Pro (2nd Generation)",
        price: 249.99,
        image: "../images/products/tech1.jpg"
    },
    "apple-watch-series-8": {
        id: "apple-watch-series-8",
        name: "Apple Watch Series 8",
        price: 399.99,
        image: "../images/products/tech2.jpg"
    },
    "dell-xps-15": {
        id: "dell-xps-15",
        name: "Dell XPS 15",
        price: 1999.99,
        image: "../images/products/laptop3.jpg"
    },
    "echo-dot": {
        id: "echo-dot",
        name: "Echo Dot (5th Gen)",
        price: 49.99,
        image: "../images/products/tech6.jpg"
    },
    "galaxy-s23-ultra": {
        id: "galaxy-s23-ultra",
        name: "Samsung Galaxy S23 Ultra",
        price: 1199.99,
        image: "../images/products/phone4.jpg"
    },
    "galaxy-tab-s8": {
        id: "galaxy-tab-s8",
        name: "Samsung Galaxy Tab S8",
        price: 699.99,
        image: "../images/products/tech4.jpg"
    },
    "ipad-pro": {
        id: "ipad-pro",
        name: "iPad Pro",
        price: 799.99,
        image: "../images/products/tech3.jpg"
    },
    "iphone-14-pro-max": {
        id: "iphone-14-pro-max",
        name: "iPhone 14 Pro Max",
        price: 1099.99,
        image: "../images/products/phone5.jpg"
    },
    "iphone-15-pro-max": {
        id: "iphone-15-pro-max",
        name: "iPhone 15 Pro Max",
        price: 1199.99,
        image: "../images/products/phone1.jpg"
    },
    "macbook-pro-16": {
        id: "macbook-pro-16",
        name: "MacBook Pro 16",
        price: 2499.99,
        image: "../images/products/laptop2.jpg"
    },
    "macbook-pro": {
        id: "macbook-pro",
        name: "MacBook Pro M2",
        price: 1299.99,
        image: "../images/products/laptop1.jpg"
    },
    "macos-sonoma": {
        id: "macos-sonoma",
        name: "macOS Sonoma",
        price: 29.99,
        image: "../images/products/os2.jpg"
    },
    "pixel-8-pro": {
        id: "pixel-8-pro",
        name: "Google Pixel 8 Pro",
        price: 999.99,
        image: "../images/products/phone3.jpg"
    },
    "rog-gaming-laptop": {
        id: "rog-gaming-laptop",
        name: "ROG Gaming Laptop",
        price: 1799.99,
        image: "../images/products/laptop4.jpg"
    },
    "rog-strix-g15": {
        id: "rog-strix-g15",
        name: "ROG Strix G15",
        price: 1599.99,
        image: "../images/products/laptop5.jpg"
    },
    "rtx-4080": {
        id: "rtx-4080",
        name: "NVIDIA GeForce RTX 4080",
        price: 1199.99,
        image: "../images/products/tech8.jpg"
    },
    "samsung-s24-ultra": {
        id: "samsung-s24-ultra",
        name: "Samsung Galaxy S24 Ultra",
        price: 1299.99,
        image: "../images/products/phone2.jpg"
    },
    "sony-wh-1000xm5": {
        id: "sony-wh-1000xm5",
        name: "Sony WH-1000XM5",
        price: 399.99,
        image: "../images/products/acc1.jpg"
    },
    "sony-wh1000xm4": {
        id: "sony-wh1000xm4",
        name: "Sony WH-1000XM4",
        price: 349.99,
        image: "../images/products/acc2.jpg"
    },
    "ubuntu-pro": {
        id: "ubuntu-pro",
        name: "Ubuntu Pro",
        price: 49.99,
        image: "../images/products/os3.jpg"
    },
    "windows-11-pro": {
        id: "windows-11-pro",
        name: "Windows 11 Pro",
        price: 199.99,
        image: "../images/products/os1.jpg"
    }
};

// Function to add product to cart
function addToCart(productId) {
    const product = productData[productId];
    if (product) {
        cart.addItem(product);
    }
} 