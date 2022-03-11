import Head from 'next/head'
import HeaderComponent from '../components/Header/header'
import React from 'react'

const Main = ({ children, props = 'MedAlthea' }: any) => {
  return (
    <div className="app-main">
      <Head>
        <title>{props}</title>
      </Head>

      <HeaderComponent />

      <main>{children}</main>
    </div>
  )
}
export default Main
