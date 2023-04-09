"use client";

import clsx from "clsx";
import { useClerk } from "@clerk/nextjs/app-beta/client";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import {
  ArrowRightIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSelectedLayoutSegment } from "next/navigation";
import { Fragment, useTransition } from "react";
import SignInButton from "../SignInButton";

interface UserInfo {
  firstName: string;
  lastName: string;
  profileImageUrl: string;
  userFound: boolean;
}

function ProfileDropdown({ profileImageUrl }: { profileImageUrl: string }) {
  const router = useRouter();
  const [, startTransition] = useTransition();
  const { signOut } = useClerk();

  async function handleClick() {
    await signOut();

    startTransition(() => {
      router.refresh();
    });
  }

  return (
    <Menu as="div" className="relative ml-3">
      <div>
        <Menu.Button className="flex rounded-full bg-red-300 text-sm focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2">
          <span className="sr-only">Open user menu</span>
          <Image
            className="rounded-full"
            alt="Profile picture"
            src={profileImageUrl}
            width={32}
            height={32}
          />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-red-300 py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <Menu.Item>
            {({ active }) => (
              <Link
                href="/users"
                className={clsx(
                  active ? "bg-slate-100" : "",
                  "block px-4 py-2 text-sm text-slate-700"
                )}
              >
                Your Profile
              </Link>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <button
                onClick={() => void handleClick()}
                className={clsx(
                  active ? "bg-slate-100" : "",
                  "block w-full px-4 py-2 text-left text-sm text-slate-700"
                )}
              >
                Sign out
              </button>
            )}
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

function MobileMenu({ userInfo }: { userInfo: UserInfo }) {
  const segment = useSelectedLayoutSegment();

  const isRoot = segment === null;
  const isLists = segment === "lists";
  const isTalkies = segment === "talkies";

  return (
    <Disclosure.Panel className="sm:hidden">
      <div className="space-y-1 pb-3 pt-2">
        <Link
          href="/"
          className={clsx(
            "block border-l-4  py-2 pl-3 pr-4 text-base font-medium text-slate-700",
            {
              "border-slate-500 bg-slate-100": isRoot,
              "hover:border-slate-300 hover:bg-slate-100 hover:text-slate-700 border-transparent":
                !isRoot,
            }
          )}
        >
          Home
        </Link>
        <Link
          href="/talkies"
          className={clsx(
            "block border-l-4  py-2 pl-3 pr-4 text-base font-medium text-slate-700 w-full",
            {
              "border-slate-500 bg-slate-100": isTalkies,
              "hover:border-slate-300 hover:bg-slate-100 hover:text-slate-700 border-transparent":
                !isTalkies,
            }
          )}
        >
          Talkies
        </Link>
        {userInfo.userFound && (
          <>
            <Link
              href="/lists"
              className={clsx(
                "block border-l-4  py-2 pl-3 pr-4 text-base font-medium text-slate-700",
                {
                  "border-slate-500 bg-slate-100": isLists,
                  "hover:border-slate-300 hover:bg-slate-100 hover:text-slate-700 border-transparent":
                    !isLists,
                }
              )}
            >
              Lists
            </Link>
          </>
        )}
      </div>
      <div className="border-t border-slate-200 pb-3 pt-4">
        {userInfo.userFound ? (
          <>
            <div className="flex items-center px-4">
              <div className="flex-shrink-0">
                <Image
                  className="rounded-full"
                  alt="Profile picture"
                  src={userInfo.profileImageUrl}
                  width={32}
                  height={32}
                />
              </div>
              <div className="ml-3">
                <div className="text-base font-medium text-slate-800">
                  {userInfo.firstName} {userInfo.lastName}
                </div>
                <div className="text-sm font-medium text-slate-500"></div>
              </div>
            </div>
            <div className="mt-3 space-y-1">
              <Disclosure.Button
                as="a"
                href="#"
                className="block px-4 py-2 text-base font-medium text-slate-500 hover:bg-slate-100 hover:text-slate-800"
              >
                Your Profile
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="block px-4 py-2 text-base font-medium text-slate-500 hover:bg-slate-100 hover:text-slate-800"
              >
                Sign out
              </Disclosure.Button>
            </div>
          </>
        ) : (
          <div className="px-4">
            <SignInButton />
          </div>
        )}
      </div>
    </Disclosure.Panel>
  );
}

export default function NavbarClient({ userInfo }: { userInfo: UserInfo }) {
  const segment = useSelectedLayoutSegment();

  const isRoot = segment === null;
  const isLists = segment === "lists";
  const isTalkies = segment === "talkies";

  return (
    <Disclosure as="nav" className="sticky top-0 bg-red-300 shadow">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 justify-between">
              <div className="flex">
                <div className="flex flex-shrink-0 items-center">
                  <Link href="/">
                    <Image
                      width={32}
                      height={32}
                      src="/android-chrome-192x192.png"
                      alt="projector emoji"
                    />
                  </Link>
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  <Link
                    href="/"
                    className={clsx(
                      "inline-flex items-center border-b-2  px-1 pt-1 text-sm font-medium",
                      {
                        "border-slate-700 text-slate-700": isRoot,
                        "border-transparent text-slate-500 hover:border-slate-700 hover:text-slate-700":
                          !isRoot,
                      }
                    )}
                  >
                    Home
                  </Link>

                  <Link
                    href="/talkies"
                    className={clsx(
                      "inline-flex items-center border-b-2  px-1 pt-1 text-sm font-medium",
                      {
                        "border-slate-700 text-slate-700": isTalkies,
                        "border-transparent text-slate-500 hover:border-slate-700 hover:text-slate-700":
                          !isTalkies,
                      }
                    )}
                  >
                    Talkies
                  </Link>
                  {userInfo.userFound && (
                    <>
                      <Link
                        href="/lists"
                        className={clsx(
                          "inline-flex items-center border-b-2  px-1 pt-1 text-sm font-medium",
                          {
                            "border-slate-700 text-slate-700": isLists,
                            "border-transparent text-slate-500 hover:border-slate-700 hover:text-slate-700":
                              !isLists,
                          }
                        )}
                      >
                        Lists
                      </Link>
                    </>
                  )}
                </div>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:items-center">
                {userInfo.userFound ? (
                  <ProfileDropdown profileImageUrl={userInfo.profileImageUrl} />
                ) : (
                  <Link
                    href="/sign-in"
                    className="flex items-center rounded-md bg-slate-700 px-4 py-2 text-white hover:bg-slate-500"
                  >
                    Sign in
                    <ArrowRightIcon className="block h-6 w-6 pl-2" />
                  </Link>
                )}
              </div>
              <div className="-mr-2 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:bg-slate-100 hover:text-slate-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-slate-500">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <MobileMenu userInfo={userInfo} />
        </>
      )}
    </Disclosure>
  );
}
