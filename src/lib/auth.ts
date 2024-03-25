import { cookies } from "next/headers";
import { jwtVerify, SignJWT } from "jose";
import ms from "ms";

type AuthenticatedUser = {
  firstName: string;
  email: string;
};

const JWT_COOKIE = "sessionToken";
const JWT_DURATION = ms("4 weeks");
const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET);

export const deleteSessionCookie = () => {
  cookies().delete(JWT_COOKIE);
};

export const getUserFromSession = async () => {
  const sessionToken = cookies().get(JWT_COOKIE)?.value;
  try {
    if (sessionToken) {
      const { payload } = await jwtVerify(sessionToken, JWT_SECRET);
      return payload;
    }
  } catch (e) {
    console.warn("Invalid JWT", e);
  }
};

export const setSessionCookie = async (user: AuthenticatedUser) => {
  const expirationTime = new Date(Date.now() + JWT_DURATION);
  const sessionToken = await new SignJWT(user)
    .setProtectedHeader({ alg: "HS256" })
    .setExpirationTime(expirationTime)
    .sign(JWT_SECRET);
  cookies().set("sessionToken", sessionToken, {
    expires: expirationTime,
    httpOnly: true,
    secure: true,
    sameSite: "strict",
  });
};
