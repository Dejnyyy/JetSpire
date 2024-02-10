
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

import { navigation } from "./navigation";
import Link from "next/link";

const Navbar = () => {
  return (
    <Disclosure as="nav">
      {({ open }) => (
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className=" inset-y-0  flex items-center sm:hidden">
              <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open Menu</span>
                {open ? (
                  <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                )}
              </Disclosure.Button>
            </div>
            <Disclosure.Panel className="sm:hidden">
              <div>
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={
                      "mx-2 font-mono text-lg font-semibold text-white"
                    }
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-center">
              <div className="flex flex-shrink-0 items-center">
                {!open && (
                  <Link href="/">
                    <Image
                      className="h-8 w-auto cursor-pointer"
                      src="/logo.webp"
                      alt="JetSpire Logo"
                      width={1200}
                      height={1200}
                    />
                  </Link>
                )}
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  {navigation.map((item) => (
                    <Link href={item.href} key={item.name}>
                      <p className="ml-2 rounded-lg px-3 py-1 font-mono text-lg font-semibold text-white hover:bg-gray-700 hover:text-white">
                        {item.name}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      )}
    </Disclosure>
  );
};

export default Navbar;
