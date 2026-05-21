// ===== GIỎ HÀNG =====
let cart = [];

function addToCart(btn) {
    // Lấy thông tin sản phẩm từ card
    const card = btn.closest('.product-card');
    const productName = card.querySelector('.product-info h3').textContent;
    const productPrice = parseInt(card.querySelector('.price-new').textContent.replace(/\D/g, ''));
    
    // Kiểm tra sản phẩm đã có trong giỏ chưa
    const existingItem = cart.find(item => item.name === productName);
    
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            name: productName,
            price: productPrice,
            quantity: 1
        });
    }
    
    // Cập nhật số lượng giỏ hàng
    updateCartCount();
    
    // Hiệu ứng nút
    btn.textContent = '✓ Đã Thêm!';
    btn.style.background = '#28a745';
    setTimeout(() => {
        btn.innerHTML = '<i class="fas fa-cart-plus"></i> Thêm Vào Giỏ';
        btn.style.background = '';
    }, 1500);
}

function updateCartCount() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.querySelector('.cart-count').textContent = totalItems;
}

function openCart() {
    renderCart();
    document.getElementById('cartModal').style.display = 'flex';
}

function closeCart() {
    document.getElementById('cartModal').style.display = 'none';
}

function renderCart() {
    const cartItemsDiv = document.getElementById('cartItems');
    
    if (cart.length === 0) {
        cartItemsDiv.innerHTML = '<p class="empty-cart">Giỏ hàng trống</p>';
        document.getElementById('cartTotal').textContent = '0₫';
        return;
    }

    let html = '';
    let total = 0;

    cart.forEach((item, index) => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        
        html += `
            <div class="cart-item">
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <p class="cart-item-price">${item.price.toLocaleString()}₫</p>
                </div>
                <div class="cart-item-quantity">
                    <button onclick="decreaseQuantity(${index})">-</button>
                    <input type="number" value="${item.quantity}" readonly>
                    <button onclick="increaseQuantity(${index})">+</button>
                </div>
                <div class="cart-item-total">
                    ${itemTotal.toLocaleString()}₫
                </div>
                <button class="cart-item-remove" onclick="removeFromCart(${index})">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `;
    });

    cartItemsDiv.innerHTML = html;
    document.getElementById('cartTotal').textContent = total.toLocaleString() + '₫';
}

function increaseQuantity(index) {
    cart[index].quantity++;
    updateCartCount();
    renderCart();
}

function decreaseQuantity(index) {
    if (cart[index].quantity > 1) {
        cart[index].quantity--;
    } else {
        removeFromCart(index);
    }
    updateCartCount();
    renderCart();
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartCount();
    renderCart();
}

function checkout() {
    if (cart.length === 0) {
        alert('Giỏ hàng trống!');
        return;
    }
    alert('Cảm ơn bạn đã mua hàng! Tổng: ' + document.getElementById('cartTotal').textContent);
    cart = [];
    updateCartCount();
    closeCart();
}

// Click vào giỏ hàng để mở
document.querySelector('.cart-btn').addEventListener('click', (e) => {
    e.preventDefault();
    openCart();
});

// Đóng modal khi click ngoài
document.getElementById('cartModal').addEventListener('click', (e) => {
    if (e.target.id === 'cartModal') {
        closeCart();
    }
});

// ===== HAMBURGER MENU =====
const hamburger = document.getElementById('hamburger');
const mainNav   = document.getElementById('mainNav');
const navClose  = document.getElementById('navClose');

// Mở menu
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mainNav.classList.toggle('open');
    document.body.style.overflow = mainNav.classList.contains('open') ? 'hidden' : '';
});

// Đóng menu bằng nút X
navClose.addEventListener('click', () => {
    hamburger.classList.remove('open');
    mainNav.classList.remove('open');
    document.body.style.overflow = '';
});

// Đóng menu khi click ra ngoài
mainNav.addEventListener('click', (e) => {
    if (e.target === mainNav) {
        hamburger.classList.remove('open');
        mainNav.classList.remove('open');
        document.body.style.overflow = '';
    }
});

// ===== DROPDOWN MOBILE (tap để mở) =====
const dropdownToggle = document.getElementById('dropdownToggle');
const dropdownItem   = document.getElementById('dropdownItem');

dropdownToggle.addEventListener('click', (e) => {
    // Chỉ toggle trên mobile
    if (window.innerWidth <= 768) {
        e.preventDefault();
        dropdownItem.classList.toggle('open');
    }
});

// ===== BACK TO TOP =====
window.addEventListener('scroll', () => {
    const btn = document.querySelector('.back-to-top');
    btn.style.display = window.scrollY > 300 ? 'block' : 'none';
});
