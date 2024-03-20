import { db } from "./db";

interface UserProps {
  id?: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phone?: string;
  state?: string;
  country?: string;
  paymentMethods?: string[];
}

interface RegisterProps {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

interface LoginProps {
  email: string;
  password: string;
}

/**
 * @description Public
 * @public
 */
export async function RegisterUser({
  firstName,
  lastName,
  email,
  password,
}: RegisterProps) {
  await db.user.create({
    data: {
      firstName,
      lastName,
      email,
      password,
    },
  });
}

/**
 * @description Public
 * @public
 */
export async function LoginUser({ email, password }: LoginProps) {
  try {
    const user = await db.user.findFirst({
      where: {
        email,
        password
      },
    });

    if (!user) {
      return
    }
    return user
  } catch (error) {
    console.error("Error logging in user:", error)
  }
}

/**
 * @description Private
 * @private
 */
export async function UpdateUser({
  id,
  firstName,
  lastName,
  email,
  password,
  state,
  country,
  phone,
  paymentMethods,
}: UserProps) {
  await db.user.update({
    where: {
      id,
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
    },
  });
}

/**
 * @description Private
 * @private
 */
export async function GetUser({ id }: UserProps) {
  await db.user.findUnique({
    where: {
      id,
    },
  });
}

/**
 * @description Private/Admin
 * @private
 */
export async function GetUsers() {
  await db.user.findMany();
}

/**
 * @description Private/Admin
 * @private
 */

export async function DeleteUsers({ id }: UserProps) {
  await db.user.deleteMany({
    where: {
      id,
    },
  });
}

/**
 * @description Private/Admin
 * @private
 */

export async function UpdateUsers({
  firstName,
  lastName,
  email,
  password,
  state,
  country,
  phone,
  paymentMethods,
}: UserProps) {
  await db.user.updateMany({
    where: {
      email,
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
    },
  });
}
