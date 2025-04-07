'use client';
import AuthPageLayout from '@/common/components/layouts/AuthPageLayout';
import React, { FormEvent, useRef } from 'react';
import Link from 'next/link';

const Otp: React.FC = () => {
  const inputsRef = useRef<HTMLInputElement[]>([]);

  const focusInput = (index: number) => {
    if (inputsRef.current[index]) {
      inputsRef.current[index].focus();
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, idx: number) => {
    const value = e.target.value;
    if (/^[0-9]$/.test(value)) {
      inputsRef.current[idx].value = value;
      if (idx < 3) focusInput(idx + 1);
    } else {
      e.target.value = '';
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, idx: number) => {
    if (e.key === 'Backspace' && !e.currentTarget.value && idx > 0) {
      focusInput(idx - 1);
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    const pasteData = e.clipboardData.getData('Text').trim();
    if (/^\d{4}$/.test(pasteData)) {
      pasteData.split('').forEach((char, i) => {
        if (inputsRef.current[i]) {
          inputsRef.current[i].value = char;
        }
      });
      focusInput(3);
    }
    e.preventDefault();
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const otp = inputsRef.current.map((input) => input?.value).join('');
    console.log('Entered OTP:', otp);
  };

  return (
    <AuthPageLayout>
      <div className="w-full flex justify-end px-4 py-8 md:py-16">
        <div className="w-full max-w-md bg-white p-6 md:p-8 rounded-lg ">
          <h2 className="text-2xl font-bold text-black text-center">Enter OTP!</h2>
          <p className="text-gray-900 text-sm mt-2 mb-6 text-center">
            4 Digit Code has been sent to your email ID / Mobile Number.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="flex justify-center gap-x-4 mb-4">
              {[...Array(4)].map((_, i) => (
                <input
                  key={i}
                  ref={(el) => {
                    if (el) inputsRef.current[i] = el;
                  }}
                  type="text"
                  maxLength={1}
                  inputMode="numeric"
                  autoComplete="one-time-code"
                  className="h-[50px] w-[50px] text-center text-xl font-semibold outline-none border border-gray-400 rounded-lg focus:border-blue-500"
                  onChange={(e) => handleChange(e, i)}
                  onKeyDown={(e) => handleKeyDown(e, i)}
                  onPaste={handlePaste}
                />
              ))}
            </div>

            <div className="text-center text-sm text-gray-700 mb-6">
              Didn&apos;t Receive Any Code?
              <span className="text-[#007DFC] ml-2 underline hover:opacity-80 cursor-pointer">
                Resend OTP
              </span>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 uppercase"
            >
              Submit
            </button>
          </form>

          <div className="text-center mt-4">
            <Link href="/register" className="text-blue-600 hover:underline">
              Need Help
            </Link>
          </div>
        </div>
      </div>
    </AuthPageLayout>
  );
};

export default Otp;
