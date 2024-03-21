"use server";

import { LoginUser } from "@/lib/user";
import {redirect} from "next/navigation";
import {cookies} from "next/headers";
import {SignJWT} from "jose";

const JWT_SECRET= new TextEncoder().encode( "some-random-string")

export async function loginAction(formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const user = authenticate(email, password)
  if (!user) {
    return "Invalid credentials"
  }
  const sessionToken = await new SignJWT(user)
      .setProtectedHeader({alg: "HS256"})
      .sign(JWT_SECRET)
  cookies().set("sessionToken", sessionToken)

  redirect("/")
}

function authenticate(email:string, password:string) {
  if (email.endsWith("@email.com") && password === "123456") {
    return {email}
  }
}
