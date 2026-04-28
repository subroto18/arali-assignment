import { useState } from "react";
import CustomerTable from "../components/CustomerTable";
import { useCustomers } from "../hooks/useCustomers";
import Modal from "../ui/Modal";
import Button from "../ui/Button";

import CustomerForm from "../components/CustomerForm";

const HomePage = () => {
  const { customers, createCustomer, removeCustomer } = useCustomers();
  const [open, setOpen] = useState(false);

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Customers</h2>
        <Button onClick={() => setOpen(true)}>+ Add Customer</Button>
      </div>

      <CustomerTable customers={customers} onDelete={removeCustomer} />

      <Modal isOpen={open} onClose={() => setOpen(false)}>
        <CustomerForm onAdd={createCustomer} />
      </Modal>
    </div>
  );
};

export default HomePage;
