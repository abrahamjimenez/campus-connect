"use client";

import React from "react";
import { usePathname } from "next/navigation";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
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
  notLoggedIn,
} from "@/components/Header/navigation";

interface Item {
  name: string;
  href: string;
}

type CloseFunction = (
  focusableElement?: HTMLElement | React.MutableRefObject<HTMLElement | null>,
) => void;

const NavLink = ({
  item,
  pathname,
  close,
}: {
  item: Item;
  pathname: string;
  close: CloseFunction;
}) => (
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
);

const NavigationSection = ({
  item,
  pathname,
  close,
}: {
  item: Item;
  pathname: string;
  close: CloseFunction;
}) => <NavLink item={item} pathname={pathname} close={close} />;

const JobsSection = ({ item, close }: { item: Item; close: CloseFunction }) => (
  <DisclosurePanel
    key={item.name}
    className="text-black hover:bg-black hover:text-white rounded-md py-2 px-4 text-sm font-medium"
  >
    <Link href={item.href} onClick={() => close()}>
      {item.name}
    </Link>
  </DisclosurePanel>
);

const BottomNavigation = ({
  item,
  pathname,
  close,
}: {
  item: Item;
  pathname: string;
  close: CloseFunction;
}) => <NavLink item={item} pathname={pathname} close={close} />;

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
              <DisclosureButton className="py-2">
                {open ? (
                  <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                )}
              </DisclosureButton>

              <Link href="/" className="text-xl">
                Campus Connect
              </Link>
              <MagnifyingGlassIcon className="h-6 w-6" />
            </div>
            <DisclosurePanel className="text-gray-500">
              <div className="flex flex-col">
                {navigation.map((item) => (
                  <NavigationSection
                    key={item.name}
                    item={item}
                    pathname={pathname}
                    close={close}
                  />
                ))}

                <Disclosure>
                  {({ open }) => (
                    <>
                      <DisclosureButton className="flex justify-between text-black hover:bg-black hover:text-white rounded-md py-2 px-2 text-sm font-medium">
                        Jobs
                        <ChevronRightIcon
                          className={`h-5 w-5 ${open ? "rotate-90 transform" : ""}`}
                        />
                      </DisclosureButton>
                      {jobs.map((item) => (
                        <JobsSection
                          key={item.name}
                          item={item}
                          close={close}
                        />
                      ))}
                    </>
                  )}
                </Disclosure>

                {bottomNavigationFilter.map((item) => (
                  <BottomNavigation
                    key={item.name}
                    item={item}
                    pathname={pathname}
                    close={close}
                  />
                ))}

                {user ? (
                  <SignOutButton />
                ) : (
                  <div className="flex justify-around pb-2">
                    {notLoggedIn.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="text-black hover:bg-black hover:text-white rounded-md py-2 px-2 text-sm font-medium"
                        onClick={() => close()}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </DisclosurePanel>
          </>
        )}
      </Disclosure>
    </div>
  );
};

export default MobileMenu;
