import { useState } from "react";
import Button from "../ui/Button";
import { customerSchema } from "../schemas/customerSchema";
import FormField from "../ui/FormField";

const CustomerForm = ({ onAdd }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const result = customerSchema.safeParse(form);

    if (!result.success) {
      const fieldErrors = result.error.flatten().fieldErrors;

      setErrors({
        name: fieldErrors.name?.[0] || "",
        email: fieldErrors.email?.[0] || "",
        phone: fieldErrors.phone?.[0] || "",
      });

      return;
    }

    setErrors({});
    onAdd(form);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    validateField(name, value);
  };

  const validateField = (name: string, value: string) => {
    const result = customerSchema.safeParse({
      ...form,
      [name]: value,
    });

    if (!result.success) {
      const fieldErrors = result.error.flatten().fieldErrors;

      setErrors((prev) => ({
        ...prev,
        [name]: fieldErrors[name]?.[0] || "",
      }));
    } else {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  return (
    <>
      <h3 className="text-lg font-semibold mb-4">Add Customer</h3>

      <form onSubmit={handleSubmit} className="space-y-3">
        <FormField
          label="Name"
          placeholder="Enter name"
          value={form.name}
          onChange={handleChange}
          error={errors.name}
        />

        <FormField
          label="Email"
          placeholder="Enter email"
          value={form.email}
          onChange={handleChange}
          error={errors.email}
        />

        <FormField
          label="Phone"
          placeholder="Enter phone"
          value={form.phone}
          onChange={handleChange}
          error={errors.phone}
        />

        <Button type="submit">Submit</Button>
      </form>
    </>
  );
};

export default CustomerForm;
