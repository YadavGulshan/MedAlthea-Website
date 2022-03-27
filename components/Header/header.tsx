import React from 'react'
import styles from './header.module.css'
import MobileMenu from './widget/mobilemenu'
import Box from '@mui/material/Box'
import NLink from 'next/link'

const HeaderComponent = () => {
  const primaryMenuItem = [
    { item: 'About', href: '/About' },
    { item: 'Services', href: '/service' },
    { item: 'Contact', href: '/contact' },
  ]
  const TabsLabel = (lb: string, hr: string, index: number) => {
    return (
      <Box sx={{ width: '100%' }} key={index}>
        <div className="py-4 px-5">
          <p className="relative text-lg font-semibold text-[#1D2B4F] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-[#0E63F3] after:transition after:duration-500 after:ease-out hover:after:origin-bottom-left hover:after:scale-x-100">
            <NLink href={hr}>{lb}</NLink>
          </p>
        </div>
      </Box>
    )
  }
  return (
    <>
      <nav className="bg-white ">
        <div className=" my-2 mx-auto max-w-6xl px-4">
          <div className="flex justify-between">
            <div>
              <div className="flex items-center py-4 px-2">
                <div className={`font-Russo text-3xl font-[550] text-black `}>
                  <NLink href="/">MedAlthea</NLink>
                </div>
              </div>
            </div>
            <div className="hidden items-center lg:flex ">
              {primaryMenuItem.map((item, index) =>
                TabsLabel(item.item, item.href, index)
              )}
            </div>
            <div className="hidden items-center space-x-3 px-2 md:flex ">
              <div className="rounded py-2 px-2 text-lg font-semibold text-black transition duration-300 ">
                <NLink href="/signup">Sign In</NLink>
              </div>
              <div className="rounded-lg bg-blue-500 py-2 px-4 text-xl font-semibold !text-white shadow-lg shadow-blue-500">
                <NLink href="/register">Register</NLink>
              </div>
            </div>
            <div className="flex items-center md:hidden">
              <MobileMenu />
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
export default HeaderComponent
