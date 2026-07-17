# 👥 Employee Management App (Ứng dụng Quản Lý Nhân Viên)

![React](https://img.shields.io/badge/React-19.2-61DAFB?logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-8.1-646CFF?logo=vite&logoColor=white)
![Ant Design](https://img.shields.io/badge/Ant%20Design-6.5-0170FE?logo=antdesign&logoColor=white)
![Formik](https://img.shields.io/badge/Formik-2.4-0050E6)
![Sass](https://img.shields.io/badge/Sass-1.101-CC6699?logo=sass&logoColor=white)

Ứng dụng **Quản Lý Nhân Viên (Employee Management)** là một dự án frontend hiện đại được xây dựng bằng **React 19** và **Vite**, kết hợp với thư viện UI **Ant Design**. Dự án cung cấp đầy đủ các tính năng quản lý danh sách nhân viên, thao tác CRUD (Thêm, Xem, Sửa, Xóa), tìm kiếm, lọc dữ liệu cùng trải nghiệm người dùng (UX) trực quan và thân thiện.

---

## ✨ Tính năng nổi bật

- 📋 **Hiển thị danh sách nhân viên**:
  - Bảng dữ liệu chuyên nghiệp (Data Table) từ Ant Design.
  - Hỗ trợ **phân trang (Pagination)** và tùy chọn số lượng bản ghi hiển thị trên trang ($5, 10, 20$ bản ghi).
  - Hỗ trợ **sắp xếp (Sorting)** theo ID, Họ Tên và Phòng Ban.
- 🔍 **Tìm kiếm & Lọc thông minh**:
  - **Tìm kiếm theo thời gian thực**: Nhập từ khóa để tìm kiếm theo **Họ Tên** hoặc **Email**.
  - **Lọc theo phòng ban**: Dễ dàng lọc nhân viên theo các phòng ban như *IT, HR, Marketing, Support, QA* hoặc *Tất cả*.
- ➕ **Thêm mới nhân viên**:
  - Form nhập liệu trực quan trong Modal được quản lý bởi **Formik**.
  - **Kiểm tra dữ liệu (Form Validation)** tự động (kiểm tra bắt buộc nhập tên, định dạng chuẩn của Email...).
  - Tự động sinh mã ID duy nhất bằng **UUID v14**.
- ✏️ **Chỉnh sửa thông tin**:
  - Cập nhật thông tin chi tiết (Họ tên, Email, Địa chỉ, Phòng ban) của từng nhân viên ngay trên Modal với dữ liệu cũ được điền sẵn.
- 🗑️ **Xóa nhân viên an toàn**:
  - Hộp thoại xác nhận trước khi xóa (`Modal.confirm`) giúp tránh các thao tác nhầm lẫn.
- 🔔 **Thông báo phản hồi (Toast Notifications)**:
  - Hiển thị thông báo ngay tức thì với `message` của Ant Design khi các thao tác thêm, sửa, hoặc xóa thành công.

---

## 🛠️ Công nghệ & Thư viện sử dụng

| Công nghệ / Thư viện | Phiên bản | Mục đích sử dụng |
| :--- | :---: | :--- |
| **[React](https://react.dev/)** | `^19.2.7` | Thư viện Core xây dựng giao diện người dùng (Components, Hooks) |
| **[Vite](https://vite.dev/)** | `^8.1.1` | Công cụ build & dev server siêu nhanh, HMR mượt mà |
| **[Ant Design (antd)](https://ant.design/)** | `^6.5.1` | Thư viện UI hiện đại (Table, Modal, Select, Input, Button, Message...) |
| **[Formik](https://formik.org/)** | `^2.4.9` | Quản lý trạng thái form và xử lý validation dễ dàng |
| **[UUID](https://github.com/uuidjs/uuid)** | `^14.0.1` | Tự động tạo chuỗi ID duy nhất cho nhân viên mới |
| **[Sass](https://sass-lang.com/)** | `^1.101.0` | Hỗ trợ viết CSS nâng cao với SCSS và CSS Modules |
| **[Oxlint](https://oxc.rs/docs/tools/oxlint.html)** | `^1.71.0` | Linter siêu tốc giúp đảm bảo chất lượng và chuẩn mực code |

---

## 🚀 Hướng dẫn cài đặt & Khởi chạy

### 1. Yêu cầu hệ thống
- **Node.js** (Khuyến nghị phiên bản `>= 18.x`)
- **npm**, **yarn** hoặc **pnpm**

### 2. Các bước cài đặt

1. **Di chuyển vào thư mục dự án**:
   ```bash
   cd Self-Study/React/employee-app
   ```

2. **Cài đặt các gói phụ thuộc (Dependencies)**:
   ```bash
   npm install
   ```

3. **Khởi chạy máy chủ phát triển (Development Server)**:
   ```bash
   npm run dev
   ```

4. **Mở trình duyệt**:
   - Trình duyệt sẽ hiển thị đường dẫn local (thường là `http://localhost:5173`). Mở đường dẫn này để trải nghiệm ứng dụng.

---

## 📜 Danh sách câu lệnh (Scripts)

Trong quá trình phát triển, bạn có thể sử dụng các lệnh sau trong terminal:

| Câu lệnh | Mô tả |
| :--- | :--- |
| `npm run dev` | Khởi chạy máy chủ dev cục bộ với tính năng Hot Module Replacement (HMR). |
| `npm run build` | Đóng gói và tối ưu hóa ứng dụng cho môi trường sản xuất (sẽ tạo thư mục `dist/`). |
| `npm run preview` | Khởi chạy máy chủ local để xem trước bản build sản xuất vừa đóng gói. |
| `npm run lint` | Kiểm tra lỗi cú pháp và quy chuẩn viết code của dự án bằng **Oxlint**. |

---

## 📁 Cấu trúc thư mục dự án

```text
employee-app/
├── public/                  # Tài nguyên tĩnh (Favicon, icons...)
├── src/
│   ├── assets/              # Thư mục chứa ảnh, font chữ...
│   ├── components/
│   │   ├── EmployeeManager.jsx         # Component chính xử lý logic và UI quản lý nhân viên
│   │   └── EmployeeManager.module.scss # Styles riêng (CSS Module) cho EmployeeManager
│   ├── App.jsx              # Component gốc của ứng dụng
│   ├── App.css              # Styles chung của App
│   ├── index.css            # Styles toàn cục
│   └── main.jsx             # Điểm khởi chạy (Entry point) của React
├── .gitignore               # Danh sách file/thư mục Git bỏ qua
├── .oxlintrc.json           # Cấu hình linter Oxlint
├── package.json             # Danh sách dependencies và scripts của dự án
├── README.md                # Tài liệu hướng dẫn dự án
└── vite.config.js           # Cấu hình Vite
```

---

## 💡 Hướng phát triển trong tương lai (To-Do / Enhancements)

- [ ] Kết nối API thực tế hoặc lưu trữ dữ liệu với **LocalStorage / IndexedDB** để giữ lại dữ liệu khi tải lại trang.
- [ ] Thêm tính năng **Xuất dữ liệu Excel / CSV** danh sách nhân viên.
- [ ] Thêm tính năng **Xem chi tiết hồ sơ nhân viên** (Profile View) với nhiều trường thông tin hơn (Ảnh đại diện, Số điện thoại, Ngày vào làm...).
- [ ] Bổ sung **Chế độ tối (Dark Mode)** cho toàn bộ ứng dụng.
