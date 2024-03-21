import { compare, hash } from "bcrypt";
import { db } from "./db";

interface UserProps {
  id?: string;
  firstName: string;
  lastName: string;
  email: string;
  passwordHash: string;
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
  const passwordHash = await hash(password, 10);
  const existingUser = await db.user.findUnique({ where: { email } });

  if (existingUser) {
    console.log("Email is already taken");
    return;
  }

  try {
    return db.user.create({
      data: {
        firstName,
        lastName,
        email,
        passwordHash,
      },
    });
  } catch (e) {
    console.log(e);
  }
}

/**
 * @description Public
 * @public
 */
export async function LoginUser({ email, password }: LoginProps) {
  const user = await db.user.findUnique({
    where: {
      email,
    },
  });

  if (user && (await compare(password, user.passwordHash))) {
    return user;
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
  passwordHash,
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
      passwordHash,
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
  passwordHash,
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
      passwordHash,
      state,
      country,
      phone,
      paymentMethods,
    },
  });
}
