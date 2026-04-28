import axios from "axios";
const BASE_URL = import.meta.env.VITE_API_BASE_URL;
const API = axios.create({
  baseURL: `${BASE_URL}`,
});

export const getCustomers = () => API.get("/customer");

export const addCustomer = (data) => API.post("/customer", data);

export const deleteCustomer = (id) => API.delete(`/customer/${id}`);
