# 🏗️ Cấu trúc thư mục dự án

```
featurebased/
├── app/                    # App Router (routing, layout)
│   ├── layout.tsx
│   ├── page.tsx
│   └── (route groups nếu cần)
│
├── public/                 # Ảnh, font tĩnh
│
├── src/
│   ├── features/           # 🎯 Các tính năng riêng biệt
│   │   ├── auth/           # ⤷ Đăng nhập Google, xác thực
│   │   │   ├── components/         # UI liên quan đến auth
│   │   │   ├── services.ts         # Gọi API login, logout
│   │   │   ├── hooks.ts            # useLoginGoogle, ...
│   │   │   ├── slice.ts            # State (Zustand/Redux)
│   │   │   └── types.ts            # Kiểu dữ liệu auth
│   │   │
│   │   ├── task/           # ⤷ Giao việc, danh sách task
│   │   │   ├── components/         # UI liên quan đến task
│   │   │   ├── hooks.ts            # useCreateTask, useFetchTasks
│   │   │   ├── services.ts         # API: getTasks, createTask
│   │   │   ├── slice.ts            # State task
│   │   │   └── types.ts            # Kiểu dữ liệu task
│   │   │
│   │   ├── user/           # ⤷ Hồ sơ người dùng, vai trò, nhóm
│   │   │   ├── components/         # UI user
│   │   │   ├── services.ts         # API user
│   │   │   ├── slice.ts            # State user
│   │   │   └── types.ts            # Kiểu dữ liệu user
│   │   │
│   │   └── notification/   # ⤷ Thông báo
│
│   ├── shared/             # 🌍 Dùng chung toàn app
│   │   ├── components/     # Button, Modal, Toast, Spinner, ...
│   │   ├── hooks/          # useDebounce, useClickOutside, ...
│   │   ├── utils/          # formatDate, formatCurrency, ...
│   │   ├── icons/          # Icon SVG
│   │   ├── constants.ts    # Hằng số: ROLE, STATUS, ...
│   │   └── types.ts        # Global types
│
│   ├── config/             # ⚙️ Cấu hình như baseURL, auth...
│   │   ├── axios.ts
│   │   └── env.ts
│
│   ├── store/              # 🧠 Zustand hoặc Redux store config
│   │   └── index.ts
│
│   ├── styles/             # 🎨 Tailwind, Global CSS
│   │   └── globals.css
│
│   ├── lib/                # 📚 Third-party utils như auth.ts, jwt.ts
│   │   └── auth.ts
│
│   └── middleware.ts       # Next.js Middleware
│
├── tailwind.config.ts      # Cấu hình TailwindCSS
├── tsconfig.json           # Cấu hình TypeScript
├── next.config.js          # Cấu hình Next.js
└── .env.local              # Env như DATABASE_URL, API_KEY
```

---

## 📝 Giải thích nhanh

- **app/**: Thư mục chính cho routing, layout, entrypoint của Next.js App Router.
- **public/**: Chứa ảnh, font, file tĩnh truy cập trực tiếp qua URL.
- **src/features/**: Mỗi tính năng (auth, task, user, notification) tách riêng, dễ maintain, mở rộng.
- **src/shared/**: Thành phần dùng chung toàn app (component, hook, util, icon, hằng số, kiểu dữ liệu).
- **src/config/**: Cấu hình chung (axios, biến môi trường).
- **src/store/**: Cấu hình state management (Zustand/Redux).
- **src/styles/**: File CSS, Tailwind.
- **src/lib/**: Thư viện, util bên ngoài, mã hóa, xác thực, ...
- **src/middleware.ts**: Middleware Next.js (auth, redirect, ...).
- **tailwind.config.ts**: Cấu hình TailwindCSS.
- **tsconfig.json**: Cấu hình TypeScript.
- **next.config.js/ts**: Cấu hình Next.js.
- **.env.local**: Biến môi trường (API key, DB URL, ...).

---

> **Lưu ý:**
> - Tách biệt rõ ràng giúp code dễ đọc, dễ mở rộng, onboard dev mới nhanh.
> - Có thể thêm route group, module mới vào `features/` nếu cần.
> - Đặt tên file, thư mục rõ nghĩa, nhất quán.
