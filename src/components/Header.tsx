/* eslint-disable @next/next/no-img-element */
import { Menu, Transition } from "@headlessui/react";
import { type NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
// import Link from "next/link";

const headerLinks = [
  { name: "Services", href: "#services" },
  { name: "Talent", href: "#talent" },
  { name: "Contact", href: "#contact" },
];

const Header: NextPage = () => {
  return (
    <>
      <header className="t-0 l-0 margin-b-20 primary-gradient fixed z-50 flex h-20 w-screen flex-row items-center">
        <div className="mx-auto flex items-center justify-between gap-4 px-4 sm:w-2/3 sm:px-0">
          <div className="flex w-1/3 flex-shrink-0 items-center justify-start sm:w-1/4">
            <Link href="/#home">
              <Image
                src="/images/bestem.svg"
                alt="Bestem"
                width={100}
                height={30}
                className=" max-h-10 md:w-2/3"
              />
            </Link>
          </div>

          <ul className="hidden gap-2 md:flex">
            {headerLinks.map((link) => (
              <li
                key={link.name}
                className="align-center flex w-20 justify-center"
              >
                <a href={link.href}>
                  <span className="text-center text-lg font-medium hover:font-bold hover:opacity-90">
                    {link.name}
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <ul className="flex flex-shrink items-center justify-end gap-4 sm:w-1/4 sm:justify-end">
            <li>
              <Link href="https://www.linkedin.com/company/bestem-dev">
                <Image
                  width={20}
                  height={20}
                  src="/images/linkedin.svg"
                  alt="LinkedIn"
                />
              </Link>
            </li>
            <li>
              <Link href="https://twitter.com/bestemdev">
                <Image
                  width={20}
                  height={20}
                  src="/images/twitter.svg"
                  alt="Twitter"
                />
              </Link>
            </li>
            <li>
              <Link href="https://discord.gg/8bKWeayDbe">
                <Image
                  width={20}
                  height={20}
                  src="/images/discord.svg"
                  alt="Discord"
                />
              </Link>
            </li>
          </ul>

          <Menu
            as="div"
            className="relative flex justify-end text-left  sm:w-1/4 md:hidden md:w-1/3"
          >
            <div>
              <Menu.Button
                aria-label="menu"
                id="menuButton"
                className="inline-flex w-full justify-center rounded-md border border-transparent bg-transparent px-4 py-2 text-sm font-medium text-white hover:bg-secondary focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
              >
                {({ open }) =>
                  open ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                      />
                    </svg>
                  )
                }
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute -right-4 mt-12 w-screen max-w-md origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                {headerLinks.map((item) => (
                  <Menu.Item key={item.name}>
                    <a
                      href={item.href}
                      className="block px-8 py-2 text-center text-sm text-gray-700 hover:bg-gray-100"
                    >
                      {item.name}
                    </a>
                  </Menu.Item>
                ))}
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </header>
      <div className="h-20" />
    </>
  );
};

export default Header;
