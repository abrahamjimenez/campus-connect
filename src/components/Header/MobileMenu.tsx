"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { JWTPayload } from "jose";
import SignOutButton from "@/components/SignOutButton";
import Link from "next/link";

const navigation = [
  { name: "Home", href: "/" },
  { name: "All Jobs", href: "/all-jobs" },
  { name: "Create Job", href: "/create-job" },
  { name: "Login", href: "/login" },
  { name: "Register", href: "/register" },
  { name: "Profile", href: "/profile" },
];

const MobileMenu = ({ user }: { user: JWTPayload }) => {
  const pathname = usePathname();

  const filteredNavigation = user
    ? navigation.filter(
        (item) => item.name !== "Login" && item.name !== "Register",
      )
    : navigation;

  return (
    <div className="px-3">
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="py-2">
              {open ? (
                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              )}
            </Disclosure.Button>
            <Disclosure.Panel className="text-gray-500">
              <div className="flex flex-col">
                {filteredNavigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={
                      pathname === item.href
                        ? "bg-black text-white rounded-md py-2 px-2 text-sm font-medium"
                        : "text-black hover:bg-black hover:text-white rounded-md py-2 px-2 text-sm font-medium"
                    }
                  >
                    {item.name}
                  </Link>
                ))}
                {user ? (
                  <SignOutButton />
                ) : (
                  <div className="flex justify-around pb-2">
                    <Link
                      href="/login"
                      className="text-black hover:bg-black hover:text-white rounded-md py-2 px-2 text-sm font-medium"
                    >
                      Log in
                    </Link>
                    <Link
                      href="/register"
                      className="text-black hover:bg-black hover:text-white rounded-md py-2 px-2 text-sm font-medium"
                    >
                      Sign up
                    </Link>
                  </div>
                )}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
};

export default MobileMenu;
