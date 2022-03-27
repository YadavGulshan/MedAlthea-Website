import IntroPage from '../components/intropage/intropage';
import Overview from '../components/Overview/overview';
import Footer from '../components/Footer/footer';
import Main from '../layout/Main';

function Home() {
  return (
    <Main>
      <IntroPage />
      <Overview />
      <Footer />
    </Main>
  );
}

export default Home;
