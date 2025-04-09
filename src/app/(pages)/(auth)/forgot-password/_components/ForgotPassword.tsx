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
    // Call your backend OTP logic here if needed
    setShowOtp(true); // Show OTP input
  };

  return (
    <AuthPageLayout>
      {showOtp ? (
        <Otp />
      ) : (
        <>
          <h2 className="text-2xl font-bold text-black mt-6">Forget Password !</h2>
          <p className="text-gray-900 text-sm mb-4">
            Don’t worry! It happens. Please enter the details associated with your account.
          </p>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Id
              </label>
              <input
                id="email"
                type="email"
                {...register('email')}
                placeholder="Enter your ID"
                className="px-3 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 uppercase"
            >
              Get OTP
            </button>
          </form>

          <div className="text-center mt-4">
            <p className="text-sm text-gray-600">
              <Link href="/register" className="ml-1 text-blue-600 hover:underline">
                Need Help
              </Link>
            </p>
          </div>
        </>
      )}
    </AuthPageLayout>
  );
};

export default ForgotPassword;
