import { z } from "zod";

export const customerSchema = z.object({
  name: z.string().trim().min(1, "Name is required"),
  email: z.string().trim().min(1, "Email is required").email("Invalid email"),
  phone: z
    .string()
    .trim()
    .nonempty("Phone is required")
    .regex(/^[6-9]\d{9}$/, "Enter a valid Indian mobile number"),
});

export type CustomerFormData = z.infer<typeof customerSchema>;
