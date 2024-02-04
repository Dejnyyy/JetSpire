import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon,  XMarkIcon } from '@heroicons/react/24/outline'
import clsx from 'clsx';
import Link from 'next/link';

const navigation = [
  { name: 'Home', href: '#', current: true },
  { name: 'About', href: '/about', current: false },
  { name: 'Contact', href: '/contact', current: false },
  { name: 'Team', href: '/team', current: false },
]
const navs = [
  { name: 'About', href: '/about', current: false },
  { name: 'Contact', href: '/contact', current: false },
  { name: 'Team', href: '/team', current: false },
]

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

              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-center">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="h-8 w-auto cursor-pointer"
                    src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/46gdLUn891cmJZxfzaRR/media/656b59cc0af0f785e2951c2d.png"
                    alt="JetSpire Logo"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link href={item.href} key={item.name}>
                        <p className="text-white font-mono font-semibold ml-2 text-lg">{item.name}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <section className='bg-black h-auto py-5'>
            <div className='flex items-center justify-center'>
              <div><h1 className='text-center text-6xl text-white font-mono font-semibold cursor-pointer'>JETSPIRE</h1>
              <h1 className='text-center text-2xl text-white font-mono font-semibold'>AI - Marketing</h1>
              </div>
              <img src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/46gdLUn891cmJZxfzaRR/media/656b59cc0af0f785e2951c2d.png"
                    alt="JetSpire Logo"
                    className='w-96 my-48'>
              </img>
            </div>
          </section>
          <section className='bg-black h-auto py-12'>
              <div className='justify-center text-center flex-auto items-center md:mx-24 lg:mx-48 sm:mx-12 xl:mx-96'>
                <strong className='text-white text-3xl font-mono font-semibold'>Boosting You Beyond The Stratosphere!</strong>
                <h3 className="text-white text-xl font-mono font-semibold my-5  rounded-lg p-5 px-24">Welcome to Jetspire, your indispensable ally for scaling the elusive peaks of online visibility. We don't just sprinkle a few SEO keywords and call it a day! Our AI, tailored to your needs, crafts ingenious solutions helping you ascend to the zenith of the Google ranks - no ads attached.</h3>
              </div>
          </section>
          <section className='bg-#8da9c4 h-auto py-12 mb-12'>
              <div className='justify-center text-center mx-36 xl:mx-48'>
                <strong className='text-white text-4xl font-mono font-semibold'>Satisfied Customers</strong>
                <div className="columns-3 mt-12 mx-48">

                <div className="border rounded-lg p-4 m-1">
                  <h1 className='text-white text-2xl font-mono font-semibold p-1'>"Discoverability Boost"</h1>  
                  <p className="text-white text-lg font-mono px-3 mt-3">Since partnering with this SEO-savvy team, our business is now more visible on Google. It's not just numbers—it's real clicks and connections that are driving our success.</p>
                  <h1 className="text-white text-xl font-mono font-semibold mt-3">- Propellr software</h1>
                </div>  
                <div className="border rounded-lg p-4 m-1">
                  <h1 className='text-white text-2xl font-mono font-semibold p-1'>"Right fit for our brand"</h1>
                  <p className="text-white text-lg font-mono font px-3 mt-3">Thanks to this service, our website now shines higher on Google. It's more than numbers—it means more people finding us and choosing our offerings. Great tool for boosting online visibility!</p>
                  <h1 className="text-white text-xl font-mono font-semibold mt-3">- KoelR</h1>
                </div>
                <div className="border rounded-lg p-4 m-1">
                  <h1 className='text-white text-2xl font-mono font-semibold p-1'>"From click to connection"</h1>
                  <p className="text-white text-lg font-mono font px-3 mt-3">We've seen a positive shift in our online experience, all thanks to the improved Google ranking of our go-to brand. It's like they've become even more attuned to what we're looking for, making every click count.</p>
                  <h1 className="text-white text-xl font-mono font-semibold mt-3">- FAI marketing</h1>
                </div>
              </div>  
          </div>
          </section>
          <section className='bg-black pt-24'>
            <div className='xl:mx-96 px-48 lg:mx-24 md:mx-12'>
              <strong className='text-white text-4xl font-mono font-semibold '>Ready for lift-off? Join us on an incredible journey and let's soar to the stellar heights of success together!</strong>
              <iframe className='py-12 xl:w-full lg:w-full md:w-full sm:w-full' title="vimeo-player" src="https://player.vimeo.com/video/891487351?h=2b6cd90213" width="1280" height="720" allowFullScreen></iframe>
            </div>
          </section>
          <section>
            <footer>
              <div className='bg-black h-auto pt-8 pb-5'>
                <div className='justify-center text-center xl:mx-96 lg:mx-48 sm:mx-12'>
                  <strong className='text-white text-4xl font-mono font-semibold'>JETSPIRE</strong>
                  <h3 className="text-white text-xl font-mono font-semibold my-5  rounded-lg p-5 px-24">We're here to help you reach the stars.</h3>
                  </div>
                <div className='text-center'>
                {navs.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={clsx(
                          item.current ? 'bg-gray-900 text-white font-mono font-semibold' : 'mx-12 cursor-pointer font-mono font-semibold text-xl text-gray-300 hover:bg-gray-700 hover:text-white',
                          'rounded-md px-3 pt-2 text-sm font-semibold font-mono'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                    <div>
                      <p className='text-white text-lg font-mono font-semibold mt-5'>&copy;2024</p>
                    </div>
                </div>
               
              </div>
            </footer>
          </section>



          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={clsx(
                    item.current ? 'bg-gray-900 text-white font-mono font-semibold text-lg' : 'text-gray-300 hover:bg-gray-700 hover:text-white font-mono font-semibold text-lg',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
   
  )
} 