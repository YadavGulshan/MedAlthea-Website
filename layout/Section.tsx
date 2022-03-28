import React from 'react';

function Section(props: { children: any }) {
  const { children } = props;
  return (
    <section className="my-10 mx-auto bg-white md:h-[88vh] xl:max-w-6xl">
      {children}
    </section>
  );
}

export default Section;
