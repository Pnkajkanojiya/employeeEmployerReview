'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import AuthPageLayout from '@/common/components/layouts/AuthPageLayout';

// Updated schema hai for company registration
const companyRegisterSchema = z
  .object({
    companyName: z.string().min(2, 'Company name must be at least 2 characters'),
    businessType: z.string().min(1, 'Business type is required'),
    registrationNumber: z.string().min(1, 'Registration number is required'),
    address: z.string().min(5, 'Company address is required'),
    contactName: z.string().min(2, 'Contact person name is required'),
    contactEmail: z.string().email('Please enter a valid email'),
    contactPhone: z.string().min(10, 'Please enter a valid phone number'),
    companySize: z.string().optional(),
    website: z.string().optional(),
    password: z.string().min(8, 'Password must be at least 8 characters'),
    confirmPassword: z.string().min(8, 'Please confirm your password'),
    agreeTerms: z.boolean().refine((val) => val === true, {
      message: 'You must agree to the terms and conditions',
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  });

type CompanyRegisterSchema = z.infer<typeof companyRegisterSchema>;

const Registercompany: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CompanyRegisterSchema>({
    resolver: zodResolver(companyRegisterSchema),
    defaultValues: {
      agreeTerms: false,
    },
  });

  const onSubmit = (data: CompanyRegisterSchema) => {
    console.log('Form Data:', data);
    // perform API request here
  };

  return (
    <AuthPageLayout>
      <div className="[]">
        <h2 className="text-2xl font-bold text-black mt-6">Company Registration</h2>
        <p className="text-gray-900 text-sm mb-4">
          Enter your company details to create an account
        </p>

        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          {/* Company Name field hai */}
          <div className="mb-4">
            <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-1">
              Company Name *
            </label>
            <input
              id="companyName"
              type="text"
              placeholder="Enter company name"
              className="px-3 py-2 border border-gray-300 rounded-md w-full"
              {...register('companyName')}
            />
            {errors.companyName && (
              <p className="text-red-500 text-sm">{errors.companyName.message}</p>
            )}
          </div>

          {/* Business Type/Industry select kare*/}
          <div className="mb-4">
            <label htmlFor="businessType" className="block text-sm font-medium text-gray-700 mb-1">
              Business Type/Industry *
            </label>
            <select
              id="businessType"
              className="px-3 py-2 border border-gray-300 rounded-md w-full"
              {...register('businessType')}
            >
              <option value="">Select business type</option>
              <option value="Manufacturing">Manufacturing</option>
              <option value="Retail">Retail</option>
              <option value="Technology">Technology</option>
              <option value="Healthcare">Healthcare</option>
              <option value="Finance">Finance</option>
              <option value="Education">Education</option>
              <option value="Services">Services</option>
              <option value="Other">Other</option>
            </select>
            {errors.businessType && (
              <p className="text-red-500 text-sm">{errors.businessType.message}</p>
            )}
          </div>

          {/* Registration Number required */}
          <div className="mb-4">
            <label
              htmlFor="registrationNumber"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Registration Number/Tax ID *
            </label>
            <input
              id="registrationNumber"
              type="text"
              placeholder="Enter company registration number"
              className="px-3 py-2 border border-gray-300 rounded-md w-full"
              {...register('registrationNumber')}
            />
            {errors.registrationNumber && (
              <p className="text-red-500 text-sm">{errors.registrationNumber.message}</p>
            )}
          </div>

          {/* Company Address text hai */}
          <div className="mb-4">
            <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
              Company Address *
            </label>
            <textarea
              id="address"
              placeholder="Enter company address"
              className="px-3 py-2 border border-gray-300 rounded-md w-full"
              {...register('address')}
              rows={3}
            />
            {errors.address && <p className="text-red-500 text-sm">{errors.address.message}</p>}
          </div>

          {/* Contact Person Name */}
          <div className="mb-4">
            <label htmlFor="contactName" className="block text-sm font-medium text-gray-700 mb-1">
              Contact Person Name *
            </label>
            <input
              id="contactName"
              type="text"
              placeholder="Enter contact person name"
              className="px-3 py-2 border border-gray-300 rounded-md w-full"
              {...register('contactName')}
            />
            {errors.contactName && (
              <p className="text-red-500 text-sm">{errors.contactName.message}</p>
            )}
          </div>

          {/* Contact Email ka field hai */}
          <div className="mb-4">
            <label htmlFor="contactEmail" className="block text-sm font-medium text-gray-700 mb-1">
              Contact Email *
            </label>
            <input
              id="contactEmail"
              type="email"
              placeholder="Enter contact email"
              className="px-3 py-2 border border-gray-300 rounded-md w-full"
              {...register('contactEmail')}
            />
            {errors.contactEmail && (
              <p className="text-red-500 text-sm">{errors.contactEmail.message}</p>
            )}
          </div>

          {/* Contact Phone numbr ka hai */}
          <div className="mb-4">
            <label htmlFor="contactPhone" className="block text-sm font-medium text-gray-700 mb-1">
              Contact Phone *
            </label>
            <input
              id="contactPhone"
              type="text"
              placeholder="Enter contact phone number"
              className="px-3 py-2 border border-gray-300 rounded-md w-full"
              {...register('contactPhone')}
            />
            {errors.contactPhone && (
              <p className="text-red-500 text-sm">{errors.contactPhone.message}</p>
            )}
          </div>

          {/* Company Size (Optional) select kare */}
          {/* <div className="mb-4">
            <label htmlFor="companySize" className="block text-sm font-medium text-gray-700 mb-1">
              Company Size (Optional)
            </label>
            <select
              id="companySize"
              className="px-3 py-2 border border-gray-300 rounded-md w-full"
              {...register('companySize')}
            >
              <option value="">Select company size</option>
              <option value="1-10">1-10 employees</option>
              <option value="11-50">11-50 employees</option>
              <option value="51-200">51-200 employees</option>
              <option value="201-500">201-500 employees</option>
              <option value="501+">501+ employees</option>
            </select>
          </div> */}

          {/* Website (Optional) ka hai */}
          {/* <div className="mb-4">
            <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-1">
              Website (Optional)
            </label>
            <input
              id="website"
              type="text"
              placeholder="Enter company website"
              className="px-3 py-2 border border-gray-300 rounded-md w-full"
              {...register('website')}
            />
          </div> */}

          {/* Password Field Hai*/}
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password *
            </label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter password"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                {...register('password')}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400"
              >
                {showPassword ? '🙈' : '👁'}
              </button>
            </div>
            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
          </div>

          {/* Confirm Password field hai*/}
          <div className="mb-4">
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Confirm Password *
            </label>
            <input
              id="confirmPassword"
              type={showPassword ? 'text' : 'password'}
              placeholder="Confirm password"
              className="px-3 py-2 border border-gray-300 rounded-md w-full"
              {...register('confirmPassword')}
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>
            )}
          </div>

          {/* Terms & Conditions policy ka hai*/}
          <div className="mb-4">
            <label className="inline-flex items-start gap-2 text-sm text-gray-700">
              <input
                type="checkbox"
                className="h-[17px] w-[17px] rounded border-gray-300 text-blue-600 focus:ring focus:ring-blue-200"
                {...register('agreeTerms')}
              />
              <span className="text-xs leading-snug">
                By signing up, you agree to our{' '}
                <span className="text-blue-600">Terms & Conditions</span> and{' '}
                <span className="text-blue-600">Privacy Policy</span>
              </span>
            </label>
            {errors.agreeTerms && (
              <p className="text-red-500 text-sm">{errors.agreeTerms.message}</p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          >
            Register Company
          </button>
        </form>

        {/* Login Link jo redirect karega login page par*/}
        <p className="text-sm text-center text-gray-600 mt-4">
          Already have an account?{' '}
          <Link href="/login" className="text-blue-600 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </AuthPageLayout>
  );
};

export default Registercompany;
