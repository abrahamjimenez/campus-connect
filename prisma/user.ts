import {db} from "./db";

interface UserProps {
    id:string
    country: string | null
    email: string
    firstName: string
    lastName: string
    password: string
    phone: string | null,
    state: string | null,
    paymentMethods: string[]
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

/**
 * @private
 */
export async function UpdateUser({id, firstName, lastName, email, password, state, country, phone, paymentMethods}:UserProps) {
    await db.user.update({
        where: {
            id
        },
        data: {
            firstName,
            lastName,
            email,
            password,
            state,
            country,
            phone,
            paymentMethods,
        }
    })
}

/**
 * @private
 */
export async function GetUser({id}:UserProps) {
    await db.user.findUnique({
        where: {
            id
        }
    })
}
