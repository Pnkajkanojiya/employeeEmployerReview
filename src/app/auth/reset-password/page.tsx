'use client';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React, { ChangeEvent, FormEvent, useState } from 'react';

const ResetPassword: React.FC = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  // const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  // const [rememberMe, setRememberMe] = useState<boolean>(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log({ password });
  };

  // const handleEmailChange = (e: ChangeEvent<HTMLInputElement>): void => {
  //   setEmail(e.target.value);
  // };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setPassword(e.target.value);
  };

  // const handleRememberMeChange = (e: ChangeEvent<HTMLInputElement>): void => {
  //   setRememberMe(e.target.checked);
  // };

  return (
    <div className=" bg-gray-900 flex items-center justify-center p-4">
      <Head>
        <title>Employee Review Management - Login</title>
        <meta name="description" content="Login to Employee Review Management System" />
      </Head>

      <div className="w-full max-w-4xl overflow-hidden bg-white h-[500px] rounded-lg shadow-lg">
        <div className="flex flex-col md:flex-row">
          <div className="relative w-full md:w-1/2 p-8 flex flex-col justify-center items-center text-white">
            <div className="absolute inset-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute w-full h-full"
                viewBox="0 0 750 861"
                fill="none"
                style={{ top: '0%', left: '0%', width: '111%', height: '100%' }}
              >
                <circle
                  cx="612"
                  cy="612"
                  r="612"
                  transform="matrix(-1 0 0 1 750 -363)"
                  fill="url(#paint0_linear_1118_2)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1118_2"
                    x1="305"
                    y1="1101"
                    x2="771.5"
                    y2="364.5"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#007BF8" />
                    <stop offset="1" stopColor="#012770" />
                  </linearGradient>
                </defs>
              </svg>

              <div className="absolute bottom-[-130px] -left-16 w-64 h-64 rounded-full  bg-[linear-gradient(32.35deg,#007BF8_15.82%,#012770_67.43%)] transform scale-x-[-1]"></div>
              {/* <div className="absolute -bottom-8 -right-8 w-48 h-48 rounded-full bg-blue-800 opacity-50"></div> */}
              <div className="absolute top-73 right-17 w-32 h-32 rounded-full bg-gradient-to-r from-[#007BF8] to-[#012770] transform scale-x-[-1]"></div>
            </div>

            <div className="relative z-10 text-center" style={{ left: '-10%', top: '-50px' }}>
              <h1 className="text-xl  mb-2">WELCOME</h1>
              <div className="flex justify-center mb-2 ">
                <div className="flex">
                  {/* {[1, 2, 3, 4, 5].map((star, index) => (
                      <svg 
                        key={index} 
                        className={`h-6 w-6 ${index === 2 ? 'text-yellow-300' : 'text-gray-300'}`}
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))} */}

                  <Image src="/Star.png" alt="star" width={100} height={0} />
                </div>
              </div>
              <h2 className="text-[14px] font-thin">Employee Review</h2>
              <h2 className="text-[14px] font-thin">Management</h2>
            </div>
          </div>

          <div className="w-[90%] md:w-1/2  ">
            <div
              className="h-full flex flex-col justify-center max-w-md mx-auto"
              style={{ marginTop: '60px' }}
            >
              <h2 className="text-2xl font-bold  text-black">Reset Password !</h2>
              <p className="text-gray-900 text-sm mb-[14px]">
                Create new password to recover your account
              </p>

              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-1">
                    <label htmlFor="password" className="block text-sm  text-black font-thin">
                      New Password
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      id="password"
                      value={password}
                      onChange={handlePasswordChange}
                      placeholder="Enter Password"
                      className="w-[90%] px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 "
                      required
                    />{' '}
                    <br />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 cursor-pointer"
                    >
                      {showPassword ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-5 h-5 absolute right-[61px] bottom-[10px]"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                          />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-5 h-5 absolute right-[61px] bottom-[10px]"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      )}
                    </button>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex justify-between items-center mb-1">
                    <label htmlFor="password" className="block text-sm text-black font-thin">
                      Confrom New Password
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      id="password"
                      value={password}
                      onChange={handlePasswordChange}
                      placeholder="Enter Password"
                      className="w-[90%] px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 mb-[20px]"
                      required
                    />{' '}
                    <br />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 cursor-pointer"
                    >
                      {showPassword ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-5 h-5 absolute right-[61px] bottom-[31px]"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                          />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-5 h-5 absolute right-[61px] bottom-[31px]"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      )}
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-[90%] bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 uppercase"
                >
                  Save
                </button>
              </form>

              <Link
                href="/forgot-password"
                className="text-center  text-blue-600 hover:underline float-right   mr-[45px] "
              >
                Need help
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ResetPassword;
