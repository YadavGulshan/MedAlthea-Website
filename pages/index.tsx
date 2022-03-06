import type { NextPage } from 'next'
import Head from 'next/head'
import HeaderComponent from '../components/Header/header'
import IntroPage from '../components/intropage/intropage'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/static/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Russo+One&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main>
        <HeaderComponent />
        <IntroPage />
      </main>
    </div>
  )
}

export default Home
