import React from 'react'
import styles from './header.module.css'
import MobileMenu from './widget/mobilemenu'
import Box from '@mui/material/Box'
import Link from '@mui/material/Link'

const HeaderComponent = () => {
  const primaryMenuItem = [
    { item: 'About', href: '/About' },
    { item: 'Services', href: '/services' },
    { item: 'Contact', href: '/contact' },
  ]
  const TabsLabel = (lb: string, hr: string, index: number) => {
    return (
      <Box sx={{ width: '100%' }} key={index}>
        <div className="py-4 px-5">
          <Link underline="none" href={hr}>
            <p className="relative  text-lg font-semibold text-[#1D2B4F] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-[#0E63F3] after:transition after:duration-500 after:ease-out hover:after:origin-bottom-left hover:after:scale-x-100">
              {lb}
            </p>
          </Link>
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
              <Link
                underline="none"
                href="/"
                className="flex items-center py-4 px-2"
              >
                <span className={`text-black font-Russo text-3xl font-[550] `}>
                  MedAlthea
                </span>
              </Link>
            </div>
            <div className="hidden items-center lg:flex ">
              {primaryMenuItem.map((item, index) =>
                TabsLabel(item.item, item.href, index)
              )}
            </div>
            <div className="hidden items-center space-x-3 px-2 md:flex ">
              <Link
                underline="none"
                href="/signup"
                className="text-black rounded py-2 px-2 text-lg font-semibold transition duration-300 "
              >
                Sign In
              </Link>
              <Link
                underline="none"
                href="/register"
                className="bg-blue-500 !text-white shadow-blue-500 rounded-lg py-2 px-4 text-xl font-semibold shadow-lg"
              >
                Register
              </Link>
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
