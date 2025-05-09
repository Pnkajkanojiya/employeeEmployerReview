'use client';
import AuthPageLayout from '@/common/components/layouts/AuthPageLayout';
import Link from 'next/link';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { forgotPasswordSchema, ForgotPasswordSchema } from '@/common/validations/authSchemas';
import Otp from '../../otp/page'; // Adjust this path if needed

const ForgotPassword: React.FC = () => {
  const [showOtp, setShowOtp] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordSchema>({
    resolver: zodResolver(forgotPasswordSchema),
  });

  const onSubmit = (data: ForgotPasswordSchema) => {
    console.log('Submitted:', data);
    setShowOtp(true);
  };

  return (
    <AuthPageLayout>
      {showOtp ? (
        <Otp />
      ) : (
        <>
          <section className="login-section lg:mt-[40px]">
            <h2 className="font-[Manrope] font-bold text-[28px] sm:text-[32px] md:text-[35px] leading-[100%] tracking-[0] text-black mb-[26px]">
              Forget Password !
            </h2>
            <p
              className="text-[#4d4d4d] font-[Manrope] font-medium text-[16px] sm:text-[20px] md:text-[20px] mb-[56px] leading-[100%] tracking-[1]"
              style={{ fontWeight: '500' }}
            >
              Don’t worry! It happens. Please enter the details <br /> associated with your account.
            </p>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-[68px] w-full max-w-[564px]">
                <label
                  htmlFor="email"
                  className="block font-[Quicksand] text-black font-semibold text-[16px] sm:text-[17px] md:text-[18px] leading-[100%] tracking-[0] mb-[18px]"
                >
                  Email Id
                </label>
                <input
                  id="email"
                  type="email"
                  {...register('email')}
                  placeholder="Enter Email ID/Mobile Number"
                  className="pt-[18px] pb-[19px] px-4 sm:px-[20px] mt-2 border-[1px] border-[#b3b3b3] w-full h-[56px] sm:h-[56px] rounded-[7px] font-[Quicksand] text-[15px] leading-[100%] tracking-[0] outline-none text-black"
                  style={{ fontWeight: '600' }}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>

              <button
                type="submit"
                className="bg-blue-500 text-white w-full max-w-[564px] h-[52px] sm:h-[60px] rounded-[7px] font-[Manrope] text-[20px] sm:text-[22px] leading-[100%] tracking-[0]"
                style={{ fontWeight: '700' }}
              >
                Get OTP
              </button>
            </form>

            <div className="mt-[21px] w-full max-w-[564px] text-center">
              <p className="font-[Manrope] font-semibold text-[16px] sm:text-[17px] md:text-[18px] leading-[100%] tracking-[0]">
                <Link href="/register" className="ml-1 text-[#007DFC] hover:underline">
                  Need Help
                </Link>
              </p>
            </div>
          </section>
        </>
      )}
    </AuthPageLayout>
  );
};

export default ForgotPassword;
