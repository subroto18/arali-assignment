import { toast } from "react-toastify";

export const useToast = () => {
  const success = (msg: string) => toast.success(msg);
  const error = (msg: string) => toast.error(msg);

  const handleApiError = (err: any) => {
    const message = err?.response?.data?.message || "Something went wrong";
    toast.error(message);
  };

  return { success, error, handleApiError };
};
