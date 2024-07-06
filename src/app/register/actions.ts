"use server";

import { RegisterUser } from "@/lib/user";
import { redirect } from "next/navigation";
import { setSessionCookie } from "@/lib/auth";

export async function registerAction(formData: FormData) {
  const data = {
    firstName: formData.get("firstName") as string,
    lastName: formData.get("lastName") as string,
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  //  someone will need to fix this typescript type in the future.
  const user: any = await RegisterUser(data);

  if (user) {
    if (user.isError) {
      // console.log(user)
      return user.message;
    }
    const userData = {
      firstName: user.firstName,
      email: user.email,
    };
    await setSessionCookie(userData);
    redirect("/");
  }
}
