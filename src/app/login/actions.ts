"use server";

import { LoginUser } from "@/lib/user";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { SignJWT } from "jose";

interface Data {
  email:string
  password:string
}

const JWT_SECRET = new TextEncoder().encode("some-random-string");

// todo: update any state to whatever it is
export async function loginAction(currentState: any, formData: FormData) {
  const data:Data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  }

  const error = validate(data)

  if (error) {
    return {isError: true, message: error}
  }

  const user = authenticate(data.email, data.password);
  if (!user) {
    return {isError: true, message: "Invalid credentials"}
  }
  const sessionToken = await new SignJWT(user)
    .setProtectedHeader({ alg: "HS256" })
    .sign(JWT_SECRET);
  cookies().set("sessionToken", sessionToken);

  redirect("/");
}

function authenticate(email: string, password: string) {
  if (email.endsWith("@email.com") && password === "123456") {
    return { email };
  }
}

// todo: use a good validation tool here
function validate(data:Data):string | undefined {
  if (!data.email) {
    return "Email is required"
  }

  if (!data.password) {
    return "Password is required"
  }

  return undefined
}
