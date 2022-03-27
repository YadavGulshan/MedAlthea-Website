import React from 'react';

function Section(
  children: React.ReactChild | React.ReactNode | undefined | any,
) {
  return (
    <section className="my-10 mx-auto bg-white md:h-[88vh] xl:max-w-6xl">
      {children}
    </section>
  );
}

export default Section;
