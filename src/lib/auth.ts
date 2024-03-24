import { cookies } from "next/headers";
import { jwtVerify, SignJWT } from "jose";

type AuthenticatedUser = {
  firstName: string;
  email: string;
};

const JWT_COOKIE = "sessionToken";
const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET);

export const getUserFromSession = async () => {
  const sessionTokenCookie = cookies().get(JWT_COOKIE);
  try {
    if (sessionTokenCookie) {
      const { payload } = await jwtVerify(sessionTokenCookie.value, JWT_SECRET);
      return payload;
    }
  } catch (e) {
    console.warn("Invalid JWT", e);
  }
};

export const setSessionCookie = async (user: AuthenticatedUser) => {
  const sessionToken = await new SignJWT(user)
    .setProtectedHeader({ alg: "HS256" })
    .sign(JWT_SECRET);
  cookies().set("sessionToken", sessionToken);
};
