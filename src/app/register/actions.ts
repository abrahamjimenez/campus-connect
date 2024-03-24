"use server";

import { RegisterUser } from "@/lib/user";
import { redirect } from "next/navigation";

export async function registerAction(formData: FormData) {
  const data = {
    firstName: formData.get("firstName") as string,
    lastName: formData.get("lastName") as string,
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const user = await RegisterUser(data);
  console.log("registerAction:", user);
  redirect("/");
}
