"use server";

import { RegisterUser } from "../../../prisma/user";

export async function registerAction(formData: FormData) {
  const user = await RegisterUser({
    firstName: formData.get("firstName") as string,
    lastName: formData.get("lastName") as string,
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  });

  if (user) {
    console.log("user created");
    return "user created";
  } else {
    console.log("email is taken, user not created");
    return "email is taken, user not created";
  }
}
