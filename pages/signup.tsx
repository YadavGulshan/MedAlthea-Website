import Link from '@mui/material/Link'
import Main from '../layout/Main'
const SignUp = () => {
  return (
    <Main>
      <section className="h-[88vh]">
        <div className="my-2 mx-auto flex h-full w-full max-w-6xl flex-col items-center justify-center px-4 md:w-3/4">
          <div className="mx-10 w-full sm:w-[448px]">
            <h1 className=" mb-10 min-w-full text-center font-Inter text-5xl font-bold text-[#1D2B4F]">
              Log in
            </h1>
            <form className="">
              <div>
                <input
                  className="border-grey-300 my-4 h-14 w-full rounded-full border-2 border-solid px-6 outline-none transition duration-300 focus:border-blue-300 focus:shadow-xl focus:shadow-blue-400 md:px-10"
                  type="text"
                  autoComplete="off"
                  placeholder="Username"
                />
              </div>
              <div>
                <input
                  className="border-grey-300 my-4 h-14 w-full rounded-full border-2 border-solid px-6 outline-none transition duration-300 focus:border-blue-300 focus:shadow-xl focus:shadow-blue-400 md:px-10"
                  type="password"
                  autoComplete="off"
                  placeholder="Password"
                />
              </div>
              <div>
                <input
                  className="my-4 h-14 w-full rounded-full border-2 border-none bg-blue-500 px-6 text-white outline-none transition duration-300 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-400 md:px-10"
                  type="submit"
                  placeholder="Log in"
                />
              </div>
              <div className="my-5 flex flex-col items-center justify-evenly sm:flex-row">
                <p>Not have an account yet?</p>
                <Link
                  underline="none"
                  className="my-2 rounded-md bg-blue-500 py-2 px-4 text-white shadow-xl shadow-blue-400"
                  href="/register"
                >
                  Register now
                </Link>
              </div>
            </form>
          </div>
        </div>
      </section>
    </Main>
  )
}
export default SignUp
