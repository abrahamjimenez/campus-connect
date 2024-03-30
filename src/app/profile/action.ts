"use server";

import { FindUser, UpdateUserFirstName, UpdateUserLastName } from "@/lib/user";
import { setSessionCookie } from "@/lib/auth";

export async function firstNameAction(formData: FormData) {
  const firstName = formData.get("firstName") as string;
  const userId = formData.get("userId") as string;

  await FindUser(userId);
  const data: any = await UpdateUserFirstName(userId, firstName);

  await setSessionCookie(data);
}

export async function lastNameAction(formData: FormData) {
  const lastName = formData.get("lastName") as string;
  const userId = formData.get("userId") as string;

  await FindUser(userId);
  const data: any = await UpdateUserLastName(userId, lastName);

  await setSessionCookie(data);
}
