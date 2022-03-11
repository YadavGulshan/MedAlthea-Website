import Head from 'next/head'
import HeaderComponent from '../components/Header/header'

const Main = ({ children, title = 'MedAlthea' }) => {
  return (
    <div className="app-main">
      <Head>
        <title>{title}</title>
      </Head>

      <HeaderComponent />

      <main>{children}</main>
    </div>
  )
}
export default Main
