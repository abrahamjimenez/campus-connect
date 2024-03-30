"use server";

import {
  FindUser,
  UpdateUserCountry,
  UpdateUserEmail,
  UpdateUserFirstName,
  UpdateUserLastName,
} from "@/lib/user";
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

export async function emailAction(formData: FormData) {
  const email = formData.get("email") as string;
  const userId = formData.get("userId") as string;

  await FindUser(userId);
  const data: any = await UpdateUserEmail(userId, email);

  await setSessionCookie(data);
}

export async function countryAction(formData: FormData) {
  const email = formData.get("country") as string;
  const userId = formData.get("userId") as string;

  await FindUser(userId);
  const data: any = await UpdateUserCountry(userId, email);

  await setSessionCookie(data);
}
