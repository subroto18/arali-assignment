import { z } from "zod";

export const customerSchema = z.object({
  name: z.string().trim().min(1, "Name is required"),
  email: z.string().trim().min(1, "Email is required").email("Invalid email"),
  phone: z
    .string()
    .trim()
    .min(1, "Phone is required")
    .regex(/^[0-9]+$/, "Only digits allowed")
    .min(10, "Phone must be 10 digits")
    .max(10, "Phone must be 10 digits"),
});

export type CustomerFormData = z.infer<typeof customerSchema>;
