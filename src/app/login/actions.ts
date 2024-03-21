"use server";

import { LoginUser } from "../../../prisma/user";

export async function loginAction(formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const user = await LoginUser({
    email: email,
    password: password,
  });

  if (user) {
    return "Valid credentials";
  } else {
    console.log("no user");
    return "Invalid credentials";
  }
}
