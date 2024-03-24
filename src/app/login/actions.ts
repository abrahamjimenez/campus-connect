"use server";

import { LoginUser } from "@/lib/user";
import {setSessionCookie} from "@/lib/auth";

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

  const  user = await LoginUser(data);
  await setSessionCookie(user)
}
