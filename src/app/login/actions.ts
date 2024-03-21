"use server";

import { LoginUser } from "@/lib/user";
import {redirect} from "next/navigation";

export async function loginAction(formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const user = authenticate(email, password)
  if (!user) {
    return "Invalid credentials"
  }

  redirect("/")
}

function authenticate(email:string, password:string) {
  if (email.endsWith("@email.com") && password === "123456") {
    return {email}
  }
}
