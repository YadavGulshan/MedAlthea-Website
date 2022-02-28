import React from 'react'
import { useState } from 'react'

const HeaderComponent = () => {
  const primaryMenuItem = [
    { item: 'About', href: '#' },
    { item: 'Services', href: '#' },
    { item: 'Contact', href: '#' },
  ]
  return (
    <>
      <nav className="bg-white ">
        <div className=" my-2 mx-auto max-w-6xl px-4">
          <div className="flex justify-between">
            <div>
              <a href="#" className="flex items-center py-4 px-2">
                <span className="companyName text-3xl font-[550] text-black">
                  MedAlthea
                </span>
              </a>
            </div>
            <div className="items-center space-x-1 md:flex">
              {primaryMenuItem.map((item, index) => (
                <a
                  className="font-regular py-4 px-5 text-xl text-black transition duration-300 hover:text-green-500"
                  href={item.href}
                >
                  {item.item}
                </a>
              ))}
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
          </div>
        </div>
      </nav>
    </>
  )
}

export default HeaderComponent
