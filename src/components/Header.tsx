import React from "react";
import { cookies } from "next/headers";
import { jwtVerify } from "jose";

const JWT_SECRET = new TextEncoder().encode("some-random-string");

const getUserFromSession = async () => {
  const sessionTokenCookie = cookies().get("sessionToken");
  try {
    if (sessionTokenCookie) {
      const { payload } = await jwtVerify(sessionTokenCookie.value, JWT_SECRET);
      return payload;
    }
  } catch (e) {
    console.warn("Invalid JWT", e);
  }
};

const Header = async () => {
  const user = await getUserFromSession();

  return (
    <div>
      <ul>
        <li>Home</li>
        <li>About</li>
        {user ? <li>{user.email as string}</li> : <li>Log in</li>}
      </ul>
    </div>
  );
};

export default Header;
