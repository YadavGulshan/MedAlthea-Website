import React, { FC } from 'react'
const Section: FC = ({ children }) => {
  return (
    <section className="my-10 mx-auto bg-white md:h-[88vh] xl:max-w-6xl">
      {children}
    </section>
  )
}
export default Section
