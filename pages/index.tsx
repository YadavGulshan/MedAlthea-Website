import type { NextPage } from 'next'
import Head from 'next/head'
import HeaderComponent from '../components/Header/header'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <HeaderComponent />
      </main>
    </div>
  )
}

export default Home
