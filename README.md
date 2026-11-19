# Mê Cung Thủ Thành — bản app (PWA)

Toàn bộ game nằm trong thư mục này, không cần build:

- `index.html` — game (canvas 2D, không thư viện ngoài)
- `manifest.webmanifest` — thông tin app: tên, icon, toàn màn hình, khóa màn hình dọc
- `sw.js` — service worker, cho phép chơi khi không có mạng
- `icons/` — icon app

## Đưa lên mạng để cài lên điện thoại
PWA chỉ cài được khi chạy qua HTTPS. Cách dễ nhất (miễn phí):
- **Netlify Drop**: kéo thả cả thư mục này vào https://app.netlify.com/drop
- **GitHub Pages**: đẩy thư mục lên một repo, bật Pages trong Settings

Sau đó mở link trên điện thoại:
- Android (Chrome): menu ⋮ → "Cài đặt ứng dụng" / "Thêm vào màn hình chính"
- iPhone (Safari): nút Chia sẻ → "Thêm vào MH chính"

## Chạy thử trên máy tính
```
npx serve .
```
rồi mở http://localhost:3000

## Khi sửa game
Đổi `VERSION` trong `sw.js` (vd. `mctt-v2`) để máy người chơi tải bản mới.
