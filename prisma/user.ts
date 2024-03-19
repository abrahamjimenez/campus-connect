import {db} from "./db";

interface UserProps {
    country: string | null
    email: string
    firstName: string
    lastName: string
    password: string
    phone: string | null,
    state: string | null,
}

export async function RegisterUser({firstName, lastName, email, password, state, country, phone}:UserProps) {
    await db.user.create({
        data: {
            firstName,
            lastName,
            email,
            password,
            state,
            country,
            phone,
        },
    });
}

export async function LoginUser({email}:UserProps) {
    await db.user.findUnique({
        where: {
            email,
        }
    })
}
