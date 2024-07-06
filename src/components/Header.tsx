import React from "react";
import { getUserFromSession } from "@/lib/auth";
import MobileMenu from "@/components/Header/MobileMenu";
import { JWTPayload } from "jose";
import DesktopMenu from "@/components/Header/DesktopMenu";

const Header = async () => {
  const user = await getUserFromSession();

  return (
    <nav className="bg-yellow-500">
      <MobileMenu user={user as JWTPayload} />
      <DesktopMenu user={user as JWTPayload} />
    </nav>
  );
};

export default Header;
