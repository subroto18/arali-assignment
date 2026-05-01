export interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
}

export type CreateCustomerInput = Omit<Customer, "id">;

export interface ApiResponse<T> {
  success: boolean;
  status: string;
  message: string;
  data: T;
}

export type CustomerFormData = {
  name: string;
  email: string;
  phone: string;
};

export type FormErrors = Partial<Record<keyof CustomerFormData, string>>;

export type CustomerTableProps = {
  customers: Customer[];
  onDelete: (id: string) => void;
  loading?: boolean;
  error?: string | null;
};

export type CustomerFormProps = {
  onAdd: (data: CustomerFormData) => void;
  resetForm: () => void;
  formData: CustomerFormData;
  setFormData: React.Dispatch<React.SetStateAction<CustomerFormData>>;
  loading?: boolean;
};

export type FieldConfig = {
  name: keyof CustomerFormData;
  label: string;
  placeholder: string;
  type: string;
};
