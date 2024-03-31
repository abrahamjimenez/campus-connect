import React from "react";
import { getUserFromSession } from "@/lib/auth";
import MobileMenu from "@/components/Header/MobileMenu";
import { JWTPayload } from "jose";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

const Header = async () => {
  const user = await getUserFromSession();

  return (
    <nav className="bg-yellow-500">
      <MobileMenu user={user as JWTPayload} />

      {/*<ul className="flex justify-around">*/}
      {/*  <li>*/}
      {/*    <Link href="/">Home</Link>*/}
      {/*  </li>*/}
      {/*  <li>*/}
      {/*    <Link href="/">About</Link>*/}
      {/*  </li>*/}
      {/*  {user ? (*/}
      {/*    <SignOutButton />*/}
      {/*  ) : (*/}
      {/*    <div className="flex flex-col">*/}
      {/*      <Link href="/login">Log in</Link>*/}
      {/*      <Link href="/register">Sign up</Link>*/}
      {/*    </div>*/}
      {/*  )}*/}
      {/*</ul>*/}
    </nav>
  );
};

export default Header;
