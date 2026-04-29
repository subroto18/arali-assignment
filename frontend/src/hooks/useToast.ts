import axios from "axios";
import { toast } from "react-toastify";
import type { ToastOptions } from "react-toastify";
const defaultOptions: ToastOptions = {
  position: "bottom-center",
  autoClose: 3000,
  theme: "colored",
  closeOnClick: true,
  pauseOnHover: true,
};

export const useToast = () => {
  const success = (msg: string, options?: ToastOptions) =>
    toast.success(msg, { ...defaultOptions, ...options });

  const error = (msg: string, options?: ToastOptions) =>
    toast.error(msg, { ...defaultOptions, ...options });

  const handleApiError = (err: unknown, options?: ToastOptions) => {
    let message = "Something went wrong";
    if (axios.isAxiosError(err)) {
      message = err.response?.data?.message || "API Error";
    } else if (err instanceof Error) {
      message = err.message;
    }

    toast.error(message, { ...defaultOptions, ...options });
  };

  return { success, error, handleApiError };
};
