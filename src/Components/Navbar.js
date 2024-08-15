import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'HOME', href: '/', current: true },
  { name: 'ABOUT US', href: '#', current: true },
  { name: 'SERVICES', href: '#', current: true },
  { name: 'PAGES', href: '#', current: true, submenu: true },
  { name: 'CONTACT US', href: '/user-form', current: true },
];

const pagesubmenu = [
  { name: 'Page 1', href: '#' },
  { name: 'Page 2', href: '#' },
  { name: 'Page 3', href: '#' },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-#FFFFFF border lg:border-[1px] border-none lg:border-b-[gray]">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-[#d81f47] hover:bg-[#d81f47] hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center sm:items-stretch sm:justify-center">
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4 ">
                {navigation.map((item) =>
                  !item.submenu ? (
                    <a
                      key={item.name}
                      href={item.href}
                      aria-current={item.current ? 'page' : undefined}
                      className={classNames(
                        item.current ? 'text-black' : 'hover:bg-gray-700 hover:text-[#d81f47] ',
                        'px-3 py-2 text-lg font-medium hover:text-[#d81f47] hover:border-b-[1.5px] border-[#d81f47]'
                      )}
                    >
                      {item.name}
                    </a>
                  ) : (
                    <Menu as="div" className="relative inline-block text-left" key={item.name}>
                      <MenuButton
                        className={classNames(
                          item.current ? 'text-black ' : 'text-gray-300 hover:bg-gray-700 hover:text-[#d81f47]',
                          'px-3 py-2 text-lg font-medium hover:text-[#d81f47] hover:border-b-[1.5px] border-[#d81f47]'
                        )}
                      >
                        {item.name}
                      </MenuButton>
                      <MenuItems className="absolute mt-2 w-56 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        {pagesubmenu.map((subItem) => (
                          <MenuItem key={subItem.name}>
                            {({ active }) => (
                              <a
                                href={subItem.href}
                                className={classNames(
                                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                  'block px-4 py-2 '
                                )}
                              >
                                {subItem.name}
                              </a>
                            )}
                          </MenuItem>
                        ))}
                      </MenuItems>
                    </Menu>
                  )
                )}
              </div>
            </div>
          </div>
          <div className="flex items-center hidden sm:flex text-[#d81f47] border-[1px] border-[#d81f47] rounded-full  md:ml-20 sm:ml-10 sm:pr-0 py-2 px-1">
            <a className="px-6 font-medium" href='/login'>Admin Login</a>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2 ">
          {navigation.map((item) =>
            !item.submenu ? (
              <DisclosureButton
                key={item.name}
                as="a"
                href={item.href}
                aria-current={item.current ? 'page' : undefined}
                className={classNames(
                  item.current ? 'bg-[#d81f47] text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                  'block rounded-md px-3 py-2 text-base font-medium'
                )}
              >
                {item.name}
              </DisclosureButton>
            ) : (
              <Menu as="div" className="relative block text-left" key={item.name}>
                <MenuButton
                  className={classNames(
                    item.current ? 'bg-[#d81f47] text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block w-full text-left rounded-md px-3 py-2 text-base font-medium'
                  )}
                >
                  {item.name}
                </MenuButton>
                <MenuItems className="absolute mt-2 w-56 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  {pagesubmenu.map((subItem) => (
                    <MenuItem key={subItem.name}>
                      {({ active }) => (
                        <a
                          href={subItem.href}
                          className={classNames(
                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                            'block px-4 py-2 text-sm'
                          )}
                        >
                          {subItem.name}
                        </a>
                      )}
                    </MenuItem>
                  ))}
                </MenuItems>
              </Menu>
            )
          )}
        </div>
        <div className="flex justify-center sm:hidden">
          <div className="w-[150px] px-2 pb-3 pt-2 mx-2 text-[#d81f47] border-[1px] border-[#d81f47] rounded-full flex items-center justify-center mb-[20px]">
            <a className="lg:px-5 px-3 font-medium" href='/login'>Admin Login</a>
          </div>
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
