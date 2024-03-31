"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { Disclosure } from "@headlessui/react";
import {
  Bars3Icon,
  ChevronRightIcon,
  MagnifyingGlassIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { JWTPayload } from "jose";
import SignOutButton from "@/components/SignOutButton";
import Link from "next/link";
import {
  bottomNavigation,
  navigation,
  jobs,
} from "@/components/Header/navigation";

const MobileMenu = ({ user }: { user: JWTPayload }) => {
  const pathname = usePathname();

  const bottomNavigationFilter = user
    ? bottomNavigation
    : bottomNavigation.filter((item) => item.name !== "Profile");

  return (
    <div className="px-3 lg:hidden">
      <Disclosure>
        {({ open, close }) => (
          <>
            <div className="flex justify-between items-center">
              <Disclosure.Button className="py-2">
                {open ? (
                  <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                )}
              </Disclosure.Button>

              <Link href="/" className="text-xl">
                Campus Connect
              </Link>
              <MagnifyingGlassIcon className="h-6 w-6" />
            </div>
            <Disclosure.Panel className="text-gray-500">
              <div className="flex flex-col">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={
                      pathname === item.href
                        ? "bg-black text-white rounded-md py-2 px-2 text-sm font-medium"
                        : "text-black hover:bg-black hover:text-white rounded-md py-2 px-2 text-sm font-medium"
                    }
                    onClick={() => close()}
                  >
                    {item.name}
                  </Link>
                ))}

                <Disclosure>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex justify-between text-black hover:bg-black hover:text-white rounded-md py-2 px-2 text-sm font-medium">
                        Jobs
                        <ChevronRightIcon
                          className={`h-5 w-5 ${open ? "rotate-90 transform" : ""}`}
                        />
                      </Disclosure.Button>
                      {jobs.map((item) => (
                        <Disclosure.Panel
                          key={item.name}
                          className="text-black hover:bg-black hover:text-white rounded-md py-2 px-4 text-sm font-medium"
                        >
                          <Link href={item.href} onClick={() => close()}>
                            {item.name}
                          </Link>
                        </Disclosure.Panel>
                      ))}
                    </>
                  )}
                </Disclosure>

                {bottomNavigationFilter.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={
                      pathname === item.href
                        ? "bg-black text-white rounded-md py-2 px-2 text-sm font-medium"
                        : "text-black hover:bg-black hover:text-white rounded-md py-2 px-2 text-sm font-medium"
                    }
                    onClick={() => close()}
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
                      onClick={() => close()}
                    >
                      Log in
                    </Link>
                    <Link
                      href="/register"
                      className="text-black hover:bg-black hover:text-white rounded-md py-2 px-2 text-sm font-medium"
                      onClick={() => close()}
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
