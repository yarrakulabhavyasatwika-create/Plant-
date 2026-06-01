document.addEventListener('DOMContentLoaded', () => {
    let cartCount = 0;
    const cartCountElement = document.getElementById('cart-count');
    const addButtons = document.querySelectorAll('.add-btn');
    const subscribeBtn = document.getElementById('subscribe-btn');
    const newsletterInput = document.getElementById('newsletter-input');

    // 1. Add to Cart functionality
    addButtons.forEach(button => {
        button.addEventListener('click', () => {
            cartCount++;
            cartCountElement.textContent = cartCount;
            
            // Subtle pulse animation on cart count
            cartCountElement.parentElement.style.transform = 'scale(1.1)';
            setTimeout(() => {
                cartCountElement.parentElement.style.transform = 'scale(1)';
            }, 150);
        });
    });

    // 2. Simple Newsletter Subscription Validation
    if (subscribeBtn) {
        subscribeBtn.addEventListener('click', () => {
            const email = newsletterInput.value.trim();
            if (email === '') {
                alert('Please enter your email address.');
            } else if (!validateEmail(email)) {
                alert('Please enter a valid email address.');
            } else {
                alert('Thank you for subscribing to Verdant! 🌿');
                newsletterInput.value = '';
            }
        });
    }

    // Helper email validator function
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});