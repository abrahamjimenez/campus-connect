"use server";

import { RegisterUser } from "@/lib/user";
import { redirect } from "next/navigation";
import { setSessionCookie } from "@/lib/auth";
import {RegisterSchema} from "@/app/register/validation";

export interface UserError {
  isError: boolean;
  message: string;
}

export interface RegisterUserInterface {
  id: number;
  country: string | null;
  email: string;
  firstName: string;
  lastName: string | null;
  passwordHash: string;
  phone: string | null;
  state: string | null;
  paymentMethods: string[];
}

export async function registerAction(formData: FormData) {
  const data = {
    firstName: formData.get("firstName") as string,
    lastName: formData.get("lastName") as string,
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const validationResult = RegisterSchema.safeParse(data);

  if (!validationResult.success) {
    return validationResult.error.issues[0].message
  }

  const user: UserError | RegisterUserInterface = await RegisterUser(data);

  if ("isError" in user && user.isError) {
    return user.message;
  }

  if ("firstName" in user && "email" in user) {
    const userData = {
      firstName: user.firstName,
      email: user.email,
    };

    await setSessionCookie(userData);
    redirect("/");
  }

  return "Registering failed";
}
