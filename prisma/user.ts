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
 * @description Public
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
 * @description Public
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
 * @description Private
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
 * @description Private
 * @private
 */
export async function GetUser({id}:UserProps) {
    await db.user.findUnique({
        where: {
            id
        }
    })
}

/**
 * @description Private/Admin
 * @private
 */
export async function GetUsers() {
    await db.user.findMany()
}

/**
 * @description Private/Admin
 * @private
 */

export async function DeleteUsers({id}:UserProps) {
    await db.user.deleteMany({
        where: {
            id
        }
    })
}

/**
 * @description Private/Admin
 * @private
 */

export async function UpdateUsers({firstName, lastName, email, password, state, country, phone, paymentMethods}:UserProps) {
    await db.user.updateMany({
        where: {
            email
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
