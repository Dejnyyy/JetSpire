import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon,  XMarkIcon } from '@heroicons/react/24/outline'
import clsx from 'clsx';
import Link from 'next/link';


const navigation = [
  { name: 'Home', href: '/home', current: false },
  { name: 'About', href: '#', current: true },
  { name: 'Contact', href: '#', current: false },
  { name: 'Team', href: '#', current: false },
]
const navs = [
  { name: 'About', href: '#', current: false },
  { name: 'Contact', href: '#', current: false },
  { name: 'Team', href: '#', current: false },
]

export default function About() {
  return (
    <Disclosure as="nav" className="bg-gray-800">
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
                        <p className="text-white font-mono font-semibold ml-2 text-lg hover:bg-gray-700 hover:text-white rounded-lg py-1 px-3">{item.name}</p>
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
          <section className='bg-black h-auto py-8'>
              <div className='justify-center  flex-auto items-center md:mx-36 lg:mx-56 sm:mx-12 xl:mx-96'>
                <strong className='text-white text-6xl font-mono font-semibold'>How do we boost you beyond the stratosphere?</strong>
                <h3 className="text-white text-xl font-mono font-semibold my-3  rounded-lg p-3 px-24">Welcome to Jetspire, where we redefine online visibility with cutting-edge AI-based marketing tools. One of our standout offerings is Programmatic SEO — a strategic approach that maximizes your reach and impact in the digital realm. Let's delve into how it works:</h3>
                <h3 className="text-white text-xl font-mono font-semibold rounded-lg p-3 px-24">1. Strategic Website Setup</h3>
                <p  className="text-white text-lg font-mono    rounded-lg p-5 px-24">We create a dynamic website acting as a comprehensive directory, meticulously optimized for SEO. Leveraging data from US or UK Census, we generate SEO-optimized pages for each keyword we target and every town or village within our specified area.</p>
              </div>
          </section>
          
          <section className='bg-sky-900 pt-24'>
            <div className='xl:mx-96 px-48 lg:mx-24 md:mx-12'>
              <strong className='text-white text-4xl font-mono font-semibold '>Ready for lift-off? Join us on an incredible journey and let's soar to the stellar heights of success together!</strong>
              <iframe className='py-12 xl:w-full lg:w-full md:w-full sm:w-full' title="vimeo-player" src="https://player.vimeo.com/video/891487351?h=2b6cd90213" width="1280" height="720" allowFullScreen></iframe>
            </div>
          </section>
          <section>
            <footer>
              <div className='bg-black h-auto py-12'>
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
                          item.current ? 'bg-gray-900 text-white font-mono font-semibold text-lg' : 'mx-12 cursor-pointer font-mono font-semibold text-lg text-gray-300 hover:bg-gray-700 hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
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