import React from 'react'
import style from '../../styles/intropage.module.css'
import Image from 'next/image'
const IntroPage = () => {
  return (
    <>
      <section className="my-2  mx-auto h-fit bg-white xl:max-w-6xl">
        <div className="mx-5 flex h-full flex-col items-center justify-between xl:flex-row">
          <div className="mx-2 mt-28 mb-24 h-full text-center xl:w-2/3 xl:text-left">
            <h1 className="py-5 font-Inter text-4xl font-extrabold text-[#1D2B4F] xl:text-5xl ">
              We are providing you the access to all your health care needs.
            </h1>
            <p className="py-5 font-Inter font-medium text-[#1D2B4F] lg:px-32 xl:pl-0 xl:pr-32 xl:text-xl">
              Fugiat debitis ab vel. Accusamus eaque eius minus mollitia
              consequuntur quos dolorem ab. Cum qui ut aliquam ut eligendi.
            </p>
            <input
              className="my-10 rounded-full bg-blue-400 px-[3rem] py-2 text-xl font-bold text-white transition delay-75 duration-300 ease-in-out hover:scale-110 "
              type="button"
              value="Join Us"
            />
          </div>

          <div className="flex items-center justify-center xl:w-1/3 ">
            <Image
              className="lg:h-5/12 mb-10 lg:w-5/12 xl:w-full"
              src="/static/doctor.svg"
              alt="Doctor"
              width={500}
              height={500}
            />
          </div>
        </div>
      </section>
    </>
  )
}
export default IntroPage
