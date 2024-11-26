import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { db } from './firebase-config';

class CheckoutManager {
    constructor() {
        this.form = document.getElementById('payment-form');
        this.cart = JSON.parse(localStorage.getItem('cart')) || [];
        this.initializeCheckout();
    }

    initializeCheckout() {
        this.displayOrderSummary();
        this.calculateTotals();
        this.setupEventListeners();
    }

    displayOrderSummary() {
        const checkoutItems = document.getElementById('checkout-items');
        checkoutItems.innerHTML = this.cart.map(item => `
            <div class="checkout-item">
                <img src="${item.image}" alt="${item.name}">
                <div class="checkout-item-details">
                    <h4>${item.name}</h4>
                    <p>Quantity: ${item.quantity}</p>
                    <p class="checkout-item-price">$${(item.price * item.quantity).toFixed(2)}</p>
                </div>
            </div>
        `).join('');
    }

    calculateTotals() {
        const subtotal = this.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        const shipping = subtotal > 100 ? 0 : 10; // Free shipping over $100
        const tax = subtotal * 0.1; // 10% tax
        const total = subtotal + shipping + tax;

        document.getElementById('subtotal-amount').textContent = `$${subtotal.toFixed(2)}`;
        document.getElementById('shipping-amount').textContent = `$${shipping.toFixed(2)}`;
        document.getElementById('tax-amount').textContent = `$${tax.toFixed(2)}`;
        document.getElementById('total-amount').textContent = `$${total.toFixed(2)}`;
    }

    setupEventListeners() {
        this.form.addEventListener('submit', async (e) => {
            e.preventDefault();
            await this.handleSubmit();
        });
    }

    async handleSubmit() {
        try {
            const formData = this.getFormData();
            const orderRef = await this.saveOrder(formData);
            
            // Clear cart and redirect to success page
            localStorage.removeItem('cart');
            window.location.href = `/order-success.html?orderId=${orderRef.id}`;
        } catch (error) {
            console.error('Error processing order:', error);
            alert('There was an error processing your order. Please try again.');
        }
    }

    getFormData() {
        return {
            email: document.getElementById('email').value,
            fullName: document.getElementById('fullName').value,
            address: document.getElementById('address').value,
            city: document.getElementById('city').value,
            state: document.getElementById('state').value,
            zip: document.getElementById('zip').value,
            country: document.getElementById('country').value,
            items: this.cart,
            totals: {
                subtotal: parseFloat(document.getElementById('subtotal-amount').textContent.slice(1)),
                shipping: parseFloat(document.getElementById('shipping-amount').textContent.slice(1)),
                tax: parseFloat(document.getElementById('tax-amount').textContent.slice(1)),
                total: parseFloat(document.getElementById('total-amount').textContent.slice(1))
            },
            orderDate: new Date(),
            status: 'pending'
        };
    }

    async saveOrder(orderData) {
        const ordersRef = collection(db, 'orders');
        return await addDoc(ordersRef, orderData);
    }
}

// Initialize checkout when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new CheckoutManager();
}); 