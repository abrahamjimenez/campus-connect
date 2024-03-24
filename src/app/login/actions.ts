"use server";

import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { SignJWT } from "jose";
import { LoginUser } from "@/lib/user";

interface Data {
  email: string;
  password: string;
}

const JWT_SECRET = new TextEncoder().encode("some-random-string");

export async function loginAction(formData: FormData) {
  const data: Data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const user = await LoginUser(data);
  const sessionToken = await new SignJWT(user)
    .setProtectedHeader({ alg: "HS256" })
    .sign(JWT_SECRET);
  cookies().set("sessionToken", sessionToken);
}
