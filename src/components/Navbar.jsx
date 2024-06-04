import '../index.css'
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Avatar from '../assets/foto-avatar2.jpg'

const navigation = [
  { name: 'Home', href: '#', current: true },
  { name: 'About', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Contact me', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <Disclosure as="nav" className="bg-alice fixed top-0 w-full z-10 bg-alice_blue">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              {/* Mobile menu button */}
              
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="inline-block h-12 w-12 rounded-full ring-white"
                    src={Avatar}
                    alt=""
                  />
                  <p>Andres Liporace</p>
                </div>
                <div className="hidden sm:flex sm:ml-6 flex-1 justify-center">
                  <div className="space-x-4 flex justify-center text-caribean">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-pale_dogwood-400 text-white' : 'text-gray-300 hover:bg-pale_dogwood hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  {/* Profile dropdown */}
                  <label>
                    <div className="w-9 h-10 cursor-pointer flex flex-col items-center justify-center">
                      <input className="hidden peer" type="checkbox" />
                      <div className="w-[50%] h-[2px] bg-caribbean_current rounded-sm transition-all duration-300 origin-left translate-y-[0.45rem] peer-checked:rotate-[-45deg]"></div>
                      <div className="w-[50%] h-[2px] bg-caribbean_current rounded-md transition-all duration-300 origin-center peer-checked:hidden"></div>
                      <div className="w-[50%] h-[2px] bg-caribbean_current rounded-md transition-all duration-300 origin-left -translate-y-[0.45rem] peer-checked:rotate-[45deg]"></div>
                    </div>
                  </label>
                </div>
              </div>
            </div>
          </div>
          
          <DisclosurePanel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <DisclosureButton
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </DisclosureButton>
              ))}
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}