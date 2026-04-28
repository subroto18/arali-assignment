export interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
}

export interface ApiResponse<T> {
  success: boolean;
  status: string;
  message: string;
  data: T;
}
