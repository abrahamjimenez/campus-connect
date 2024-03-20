"use server"

import {LoginUser} from "../../../prisma/user";

export async function loginAction(formData:FormData) {
    await LoginUser({
        email: formData.get("email") as string,
        password: formData.get("password") as string,
    })
}
