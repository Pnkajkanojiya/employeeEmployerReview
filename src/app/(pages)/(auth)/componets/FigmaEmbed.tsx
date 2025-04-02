// pages/login.js
import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  
  return (
    <>
      <Head>
        <title>Employee Review Management - Login</title>
        <meta name="description" content="Login to Employee Review Management System" />
      </Head>
      
      <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
        <div className="flex w-full max-w-5xl h-[550px] bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Left Section - Blue Background */}
          <div className="hidden md:flex md:w-1/2 bg-gradient-to-br from-blue-500 to-blue-700 text-white flex-col justify-center items-center relative overflow-hidden">
            {/* Decorative Circles */}
            <div className="absolute w-64 h-64 bg-blue-400 bg-opacity-20 rounded-full -bottom-32 -left-20"></div>
            <div className="absolute w-48 h-48 bg-blue-400 bg-opacity-20 rounded-full bottom-10 -left-10"></div>
            <div className="absolute w-56 h-56 bg-blue-400 bg-opacity-20 rounded-full -top-24 -right-24"></div>
            
            <h1 className="text-4xl font-bold mb-6 z-10">WELCOME</h1>
            
            <div className="flex mb-4 z-10">
              <span className="text-2xl text-yellow-300">★</span>
              <span className="text-2xl text-yellow-300">★</span>
              <span className="text-3xl text-yellow-300">★</span>
              <span className="text-2xl text-yellow-300">★</span>
              <span className="text-2xl text-yellow-300">★</span>
            </div>
            
            <div className="text-xl text-center z-10">
              Employee Review<br />
              Management
            </div>
          </div>
          
          {/* Right Section - Login Form */}
          <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
            <h2 className="text-2xl font-bold mb-2">Login !</h2>
            <p className="text-gray-600 mb-8">Enter your Email Id & Password to Login.</p>
            
            <form className="space-y-6">
              <div>
                <label className="block mb-2 font-medium">
                  Email <span className="text-red-500">*</span>
                </label>
                <input 
                  type="email" 
                  className="w-full p-3 border border-gray-300 rounded-md" 
                  placeholder="Enter Email ID" 
                  required 
                />
              </div>
              
              <div>
                <label className="block mb-2 font-medium">Password</label>
                <div className="relative">
                  <input 
                    type={showPassword ? "text" : "password"} 
                    className="w-full p-3 border border-gray-300 rounded-md" 
                    placeholder="Enter Password" 
                  />
                  <button 
                    type="button"
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? "👁️" : "👁️"}
                  </button>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input 
                    id="remember" 
                    type="checkbox" 
                    className="w-4 h-4 border-gray-300 rounded" 
                    defaultChecked 
                  />
                  <label htmlFor="remember" className="ml-2 text-sm">
                    Remember me
                  </label>
                </div>
                <Link href="/forgot-password" className="text-blue-500 text-sm font-medium">
                  Forgot Password?
                </Link>
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 rounded-md"
              >
                LOGIN
              </button>
              
              <p className="text-center text-sm">
                Don't have an account? {' '}
                <Link href="/register" className="text-blue-500 font-medium">
                  Register here
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}