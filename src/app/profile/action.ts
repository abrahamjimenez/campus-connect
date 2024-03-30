"use server";

import {FindUser, UpdateUserFirstName} from "@/lib/user";
import {setSessionCookie} from "@/lib/auth";

export async function firstNameAction(formData: FormData) {
  const firstName = formData.get("firstName") as string;
  const userId = formData.get("userId") as string;

  // todo: update the jwt cookie :D
  await FindUser(userId)
  const data1 = await UpdateUserFirstName(userId, firstName);
  console.log(data1);
  await setSessionCookie(data1)
  // console.log(data2);
}
