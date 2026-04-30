import type { FieldConfig } from "../types/customer";

export const CUSTOMER_FORM_FIELDS: FieldConfig[] = [
  {
    name: "name",
    label: "Name",
    placeholder: "Enter name",
    type: "text",
  },
  {
    name: "email",
    label: "Email",
    placeholder: "Enter email",
    type: "email",
  },
  {
    name: "phone",
    label: "Phone",
    placeholder: "Enter phone",
    type: "text",
  },
];
