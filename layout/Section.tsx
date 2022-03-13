import React, { FC } from 'react'
const Section: FC = ({ children }) => {
  return (
    <section className="my-2  mx-auto h-fit bg-white xl:max-w-6xl">
      <div className="max-w-6xlpx-4 h-full w-full md:w-3/4">{children}</div>
    </section>
  )
}
export default Section
