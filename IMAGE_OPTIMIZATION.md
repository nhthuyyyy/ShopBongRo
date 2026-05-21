# Image Optimization Guide - MilkunSHOP

## 📸 Tại Sao Cần Tối Ưu Hình Ảnh?

1. **Page Speed** - Hình ảnh chiếm 50-70% dung lượng trang web
2. **SEO** - Google ưu tiên trang web load nhanh
3. **User Experience** - Người dùng không thích chờ đợi
4. **Mobile** - Tiết kiệm data cho người dùng mobile
5. **Core Web Vitals** - LCP (Largest Contentful Paint) phụ thuộc vào hình ảnh

---

## 🎯 Checklist Tối Ưu

### 1. **Format Đúng**
- ✅ **WebP** - Format hiện đại, nhẹ hơn 25-35% so với JPEG/PNG
- ✅ **JPEG** - Cho ảnh sản phẩm, photos
- ✅ **PNG** - Cho logo, icons có nền trong suốt
- ✅ **SVG** - Cho icons, illustrations

### 2. **Kích Thước Phù Hợp**
```
Hero Banner: 1920x1080px (max)
Product Images: 800x800px
Thumbnails: 300x300px
Icons: 64x64px hoặc SVG
Logo: 200x100px hoặc SVG
```

### 3. **Compression**
- JPEG: Quality 80-85%
- PNG: TinyPNG hoặc ImageOptim
- WebP: Quality 80%

### 4. **Lazy Loading**
```html
<img src="image.jpg" loading="lazy" alt="Description">
```

### 5. **Responsive Images**
```html
<picture>
  <source srcset="image-large.webp" media="(min-width: 1024px)" type="image/webp">
  <source srcset="image-medium.webp" media="(min-width: 768px)" type="image/webp">
  <source srcset="image-small.webp" media="(max-width: 767px)" type="image/webp">
  <img src="image.jpg" alt="Description" loading="lazy">
</picture>
```

### 6. **Alt Tags (SEO)**
```html
<!-- ❌ Bad -->
<img src="product.jpg" alt="product">

<!-- ✅ Good -->
<img src="spalding-nba-basketball.jpg" 
     alt="Bóng rổ Spalding NBA size 7 da tổng hợp chính hãng" 
     loading="lazy">
```

---

## 🛠️ Tools Để Tối Ưu

### Online Tools:
1. **TinyPNG** - https://tinypng.com/
2. **Squoosh** - https://squoosh.app/
3. **ImageOptim** - https://imageoptim.com/
4. **Compressor.io** - https://compressor.io/

### CLI Tools:
```bash
# ImageMagick
convert input.jpg -quality 85 output.jpg

# WebP conversion
cwebp -q 80 input.jpg -o output.webp

# Batch convert
for file in *.jpg; do cwebp -q 80 "$file" -o "${file%.jpg}.webp"; done
```

### Node.js:
```bash
npm install sharp
```

```javascript
const sharp = require('sharp');

sharp('input.jpg')
  .resize(800, 800)
  .webp({ quality: 80 })
  .toFile('output.webp');
```

---

## 📋 Hình Ảnh Cần Tạo

### Icons (PWA):
- [ ] icon-72x72.png
- [ ] icon-96x96.png
- [ ] icon-128x128.png
- [ ] icon-144x144.png
- [ ] icon-152x152.png
- [ ] icon-192x192.png
- [ ] icon-384x384.png
- [ ] icon-512x512.png

### Social Media:
- [ ] og-image.jpg (1200x630px) - Facebook/LinkedIn
- [ ] twitter-image.jpg (1200x675px) - Twitter
- [ ] logo.png (500x500px) - General use

### Products:
- [ ] spalding-nba.jpg/webp
- [ ] jordan-1.jpg/webp
- [ ] lakers-lebron.jpg/webp
- [ ] (Tất cả sản phẩm khác)

### Store:
- [ ] store.jpg - Ảnh cửa hàng
- [ ] banner.jpg - Hero banner

---

## 💡 Best Practices

1. **Naming Convention**
   ```
   product-name-variant.format
   spalding-nba-basketball-size7.webp
   nike-jordan-1-retro-red.webp
   ```

2. **Folder Structure**
   ```
   /images
     /products
       /balls
       /shoes
       /jerseys
       /accessories
     /icons
     /social
     /store
   ```

3. **CDN Usage**
   - Sử dụng CDN như Cloudflare, CloudFront
   - Tự động optimize và serve WebP

4. **Preload Important Images**
   ```html
   <link rel="preload" as="image" href="hero-banner.webp">
   ```

5. **Image Dimensions**
   ```html
   <img src="image.jpg" 
        width="800" 
        height="800" 
        alt="Description"
        loading="lazy">
   ```

---

## 📊 Kiểm Tra Performance

### Tools:
1. **Google PageSpeed Insights** - https://pagespeed.web.dev/
2. **GTmetrix** - https://gtmetrix.com/
3. **WebPageTest** - https://www.webpagetest.org/

### Metrics:
- LCP (Largest Contentful Paint) < 2.5s
- Image file size < 200KB
- Total page size < 3MB

---

## 🚀 Quick Wins

1. Convert all JPG/PNG to WebP
2. Add `loading="lazy"` to all images
3. Add proper alt tags
4. Resize images to actual display size
5. Use CDN for image delivery
6. Enable browser caching
7. Use responsive images with `<picture>`

---

**Last Updated:** May 21, 2026
