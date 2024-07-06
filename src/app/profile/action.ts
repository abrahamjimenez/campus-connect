"use server";

import {
  FindUser,
  UpdateUserCountry,
  UpdateUserEmail,
  UpdateUserFirstName,
  UpdateUserLastName,
  UpdateUserPassword,
  UpdateUserPhone,
  UpdateUserState,
} from "@/lib/user";
import { setSessionCookie } from "@/lib/auth";

export async function firstNameAction(formData: FormData) {
  const firstName = formData.get("firstName") as string;
  const userId = parseInt(formData.get("userId") as string);

  await FindUser(userId);
  const data: any = await UpdateUserFirstName(userId, firstName);

  await setSessionCookie(data);
}

export async function lastNameAction(formData: FormData) {
  const lastName = formData.get("lastName") as string;
  const userId = parseInt(formData.get("userId") as string);

  await FindUser(userId);
  const data: any = await UpdateUserLastName(userId, lastName);

  await setSessionCookie(data);
}

export async function emailAction(formData: FormData) {
  const email = formData.get("email") as string;
  const userId = parseInt(formData.get("userId") as string);

  await FindUser(userId);
  const data: any = await UpdateUserEmail(userId, email);

  await setSessionCookie(data);
}

export async function countryAction(formData: FormData) {
  const country = formData.get("country") as string;
  const userId = parseInt(formData.get("userId") as string);

  await FindUser(userId);
  const data: any = await UpdateUserCountry(userId, country);

  await setSessionCookie(data);
}

export async function stateAction(formData: FormData) {
  const state = formData.get("state") as string;
  const userId = parseInt(formData.get("userId") as string);

  await FindUser(userId);
  const data: any = await UpdateUserState(userId, state);

  await setSessionCookie(data);
}

export async function phoneAction(formData: FormData) {
  const phone = formData.get("phone") as string;
  const userId = parseInt(formData.get("userId") as string);

  await FindUser(userId);
  const data: any = await UpdateUserPhone(userId, phone);

  await setSessionCookie(data);
}

export async function passwordAction(formData: FormData) {
  const password = formData.get("password") as string;
  const userId = parseInt(formData.get("userId") as string);

  await FindUser(userId);
  const data: any = await UpdateUserPassword(userId, password);

  await setSessionCookie(data);
}
