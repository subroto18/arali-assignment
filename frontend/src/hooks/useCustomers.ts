import { useEffect, useState } from "react";
import { getCustomers, addCustomer, deleteCustomer } from "../services/api";
import type { Customer } from "../types/customer";

export const useCustomers = () => {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchCustomers = async () => {
    try {
      setLoading(true);
      const res = await getCustomers();
      setCustomers(res.data);
    } catch (err: any) {
      setError(err.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const createCustomer = async (data: Omit<Customer, "id">) => {
    try {
      await addCustomer(data);
      fetchCustomers();
    } catch (err: any) {
      setError(err.response?.data?.message || "Failed to add customer");
    }
  };

  const removeCustomer = async (id: string) => {
    try {
      await deleteCustomer(id);
      fetchCustomers();
    } catch (err: any) {
      setError(err.response?.data?.message || "Failed to delete customer");
    }
  };

  useEffect(() => {
    console.log("call");
    fetchCustomers();
  }, []);

  return {
    customers,
    loading,
    error,
    fetchCustomers,
    createCustomer,
    removeCustomer,
  };
};
