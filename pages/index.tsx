import type { NextPage } from 'next'
import Head from 'next/head'
import HeaderComponent from '../components/Header/header'
import IntroPage from '../components/intropage/intropage'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>MedAlthea</title>
      </Head>

      <main>
        <HeaderComponent />
        <IntroPage />
      </main>
    </div>
  )
}

export default Home
