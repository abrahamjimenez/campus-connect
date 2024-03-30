"use server";

import { UpdateUserFirstName } from "@/lib/user";

export async function firstNameAction(formData: FormData) {
  const firstName = formData.get("firstName") as string;
  const userId = formData.get("userId") as string;

  // todo: clear and update the jwt cookie :D

  await UpdateUserFirstName(userId, firstName);
}
