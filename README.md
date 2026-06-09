# Portfolio

Trang portfolio cá nhân — phong cách creative developer. Song ngữ Việt/Anh, dark/light theme, animation cuộn mượt.

**Tech:** Vite + React 18 + Tailwind CSS + Framer Motion + react-i18next.

## Chạy dự án

```bash
npm install      # cài dependencies (chỉ cần 1 lần)
npm run dev      # chạy dev server -> http://localhost:5173
npm run build    # build production vào thư mục dist/
npm run preview  # xem thử bản build
```

## ⭐ Nơi điền thông tin thật

Chỉ cần sửa các file dữ liệu, **không cần đụng vào layout**:

| File                       | Nội dung                                                               |
| -------------------------- | ----------------------------------------------------------------------- |
| `src/data/profile.js`    | Tên, chức danh, tagline, email, social links, đường dẫn CV/avatar |
| `src/data/about.js`      | Đoạn giới thiệu + số liệu nổi bật                               |
| `src/data/education.js`  | Học vấn (timeline)                                                    |
| `src/data/experience.js` | Kinh nghiệm làm việc (timeline)                                      |
| `src/data/projects.js`   | Danh sách dự án                                                      |
| `src/data/skills.js`     | Kỹ năng & tech stack                                                  |

Các trường dạng `{ vi: "...", en: "..." }` là song ngữ — trang tự chọn theo ngôn ngữ.

### Nhãn giao diện (nút, tiêu đề mục)

Sửa trong `src/i18n/vi.json` và `src/i18n/en.json`.

### Ảnh & file

Đặt vào thư mục `public/` rồi trỏ đường dẫn trong data (vd `/avatar.jpg`):

- `public/avatar.jpg` — ảnh chân dung
- `public/projects/*.jpg` — screenshot dự án
- `public/resume-vi.pdf`, `public/resume-en.pdf` — CV

### Màu sắc / theme

Đổi bảng màu trong `src/index.css` (các biến `--color-*` cho light & `.dark`).
