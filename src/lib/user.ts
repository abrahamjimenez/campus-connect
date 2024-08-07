import { compare, hash } from "bcrypt";
import { db } from "./db";
import { UserError, RegisterUserInterface } from "@/app/register/actions";

interface RegisterProps {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export async function RegisterUser({
  firstName,
  lastName,
  email,
  password,
}: RegisterProps): Promise<UserError | RegisterUserInterface> {
  const passwordHash = await hash(password, 10);
  const existingUser = await db.user.findUnique({ where: { email } });

  if (existingUser) {
    // Code runs if email is in use
    return { isError: true, message: "Email is in use" };
  }

  try {
    return await db.user.create({
      data: {
        firstName,
        lastName,
        email,
        passwordHash,
      },
    });
  } catch (e) {
    console.error(e);
    return { isError: true, message: "Could not register" };
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

export async function FindUser(userId: number) {
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

export async function UpdateUserFirstName(userId: number, firstName: string) {
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

export async function UpdateUserLastName(userId: number, lastName: string) {
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

export async function UpdateUserEmail(userId: number, email: string) {
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

export async function UpdateUserCountry(userId: number, country: string) {
  const user = await db.user.update({
    where: {
      id: userId,
    },
    data: {
      country,
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

export async function UpdateUserState(userId: number, state: string) {
  const user = await db.user.update({
    where: {
      id: userId,
    },
    data: {
      state,
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
export async function UpdateUserPhone(userId: number, phone: string) {
  const user = await db.user.update({
    where: {
      id: userId,
    },
    data: {
      phone,
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

export async function UpdateUserPassword(userId: number, password: string) {
  const passwordHash = await hash(password, 10);

  const user = await db.user.update({
    where: {
      id: userId,
    },
    data: {
      passwordHash,
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
