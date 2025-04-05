'use client';
import React, { useState, FormEvent, ChangeEvent, useEffect } from 'react';
import Link from 'next/link';
import AuthPageLayout from '../../../common/components/layouts/AuthPageLayout';

const Login = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [rememberMe, setRememberMe] = useState<boolean>(false);

  // Delay the password visibility state change until after the first render
  useEffect(() => {
    setShowPassword(false); // Or set an initial state that won't cause hydration errors
  }, []);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({ email, password, rememberMe });
  };

  return (
    <AuthPageLayout>
      <h2 className="text-2xl font-bold text-black mt-6">Login !</h2>
      <p className="text-gray-900 text-sm mb-4">Enter your Email Id & Password to Login</p>

      <form onSubmit={handleSubmit}>
        {/* Email Input */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your ID"
            className="px-3 py-2 border border-gray-300 rounded-md w-full"
            required
          />
        </div>

        {/* Password Input */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400"
            >
              {showPassword ? '🙈' : '👁️'}
            </button>
          </div>
          <Link href="/forgot-password" className="text-sm text-blue-600 hover:underline float-right mt-1">
            Forgot Password?
          </Link>
        </div>

        {/* Remember me */}
        <div className="mb-4">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="mr-2"
            />
            <span className="text-sm text-gray-700">Remember me</span>
          </label>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Login
        </button>
      </form>

      <p className="text-sm text-center text-gray-600 mt-4">
        Don&apos;t have an account?{' '}
        <Link href="/register" className="text-blue-600 hover:underline">
          Register here
        </Link>
      </p>
    </AuthPageLayout>
  );
};

export default Login;



// 'use client';
// import React, { useState, FormEvent, ChangeEvent } from 'react';
// import Head from 'next/head';
// import Link from 'next/link';
// import Image from 'next/image';

// const Login: React.FC = () => {
//   const [showPassword, setShowPassword] = useState<boolean>(false);
//   const [email, setEmail] = useState<string>('');
//   const [password, setPassword] = useState<string>('');
//   const [rememberMe, setRememberMe] = useState<boolean>(false);

//   const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
//     e.preventDefault();
//     console.log({ email, password, rememberMe });
//   };

//   const handleEmailChange = (e: ChangeEvent<HTMLInputElement>): void => {
//     setEmail(e.target.value);
//   };

//   const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>): void => {
//     setPassword(e.target.value);
//   };

//   const handleRememberMeChange = (e: ChangeEvent<HTMLInputElement>): void => {
//     setRememberMe(e.target.checked);
//   };

//   return (
//     <div className="bg-gray-900 flex items-center justify-center min-h-screen p-4">
//       <Head>
//         <title>Employee Review Management - Login</title>
//         <meta name="description" content="Login to Employee Review Management System" />
//       </Head>

//       <div className="w-full max-w-4xl overflow-hidden bg-white h-auto md:h-[500px] rounded-lg shadow-lg relative">
//         <div className="flex flex-col md:flex-row">
//           {/* Left Panel */}
//           <div className="relative hidden md:flex w-full md:w-1/2 p-8 flex-col justify-center items-center text-white">
//           {/* svg */}
//             <div className="absolute inset-0">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="absolute w-full h-full"
//                 viewBox="0 0 750 861"
//                 fill="none"
//                 style={{ top: '0%', left: '0%', width: '111%', height: '100%' }}
//               >
//                 <circle
//                   cx="612"
//                   cy="612"
//                   r="612"
//                   transform="matrix(-1 0 0 1 750 -363)"
//                   fill="url(#paint0_linear_1118_2)"
//                 />
//                 <defs>
//                   <linearGradient
//                     id="paint0_linear_1118_2"
//                     x1="305"
//                     y1="1101"
//                     x2="771.5"
//                     y2="364.5"
//                     gradientUnits="userSpaceOnUse"
//                   >
//                     <stop stopColor="#007BF8" />
//                     <stop offset="1" stopColor="#012770" />
//                   </linearGradient>
//                 </defs>
//               </svg>

//               <div className="absolute bottom-[-130px] -left-16 w-64 h-64 rounded-full bg-[linear-gradient(32.35deg,#007BF8_15.82%,#012770_67.43%)] transform scale-x-[-1]"></div>
//               <div className="absolute top-73 right-17 w-32 h-32 rounded-full bg-gradient-to-r from-[#007BF8] to-[#012770] transform scale-x-[-1]"></div>
//             </div>

//             <div className="relative z-10 text-center" style={{ left: '-10%', top: '-50px' }}>
//               <h1 className="text-xl mb-2">WELCOME</h1>
//               <div className="flex justify-center mb-2">
//                 <Image src="/Star.png" alt="star" width={100} height={100} />
//               </div>
//               <h2 className="text-[14px] font-thin">Employee Review</h2>
//               <h2 className="text-[14px] font-thin">Management</h2>
//             </div>
//           </div>

//           {/* Right Login Form */}
//           <div className="w-full md:w-1/2 p-6">
//             {/* Mobile-only circle */}
//             <div className="md:hidden mb-6">
//               <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#007BF8] to-[#012770] mx-auto flex flex-col items-center justify-center text-white text-center p-2">
//                 <h1 className="text-xs font-medium">WELCOME</h1>
//                 <Image src="/Star.png" alt="star" width={40} height={40} className="my-1" />
//                 <p className="text-[10px] leading-tight">Employee Review</p>
//                 <p className="text-[10px] leading-tight">Management</p>
//               </div>
//             </div>

//             <div className="h-full flex flex-col justify-center max-w-md mx-auto my-auto">
//               <h2 className="text-2xl font-bold text-black mt-6">Login !</h2>
//               <p className="text-gray-900 text-sm mb-4">
//                 Enter your Email Id & Password to Login
//               </p>

//               <form onSubmit={handleSubmit}>
//                 <div className="mb-4">
//                   <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
//                     Email
//                   </label>
//                   <input
//                     type="email"
//                     id="email"
//                     value={email}
//                     onChange={handleEmailChange}
//                     placeholder="Enter your ID"
//                     className="px-3 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//                     required
//                   />
//                 </div>

//                 <div className="mb-6">
//                   <div className="flex justify-between items-center mb-1">
//                     <label htmlFor="password" className="block text-sm font-medium text-gray-700">
//                       Password
//                     </label>
//                   </div>
//                   <div className="relative">
//                     <input
//                       type={showPassword ? 'text' : 'password'}
//                       id="password"
//                       value={password}
//                       onChange={handlePasswordChange}
//                       placeholder="Enter Password"
//                       className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//                       required
//                     />
//                     <button
//                       type="button"
//                       onClick={() => setShowPassword(!showPassword)}
//                       className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 cursor-pointer"
//                     >
//                       {showPassword ? (
//                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
//                           strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
//                           <path strokeLinecap="round" strokeLinejoin="round"
//                             d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
//                         </svg>
//                       ) : (
//                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
//                           strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
//                           <path strokeLinecap="round" strokeLinejoin="round"
//                             d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
//                           <path strokeLinecap="round" strokeLinejoin="round"
//                             d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
//                         </svg>
//                       )}
//                     </button>
//                   </div>
//                   <Link href="/forgot-password" className="text-sm text-blue-600 hover:underline float-right mt-1">
//                     Forgot Password?
//                   </Link>
//                 </div>

//                 <div className="mb-4">
//                   <label className="inline-flex items-center">
//                     <input
//                       type="checkbox"
//                       checked={rememberMe}
//                       onChange={handleRememberMeChange}
//                       className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
//                     />
//                     <span className="ml-2 text-sm text-gray-700">Remember me</span>
//                   </label>
//                 </div>

//                 <button
//                   type="submit"
//                   className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 uppercase"
//                 >
//                   Login
//                 </button>
//               </form>

//               <div className="text-center mt-4">
//                 <p className="text-sm text-gray-600">
//                   Don&apos;t have an account?
//                   <Link href="/register" className="ml-1 text-blue-600 hover:underline">
//                     Register here
//                   </Link>
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
// {/* svg 2 */}
//         <div className="hidden md:block absolute bottom-0 right-0 z-0 translate-x-1/4 translate-y-1/4">
//           <svg width="140" height="154" viewBox="0 0 151 151" fill="none" xmlns="http://www.w3.org/2000/svg">
//             <circle cx="151" cy="151" r="151" transform="matrix(-1 0 0 1 302 0)" fill="url(#paint0_linear_1118_394)" />
//             <defs>
//               <linearGradient id="paint0_linear_1118_394" x1="272" y1="57.5" x2="50" y2="269.5" gradientUnits="userSpaceOnUse">
//                 <stop stopColor="#007BF8" />
//                 <stop offset="1" stopColor="#012770" />
//               </linearGradient>
//             </defs>
//           </svg>
//         </div>

//         {/* Bottom SVG - mobile */}
//         <div className="block md:hidden mt-6  justify-center">
//           <svg width="100" height="100" viewBox="0 0 151 151" fill="none" xmlns="http://www.w3.org/2000/svg">
//             <circle cx="75.5" cy="75.5" r="75.5" fill="url(#paint0_linear_1118_394)" />
//             <defs>
//               <linearGradient id="paint0_linear_1118_394" x1="120" y1="30" x2="10" y2="180" gradientUnits="userSpaceOnUse">
//                 <stop stopColor="#007BF8" />
//                 <stop offset="1" stopColor="#012770" />
//               </linearGradient>
//             </defs>
//           </svg>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default Login;


