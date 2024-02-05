import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";

const navigation = [
  { name: "Home", href: "/home", current: false },
  { name: "About", href: "/about", current: false },
  { name: "Contact", href: "/contact", current: false },
  { name: "Team", href: "#", current: true },
];

export default function Team() {
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
                        className={clsx(
                          item.current
                            ? "bg-gray-900 font-mono text-lg font-semibold text-white"
                            : "font-mono text-lg font-semibold text-gray-300 hover:bg-gray-700 hover:text-white",
                          "block rounded-md px-3 py-2 text-base font-medium",
                        )}
                        aria-current={item.current ? "page" : undefined}
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
                    src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/46gdLUn891cmJZxfzaRR/media/656b59cc0af0f785e2951c2d.png"
                    alt="JetSpire Logo"
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
                  Team
                </h1>
                <h1 className="cursor-pointer text-center font-mono text-2xl font-semibold text-white sm:text-4xl md:text-4xl lg:text-6xl">
                  JETSPIRE
                </h1>
                <h1 className="text-md text-center font-mono font-semibold text-white sm:text-lg md:text-xl lg:text-2xl">
                  AI - Marketing
                </h1>
              </div>
              <Image
                src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/46gdLUn891cmJZxfzaRR/media/656b59cc0af0f785e2951c2d.png"
                alt="JetSpire Logo"
                className="my-48 w-24 sm:w-36 md:w-48 lg:w-96 xl:w-96"
              />
            </div>
          </section>
          <section className="h-auto bg-black py-8">
            <div className="text-center sm:mx-1 md:mx-12 lg:mx-24 xl:mx-12">
              <h1 className="px-8 font-mono text-2xl font-semibold text-white sm:text-4xl  md:text-4xl lg:text-6xl">
                Team
              </h1>
              <div className="mx-12 mt-12 columns-1 py-4 pb-12 font-mono text-white md:columns-1 lg:columns-1 xl:columns-3">
                <div className="">
                  <Image
                    src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/46gdLUn891cmJZxfzaRR/media/658c1f6225e0d69a669e1e1a.jpeg"
                    alt="bastian"
                    className="mb-5"
                  />
                  <h1 className=" font-semibold md:text-xl lg:text-2xl xl:text-xl">
                    Say hello to Bastiaan,
                  </h1>
                  <p className="p-4 sm:p-1">
                    our decisive team captain. With a clear vision and a "less
                    is more" mentality, he navigates our course with sharp
                    decisions, pointing the way without unnecessary push.
                  </p>
                </div>
                <div className="">
                  <Image
                    src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/46gdLUn891cmJZxfzaRR/media/658c1fece00b873d96225c31.jpeg"
                    alt="frank"
                    className="m-auto my-5 justify-center text-center xl:h-72"
                  />
                  <h1 className="font-semibold md:text-xl lg:text-2xl xl:text-xl">
                    Meet Frank,
                  </h1>
                  <p className="p-4 sm:p-1">
                    our technical wizard and creative maestro. Turning ideas
                    into reality is his forte. No challenge is too big, no
                    concept too daring. Frank makes the impossible possible.
                  </p>
                </div>
                <div className="">
                  <Image
                    src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/46gdLUn891cmJZxfzaRR/media/658c1f5e096557df03b5f881.jpeg"
                    alt="oliver"
                    className="my-5"
                  />
                  <h1 className="font-semibold md:text-xl lg:text-2xl xl:text-xl">
                    Introducing Olivier,
                  </h1>
                  <p className="p-4 sm:p-1">
                    the powerhouse behind our communication and the mastermind
                    steering the team. His professionalism is unmatched, and his
                    smile makes working with him a true delight.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="bg-black pt-20">
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
