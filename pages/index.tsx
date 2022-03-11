import type { NextPage } from 'next'
import HeaderComponent from '../components/Header/header'
import IntroPage from '../components/intropage/intropage'
import Overview from '../components/Overview/overview'
import Footer from '../components/Footer/footer'
import Main from '../layout/Main'
const Home: NextPage = () => {
  return (
    <Main>
      <IntroPage />
      <Overview />
      <Footer />
    </Main>
  )
}

export default Home
