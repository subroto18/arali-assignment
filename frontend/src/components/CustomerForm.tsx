import { useState } from "react";
import Button from "../ui/Button";
import { customerSchema } from "../schemas/customerSchema";
import FormField from "../ui/FormField";
import { CUSTOMER_FORM_FIELDS } from "../config/customerForm.config";

const CustomerForm = ({ onAdd, formData, setFormData, loading = false }) => {
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const result = customerSchema.safeParse(formData);

    if (!result.success) {
      const fieldErrors = result.error.flatten().fieldErrors;

      const formattedErrors = Object.keys(formData).reduce(
        (acc, key) => {
          acc[key] = fieldErrors[key]?.[0] || "";
          return acc;
        },
        {} as Record<string, string>,
      );

      setErrors(formattedErrors);
      return;
    }

    setErrors({});
    onAdd(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    validateField(name, value);
  };

  const validateField = (name: string, value: string) => {
    const result = customerSchema.safeParse({
      ...formData,
      [name]: value,
    });

    const fieldErrors = result.success
      ? ""
      : result.error.flatten().fieldErrors[name]?.[0] || "";

    setErrors((prev) => ({
      ...prev,
      [name]: fieldErrors,
    }));
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
    });
    setErrors({});
  };

  return (
    <div className="w-full max-w-md mx-auto p-5">
      <h3 className="text-xl font-semibold mb-5 text-neutral-800">
        Add Customer
      </h3>

      <form onSubmit={handleSubmit} className="space-y-4">
        {CUSTOMER_FORM_FIELDS.map((field) => (
          <FormField
            key={field.name}
            label={field.label}
            name={field.name}
            placeholder={field.placeholder}
            value={formData[field.name]}
            onChange={handleChange}
            error={errors[field.name]}
          />
        ))}

        <div className="flex gap-3 pt-2">
          <Button
            type="button"
            onClick={handleReset}
            className="flex-1 bg-neutral-300 text-grey-700 hover:bg-neutral-200"
          >
            Reset
          </Button>
          <Button type="submit" loading={loading} className="flex-1">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CustomerForm;
