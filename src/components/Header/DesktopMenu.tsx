import React from "react";
import Link from "next/link";
import SignOutButton from "@/components/SignOutButton";
import { JWTPayload } from "jose";

const DesktopMenu = ({ user }: { user: JWTPayload }) => {
  return (
    <ul className="hidden lg:flex lg:justify-around">
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/">About</Link>
      </li>
      {user ? (
        <SignOutButton />
      ) : (
        <div className="flex flex-col">
          <Link href="/login">Log in</Link>
          <Link href="/register">Sign up</Link>
        </div>
      )}
    </ul>
  );
};

export default DesktopMenu;
