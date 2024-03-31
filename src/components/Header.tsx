import React from "react";
import Link from "next/link";
import { getUserFromSession } from "@/lib/auth";
import MobileMenu from "@/components/Header/MobileMenu";
import SignOutButton from "@/components/SignOutButton";
import { JWTPayload } from "jose";
import DesktopMenu from "@/components/Header/DesktopMenu";

const Header = async () => {
  const user = await getUserFromSession();

  return (
    <nav className="bg-yellow-500">
      <MobileMenu user={user as JWTPayload} />

      {/* todo: add navbar for lg screens*/}
      <DesktopMenu user={user as JWTPayload} />
    </nav>
  );
};

export default Header;
