# 🚀 Customer Management Dashboard (Frontend)

A modern **React + TypeScript** app to manage customers with a clean UI and scalable architecture.

---

## 🧠 Tech Stack

- React (Vite)
- TypeScript
- Tailwind CSS
- React Router
- Axios
- React Toastify
- Zod

---

## ✨ Features

### 👥 Customer Management

- Add new customers
- View customers in a responsive table
- Delete customers with confirmation

### 🎨 UI/UX

- Toast notifications (success/error)
- Loading states
- Dynamic Theme based color
- Global error boundary
- 404 Not Found page
- Clean dashboard layout

### ✅ Forms & Validation

- Zod-based validation
- Real-time field errors
- Reusable form components

---

## 🏗️ Architecture

- Custom hooks for data fetching and notification(`useCustomers`, `useToast`)
- Config-driven UI (forms & tables)
- Reusable components
- Theme-based styling (no hardcoded colors)
- Utility functions (e.g., `truncate()`)

---

## 📁 Structure

```
src/
 ├── components/
 ├── config/
 ├── hooks/
 ├── pages/
 ├── routes/
 ├── schemas/
 ├── services/
 ├── types/
 ├── ui/
 ├── utils/
 ├── App.tsx
 └── main.tsx
```

---

## 🔗 API

- `GET /customers`
- `POST /customers`
- `DELETE /customers/:id`

```
VITE_API_BASE_URL=http://localhost:8000/api/v1
```

---

## ⚙️ Setup

```bash
npm install
npm run dev
```

---

## 🚀 Improvements

- Pagination / infinite scroll

---
