import { useState } from "react";
import CustomerTable from "../components/CustomerTable";
import { useCustomers } from "../hooks/useCustomers";
import Modal from "../ui/Modal";
import Button from "../ui/Button";
import Alert from "../ui/Alert";
import CustomerForm from "../components/CustomerForm";
import { useToast } from "../hooks/useToast";

const HomePage = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const {
    loading,
    error,
    creating,
    deleting,
    customers,
    createCustomer,
    removeCustomer,
  } = useCustomers();
  const [open, setOpen] = useState(false);
  const [alertOpen, setAlertOpen] = useState(false);
  const { success, handleApiError } = useToast();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const resetForm = () => {
    setForm({
      name: "",
      email: "",
      phone: "",
    });
  };

  const handleAddCustomer = async (form) => {
    try {
      const data = await createCustomer(form);
      success(data.message || "Customer added successfully");
      setOpen(false);
      resetForm();
    } catch (err: unknown) {
      handleApiError(err);
    }
  };

  const handleDeleteClick = (id: string) => {
    setSelectedId(id);
    setAlertOpen(true);
  };

  const handleConfirmDelete = async () => {
    if (!selectedId) return;

    try {
      const data = await removeCustomer(selectedId);
      console.log(data, "data");
      success(data.message || "Customer deleted");
    } catch (err) {
      handleApiError(err);
    }
    setAlertOpen(false);
    setSelectedId(null);
  };

  const handleCancel = () => {
    setAlertOpen(false);
    setSelectedId(null);
  };

  const handleModalClose = () => {
    setOpen(false);
    resetForm();
  };

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Customers</h2>
        <Button onClick={() => setOpen(true)}>+ Add Customer</Button>
      </div>

      <CustomerTable
        loading={loading}
        error={error}
        customers={customers}
        onDelete={handleDeleteClick}
      />

      <Modal isOpen={open} onClose={handleModalClose}>
        <CustomerForm
          onAdd={handleAddCustomer}
          formData={form}
          setFormData={setForm}
          loading={creating}
        />
      </Modal>

      <Alert
        isOpen={alertOpen}
        message="Do you want to delete this customer?"
        onConfirm={handleConfirmDelete}
        loading={deleting}
        onCancel={handleCancel}
      />
    </div>
  );
};

export default HomePage;
