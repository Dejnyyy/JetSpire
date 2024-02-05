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
                    item.current ? 'bg-gray-900 text-white font-mono font-semibold text-lg' : 'text-gray-300 hover:bg-gray-700 hover:text-white font-mono font-semibold text-lg',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
                </div>
            </div>
          </Disclosure.Panel>
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
              <div>
              <h1 className=' text-lg text-white font-mono font-semibold'>Contact</h1>
              <h1 className='text-center lg:text-6xl md:text-4xl sm:text-4xl text-2xl text-white font-mono font-semibold cursor-pointer'>JETSPIRE</h1>
              <h1 className='text-center lg:text-2xl md:text-xl sm:text-lg text-md text-white font-mono font-semibold'>AI - Marketing</h1>
              </div>
              <img src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/46gdLUn891cmJZxfzaRR/media/656b59cc0af0f785e2951c2d.png"
                    alt="JetSpire Logo"
                    className='w-24 my-48 md:w-48 lg:w-96 xl:w-96 sm:w-36'>
              </img>
            </div>
          </section>
          <section>
            <footer>
              <div className='bg-black h-auto pt-8 pb-5 border-t border-white'>
                <div className='justify-center text-center xl:mx-96 lg:mx-48 sm:mx-12'>
                  <strong className='text-white text-4xl font-mono font-semibold'>JETSPIRE</strong>
                  <h3 className="text-white text-xl font-mono font-semibold my-5  rounded-lg p-5 px-24">We're here to help you reach the stars.</h3>
                  </div>
                  <div className='text-center flex justify-center'>
                {navigation.map((item) => (
                      <Link 
                      href={item.href} 
                      key={item.name}>
                        <p className="text-white font-mono font-semibold ml-2 text-lg hover:bg-gray-700 hover:text-white rounded-lg py-1 px-3">{item.name}</p>
                      </Link>
                    ))}
                </div>
                <div>
                    <p className='text-white text-lg font-mono font-semibold  text-center mt-5'>&copy;2024</p>
                </div>
              </div>
            </footer>
          </section>
        </>
      )}
    </Disclosure>
  )
} 