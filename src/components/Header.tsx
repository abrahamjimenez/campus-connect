import React from "react";
import { getUserFromSession } from "@/lib/auth";
import SignOutButton from "@/components/SignOutButton";

const Header = async () => {
  const user = await getUserFromSession();

  return (
    <div>
      <ul>
        <li>Home</li>
        <li>About</li>
        {user ? <SignOutButton /> : <li>Log in</li>}
      </ul>
    </div>
  );
};

export default Header;
