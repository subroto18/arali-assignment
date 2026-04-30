import React from "react";
import { THEME } from "../config/theme";
import { twMerge } from "tailwind-merge";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
  variant?: "primary" | "secondary" | "danger";
};

const Button: React.FC<Props> = ({
  children,
  className = "",
  loading = false,
  disabled,
  variant = "primary",
  ...props
}) => {
  const baseStyles = "px-4 py-2 rounded transition";

  const variantStyles = THEME.button[variant];

  const stateStyles = loading
    ? "opacity-70 cursor-not-allowed"
    : "cursor-pointer";

  return (
    <button
      {...props}
      disabled={disabled || loading}
      className={twMerge(baseStyles, variantStyles, stateStyles, className)}
    >
      {loading ? (
        <span className="flex items-center gap-2">
          <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
          Loading...
        </span>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
