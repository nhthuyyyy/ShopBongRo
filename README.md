# Milkun Shop - Hướng Dẫn Xây Dựng Trang Web

## 📋 Mục Lục
1. [Cấu Trúc Dự Án](#cấu-trúc-dự-án)
2. [Các Thành Phần Chính](#các-thành-phần-chính)
3. [Hướng Dẫn Chi Tiết](#hướng-dẫn-chi-tiết)
4. [Công Dụng Từng Phần](#công-dụng-từng-phần)

---

## 🗂️ Cấu Trúc Dự Án

```
ShopBongRo/
├── index.html              # Trang chủ chính
├── lab.html                # Trang danh sách bài lab
├── css/
│   └── style.css           # Stylesheet chính
├── js/
│   └── (JavaScript files)
├── images/                 # Thư mục hình ảnh
├── lab_thuc_hanh/          # Thư mục bài tập
│   ├── Lab01/
│   ├── Lab02/
│   ├── Lab03/
│   ├── Lab04/
│   ├── Lab05/
│   └── ...
└── README.md               # File này
```

---

## 🎯 Các Thành Phần Chính

### 1. **TOP BAR** (Thanh Thông Tin Trên Cùng)
**Công dụng:** Hiển thị thông tin liên hệ nhanh
- Hotline
- Email
- Địa chỉ cửa hàng

**HTML:**
```html
<div class="topbar">
    <div class="topbar-inner">
        <span><i class="fas fa-phone"></i> Hotline: 0909 123 456</span>
        <span><i class="fas fa-envelope"></i> Milkun@gmail.com</span>
        <span><i class="fas fa-map-marker-alt"></i> Quận 1, TP. Hồ Chí Minh</span>
    </div>
</div>
```

**CSS:** `.topbar` - Nền đen, text xám, căn giữa

---

### 2. **HEADER** (Phần Đầu Trang)
**Công dụng:** Chứa logo, menu chính, tìm kiếm, giỏ hàng

#### 2.1 Logo
- Hiển thị tên cửa hàng "Milkun SHOP"
- Slogan "Basketball & more"

#### 2.2 Navigation Menu (Menu Chính)
**Công dụng:** Điều hướng đến các trang khác
- Trang Chủ
- Sản Phẩm
- Danh Mục (Dropdown)
- Giới Thiệu
- Liên Hệ
- Lab Thực Hành

**Dropdown Danh Mục:**
```html
<li class="dropdown" id="dropdownItem">
    <a href="#" id="dropdownToggle">Danh Mục ▾</a>
    <ul class="dropdown-menu">
        <li><a href="#">Bóng rổ</a></li>
        <li><a href="#">Giày bóng rổ</a></li>
        <li><a href="#">Áo thi đấu</a></li>
        <li><a href="#">Phụ kiện</a></li>
    </ul>
</li>
```

#### 2.3 Search Box (Ô Tìm Kiếm)
**Công dụng:** Cho phép người dùng tìm kiếm sản phẩm
- Input field: Nhập từ khóa
- Button: Nút tìm kiếm (icon magnifying glass)

#### 2.4 Cart Button (Nút Giỏ Hàng)
**Công dụng:** Hiển thị số lượng sản phẩm trong giỏ
- Icon giỏ hàng
- Badge số lượng (`.cart-count`)

---

### 3. **HERO BANNER** (Phần Quảng Cáo Chính)
**Công dụng:** Tạo ấn tượng đầu tiên, quảng bá thương hiệu

**Nội dung:**
- Tiêu đề lớn: "Milkun"
- Slogan: "Basketball & More"
- Mô tả: "Chuyên cung cấp bóng rổ, giày, áo thi đấu..."
- 2 nút CTA: "Mua Ngay" (Primary), "Tìm Hiểu Thêm" (Outline)
- Hình ảnh: Bóng rổ hoạt động (animation bounce)

**CSS:**
- Gradient background: Từ đen sang xanh đậm
- Animation: Bóng rổ nhảy lên xuống

---

### 4. **FEATURES BAR** (Thanh Tính Năng)
**Công dụng:** Highlight các ưu điểm chính của cửa hàng

**4 Tính Năng:**
1. 🚚 **Giao Hàng Nhanh** - Toàn TP.HCM trong 2h
2. ✅ **Hàng Chính Hãng** - 100% authentic
3. 🔄 **Đổi Trả 7 Ngày** - Không cần lý do
4. 💬 **Hỗ Trợ 24/7** - Tư vấn miễn phí

**CSS:** Nền cam (#ff6b00), text trắng, layout grid 4 cột

---

### 5. **PRODUCTS SECTION** (Phần Sản Phẩm Nổi Bật)
**Công dụng:** Hiển thị các sản phẩm bán chạy

**Cấu Trúc Mỗi Product Card:**
```html
<div class="product-card">
    <div class="product-badge">HOT/NEW/SALE</div>
    <div class="product-img">🏀</div>
    <div class="product-info">
        <span class="product-cat">Danh mục</span>
        <h3>Tên sản phẩm</h3>
        <p>Mô tả ngắn</p>
        <div class="product-rating">⭐⭐⭐⭐⭐ (128)</div>
        <div class="product-price">
            <span class="price-new">850.000₫</span>
            <span class="price-old">1.200.000₫</span>
        </div>
        <button class="add-cart-btn">Thêm Vào Giỏ</button>
    </div>
</div>
```

**CSS:**
- Grid 3 cột trên desktop, 2 cột tablet, 1 cột mobile
- Hover effect: Nâng lên, shadow cam
- Badge: HOT (cam), NEW (xanh), SALE (đỏ)

---

### 6. **CATEGORIES SECTION** (Phần Danh Mục)
**Công dụng:** Cho phép người dùng duyệt theo danh mục

**4 Danh Mục:**
- 🏀 Bóng Rổ
- 👟 Giày Bóng Rổ
- 👕 Áo Thi Đấu
- 🧢 Phụ Kiện

**CSS:**
- Grid 4 cột
- Hover: Nền cam, text trắng, nâng lên

---

### 7. **PROMO BANNER** (Phần Khuyến Mãi)
**Công dụng:** Quảng bá chương trình sale

**Nội dung:**
- 🔥 SALE CUỐI TUẦN
- Giảm đến 40% toàn bộ sản phẩm
- Áp dụng từ thứ 6 đến chủ nhật

**CSS:**
- Gradient cam-đỏ
- Animation: Emoji pulse (phóng to/nhỏ)

---

### 8. **WHY SECTION** (Tại Sao Chọn Chúng Tôi)
**Công dụng:** Xây dựng niềm tin khách hàng

**4 Lý Do:**
1. 🏆 Uy Tín 10 Năm
2. ✅ Hàng Chính Hãng
3. 💰 Giá Tốt Nhất
4. 🎯 Tư Vấn Chuyên Nghiệp

**CSS:**
- Grid 4 cột
- Card: Nền trắng, border-bottom cam khi hover

---

### 9. **REVIEWS SECTION** (Phần Đánh Giá)
**Công dụng:** Hiển thị feedback từ khách hàng

**Cấu Trúc Review:**
```html
<div class="review-card">
    <div class="review-stars">⭐⭐⭐⭐⭐</div>
    <p>"Mua bóng Spalding ở đây, chất lượng tuyệt vời..."</p>
    <div class="reviewer">
        <div class="reviewer-avatar">N</div>
        <div>
            <strong>Nguyễn Văn An</strong>
            <span>Quận 3, TP.HCM</span>
        </div>
    </div>
</div>
```

**CSS:**
- Nền đen (#111), text xám
- Grid 3 cột
- Avatar: Hình tròn cam

---

### 10. **FOOTER** (Phần Chân Trang)
**Công dụng:** Cung cấp thông tin bổ sung, liên kết

**4 Cột:**
1. **Logo & Mô Tả** - Giới thiệu cửa hàng + Social links
2. **Danh Mục** - Link đến các danh mục sản phẩm
3. **Hỗ Trợ** - Chính sách, hướng dẫn, FAQ
4. **Liên Hệ** - Địa chỉ, phone, email, giờ mở cửa

**CSS:**
- Nền tối (#0a0a0a)
- Grid 4 cột
- Border-bottom cam cho tiêu đề

---

### 11. **BACK TO TOP** (Nút Lên Đầu Trang)
**Công dụng:** Giúp người dùng quay lại đầu trang nhanh chóng

**Tính Năng:**
- Hiển thị khi scroll > 300px
- Click: Smooth scroll lên đầu
- Icon: Mũi tên lên

**CSS:**
- Fixed position, bottom-right
- Nền cam, hover: đỏ hơn

---

## 📱 Responsive Design

### Breakpoints:
- **Desktop:** > 1024px (mặc định)
- **Tablet:** 768px - 1024px
- **Mobile:** < 768px
- **Small Mobile:** < 480px

### Thay Đổi Theo Kích Thước:
- **Desktop:** Grid 3 cột sản phẩm, menu ngang
- **Tablet:** Grid 2 cột sản phẩm
- **Mobile:** Grid 1 cột, menu hamburger, dropdown toggle

---

## 🔧 JavaScript Functionality

### 1. **Hamburger Menu**
```javascript
// Mở/đóng menu khi click hamburger
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mainNav.classList.toggle('open');
});
```

### 2. **Dropdown Menu (Mobile)**
```javascript
// Toggle dropdown khi click "Danh Mục" trên mobile
dropdownToggle.addEventListener('click', (e) => {
    if (window.innerWidth <= 768) {
        e.preventDefault();
        dropdownItem.classList.toggle('open');
    }
});
```

### 3. **Add to Cart**
```javascript
// Thêm sản phẩm vào giỏ
function addToCart(btn) {
    cartCount++;
    document.querySelector('.cart-count').textContent = cartCount;
    btn.textContent = '✓ Đã Thêm!';
    btn.style.background = '#28a745';
}
```

### 4. **Back to Top**
```javascript
// Hiển thị nút khi scroll > 300px
window.addEventListener('scroll', () => {
    const btn = document.querySelector('.back-to-top');
    btn.style.display = window.scrollY > 300 ? 'block' : 'none';
});
```

---

## 🎨 Màu Sắc Chính

| Tên | Hex | Công Dụng |
|-----|-----|----------|
| Primary Orange | #ff6b00 | CTA, Hover, Highlight |
| Dark Orange | #e55a00 | Hover state |
| Dark BG | #111 | Header, Footer |
| Light Gray | #f5f5f5 | Body background |
| Text Dark | #222 | Text chính |
| Text Light | #ddd | Text trên dark bg |

---

## 📚 Lab Thực Hành

Trang `lab.html` liệt kê 8 bài lab:
- **Lab01-03:** HTML cơ bản
- **Lab04-06:** CSS & Responsive
- **Lab07-08:** JavaScript

Mỗi bài lab có link dẫn đến file HTML tương ứng trong thư mục `lab_thuc_hanh/`

---

## 🚀 Cách Sử Dụng

1. **Clone repository:**
   ```bash
   git clone https://github.com/nhthuyyyy/ShopBongRo.git
   ```

2. **Mở trang chủ:**
   - Mở `index.html` trong trình duyệt

3. **Xem bài lab:**
   - Click "Lab Thực Hành" trong menu
   - Chọn bài lab muốn xem

4. **Chỉnh sửa code:**
   - Sửa file HTML/CSS/JS
   - Refresh trình duyệt để xem thay đổi

---

## 📝 Ghi Chú

- Tất cả hình ảnh được lưu trong thư mục `images/` hoặc `lab_thuc_hanh/`
- CSS được tổ chức theo từng section
- JavaScript được comment rõ ràng
- Responsive design được test trên các kích thước khác nhau

---

## 👨‍💻 Tác Giả

**Milkun Shop** - Dự án học tập về Web Development

---

**Cập nhật lần cuối:** May 20, 2026
