import React from "react";
import { getUserFromSession } from "@/lib/auth";

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
