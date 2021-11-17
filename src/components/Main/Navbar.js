import React from "react";

import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";
import NavProfile from "./NavProfile";
const navigation = [
  { name: "Home", href: "#", current: false },
  { name: "Rides", href: "#", current: true },
  { name: "Requests", href: "#", current: false },
  { name: "Add new!", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = ({ modalButton }) => {
  return (
    <Disclosure as="nav" className="bg-red-400">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon
                      className="block h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  ) : (
                    <MenuIcon
                      className="block h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div>
                  <Link
                    className="nav-linkno-underline text-2xl font-bold text-white dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300"
                    to="/"
                  >
                    CUC
                  </Link>
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-red-300 text-white"
                            : "text-white hover:bg-red-300 hover:text-white duration-200 transform",
                          "px-3 py-2 rounded-md text-sm font-medium"
                        )}
                        onClick={
                          item.name == "Add new!" ? modalButton : () => {}
                        }
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <NavProfile />
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-red-300 text-white"
                      : "text-white hover:bg-red-300 hover:text-white duration-200 transform",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                  onClick={item.name == "Add new!" ? modalButton : () => {}}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
