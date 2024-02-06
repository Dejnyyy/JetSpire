import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";

import { navigation } from "../../components/navigation";

export default function Home() {
  return (
    <Disclosure as="nav" className="bg-black">
      {({ open }) => (
        <>
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
                <div className="space-y-1 px-2 pb-3 pt-2">
                  <div className="flex">
                    {navigation.map((item) => (
                      <Disclosure.Button
                        key={item.name}
                        as="a"
                        href={item.href}
                        className={
                          "bg-gray-900 font-mono text-lg font-semibold text-white"
                        }
                      >
                        {item.name}
                      </Disclosure.Button>
                    ))}
                  </div>
                </div>
              </Disclosure.Panel>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-center">
                <div className="flex flex-shrink-0 items-center">
                  <Image
                    className="h-8 w-auto cursor-pointer"
                    src="/logo.webp"
                    alt="JetSpire Logo"
                    width={1200}
                    height={1200}
                  />
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
          <section className="h-auto bg-black py-5">
            <div className="flex items-center justify-center">
              <div>
                <h1 className=" font-mono text-lg font-semibold text-white">
                  Contact
                </h1>
                <h1 className="cursor-pointer text-center font-mono text-2xl font-semibold text-white sm:text-4xl md:text-4xl lg:text-6xl">
                  JETSPIRE
                </h1>
                <h1 className="text-md text-center font-mono font-semibold text-white sm:text-lg md:text-xl lg:text-2xl">
                  AI - Marketing
                </h1>
              </div>
              <Image
                src="/logo.webp"
                alt="JetSpire Logo"
                className="my-48 w-24 sm:w-36 md:w-48 lg:w-96 xl:w-96"
                width={1200}
                height={1200}
              />
            </div>
          </section>
          <section>
            <div className="">
              <div className="mb-5">
                <h1 className="text-center font-mono text-2xl font-semibold text-white sm:text-3xl md:text-4xl lg:text-6xl">
                  Ready for lift off?
                </h1>
              </div>
              <form className=" mx-auto mb-12 flex  w-3/4 flex-col rounded-lg border p-4 font-mono font-semibold md:w-2/3 lg:w-1/2">
                <label className="text-lg text-white">Name</label>
                <input
                  type="text"
                  placeholder="Name"
                  className="my-2 rounded-lg border-2 border-black p-2"
                ></input>
                <label className="text-lg text-white">Last Name</label>
                <input
                  type="text"
                  placeholder="Last Name"
                  className="my-2 rounded-lg border-2 border-black p-2"
                ></input>
                <label className="text-lg text-white">Organization</label>
                <input
                  type="text"
                  placeholder="Organization"
                  className="my-2 rounded-lg border-2 border-black p-2"
                ></input>
                <label className="text-lg text-white">Email*</label>
                <input
                  type="text"
                  placeholder="Email"
                  required
                  className="my-2 rounded-lg border-2 border-black p-2"
                ></input>
                <label className="text-lg text-white">Phone*</label>
                <input
                  type="text"
                  placeholder="Phone"
                  required
                  className="my-2 rounded-lg border-2 border-black p-2"
                ></input>
                <label className="text-lg text-white">Web URL</label>
                <input
                  type="text"
                  placeholder="Web URL goes here"
                  className="my-2 rounded-lg border-2 border-black p-2"
                ></input>
                <label className="text-lg text-white">Address</label>
                <input
                  type="text"
                  placeholder="Address"
                  className="my-2 rounded-lg border-2 border-black p-2"
                ></input>
                <div className="flex">
                  <input type="checkbox" className="mr-2 h-4 w-4"></input>
                  <p className="text-md text-white">
                    I agree to{" "}
                    <Link href="/terms&conditions" className="text-blue-500">
                      terms & conditions
                    </Link>{" "}
                    provided by the company. By providing my phone number, I
                    agree to receive text messages from the business.
                  </p>
                </div>
                <input
                  type="submit"
                  value="Submit"
                  className="my-2 cursor-pointer rounded-lg border bg-black p-2 font-extrabold text-white"
                ></input>
              </form>
            </div>
          </section>
          <section>
            <footer>
              <div className="h-auto border-t border-white bg-black pb-5 pt-8">
                <div className="justify-center text-center sm:mx-12 lg:mx-48 xl:mx-96">
                  <strong className="font-mono text-4xl font-semibold text-white">
                    JETSPIRE
                  </strong>
                  <h3 className="my-5 rounded-lg p-5 px-24 font-mono  text-xl font-semibold text-white">
                    We're here to help you reach the stars.
                  </h3>
                </div>
                <div className="flex justify-center text-center">
                  {navigation.map((item) => (
                    <Link href={item.href} key={item.name}>
                      <p className="ml-2 rounded-lg px-3 py-1 font-mono text-lg font-semibold text-white hover:bg-gray-700 hover:text-white">
                        {item.name}
                      </p>
                    </Link>
                  ))}
                </div>
                <div>
                  <p className="mt-5 text-center font-mono text-lg  font-semibold text-white">
                    &copy;2024
                  </p>
                </div>
              </div>
            </footer>
          </section>
        </>
      )}
    </Disclosure>
  );
}
