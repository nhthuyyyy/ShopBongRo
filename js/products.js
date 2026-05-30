// ===== DỮ LIỆU SẢN PHẨM =====
const products = [
    // BÓNG RỔ
    {
        id: 1,
        name: 'Bóng Rổ Spalding NBA',
        category: 'ball',
        price: 850000,
        oldPrice: 1200000,
        rating: 5,
        reviews: 128,
        description: 'Size 7 - Da tổng hợp cao cấp, chuẩn thi đấu NBA',
        badge: 'HOT',
        image: '/images/products/spalding-nba-ball.png',
        imageAlt: 'Bóng rổ Spalding NBA size 7 da tổng hợp chính hãng'
    },
    {
        id: 2,
        name: 'Bóng Wilson Evolution',
        category: 'ball',
        price: 1200000,
        oldPrice: 1600000,
        rating: 5,
        reviews: 93,
        description: 'Bóng da thật cao cấp, dùng cho sân trong nhà',
        badge: 'NEW',
        image: '/images/products/wilson-evolution-ball.png',
        imageAlt: 'Bóng Wilson Evolution da thật cao cấp'
    },
    {
        id: 3,
        name: 'Bóng Molten GG7',
        category: 'ball',
        price: 950000,
        oldPrice: 1300000,
        rating: 4,
        reviews: 76,
        description: 'Bóng thi đấu chuyên nghiệp, độ bền cao',
        image: '/images/products/molten-gg7-ball.png',
        imageAlt: 'Bóng Molten GG7 thi đấu chuyên nghiệp'
    },
    
    // GIÀY
    {
        id: 4,
        name: 'Nike Air Jordan 1 Retro',
        category: 'shoes',
        price: 3500000,
        oldPrice: 4200000,
        rating: 5,
        reviews: 256,
        description: 'Giày bóng rổ huyền thoại, đế cao su chống trượt',
        badge: 'NEW',
        image: '/images/jordan.png',
        imageAlt: 'Giày Nike Air Jordan 1 Retro huyền thoại'
    },
    {
        id: 5,
        name: 'Adidas Dame 8',
        category: 'shoes',
        price: 2800000,
        oldPrice: 3500000,
        rating: 4,
        reviews: 145,
        description: 'Giày bóng rổ cao cấp, thoải mái và bền',
        image: '/images/damdame8.png',
        imageAlt: 'Giày Adidas Dame 8 cao cấp'
    },
    {
        id: 6,
        name: 'Lebron 20',
        category: 'shoes',
        price: 3200000,
        oldPrice: 4000000,
        rating: 5,
        reviews: 189,
        description: 'Giày của huyền thoại LeBron James',
        image: '/images/products/lebron-20-shoe.png',
        imageAlt: 'Giày Nike LeBron 20'
    },
    {
        id: 7,
        name: 'Kyrie 9',
        category: 'shoes',
        price: 2500000,
        oldPrice: 3200000,
        rating: 4,
        reviews: 112,
        description: 'Giày bóng rổ nhẹ và nhanh nhạy',
        image: '/images/products/kyrie-9-shoe.png',
        imageAlt: 'Giày Nike Kyrie 9 nhẹ nhanh nhạy'
    },
    
    // ÁO THI ĐẤU
    {
        id: 8,
        name: 'Áo NBA Lakers #23 LeBron',
        category: 'jersey',
        price: 450000,
        oldPrice: 650000,
        rating: 4,
        reviews: 89,
        description: 'Vải thoáng khí, in số chính hãng, đủ size S-XXL',
        badge: 'SALE',
        image: '/images/products/lakers-lebron-23-jersey.png',
        imageAlt: 'Áo NBA Lakers #23 LeBron vải thoáng khí'
    },
    {
        id: 9,
        name: 'Áo NBA Warriors #30 Curry',
        category: 'jersey',
        price: 420000,
        oldPrice: 600000,
        rating: 5,
        reviews: 134,
        description: 'Áo thi đấu chính hãng NBA',
        image: '/images/products/warriors-curry-30-jersey.png',
        imageAlt: 'Áo NBA Warriors #30 Curry chính hãng'
    },
    {
        id: 10,
        name: 'Áo NBA Bulls #23 Jordan',
        category: 'jersey',
        price: 480000,
        oldPrice: 700000,
        rating: 5,
        reviews: 201,
        description: 'Áo huyền thoại của Michael Jordan',
        image: '/images/products/bulls-jordan-23-jersey.png',
        imageAlt: 'Áo NBA Bulls #23 Jordan huyền thoại'
    },
    {
        id: 11,
        name: 'Áo Thi Đấu Custom',
        category: 'jersey',
        price: 350000,
        oldPrice: 500000,
        rating: 4,
        reviews: 67,
        description: 'Áo thi đấu có thể in tên và số tùy chỉnh',
        image: '/images/products/custom-jersey.png',
        imageAlt: 'Áo thi đấu custom in tên số'
    },
    
    // PHỤ KIỆN
    {
        id: 12,
        name: 'Mũ NBA Snapback',
        category: 'accessories',
        price: 280000,
        oldPrice: 350000,
        rating: 4,
        reviews: 45,
        description: 'Mũ lưỡi trai NBA chính hãng, nhiều đội tuyển',
        image: '/images/nonLaker.png',
        imageAlt: 'Mũ NBA Snapback chính hãng'
    },
    {
        id: 13,
        name: 'Băng Tay Bóng Rổ',
        category: 'accessories',
        price: 120000,
        oldPrice: 180000,
        rating: 4,
        reviews: 67,
        description: 'Bộ băng tay + băng đầu, thấm hút mồ hôi tốt',
        image: '/images/products/wristband-headband.png',
        imageAlt: 'Băng tay băng đầu bóng rổ'
    },
    {
        id: 14,
        name: 'Túi Đựng Bóng Rổ',
        category: 'accessories',
        price: 150000,
        oldPrice: 220000,
        rating: 4,
        reviews: 52,
        description: 'Túi chuyên dụng đựng bóng rổ, bền và tiện lợi',
        image: '/images/products/basketball-bag.png',
        imageAlt: 'Túi đựng bóng rổ chuyên dụng'
    },
    {
        id: 15,
        name: 'Vớ Bóng Rổ',
        category: 'accessories',
        price: 85000,
        oldPrice: 120000,
        rating: 5,
        reviews: 98,
        description: 'Vớ chuyên dụng, thoáng khí và thoải mái',
        image: '/images/products/basketball-socks.png',
        imageAlt: 'Vớ bóng rổ thoáng khí'
    },
    {
        id: 16,
        name: 'Bảo Vệ Cổ Chân',
        category: 'accessories',
        price: 200000,
        oldPrice: 300000,
        rating: 4,
        reviews: 73,
        description: 'Bảo vệ cổ chân chuyên nghiệp, chống chấn thương',
        image: '/images/products/ankle-support.png',
        imageAlt: 'Bảo vệ cổ chân chuyên nghiệp'
    }
];

// ===== BIẾN TOÀN CỤC =====
let filteredProducts = [...products];
let currentCategory = 'all';
let currentPriceRange = { min: 0, max: 999999999 };
let currentRating = 0;
let currentSort = 'newest';

// ===== HÀM LỌC THEO DANH MỤC =====
function filterByCategory(category) {
    currentCategory = category;
    applyFilters();
    updateActiveFilter('category', category);
}

// ===== HÀM LỌC THEO GIÁ =====
function filterByPrice(min, max) {
    currentPriceRange = { min, max };
    applyFilters();
    updateActiveFilter('price', `${min}-${max}`);
}

// ===== HÀM LỌC THEO ĐÁNH GIÁ =====
function filterByRating(rating) {
    currentRating = rating;
    applyFilters();
    updateActiveFilter('rating', rating);
}

// ===== HÀM ÁP DỤNG TẤT CẢ BỘ LỌC =====
function applyFilters() {
    filteredProducts = products.filter(product => {
        // Lọc theo danh mục
        if (currentCategory !== 'all' && product.category !== currentCategory) {
            return false;
        }
        
        // Lọc theo giá
        if (product.price < currentPriceRange.min || product.price > currentPriceRange.max) {
            return false;
        }
        
        // Lọc theo đánh giá
        if (currentRating > 0 && product.rating < currentRating) {
            return false;
        }
        
        return true;
    });
    
    // Sắp xếp sản phẩm
    sortProductsList();
    
    // Hiển thị sản phẩm
    renderProducts();
}

// ===== HÀM SẮP XẾP SẢN PHẨM =====
function sortProducts(sortType) {
    currentSort = sortType;
    sortProductsList();
    renderProducts();
}

function sortProductsList() {
    switch(currentSort) {
        case 'price-low':
            filteredProducts.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            filteredProducts.sort((a, b) => b.price - a.price);
            break;
        case 'popular':
            filteredProducts.sort((a, b) => b.reviews - a.reviews);
            break;
        case 'newest':
        default:
            filteredProducts.sort((a, b) => b.id - a.id);
    }
}

// ===== HÀM HIỂN THỊ SẢN PHẨM =====
function renderProducts() {
    const productsGrid = document.getElementById('productsGrid');
    
    if (filteredProducts.length === 0) {
        productsGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 40px; color: #999;">Không tìm thấy sản phẩm phù hợp</p>';
        return;
    }
    
    let html = '';
    
    filteredProducts.forEach(product => {
        const stars = '⭐'.repeat(product.rating);
        const badgeClass = product.badge === 'HOT' ? '' : product.badge === 'NEW' ? 'new' : 'sale';
        const badgeHTML = product.badge ? `<div class="product-badge ${badgeClass}">${product.badge}</div>` : '';
        
        html += `
            <div class="product-card">
                ${badgeHTML}
                <div class="product-img">
                    <img src="${product.image}" 
                         alt="${product.imageAlt}"
                         loading="lazy"
                         width="300"
                         height="300">
                </div>
                <div class="product-info">
                    <span class="product-cat">${getCategoryName(product.category)}</span>
                    <h3>${product.name}</h3>
                    <p>${product.description}</p>
                    <div class="product-rating">
                        <span>${stars}</span>
                        <span class="review-count">(${product.reviews})</span>
                    </div>
                    <div class="product-price">
                        <span class="price-new">${product.price.toLocaleString()}₫</span>
                        <span class="price-old">${product.oldPrice.toLocaleString()}₫</span>
                    </div>
                    <button class="add-cart-btn" onclick="addToCart(this)">
                        <i class="fas fa-cart-plus"></i> Thêm Vào Giỏ
                    </button>
                </div>
            </div>
        `;
    });
    
    productsGrid.innerHTML = html;
}

// ===== HÀM LẤY TÊN DANH MỤC =====
function getCategoryName(category) {
    const categories = {
        'ball': 'BÓNG RỔ',
        'shoes': 'GIÀY',
        'jersey': 'ÁO THI ĐẤU',
        'accessories': 'PHỤ KIỆN'
    };
    return categories[category] || 'SẢN PHẨM';
}

// ===== HÀM CẬP NHẬT ACTIVE FILTER =====
function updateActiveFilter(type, value) {
    // Xóa active class từ tất cả filter cùng loại
    const filters = document.querySelectorAll(`.filter-list a`);
    filters.forEach(filter => {
        filter.classList.remove('filter-active');
    });
    
    // Thêm active class cho filter được chọn
    if (type === 'category') {
        const categoryLink = document.querySelector(`.filter-list a[onclick*="filterByCategory('${value}')"]`);
        if (categoryLink) categoryLink.classList.add('filter-active');
    }
}

// ===== KHỞI TẠO TRANG =====
document.addEventListener('DOMContentLoaded', () => {
    // Hiển thị tất cả sản phẩm lần đầu
    renderProducts();
    
    // Đặt active cho "Tất Cả Sản Phẩm"
    const allLink = document.querySelector(`.filter-list a[onclick*="filterByCategory('all')"]`);
    if (allLink) allLink.classList.add('filter-active');
    
    // ===== MOBILE FILTER DROPDOWN =====
    if (window.innerWidth <= 768) {
        const filterSections = document.querySelectorAll('.filter-section');
        
        filterSections.forEach(section => {
            const heading = section.querySelector('h3');
            
            if (heading) {
                heading.addEventListener('click', () => {
                    section.classList.toggle('open');
                });
            }
        });
    }
});
