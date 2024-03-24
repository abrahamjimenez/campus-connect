"use server";

import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { SignJWT } from "jose";
import {LoginUser} from "@/lib/user";

interface Data {
  email: string;
  password: string;
}

const JWT_SECRET = new TextEncoder().encode("some-random-string");

// todo: update any state to whatever it is
export async function loginAction(formData: FormData) {
  const data: Data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const user = await LoginUser(data)
  console.log("loginAction:", user)
}
