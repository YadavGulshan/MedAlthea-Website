import Head from 'next/head';
import React from 'react';
import HeaderComponent from '../components/Header/header';

function Main({ children, props = 'MedAlthea' }: any) {
  return (
    <>
      <Head>
        <title>{props}</title>
      </Head>

      <HeaderComponent />

      <main>{children}</main>
    </>
  );
}
export default Main;
