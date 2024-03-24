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

export async function LoginUser({email, password}: {email:string, password:string}) {
  const user = await db.user.findUnique({
    where: {
      email,
    },
  });

  console.log(user);
  return user
}
