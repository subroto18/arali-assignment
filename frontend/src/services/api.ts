import axios from "axios";
import type {
  Customer,
  ApiResponse,
  CreateCustomerInput,
} from "../types/customer";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const API = axios.create({
  baseURL: BASE_URL,
});

export const getCustomers = () => API.get<ApiResponse<Customer[]>>("/customer");

export const addCustomer = (data: CreateCustomerInput) =>
  API.post<ApiResponse<Customer>>("/customer", data);

export const deleteCustomer = (id: string) =>
  API.delete<ApiResponse<null>>(`/customer/${id}`);
