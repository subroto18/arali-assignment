import { useCallback, useState } from "react";
import CustomerTable from "../components/CustomerTable";
import { useCustomers } from "../hooks/useCustomers";
import Modal from "../ui/Modal";
import Button from "../ui/Button";
import Alert from "../ui/Alert";
import CustomerForm from "../components/CustomerForm";
import { useToast } from "../hooks/useToast";
import type { CustomerFormData } from "../types/customer";

type UIState = {
  modalOpen: boolean;
  alertOpen: boolean;
  selectedId: string | null;
};

const HomePage = () => {
  const {
    loading,
    error,
    creating,
    deleting,
    customers,
    createCustomer,
    removeCustomer,
  } = useCustomers();

  const { success, handleApiError } = useToast();
  const initialForm = { name: "", email: "", phone: "" };
  const [form, setForm] = useState(initialForm);

  const [uiState, setUiState] = useState<UIState>({
    modalOpen: false,
    alertOpen: false,
    selectedId: null,
  });

  const resetForm = () => setForm(initialForm);
  const handleAddCustomer = async (form: CustomerFormData) => {
    try {
      const data = await createCustomer(form);
      success(data.message || "Customer added successfully");
      setUiState((prev) => ({
        ...prev,
        modalOpen: false,
      }));
      resetForm();
    } catch (err: unknown) {
      handleApiError(err);
    }
  };

  const handleDeleteClick = useCallback((id: string) => {
    setUiState((prev) => ({
      ...prev,
      alertOpen: true,
      selectedId: id,
    }));
  }, []);

  const handleConfirmDelete = async () => {
    if (!uiState.selectedId) return;

    try {
      const data = await removeCustomer(uiState.selectedId);
      success(data.message || "Customer deleted");
    } catch (err) {
      handleApiError(err);
    }

    setUiState((prev) => ({
      ...prev,
      alertOpen: false,
      selectedId: null,
    }));
  };

  const handleCancel = () => {
    setUiState((prev) => ({
      ...prev,
      alertOpen: false,
      selectedId: null,
    }));
  };

  const handleModalClose = () => {
    resetForm();
    setUiState((prev) => ({
      ...prev,
      modalOpen: false,
    }));
  };

  const openModal = () => setUiState((prev) => ({ ...prev, modalOpen: true }));
  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Customers</h2>
        <Button onClick={openModal}>+ Add Customer</Button>
      </div>

      <CustomerTable
        loading={loading}
        error={error}
        customers={customers}
        onDelete={handleDeleteClick}
      />

      <Modal isOpen={uiState.modalOpen} onClose={handleModalClose}>
        <CustomerForm
          onAdd={handleAddCustomer}
          formData={form}
          setFormData={setForm}
          loading={creating}
          resetForm={resetForm}
        />
      </Modal>

      <Alert
        isOpen={uiState.alertOpen}
        message="Do you want to delete this customer?"
        onConfirm={handleConfirmDelete}
        loading={deleting}
        onCancel={handleCancel}
      />
    </div>
  );
};

export default HomePage;
