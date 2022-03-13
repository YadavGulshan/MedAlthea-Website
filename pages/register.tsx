import Section from '../layout/Section'
import Main from '../layout/Main'
import { useForm } from 'react-hook-form'
import React, { useState } from 'react'
import Image from 'next/image'
import axios from 'axios'
const Register = () => {
  const {
    register,
    watch,
    formState: { errors, isValid },
  } = useForm({ mode: 'all' })

  const checkuser = async (username: React.ChangeEvent<HTMLInputElement>) => {
    // const serverUrl = `http://127.0.0.1:8000/api/register/search/?username=${username.target.value}`
    // const response = await axios.get(serverUrl)
    // console.log(response)
  }

  const [formStep, setFormStep] = useState(0)
  return (
    <Main>
      <Section>
        <div className="my-2 mx-auto flex h-full w-full max-w-6xl flex-col items-center justify-center px-4 md:w-3/4">
          <div className="mx-10 w-full rounded-2xl p-5 pt-10 shadow-2xl shadow-blue-500 sm:w-[448px]">
            {/* Heading */}
            <h1 className="mb-10 min-w-full text-center font-Inter text-5xl font-bold text-[#1D2B4F]">
              Register
            </h1>
            <form>
              <div className="relative h-fit w-full rounded-lg">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <Image
                    width={'20px'}
                    height={'20px'}
                    src="/static/profile.svg"
                    alt="profile"
                  />
                </div>
                {/* Input for username */}
                <input
                  onChange={(e) => {
                    e.target.value.length > 3 && checkuser(e)
                  }}
                  className="border-grey-300 my-4 h-14 w-full rounded-lg border-2 border-solid px-6 pl-10 shadow-md outline-none transition duration-300 focus:border-blue-300 "
                  type="text"
                  autoComplete="off"
                  placeholder="Username"
                />
              </div>
              <div className="relative h-fit w-full rounded-lg">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <Image
                    width={'20px'}
                    height={'20px'}
                    src="/static/key.svg"
                    alt="profile"
                  />
                </div>
                {/* input for password */}
                <input
                  className="border-grey-300 my-4 h-14 w-full rounded-lg border-2 border-solid px-6 shadow-md outline-none transition duration-300 focus:border-blue-300 md:px-10"
                  type="password"
                  autoComplete="off"
                  placeholder="Password"
                />
              </div>
              <div className="relative h-fit w-full rounded-lg">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <Image
                    width={'20px'}
                    height={'20px'}
                    src="/static/key.svg"
                    alt="profile"
                  />
                </div>
                {/* input for confirm password */}
                <input
                  className="border-grey-300 my-4 h-14 w-full rounded-lg border-2 border-solid px-6 shadow-md outline-none transition duration-300 focus:border-blue-300 md:px-10"
                  type="password"
                  autoComplete="off"
                  placeholder="confirm Password"
                />
              </div>
              <div>
                <input
                  className="my-4 h-14 w-full rounded-lg border-2 border-none bg-blue-500 px-6 font-bold text-white outline-none transition duration-300 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-400 md:px-10"
                  type="submit"
                  value="Log in"
                />
              </div>
            </form>
          </div>
        </div>
      </Section>
    </Main>
  )
}
export default Register
