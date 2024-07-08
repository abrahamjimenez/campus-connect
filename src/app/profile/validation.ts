import { z } from "zod";

export const FirstNameSchema = z.object({
  firstName: z.string().min(1, { message: "First name is required" }),
});

export const LastNameSchema = z.object({
  lastName: z.string().optional(),
});

export const EmailSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
});

export const PasswordSchema = z.object({
  password: z
    .string()
    .min(1, { message: "Password must be at least 1 character long" }),
});

export const CountrySchema = z.object({
  country: z.string().optional(),
});

export const StateSchema = z.object({
  state: z.string().optional(),
});

export const PhoneSchema = z.object({
  phone: z.string().optional(),
});
