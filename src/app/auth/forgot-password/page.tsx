'use client';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React, { ChangeEvent, FormEvent, useState } from 'react';

const ForgotPassword: React.FC = () => {
  // const [showPassword, setShowPassword] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  // const [password, setPassword] = useState<string>('');
  // const [rememberMe, setRememberMe] = useState<boolean>(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log({ email });
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.target.value);
  };

  // const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>): void => {
  //   setPassword(e.target.value);
  // };

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
                style={{ top: '0%', left: '0%', width: '118%', height: '131%' }}
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

              <div className="absolute bottom-[-208px] -left-16 w-64 h-64 rounded-full  bg-[linear-gradient(32.35deg,#007BF8_15.82%,#012770_67.43%)] transform scale-x-[-1]"></div>
              {/* <div className="absolute -bottom-8 -right-8 w-48 h-48 rounded-full bg-blue-800 opacity-50"></div> */}
              <div className="absolute top-66 right-7 w-40 h-40 rounded-full bg-gradient-to-r from-[#007BF8] to-[#012770] transform scale-x-[-1]"></div>
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
              <h2 className="text-2xl font-bold  text-black">Forget Password !</h2>
              <p className="text-gray-900 text-sm mb-[14px]">
                Don’t worry! it happens, Please enter the details associated with your account
              </p>

              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email ID
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={handleEmailChange}
                    placeholder="Enter your ID"
                    className=" px-3 py-2 border border-gray-300 rounded-md w-[90%] focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-[90%] bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 uppercase"
                >
                  Login
                </button>
              </form>

              <div className="text-center mt-4">
                <Link href="/register" className="ml-1 text-blue-600 hover:underline">
                  Need Help
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ForgotPassword;
