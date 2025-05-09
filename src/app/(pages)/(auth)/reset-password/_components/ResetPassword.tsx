'use client';

import AuthPageLayout from '@/common/components/layouts/AuthPageLayout';
import { loginSchema, LoginSchema } from '@/common/validations/authSchemas';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const ResetPassword = () => {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginSchema) => {
    console.log(data);
  };

  return (
    <AuthPageLayout>
      <section className="login-section lg:mt-[40px]">
        {/* Heading */}
        <h2 className="text-start font-[Manrope] font-bold text-[24px] sm:text-[28px] md:text-[32px] lg:text-[35px] leading-[100%] text-black">
          Reset Password!
        </h2>
        <p className="text-[#4d4d4d] mt-3 mb-[47px] sm:mb-6 font-[Manrope] font-medium text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] leading-[100%]">
          Create new password to recover your account.
        </p>

        <form onSubmit={handleSubmit(onSubmit)}>
          {/* New Password */}
          <div className="mt-[18px] md:mt-4 lg:mt-16 w-full sm:w-[400px] md:w-[500px] lg:w-[564px]">
            <div className="relative">
              <label className="font-[Quicksand] text-[15px] sm:text-[16px] md:text-[18px] text-[#000000] font-semibold">
                New Password
              </label>
              <input
                type={showPassword ? 'text' : 'password'}
                {...register('password')}
                placeholder="Enter password"
                className="mt-[18px] pt-[18px] pb-[19px] pl-4 sm:pl-[33px] border border-gray-300 rounded-md w-full h-[56px] outline-none text-black font-[Quicksand] text-[14px] sm:text-[15px] leading-[100%]"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-[58px] right-4 text-black"
              >
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </button>
            </div>
            {errors.password && (
              <p className="text-sm text-red-500 mt-1">{errors.password.message}</p>
            )}
          </div>

          {/* Confirm Password */}
          <div className="my-[18px] w-full sm:w-[400px] md:w-[500px] lg:w-[564px]">
            <label className="font-[Quicksand] text-[15px] sm:text-[16px] md:text-[18px] text-[#000000] font-semibold">
              Confirm New Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                {...register('password')}
                placeholder="Confirm New Password"
                className="mt-[18px] pt-[18px] pb-[19px] pl-4 sm:pl-[33px] border border-gray-300 rounded-md w-full h-[56px] outline-none text-black font-[Quicksand] text-[14px] sm:text-[15px] leading-[100%]"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-[58px] right-4 text-black"
              >
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </button>
            </div>
            {errors.password && (
              <p className="text-sm text-red-500 mt-1">{errors.password.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full mt-[4px] md::mt-[64px] sm:w-[400px] md:w-[500px] lg:w-[564px] h-[50px] sm:h-[60px] bg-blue-500 text-white py-2 px-4 rounded-md font-[Manrope] text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] font-semibold"
          >
            Save
          </button>
        </form>

        {/* Help Link */}
        <div className="w-full mt-[21px] sm:w-[400px] md:w-[500px] lg:w-[564px] text-center">
          <Link
            href="/register"
            className="font-[Manrope] text-[14px] sm:text-[16px] md:text-[18px] text-blue-600 hover:underline"
          >
            Need Help
          </Link>
        </div>
      </section>
    </AuthPageLayout>
  );
};

export default ResetPassword;
