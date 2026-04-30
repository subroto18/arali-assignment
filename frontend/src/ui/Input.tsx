import { twMerge } from "tailwind-merge";
const Input = ({ className = "", ...props }) => {
  return (
    <input
      {...props}
      className={twMerge(`border border-neutral-300 p-2 rounded w-full 
      focus:outline-none focus:ring-2 focus:ring-primary 
      ${className}`)}
    />
  );
};

export default Input;
