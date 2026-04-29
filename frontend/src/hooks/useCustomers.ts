import { useEffect, useState } from "react";
import { getCustomers, addCustomer, deleteCustomer } from "../services/api";
import type { Customer } from "../types/customer";

export const useCustomers = () => {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [loading, setLoading] = useState(false);
  const [creating, setCreating] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchCustomers = async () => {
    try {
      setLoading(true);
      const res = await getCustomers();
      setCustomers(res.data.data);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Something went wrong");
      }
    } finally {
      setLoading(false);
    }
  };

  const createCustomer = async (data) => {
    try {
      setCreating(true);
      const res = await addCustomer(data);
      const response = res.data.data;
      setCustomers((prev) => [response, ...prev]);
      return response;
    } finally {
      setCreating(false);
    }
  };

  const removeCustomer = async (id: string) => {
    try {
      setDeleting(true);
      const res = await deleteCustomer(id);
      setCustomers((prev) => prev.filter((c) => c.id !== id));
      return res.data;
    } finally {
      setDeleting(false);
    }
  };

  useEffect(() => {
    const load = async () => {
      await fetchCustomers();
    };

    load();
  }, []);

  return {
    customers,
    loading,
    error,
    creating,
    deleting,
    fetchCustomers,
    createCustomer,
    removeCustomer,
  };
};
