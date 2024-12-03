import z from "zod";
export const CheckoutFormSchema = z.object({
  firstName: z
    .string().trim()
    .min(3, "First name must not be lesser than 3 characters")
    .max(15, "First name must not be greater than 15 characters"),
  lastName: z
    .string().trim()
    .min(3, "Last name must not be lesser than 3 characters")
    .max(15, "Last name must not be greater than 15 characters"),
      
  companyName: z
  .string().trim()
  .max(30, "Company name must not be greater than 30 characters")
  .optional(), 

country: z
  .string()
  .refine((value) => value !== "", {
    message: "Please select a valid country/region",
  }),

province: z
  .string()
  .refine((value) => value !== "", {
    message: "Please select a valid province",
  }),
  streetAddress: z
    .string().trim()
    .min(5, "Street address must not be lesser than 5 characters")
    .max(30, "Street address must not be greater than 30 characters"),
  town: z
    .string().trim()
    .min(5, "Town must not be lesser than 5 characters")
    .max(30, "Town must not be greater than 30 characters"),
  zip: z
    .string().trim()
    .min(5, "ZIP code not be lesser than 5 characters")
    .max(30, "ZIP code must not be greater than 30 characters"),
  phone: z
    .string().trim()
    .min(5, "Phone not be lesser than 5 characters")
    .max(30, "Phone code must not be greater than 30 characters"),
  email: z
    .string().trim()
    .min(5, "Email not be lesser than 5 characters")
    .max(30, "Email code must not be greater than 30 characters"),
});
