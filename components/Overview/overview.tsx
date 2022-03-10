import React from 'react'
import styles from './overview.module.css'
export default function Overview() {
  return (
    <section className="my-20 mx-auto h-full max-w-xl bg-white lg:mb-16 lg:max-w-6xl">
      <div className="mx-5 h-full font-Inter text-3xl font-bold">
        <div
          className={`${styles.inset} h-fit rounded-3xl bg-[#1D2B4F] lg:h-72`}
        >
          <div className="flex h-full flex-col items-center justify-evenly text-white lg:flex-row">
            <div className="flex h-72 w-2/3 flex-col items-center justify-center lg:h-2/3">
              <p>10+</p>
              <p>Medical</p>
            </div>
            <div className="h-2 w-72 rounded-full bg-white lg:h-2/3 lg:w-2"></div>
            <div className="relative flex h-72 w-2/3 flex-col items-center justify-center lg:h-2/3 ">
              <p>10+</p>
              <p>Medical</p>
            </div>
            <div className="h-2 w-72 rounded-full bg-white lg:h-2/3 lg:w-2"></div>
            <div className="flex h-72 w-2/3 flex-col items-center justify-center lg:h-2/3">
              <p>10+</p>
              <p>Medical</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
