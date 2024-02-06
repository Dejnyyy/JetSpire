import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
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
              <div className="">
                <h1 className="cursor-pointer text-center font-mono text-4xl font-semibold text-white sm:text-5xl md:text-6xl lg:text-6xl">
                  JETSPIRE
                </h1>
                <h1 className="text-center font-mono text-lg font-semibold text-white sm:text-xl md:text-2xl lg:text-2xl">
                  AI - Marketing
                </h1>
              </div>
              <Image
                src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/46gdLUn891cmJZxfzaRR/media/656b59cc0af0f785e2951c2d.png"
                alt="JetSpire Logo"
                className="my-48 w-48 sm:w-64 md:w-72 lg:w-96 xl:w-96"
                width={1200}
                height={1200}
              />
            </div>
          </section>
          <section className="h-auto bg-black py-12">
            <div className="flex-auto items-center justify-center text-center sm:mx-12 md:mx-24 lg:mx-48 xl:mx-96">
              <strong className="font-mono text-3xl font-semibold text-white">
                Boosting You Beyond The Stratosphere!
              </strong>
              <h3 className="my-5 rounded-lg p-5 px-24 font-mono  text-xl font-semibold text-white">
                Welcome to Jetspire, your indispensable ally for scaling the
                elusive peaks of online visibility. We don't just sprinkle a few
                SEO keywords and call it a day! Our AI, tailored to your needs,
                crafts ingenious solutions helping you ascend to the zenith of
                the Google ranks - no ads attached.
              </h3>
            </div>
          </section>
          <section className="mb-12 h-auto bg-black py-12">
            <div className="mx-4 justify-center text-center md:mx-12 xl:mx-48">
              <strong className="font-mono text-4xl font-semibold text-white">
                Satisfied Customers
              </strong>
              <div className="mx-24 mt-12 columns-1 md:columns-1 lg:columns-1 xl:columns-3">
                <div className="m-1 rounded-lg border p-4">
                  <h1 className="p-1 font-mono font-semibold text-white md:text-xl lg:text-2xl xl:text-xl">
                    "Discoverability Boost"
                  </h1>
                  <p className="xl:text-md mt-3 px-3 font-mono text-sm text-white md:text-lg">
                    Since partnering with this SEO-savvy team, our business is
                    now more visible on Google. It's not just numbers—it's real
                    clicks and connections that are driving our success.
                  </p>
                  <h1 className="mt-3 font-mono font-semibold text-white md:text-xl lg:text-2xl xl:text-lg">
                    - Propellr software
                  </h1>
                </div>
                <div className="m-1 rounded-lg border p-4">
                  <h1 className="p-1 font-mono font-semibold text-white md:text-xl lg:text-2xl xl:text-xl">
                    "Right fit for our brand"
                  </h1>
                  <p className="xl:text-md font mt-3 px-3 font-mono text-sm text-white md:text-lg">
                    Thanks to this service, our website now shines higher on
                    Google. It's more than numbers—it means more people finding
                    us and choosing our offerings. Great tool for boosting
                    online visibility!
                  </p>
                  <h1 className="mt-3 font-mono font-semibold text-white md:text-xl lg:text-2xl xl:text-lg">
                    - KoelR
                  </h1>
                </div>
                <div className="m-1 rounded-lg border p-4">
                  <h1 className="p-1 font-mono font-semibold text-white md:text-xl lg:text-2xl xl:text-xl">
                    "From click to connection"
                  </h1>
                  <p className="xl:text-md font mt-3 px-3 font-mono text-sm text-white md:text-lg">
                    We've seen a positive shift in our online experience, all
                    thanks to the improved Google ranking of our go-to brand.
                    It's like they've become even more attuned to what we're
                    looking for, making every click count.
                  </p>
                  <h1 className="mt-3 font-mono font-semibold text-white md:text-xl lg:text-2xl xl:text-lg">
                    - FAI marketing
                  </h1>
                </div>
              </div>
            </div>
          </section>
          <section className="bg-black pt-24">
            <div className="px-12 md:mx-12 lg:mx-24 xl:mx-48">
              <h1 className="font-mono text-lg font-semibold text-white sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl ">
                Ready for lift-off? Join us on an incredible journey and let's
                soar to the stellar heights of success together!
              </h1>
              <iframe
                className="w-full justify-center py-12 text-center sm:w-full md:w-full lg:w-full"
                title="vimeo-player"
                src="https://player.vimeo.com/video/891487351?h=2b6cd90213"
                width="1280"
                height="720"
                allowFullScreen
              ></iframe>
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
