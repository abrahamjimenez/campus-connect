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
import {CountrySchema, EmailSchema, FirstNameSchema, LastNameSchema, PasswordSchema, PhoneSchema, StateSchema} from "@/app/profile/validation";

export async function firstNameAction(formData: FormData) {
  const firstName = formData.get("firstName") as string;
  const userId = parseInt(formData.get("userId") as string);

  await FindUser(userId);
  const data: any = await UpdateUserFirstName(userId, firstName);

  const validationResult = FirstNameSchema.safeParse(data)

  if (!validationResult.success) {
    return {isError: true, message: validationResult.error.issues[0].message}
  }

  await setSessionCookie(data);
}

export async function lastNameAction(formData: FormData) {
  const lastName = formData.get("lastName") as string;
  const userId = parseInt(formData.get("userId") as string);

  await FindUser(userId);
  const data: any = await UpdateUserLastName(userId, lastName);

  const validationResult = LastNameSchema.safeParse(data)

  if (!validationResult.success) {
    return {isError: true, message: validationResult.error.issues[0].message}
  }

  await setSessionCookie(data);
}

export async function emailAction(formData: FormData) {
  const email = formData.get("email") as string;
  const userId = parseInt(formData.get("userId") as string);

  await FindUser(userId);
  const data: any = await UpdateUserEmail(userId, email);

  const validationResult = EmailSchema.safeParse(data)

  if (!validationResult.success) {
    return {isError: true, message: validationResult.error.issues[0].message}
  }

  await setSessionCookie(data);
}

export async function countryAction(formData: FormData) {
  const country = formData.get("country") as string;
  const userId = parseInt(formData.get("userId") as string);

  await FindUser(userId);
  const data: any = await UpdateUserCountry(userId, country);

  const validationResult = CountrySchema.safeParse(data)

  if (!validationResult.success) {
    return {isError: true, message: validationResult.error.issues[0].message}
  }

  await setSessionCookie(data);
}

export async function stateAction(formData: FormData) {
  const state = formData.get("state") as string;
  const userId = parseInt(formData.get("userId") as string);

  await FindUser(userId);
  const data: any = await UpdateUserState(userId, state);

  const validationResult = StateSchema.safeParse(data)

  if (!validationResult.success) {
    return {isError: true, message: validationResult.error.issues[0].message}
  }

  await setSessionCookie(data);
}

export async function phoneAction(formData: FormData) {
  const phone = formData.get("phone") as string;
  const userId = parseInt(formData.get("userId") as string);

  await FindUser(userId);
  const data: any = await UpdateUserPhone(userId, phone);

  const validationResult = PhoneSchema.safeParse(data)

  if (!validationResult.success) {
    return {isError: true, message: validationResult.error.issues[0].message}
  }

  await setSessionCookie(data);
}

export async function passwordAction(formData: FormData) {
  const password = formData.get("password") as string;
  const userId = parseInt(formData.get("userId") as string);

  await FindUser(userId);
  const data: any = await UpdateUserPassword(userId, password);

  const validationResult = PasswordSchema.safeParse(data)

  if (!validationResult.success) {
    return {isError: true, message: validationResult.error.issues[0].message}
  }

  await setSessionCookie(data);
}
