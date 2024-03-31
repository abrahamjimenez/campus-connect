"use client";

import React, {Fragment} from "react";
import Link from "next/link";
import SignOutButton from "@/components/SignOutButton";
import { JWTPayload } from "jose";
import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'

const jobs = [
  { name: "All Jobs", href: "/all-jobs" },
  { name: "Create Jobs", href: "/create-job" },
  { name: "Saved Jobs", href: "/saved-jobs" },
];

const DesktopMenu = ({ user }: { user: JWTPayload }) => {
  return (
    <ul className="hidden lg:flex lg:justify-around">
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Popover className="absolute">
          <Popover.Button className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
            <span>Jobs</span>
            <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
          </Popover.Button>

          <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="relative left-1/2 mt-5 flex w-screen max-w-max -translate-x-1/2">
              <div className="w-screen max-w-md flex-auto overflow-hidden rounded bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
                <div>
                  {jobs.map((item) => (
                      <div key={item.name} className="relative flex gap-x-6 rounded-lg py-4 hover:bg-gray-50">
                        <div>
                          <a href={item.href} className="font-semibold text-gray-900">
                            {item.name}
                            <span className="absolute inset-0" />
                          </a>
                        </div>
                      </div>
                  ))}
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>
      </li>
      <li>
        <Link href="/messages">Messages</Link>
      </li>
      <li>
        <Link href="/profile">Profile</Link>
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

function IconOne() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="8" fill="#FFEDD5" />
      <path
        d="M24 11L35.2583 17.5V30.5L24 37L12.7417 30.5V17.5L24 11Z"
        stroke="#FB923C"
        strokeWidth="2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.7417 19.8094V28.1906L24 32.3812L31.2584 28.1906V19.8094L24 15.6188L16.7417 19.8094Z"
        stroke="#FDBA74"
        strokeWidth="2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.7417 22.1196V25.882L24 27.7632L27.2584 25.882V22.1196L24 20.2384L20.7417 22.1196Z"
        stroke="#FDBA74"
        strokeWidth="2"
      />
    </svg>
  );
}

function IconTwo() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="8" fill="#FFEDD5" />
      <path
        d="M28.0413 20L23.9998 13L19.9585 20M32.0828 27.0001L36.1242 34H28.0415M19.9585 34H11.8755L15.9171 27"
        stroke="#FB923C"
        strokeWidth="2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.804 30H29.1963L24.0001 21L18.804 30Z"
        stroke="#FDBA74"
        strokeWidth="2"
      />
    </svg>
  );
}

function IconThree() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="8" fill="#FFEDD5" />
      <rect x="13" y="32" width="2" height="4" fill="#FDBA74" />
      <rect x="17" y="28" width="2" height="8" fill="#FDBA74" />
      <rect x="21" y="24" width="2" height="12" fill="#FDBA74" />
      <rect x="25" y="20" width="2" height="16" fill="#FDBA74" />
      <rect x="29" y="16" width="2" height="20" fill="#FB923C" />
      <rect x="33" y="12" width="2" height="24" fill="#FB923C" />
    </svg>
  );
}
