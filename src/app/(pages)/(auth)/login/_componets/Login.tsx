'use client';

import AuthPageLayout from '@/common/components/layouts/AuthPageLayout';
import { loginSchema, LoginSchema } from '@/common/validations/authSchemas';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  // Form setup
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  });

  // Submit handler
  const onSubmit = (data: LoginSchema) => {
    console.log(data);
  };

  return (
    <AuthPageLayout>
      <section className="login-section lg:mt-[40px]">
        {/* Heading */}
        <h2 className="text-start font-[Manrope] font-bold text-2xl sm:text-3xl md:text-[35px] leading-[100%] tracking-[0px] text-black">
          Login!
        </h2>
        <p className="text-[#4d4d4d] mb-[-4px] lg:mb-4 sm:mb-6 font-[Manrope] font-medium text-base sm:text-lg md:text-[20px] leading-[100%] tracking-[0px]">
          Enter your Email ID & Password to login
        </p>

        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Email field */}
          <div className="mt-4 lg:mt-16 w-full sm:w-[400px] md:w-[500px] lg:w-[564px]">
            <label
              className="font-[Quicksand] text-base md:text-[18px] leading-[100%] tracking-[0px] text-[#000000]"
              style={{ fontWeight: '600' }}
            >
              Email
            </label>
            <br />
            <input
              type="email"
              {...register('email')}
              placeholder="Enter your ID"
              className="mt-[18px] pt-[18px] pb-[19px] pl-4 sm:pl-[33px] border border-gray-300 rounded-md w-full h-[56px] outline-none text-black 
              font-[Quicksand] font-semibold text-[15px] leading-[100%] tracking-[0px]"
            />
            {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>}
          </div>

          {/* Password field */}
          <div className="my-[18px] w-full sm:w-[400px] md:w-[500px] lg:w-[564px]">
            <span
              className="font-[Quicksand] text-base md:text-[18px] leading-[100%] tracking-[0px] text-[#000000]"
              style={{ fontWeight: '600' }}
            >
              Password
            </span>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                {...register('password')}
                placeholder="Enter password"
                className="mt-[18px] pt-[18px] pb-[19px] pl-4 sm:pl-[33px] border border-gray-300 rounded-md w-full h-[56px] outline-none text-black 
                font-[Quicksand] text-[15px] leading-[100%] tracking-[0px]"
                style={{ fontWeight: '600' }}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-11 right-4 text-[#000000]"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            {errors.password && (
              <p className="text-sm text-red-500 mt-1">{errors.password.message}</p>
            )}

            {/* Forgot password */}
            <div className="w-full text-end mt-[10px]">
              <Link
                href="/forgot-password"
                className="font-[Manrope] text-sm sm:text-base md:text-[17px] leading-[100%] text-blue-600 hover:underline"
                style={{ fontWeight: '600' }}
              >
                Forgot Password?
              </Link>
            </div>
          </div>

          {/* Remember me */}
          <div className="mt-[22px] w-full sm:w-[400px] md:w-[500px] lg:w-[564px] sm:mb-6">
            <div className="flex items-center">
              <label className="inline-flex items-center">
                <input type="checkbox" {...register('rememberMe')} className="mr-2" />
                <span
                  className="font-[Manrope] text-base sm:text-lg md:text-[20px] leading-[100%] text-[#000000]"
                  style={{ fontWeight: '600' }}
                >
                  Remember me
                </span>
              </label>
            </div>
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className="w-full mt-[18px] md:mt-4 lg:mt-16 sm:w-[400px] md:w-[500px] lg:w-[564px] h-[50px] sm:h-[60px] bg-blue-500 text-white py-2 px-4 rounded-md font-[Manrope] text-lg sm:text-xl md:text-[22px] leading-[100%]"
            style={{ fontWeight: '600' }}
          >
            Login
          </button>
        </form>

        {/* Register link */}
        <div className="w-full mt-[21px] sm:w-[400px] md:w-[500px] lg:w-[564px] text-center">
          <p
            className="font-[Manrope] text-sm sm:text-base md:text-[18px] leading-[100%] text-[#000000] mt-4"
            style={{ fontWeight: '600' }}
          >
            Don&apos;t have an account?{' '}
            <Link
              href="/register"
              className="font-[Manrope] text-sm sm:text-base md:text-[18px] leading-[100%] text-blue-600 hover:underline"
            >
              Register here
            </Link>
          </p>
        </div>
      </section>
    </AuthPageLayout>
  );
};

export default Login;
