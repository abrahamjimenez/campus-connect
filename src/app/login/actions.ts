"use server";

import { LoginUser } from "@/lib/user";
import { setSessionCookie } from "@/lib/auth";
import { redirect } from "next/navigation";
import {LoginSchema} from "@/app/login/validation";

interface Data {
  email: string;
  password: string;
}

export async function loginAction(formData: FormData) {
  const data: Data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const validationResult = LoginSchema.safeParse(data)

  if (!validationResult.success) {
    return {isError: true, message: validationResult.error.issues[0].message}
  }

  const user = await LoginUser(data);
  if (user) {
    await setSessionCookie(user);
    redirect("/");
  } else {
    console.error("Login error");
    return { isError: true, message: "Incorrect email or password" };
  }
}
