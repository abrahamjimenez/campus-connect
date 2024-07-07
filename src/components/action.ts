"use server"

import { deleteSessionCookie } from "@/lib/auth";

export async function signOutAction() {
  deleteSessionCookie();
}
