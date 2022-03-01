import React from 'react'
import style from '../../styles/intropage.module.css'
const IntroPage = () => {
  return (
    <>
      <section className="my-2 mx-4 h-fit bg-white xl:mx-auto xl:max-w-6xl">
        <div className="flex h-full flex-col items-center justify-between xl:flex-row">
          <div className="mx-2 my-32 h-full xl:w-2/3">
            <h1 className="py-5 font-Inter text-6xl font-extrabold text-[#1D2B4F]">
              We are providing you the access to all your health care needs.
            </h1>
            <p className="py-5 pr-32 font-Inter text-xl font-medium text-[#1D2B4F]">
              Fugiat debitis ab vel. Accusamus eaque eius minus mollitia
              consequuntur quos dolorem ab. Cum qui ut aliquam ut eligendi.
            </p>
            <input
              className="my-10 rounded-full bg-blue-400 px-[3rem] py-2 text-xl font-bold text-white transition delay-75 duration-300 ease-in-out hover:scale-110 "
              type="button"
              value="Join Us"
            />
          </div>

          <div className="flex items-center xl:w-1/3 ">
            {/* <div className={`${style.shopImage} rounded-full`}></div> */}
            <img
              className="mb-10 h-96 w-96 rounded-full"
              src="/static/image/medicalshop.jpg"
              alt="shop"
            />
          </div>
        </div>
      </section>
    </>
  )
}
export default IntroPage
