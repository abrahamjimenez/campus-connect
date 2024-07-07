"use server";

import { LoginUser } from "@/lib/user";
import { setSessionCookie } from "@/lib/auth";
import { redirect } from "next/navigation";

interface Data {
  email: string;
  password: string;
}

export async function loginAction(formData: FormData) {
  const data: Data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const user = await LoginUser(data);
  if (user) {
    await setSessionCookie(user);
    redirect("/");
  } else {
    console.error("Login error");
    return { isError: true, message: "Incorrect email or password" };
  }
}
