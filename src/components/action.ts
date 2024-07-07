"use server";

import { deleteSessionCookie } from "@/lib/auth";
import {redirect} from "next/navigation";


export async function signOutAction() {
  deleteSessionCookie();
  redirect("/")
}
