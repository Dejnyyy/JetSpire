import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";

import { navigation } from "../../components/navigation";

export default function About() {
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
                  About
                </h1>
                <h1 className="cursor-pointer text-center font-mono text-6xl font-semibold text-white sm:text-7xl md:text-8xl lg:text-10xl">
                  JETSPIRE
                </h1>
                <h1 className="text-md text-center font-mono font-semibold text-white sm:text-xl md:text-2xl lg:text-4xl">
                  AI - Marketing
                </h1>
              </div>
              <Image
                src="/logo.webp"
                alt="JetSpire Logo"
                className="my-48 w-36 sm:w-48 md:w-64 lg:w-96 xl:w-96"
                width={1200}
                height={1200}
              />
            </div>
          </section>

          <section className="h-auto bg-black py-8">
            <div className="flex-auto  items-center justify-center p-4  ">
              <h1 className=" font-mono text-xl font-semibold text-white sm:text-2xl  md:text-4xl lg:text-6xl">
                How do we boost you beyond the stratosphere?
              </h1>
              <h3 className="my-3 p-3  font-mono  text-xl font-semibold text-white">
                Welcome to Jetspire, where we redefine online visibility with
                cutting-edge AI-based marketing tools. One of our standout
                offerings is Programmatic SEO — a strategic approach that
                maximizes your reach and impact in the digital realm. Let's
                delve into how it works:
              </h3>
              <h3 className=" p-3 border-t border-white font-mono text-xl font-semibold text-white">
                1. Strategic Website Setup
              </h3>
              <p className="p-5 font-mono text-lg text-white">
                We create a dynamic website acting as a comprehensive directory,
                meticulously optimized for SEO. Leveraging data from US or UK
                Census, we generate SEO-optimized pages for each keyword we
                target and every town or village within our specified area.
              </p>
              <h3 className="p-3 border-t border-white font-mono text-xl font-semibold text-white">
                2. Population and Demographics Integration
              </h3>
              <p className="p-5  font-mono text-lg text-white">
                The number of pages directly correlates with the number of
                keywords and towns/villages. For instance, if we target "pest
                control" with 3 keywords and 100 towns/villages, we generate 300
                pages. Each page is tailored to a specific combination, such as
                "pest control Round Rock Texas."
              </p>
              <h3 className=" p-3 border-t  border-white font-mono text-xl font-semibold text-white">
                3. Precision Optimization
              </h3>
              <p className=" p-5  font-mono text-lg text-white">
                These pages are more than just content; they are fine-tuned for
                SEO success. We employ meta tags and schema to optimize each
                page and seamlessly link it to the business profile. Ideally,
                this directory resides on a subdomain of your company website,
                forging a strong association with Google.
              </p>
              <h3 className=" p-3 border-t border-white font-mono text-xl font-semibold text-white">
                4. Analytics Integration
              </h3>
              <p className=" p-5  font-mono text-lg text-white">
                The directory site is equipped with a separate Google Analytics
                setup and Google Webmaster Tools. We proactively submit a
                sitemap to Google, ensuring swift indexing of pages. Our goal is
                to secure top 3 positions in search results for the targeted
                keywords.
              </p>
              <h3 className=" p-3 border-t border-white font-mono text-xl font-semibold text-white">
                5. User Engagement Tracking
              </h3>
              <p className=" p-5  font-mono text-lg text-white">
                When users discover and engage with these pages, their
                interactions are meticulously tracked through Google Analytics.
                This engagement is crucial, especially when visitors are located
                in the corresponding town/village. The content is optimized for
                both the keyword and location, sending strong signals to Google
                that someone actively sought that specific service in that area.
              </p>
              <h3 className=" p-3 border-t border-white font-mono text-xl font-semibold text-white">
                6. Closing the Loop with Reviews
              </h3>
              <p className=" p-5  font-mono text-lg text-white">
                A positive loop is completed when engaged visitors, satisfied
                with the information, leave reviews. This feedback significantly
                enhances the impact on the local 3-pack results, establishing
                your business prominently in local searches.
              </p>
              <h3 className=" p-3 border-t border-white font-mono text-xl font-semibold text-white">
                Why Programmatic SEO Works
              </h3>
              <p className=" p-5  font-mono text-lg text-white">
                Precision Targeting: By aligning content with specific keywords
                and locations, we optimize your visibility where it matters
                most.User-Centric Engagement: User interactions are actively
                tracked, providing valuable insights into their needs and
                preferences. Google Association: The strategic setup enhances
                Google's association between your business and the targeted
                locations, elevating your online presence.
              </p>
              <p className="rounded-lg p-5  font-mono text-lg text-white">
                At Jetspire, Programmatic SEO isn't just a service; it's a
                tailored approach to amplify your digital footprint. Let us
                propel your business to the forefront of online visibility and
                local search results. Discover the power of Programmatic SEO
                with Jetspire today!
              </p>
            </div>
          </section>
          <section className="bg-black pt-24 text-2xl   text-white">
            <div className="mx-4 ">
              <h1 className="text-left font-mono font-semibold">
                Ready for lift-off? Join us on an incredible journey and let's
                soar to the stellar heights of success together!
              </h1>
              <div className="text-center">
                <Link href="/contact">
                  <button className="mt-20  rounded-full bg-white px-8 py-2 font-mono font-semibold text-black shadow-md shadow-white hover:bg-slate-300">
                    Start your journey
                  </button>
                </Link>
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
