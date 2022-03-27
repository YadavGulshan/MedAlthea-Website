import React from 'react';
import Image from 'next/image';

function IntroPage() {
  return (
    <section className="my-2  mx-auto h-fit bg-white xl:max-w-6xl">
      <div className="mx-10 flex h-full flex-col-reverse items-center justify-between md:flex-col xl:flex-row">
        {/* Title and sub */}
        <div className="mx-2 mt-10 mb-0 h-full max-w-3xl text-center lg:mt-20 lg:mb-16 xl:w-2/3 xl:text-left">
          <h1 className="py-5 font-Inter text-4xl font-extrabold text-[#1D2B4F] sm:text-5xl md:text-6xl ">
            We are providing you the access to all your health care needs.
          </h1>
          <p className="py-5 font-Inter font-medium text-[#1D2B4F] lg:px-32 xl:pl-0 xl:pr-32 xl:text-xl">
            Fugiat debitis ab vel. Accusamus eaque eius minus mollitia
            consequuntur quos dolorem ab. Cum qui ut aliquam ut eligendi.
          </p>
          <input
            className="my-10 cursor-pointer rounded-xl bg-blue-400 px-[3rem] py-2 text-xl font-bold text-white shadow-lg shadow-blue-400 transition delay-75 duration-300 ease-in-out "
            type="button"
            value="Join Us"
          />
        </div>
        {/* Image */}
        <div className="flex items-center justify-center xl:w-1/3 ">
          <Image
            className=" mb-10 lg:w-5/12 xl:w-full"
            src="/static/doctor.svg"
            alt="Doctor"
            width={500}
            height={500}
          />
        </div>
      </div>
    </section>
  );
}
export default IntroPage;
