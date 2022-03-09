import React from 'react'
import styles from '../../styles/header.module.css'
import MobileMenu from './widget/mobilemenu'
import Tabs from '@mui/material/Tabs'
import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
const HeaderComponent = () => {
  const primaryMenuItem = [
    { item: 'About', href: '/About' },
    { item: 'Services', href: '/services' },
    { item: 'Contact', href: '/contact' },
  ]
  const TabsLabel = (lb: string, hr: string) => {
    const [value, setValue] = React.useState('About')

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
      setValue(newValue)
    }

    return (
      <Box sx={{ width: '100%' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="wrapped label tabs example"
          className="py-4 px-5"
        >
          <Link underline="none" href={hr}>
            <span className="relative p-1 text-lg font-semibold text-[#1D2B4F] transition-all duration-300 after:absolute after:left-0 after:bottom-0 after:hidden after:h-0 after:w-0 after:bg-pink-500 hover:after:block hover:after:h-1 hover:after:w-full">
              {lb}
            </span>
          </Link>
        </Tabs>
      </Box>
    )
  }
  return (
    <>
      <nav className="bg-white ">
        <div className=" my-2 mx-auto max-w-6xl px-4">
          <div className="flex justify-between">
            <div>
              <a href="#" className="flex items-center py-4 px-2">
                <span className={`font-Russo text-3xl font-[550] text-black `}>
                  MedAlthea
                </span>
              </a>
            </div>
            <div className="hidden items-center space-x-1 md:flex ">
              {primaryMenuItem.map((item, index) =>
                TabsLabel(item.item, item.href)
              )}
            </div>
            <div className="hidden items-center space-x-3 md:flex ">
              <a
                href=""
                className="rounded py-2 px-2 text-xl font-semibold text-black transition duration-300 "
              >
                Sign In
              </a>
              <a
                href=""
                className="rounded py-2 px-2 text-xl font-semibold text-black transition duration-300 "
              >
                Register
              </a>
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
