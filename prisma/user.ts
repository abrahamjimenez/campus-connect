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

/**
 * @public
 */
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

/**
 * @public
 */
export async function LoginUser({email}:UserProps) {
    await db.user.findUnique({
        where: {
            email,
        }
    })
}

