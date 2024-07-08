"use client";

import React, { Fragment } from "react";
import Link from "next/link";
import SignOutButton from "@/components/SignOutButton";
import { JWTPayload } from "jose";
import {
  Popover,
  PopoverButton,
  PopoverPanel,
  Transition,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";
import {
  bottomNavigation,
  jobs,
  navigation,
  notLoggedIn,
} from "@/components/Header/navigation";

const DesktopMenu = ({ user }: { user: JWTPayload }) => {
  const pathname = usePathname();

  return (
    <ul className="hidden lg:flex justify-around items-center">
      <li>
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
      </li>
      <Popover className="relative" as={"li"}>
        <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
          <span>Jobs</span>
          <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
        </PopoverButton>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-200"
          enterFrom="opacity-0 translate-y-1"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-y-1"
        >
          <PopoverPanel className="absolute left-1/2 mt-5 flex w-screen max-w-48 -translate-x-1/2">
            <div className="w-screen flex-auto overflow-hidden rounded bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
              {jobs.map((item) => (
                <div
                  key={item.name}
                  className="relative flex gap-x-6 rounded-lg py-4 hover:bg-gray-50"
                >
                  <div className="px-4">
                    <a href={item.href} className="font-semibold text-gray-900">
                      {item.name}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </PopoverPanel>
        </Transition>
      </Popover>
      {bottomNavigation.map((item) => (
        <li key={item.name}>
          <Link
            href={item.href}
            className={
              pathname === item.href
                ? "bg-black text-white rounded-md py-2 px-2 text-sm font-medium"
                : "text-black hover:bg-black hover:text-white rounded-md py-2 px-2 text-sm font-medium"
            }
          >
            {item.name}
          </Link>
        </li>
      ))}
      <li>
        <MagnifyingGlassIcon className="h-6 w-6" />
      </li>
      {user ? (
        <SignOutButton />
      ) : (
        <li className="flex flex-col">
          {notLoggedIn.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-black hover:bg-black hover:text-white rounded-md py-2 px-2 text-sm font-medium"
            >
              {item.name}
            </Link>
          ))}
        </li>
      )}
    </ul>
  );
};

export default DesktopMenu;
