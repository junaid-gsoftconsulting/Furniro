import z from "zod";

export const ContactValidation = z.object({
  name: z
    .string()
    .trim()
    .min(3, "Name must not be lesser than 3 characters")
    .max(15, "Name must not be greater than 15 characters"),
  email: z
    .string()
    .trim()
    .min(5, "Email not be lesser than 5 characters")
    .max(30, "Email code must not be greater than 30 characters"),

  subject: z
    .string()
    .trim()
    .min(5, "Subject must not be lesser than 5 characters")
    .max(30, "Subject must not be greater than 30 characters")
    .optional(),

  message: z
    .string()
    .trim()
    .min(5, "Message must not be lesser than 5 characters")
    .max(200, "Message must not be greater than 200 characters"),
});
