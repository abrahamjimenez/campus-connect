import { compare, hash } from "bcrypt";
import { db } from "./db";

interface RegisterProps {
  firstName: string;
  lastName: string;
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
    // Code runs if email is in use
    return { isError: true, message: "Email is in use" };
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

export async function LoginUser({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  const user = await db.user.findUnique({
    where: {
      email,
    },
  });

  if (user && (await compare(password, user.passwordHash))) {
    return {
      userId: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      country: user.country,
      state: user.state,
      phone: user.phone,
    };
  }
}

export async function FindUser(userId: string) {
  const user = await db.user.findUnique({
    where: {
      id: userId,
    },
    select: {
      id: true,
      firstName: true,
      lastName: true,
      email: true,
      country: true,
      state: true,
      phone: true,
    },
  });

  if (user) {
    return {
      userId: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      country: user.country,
      state: user.state,
      phone: user.phone,
    };
  }
}

export async function UpdateUserFirstName(userId: string, firstName: string) {
  const user = await db.user.update({
    where: {
      id: userId,
    },
    data: {
      firstName,
    },
    select: {
      id: true,
      firstName: true,
      lastName: true,
      email: true,
      country: true,
      state: true,
      phone: true,
    },
  });

  if (user) {
    return {
      userId: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      country: user.country,
      state: user.state,
      phone: user.phone,
    };
  }
}

export async function UpdateUserLastName(userId: string, lastName: string) {
  const user = await db.user.update({
    where: {
      id: userId,
    },
    data: {
      lastName,
    },
    select: {
      id: true,
      firstName: true,
      lastName: true,
      email: true,
      country: true,
      state: true,
      phone: true,
    },
  });

  if (user) {
    return {
      userId: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      country: user.country,
      state: user.state,
      phone: user.phone,
    };
  }
}

export async function UpdateUserEmail(userId: string, email: string) {
  const user = await db.user.update({
    where: {
      id: userId,
    },
    data: {
      email,
    },
    select: {
      id: true,
      firstName: true,
      lastName: true,
      email: true,
      country: true,
      state: true,
      phone: true,
    },
  });

  if (user) {
    return {
      userId: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      country: user.country,
      state: user.state,
      phone: user.phone,
    };
  }
}
