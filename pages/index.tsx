import type { NextPage } from 'next'
import Head from 'next/head'
import HeaderComponent from '../components/Header/header'
import IntroPage from '../components/Intropage/intropage'
import Overview from '../components/Overview/overview'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>MedAlthea</title>
      </Head>

      <main>
        <HeaderComponent />
        <IntroPage />
        <Overview />
      </main>
    </div>
  )
}

export default Home
