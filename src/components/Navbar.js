import React from "react";
import { Link } from "gatsby";
import { Disclosure } from '@headlessui/react'
import { Bars3Icon as MenuIcon, XMarkIcon as XIcon, SunIcon, MoonIcon } from '@heroicons/react/24/outline'
import logo from "../img/logo.svg";
import symbol from "../img/symbol-white.svg";

const navigation = [
  { name: 'Pricing', href: '/pricing' },
  { name: 'Contact', href: '/contact' },
  { name: 'About', href: '/about' },
  { name: 'Sign in', href: 'https://app.kappaml.com/login', external: true },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Navbar = class extends React.Component {
  render() {
    return (
      <Disclosure as="nav" role="navigation" aria-label="main-navigation">
        {({ open }) => (
          <>
            <div className="px-2 mx-auto sm:px-6 lg:px-8">
              <div className="relative flex items-center justify-between h-16">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block w-6 h-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block w-6 h-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex items-center justify-center flex-1 sm:items-stretch sm:justify-between">
                  <div className="flex items-center flex-shrink-0">
                    <Link to="/" title="Logo">
                      <img src={logo} alt="KappaML" style={{ width: "130px" }} />
                    </Link>
                  </div>

                  <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                    <div className="hidden space-x-4 sm:flex sm:mr-6 sm:border-r sm:pr-2">
                      {navigation.map((item) => (
                        item.external ? (
                          <a
                            key={item.name}
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={classNames(
                              item.current ? 'bg-gray-900 text-white' : 'hover:bg-gray-700 hover:text-white dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white',
                              'px-3 py-2 rounded-md'
                            )}
                            aria-current={item.current ? 'page' : undefined}
                          >
                            {item.name}
                          </a>
                        ) : (
                          <Link
                            key={item.name}
                            to={item.href}
                            className={classNames(
                              item.current ? 'bg-gray-900 text-white' : 'hover:bg-gray-700 hover:text-white dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white',
                              'px-3 py-2 rounded-md'
                            )}
                            aria-current={item.current ? 'page' : undefined}
                          >
                            {item.name}
                          </Link>
                        )
                      ))}
                    </div>
                    <button
                      onClick={() => {
                        const htmlClass = document.documentElement.classList;
                        if (htmlClass.contains('dark')) {
                          htmlClass.remove('dark');
                          localStorage.theme = 'light';
                        } else {
                          htmlClass.add('dark');
                          localStorage.theme = 'dark';
                        }
                        this.forceUpdate(); // Re-render to update icon
                      }}
                      className="p-2 mr-4 text-gray-500 rounded-md hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white focus:outline-none"
                    >
                      {typeof document !== 'undefined' && document.documentElement.classList.contains('dark') ? (
                        <SunIcon className="w-5 h-5" aria-hidden="true" />
                      ) : (
                        <MoonIcon className="w-5 h-5" aria-hidden="true" />
                      )}
                    </button>
                    <a
                      href="https://app.kappaml.com/login"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-2 py-2 text-sm font-semibold text-white transition duration-300 ease-in-out rounded-lg bg-primary hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    >
                      <img src={symbol} className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden dark:bg-gray-900">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                  item.external ? (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={classNames(
                        item.current ? 'bg-gray-900 text-white' : 'hover:bg-gray-700 hover:text-white dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white',
                        'block px-3 py-2 rounded-md text-base font-medium'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ) : (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current ? 'bg-gray-900 text-white' : 'hover:bg-gray-700 hover:text-white dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white',
                        'block px-3 py-2 rounded-md text-base font-medium'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      <Link to={item.href}>
                        {item.name}
                      </Link>
                    </Disclosure.Button>
                  )
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    );
  }
};

export default Navbar;
