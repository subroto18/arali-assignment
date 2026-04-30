/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#B7011E",
          50: "#fde8eb",
          100: "#f8b6c0",
          200: "#f18495",
          300: "#ea526a",
          400: "#e3203f",
          500: "#B7011E",
          600: "#8F0117",
          700: "#6e0112",
          800: "#4d000c",
          900: "#2b0006",
        },

        neutral: {
          50: "#f9fafb",
          100: "#f3f4f6",
          200: "#e5e7eb",
          300: "#d1d5db",
          400: "#9ca3af",
          500: "#6b7280",
          600: "#4b5563",
          700: "#374151",
          800: "#1f2937",
          900: "#111827",
        },

        success: {
          DEFAULT: "#22c55e",
          hover: "#16a34a",
        },

        danger: {
          DEFAULT: "#ef4444",
          hover: "#dc2626",
        },

        warning: {
          DEFAULT: "#f59e0b",
          hover: "#d97706",
        },

        info: {
          DEFAULT: "#3b82f6",
          hover: "#2563eb",
        },
      },
    },
  },
  plugins: [],
};
