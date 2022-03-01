import React from 'react'
import { useState } from 'react'
import styles from '../../styles/header.module.css'
const HeaderComponent = () => {
  const [isVisible, setVisible] = useState(false)
  const block = isVisible ? '' : 'hidden'
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
                <span className={`font-Russo text-3xl font-[550] text-black `}>
                  MedAlthea
                </span>
              </a>
            </div>
            <div className="hidden items-center space-x-1 md:flex ">
              {primaryMenuItem.map((item, index) => (
                <a
                  key={index}
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
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setVisible(!isVisible)}
                className="outline-none"
              >
                <svg
                  className="h-8 w-8 text-[#1D2B4F]"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div
          className={`my-2 mx-auto max-w-6xl px-4 transition-[display] duration-300 md:hidden ${block}`}
        >
          <ul className="">
            {primaryMenuItem.map((items, index) => (
              <li key={index}>
                <a
                  href="#services"
                  className="block px-2 py-4 text-sm transition duration-300 hover:bg-green-500"
                >
                  {items.item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  )
}

export default HeaderComponent
