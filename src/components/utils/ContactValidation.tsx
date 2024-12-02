import z from "zod";

export const ContactValidation = z.object({
  name: z
    .string()
    .min(3, "Name must not be lesser than 3 characters")
    .max(15, "Name must not be greater than 15 characters"),
  email: z
    .string()
    .min(5, "Email not be lesser than 5 characters")
    .max(30, "Email code must not be greater than 30 characters"),
  message: z
    .string()
    .min(5, "Message not be lesser than 5 characters")
    .max(30, "Message code must not be greater than 30 characters"),
});
