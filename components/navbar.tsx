import { navigation } from "./navigation";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <Disclosure as="nav">
      {({ open }) => (
        <div className="px-2 ">
          <div className=" flex h-10 items-center justify-between">
            <div className=" inset-y-0  flex items-center sm:hidden">
              <Disclosure.Button className=" inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                <span className="sr-only">Open</span>
                {open ? (
                  <XMarkIcon className=" text-white h-6 w-6" aria-hidden="true" />
                ) : (
                  <Bars3Icon className=" text-white h-6 w-6" aria-hidden="true" />
                )}
              </Disclosure.Button>
            </div>  
            <Disclosure.Panel className="sm:hidden">
                <div className="flex ">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={
                        "bg-gray-900 font-mono text-lg font-semibold text-white hover:bg-slate-600"
                      }
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
            </Disclosure.Panel>
          </div>
        </div>
      )}
    </Disclosure>
  );
};

export default Navbar;
