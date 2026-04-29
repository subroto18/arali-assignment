# 🚀 Customer Management Dashboard (Frontend)

A modern React + TypeScript frontend application for managing customers.
This project is part of a full-stack assignment where users can **create, view, and delete customers** using a clean and responsive UI.

---

## 🧠 Tech Stack

- ⚛️ React (with Vite)
- 🔷 TypeScript
- 🎨 Tailwind CSS
- 🔁 React Router
- 📡 Axios (API calls)
- 🔔 React Toastify (notifications)
- ✅ Zod (form validation)

---

## ✨ Features

### ✅ Customer Management

- Add new customers via form
- View customers in a responsive table
- Delete customers with confirmation

### ✅ UX & UI Enhancements

- Toast notifications for success & error
- Loading states (create, delete, fetch)
- Error handling with global error boundary
- 404 Not Found page
- Clean dashboard layout (Header + Footer + Content)

### ✅ Form Handling

- Real-time validation using Zod
- Field-level error messages
- Reusable form field components

### ✅ Architecture

- Custom hooks for API & state management
- Config-driven UI (table & form fields)
- Clean separation of concerns

---

## 📁 Folder Structure

```
src/
 ├── assets/         # Static files
 ├── components/     # Reusable components (Header, Footer, Table, etc.)
 ├── config/         # Config files (table columns, form fields)
 ├── hooks/          # Custom hooks (useCustomers, useToast)
 ├── pages/          # Page components (HomePage, NotFound)
 ├── routes/         # Routing configuration
 ├── schemas/        # Zod validation schemas
 ├── services/       # API calls (Axios)
 ├── types/          # TypeScript types
 ├── ui/             # Reusable UI components (Button, Input, FormField)
 ├── App.tsx         # Root component
 ├── main.tsx        # Entry point
 └── index.css       # Global styles
```

---

## 🔗 Routing

- `/` → Home (Customer Dashboard)
- `*` → 404 Not Found page

---

## 📡 API Integration

The frontend connects to backend APIs:

- `GET /customers` → Fetch customers
- `POST /customers` → Add customer
- `DELETE /customers/:id` → Delete customer

Base URL is configured using environment variables:

```
VITE_API_BASE_URL=http://localhost:8000/api/v1
```

---

## 🧩 Custom Hooks

### `useCustomers`

Handles:

- Fetching customers
- Creating customer
- Deleting customer
- Loading & error state

### `useToast`

Handles:

- Success notifications
- Error notifications
- API error parsing

---

## ✅ Validation (Zod)

- Name → required
- Email → valid format
- Phone → numeric & minimum length

Validation runs:

- On submit
- On change (field-level)

---

## 🧨 Error Handling

### Global Error Boundary

- Catches UI crashes
- Shows fallback UI

### API Error Handling

- Centralized via `useToast`
- Uses safe parsing (`unknown` type)

---

## 🎨 UI Highlights

- Responsive table with scroll
- Sticky table header
- Modern button with loading state
- Reusable form fields
- Clean dashboard layout

---

## ⚙️ Setup & Run

### 1. Install dependencies

```
npm install
```

### 2. Setup environment

Create `.env` file:

```
VITE_API_BASE_URL=http://localhost:8000/api/v1
```

### 3. Run project

```
npm run dev
```

---

## 🧠 Key Learnings / Concepts Used

- Custom Hooks for state & API abstraction
- Separation of UI and data layer
- Type-safe error handling (`unknown`)
- Config-driven UI (scalable pattern)
- Controlled forms with validation
- Global error handling strategy

---

## 🚀 Future Improvements

- Pagination / infinite scroll
- Edit customer feature
- Authentication (protected routes)
- React Query / TanStack Query integration
- Better UI (sidebar dashboard)

---

## 📌 Notes

- Uses in-memory backend (no database)
- Designed with scalability in mind
- Follows industry-level folder structure

---

## 👨‍💻 Author

Built as part of a Full Stack Developer assignment.
