import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import Image from 'next/image'
import Main from '../layout/Main'
import Section from '../layout/Section'

const Register = () => {
  const formSchema = Yup.object().shape({
    first_name: Yup.string().required('This field is required'),
    last_name: Yup.string().required('This field is required'),
    email: Yup.string()
      .required('This field is required')
      .matches(
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        'Enter a valid Enter'
      ),
    password: Yup.string()
      .required('Password is mendatory')
      .min(8, 'Password must be at 8 char long')
      .matches(
        /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/,
        'password must contain number and characters'
      ),
    password2: Yup.string()
      .required('Password is mendatory')
      .oneOf([Yup.ref('password')], 'Passwords does not match'),
  })
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: 'all', resolver: yupResolver(formSchema) })

  const [formStep, setFormStep] = useState(0)
  const [available, setAvailable] = useState(false)
  const [isDirty, setIsDirty] = useState(false)
  const [isEmpty, setError] = useState(false)

  // TODO: move it to untile function
  const handleChange = async (event: string) => {
    const serverUrl = `http://127.0.0.1:8000/api/register/search/?username=${event}`
    fetch(serverUrl, { method: 'GET' })
      .then((response) => {
        if (response.status === 200) {
          setAvailable(true)
          setIsDirty(true)
        } else {
          setAvailable(false)
        }
      })
      .catch((errors) => {
        console.log(errors.response)
        console.log('error')
      })
  }

  const onSubmit = async (data: any) => {
    console.log(data)
  }

  return (
    <Main>
      <Section>
        <div className="my-2 mx-auto flex h-full w-full max-w-6xl flex-col items-center justify-center px-4 md:w-3/4">
          <div className="mx-10 w-full rounded-2xl p-5 pt-10 shadow-2xl shadow-blue-500 sm:w-[500px]">
            {/* Heading */}
            <h1 className="mb-10 min-w-full text-center font-Inter text-5xl font-bold text-[#1D2B4F]">
              Register
            </h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex  flex-col md:flex-row">
                <div className=" h-fit w-full rounded-lg md:mr-2">
                  {/* Input for first name */}
                  <input
                    // conditional styling for input fields
                    className={`${
                      errors.first_name &&
                      'border-pink-600 text-pink-600 focus:!border-pink-600'
                    } border-grey-300 my-4 h-14 w-full rounded-lg border-2 border-solid px-6 shadow-md outline-none transition duration-300 focus:border-blue-300`}
                    type="text"
                    autoComplete="off"
                    placeholder="First name"
                    {...register('first_name')}
                  />
                  {errors.first_name && (
                    <p className="mx-2 text-sm text-pink-600">
                      {errors.first_name.message}
                    </p>
                  )}
                </div>

                <div className="h-fit w-full rounded-lg md:ml-2">
                  <input
                    className={`${
                      errors.last_name &&
                      'border-pink-600 text-pink-600 focus:!border-pink-600'
                    } border-grey-300 my-4 h-14 w-full rounded-lg border-2 border-solid px-6 shadow-md outline-none transition duration-300 focus:border-blue-300`}
                    type="text"
                    autoComplete="off"
                    placeholder="Last Name"
                    {...register('last_name')}
                  />
                  {errors.last_name && (
                    <p className="mx-2 text-sm text-pink-600">
                      {errors.last_name.message}
                    </p>
                  )}
                </div>
              </div>
              <div className=" h-fit w-full rounded-lg">
                {/* input for confirm password */}
                <input
                  className={`${
                    errors.email &&
                    'border-pink-600 text-pink-600 focus:!border-pink-600'
                  } border-grey-300 my-4 h-14 w-full rounded-lg border-2 border-solid px-6 shadow-md outline-none transition duration-300 focus:border-blue-300`}
                  type="email"
                  autoComplete="off"
                  placeholder="Email"
                  {...register('email')}
                />
              </div>
              {errors.email && (
                <p className="mx-2 text-sm text-pink-600">
                  {errors.email.message}
                </p>
              )}
              <div className=" h-fit w-full rounded-lg">
                {/* Input for username */}
                <input
                  // conditional styling for input fields
                  className={`${
                    isEmpty &&
                    'border-pink-600 text-pink-600 focus:!border-pink-600'
                  } ${
                    isDirty
                      ? available
                        ? 'border-green-600 text-green-600 focus:border-green-600'
                        : 'border-pink-600 text-pink-600 focus:border-pink-600'
                      : 'focus:border-blue-300'
                  } border-grey-300 my-4 h-14 w-full rounded-lg border-2 border-solid px-6 shadow-md outline-none transition duration-300  `}
                  type="text"
                  autoComplete="off"
                  placeholder="Username"
                  {...register('username', {
                    required: { value: true, message: 'User Name required' },
                  })}
                  onChange={(e) => {
                    e.target.value.length > 3
                      ? handleChange(e.target.value)
                      : setIsDirty(false)
                    e.target.value.length < 1 ? setError(true) : setError(false)
                  }}
                />
              </div>
              {isEmpty && (
                <p className="mx-2 text-sm text-pink-600">User Name required</p>
              )}

              {isDirty ? (
                available ? (
                  <p className="mx-3 text-sm text-green-600">
                    Username is available
                  </p>
                ) : (
                  <p className="mx-3 text-sm text-pink-600">
                    Username is not available
                  </p>
                )
              ) : (
                ''
              )}
              <div className=" h-fit w-full rounded-lg">
                {/* input for password */}
                <input
                  className={`${
                    errors.password
                      ? 'text-pink-600 focus:border-pink-600'
                      : 'focus:border-blue-300'
                  } border-grey-300 my-4 h-14 w-full rounded-lg border-2 border-solid px-6 shadow-md outline-none transition duration-300 `}
                  type="password"
                  autoComplete="off"
                  placeholder="Password"
                  {...register('password')}
                />
              </div>
              {errors.password && (
                <p className="mx-2 text-sm text-pink-600">
                  {errors.password.message}
                </p>
              )}
              <div className=" h-fit w-full rounded-lg">
                {/* input for confirm password */}
                <input
                  className="border-grey-300 my-4 h-14 w-full rounded-lg border-2 border-solid px-6 shadow-md outline-none transition duration-300 focus:border-blue-300 "
                  type="password"
                  autoComplete="off"
                  placeholder="confirm Password"
                  {...register('password2')}
                />
              </div>
              {errors.password2 && (
                <p className="mx-2 text-sm text-pink-600">
                  {errors.password2.message}
                </p>
              )}

              <div>
                <input
                  disabled={!isValid}
                  type="submit"
                  className="my-4 h-14 w-full rounded-lg border-2 border-none bg-blue-500 px-6 font-bold text-white outline-none transition duration-300 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-400 disabled:bg-gray-300 disabled:hover:shadow-none "
                  value="Register"
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
