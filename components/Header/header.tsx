// darkmode
// dark:bg-gray-800
// text-gray-500
// dark:bg-gray-500 dark:text-white for Registration Btn

import React from 'react';
import Box from '@mui/material/Box';
import Link from 'next/link';
import MobileMenu from './widget/mobilemenu';

function HeaderComponent() {
  const primaryMenuItem = [
    { item: 'About', href: '/about' },
    { item: 'Services', href: '/service' },
    { item: 'Contact', href: '/contact' },
  ];
  return (
    <nav className="bg-white dark:bg-gray-800 ">
      <div className=" mx-auto mb-2 max-w-6xl px-4">
        <div className="flex justify-between">
          <div>
            <div className="flex items-center py-4 px-2">
              <div className="font-Russo text-3xl font-[550] text-black dark:text-gray-500 ">
                <Link href="/">MedAlthea</Link>
              </div>
            </div>
          </div>
          <div className="hidden items-center lg:flex ">
            {primaryMenuItem.map((item, index) =>
              TabsLabel(item.item, item.href, index),
            )}
          </div>
          <div className="hidden items-center space-x-3 px-2 md:flex ">
            <div className="rounded py-2 px-2 text-lg font-semibold text-black after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-[#0E63F3] after:transition after:duration-500 after:ease-out hover:after:origin-bottom-left hover:after:scale-x-100 dark:text-gray-500">
              <Link href="/signup">Sign In</Link>
            </div>
            <div className="rounded-lg bg-blue-500 py-2 px-4 text-xl font-semibold !text-white shadow-lg  shadow-blue-500 hover:!text-green-500  hover:shadow-green-500 dark:bg-gray-500 ">
              <Link href="/register">Register</Link>
            </div>
          </div>
          <div className="flex items-center md:hidden">
            <MobileMenu />
          </div>
        </div>
      </div>
    </nav>
  );
}
export default HeaderComponent;

function TabsLabel(lb: string, hr: string, index: number) {
  return (
    <Box sx={{ width: '100%' }} key={index}>
      <div className="py-4 px-5">
        <p className="relative text-lg font-semibold text-[#1D2B4F] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-[#0E63F3] after:transition after:duration-500 after:ease-out hover:after:origin-bottom-left hover:after:scale-x-100 dark:text-gray-500">
          <Link href={hr}>{lb}</Link>
        </p>
      </div>
    </Box>
  );
}
