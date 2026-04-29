import React from "react";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
};

const Button: React.FC<Props> = ({
  children,
  className = "",
  loading = false,
  disabled,
  ...props
}) => {
  const baseStyles = "bg-primary text-white px-4 py-2 rounded transition";

  const stateStyles = loading
    ? "opacity-70 cursor-not-allowed"
    : "hover:bg-blue-700 cursor-pointer";

  return (
    <button
      {...props}
      disabled={disabled || loading}
      className={`${baseStyles} ${stateStyles} ${className}`}
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
