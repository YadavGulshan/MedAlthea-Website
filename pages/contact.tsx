import { Link } from '@mui/material'
import Nlink from 'next/link'
import Main from '../layout/Main'
const ErrorPage = () => (
  <Main>
    <section className="bg-white h-[88vh]">
      <div className="my-2 mx-auto flex h-full w-2/3 max-w-6xl flex-col items-center justify-center px-4">
        <h1 className="text-zinc-700 text-8xl font-bold">Error 404</h1>
        <p className="text-neutral-400 text-lg font-semibold">
          Woops. Looks like this page doesn&apos;t exist
        </p>
        <Link
          underline="none"
          className="m-10 rounded-lg bg-blue-500 py-2 px-4 text-xl font-semibold !text-white shadow-lg shadow-blue-500"
        >
          <Nlink href="/">
          Go to home
          </Nlink>
        </Link>
      </div>
    </section>
  </Main>
)
export default ErrorPage
