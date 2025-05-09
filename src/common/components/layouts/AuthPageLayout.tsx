'use client';
import React, { ReactNode, useEffect, useState } from 'react';
import Image from 'next/image';
import StarSVG from '@/common/icons/svg/StarSVG';

interface AuthPageLayoutProps {
  children: ReactNode;
}

const AuthPageLayout: React.FC<AuthPageLayoutProps> = ({ children }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <div className="overflow-hidden bg-white w-full h-screen responsive-section rounded-lg shadow-lg relative">
      <div className="flex flex-col md:flex-row w-full h-full">
        {/* Left Welcome Panel */}
        <div className="relative hidden lg:flex w-[50%] flex-col justify-evenly items-center text-white overflow-hidden">
          {/* Background SVGs and gradients - hidden on tablets and mobile */}
          <div className="absolute inset-0 -translate-y-[10%]  lg:block hidden ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute w-[90%] h-auto"
              viewBox="0 0 780 899"
              fill="none"
            >
              <circle
                cx="612"
                cy="600"
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

            <div
              className="absolute bottom-[-40%] left-[-25%] w-[32vw] h-[32vw] rounded-full transform scale-x-[-1]"
              style={{
                background: 'linear-gradient(32.35deg, #007BF8 15.82%, #012770 67.43%)',
              }}
            />

            <div
              className="absolute top-[60%] right-[22%] w-[18vw] h-[18vw] rounded-full transform scale-x-[-1]"
              style={{
                background: 'linear-gradient(90deg, #007BF8 0%, #012770 100%)',
              }}
            />
          </div>

          <div className="relative z-10 text-center " style={{ left: '-15%', top: '-113px' }}>
            <h1 className="text-4xl font-bold mb-2">WELCOME</h1>
            <div
              className="flex justify-center mb-2 lg:block"
              style={{
                display: '-webkit-flex',
                WebkitJustifyContent: 'center',
                WebkitAlignItems: 'center',
              }}
            >
              <StarSVG />
            </div>
            <h2 className="text-[20px] font-thin">Employee Review</h2>
            <h2 className="text-[20px] font-thin">Management</h2>
          </div>
        </div>

        {/* Right Panel (Form content) */}
        <div className="w-full lg:w-[50%] h-full flex items-center justify-center relative">
          <div className="h-full w-full flex flex-col items-center justify-center">
            {/* Mobile Welcome Circle */}
            <div className="hidden md:block lg:hidden ">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#007BF8] to-[#012770] mx-auto flex flex-col items-center justify-center text-white text-center p-2">
                <h1 className="text-xs font-medium">WELCOME</h1>
                <Image src="/Star.png" alt="star" width={40} height={40} className="my-1" />
                <p className="text-[10px] leading-tight">Employee Review</p>
                <p className="text-[10px] leading-tight">Management</p>
              </div>
            </div>

            {/* Independent children block */}
            <div className="relative z-10 h-[600px] md:h-[800px] w-full flex items-baseline justify-center   sm:justify-center lg:justify-start lg:items-center">
              {children}
            </div>
          </div>
        </div>
      </div>

      {/* Desktop bottom circle - hidden on tablet/mobile */}
      <div className="absolute bottom-0 right-0 z-0 translate-x-1/4 translate-y-1/4 lg:block  md:hidden">
        <svg
          width="180"
          height="184"
          viewBox="0 0 151 151"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="151"
            cy="151"
            r="151"
            transform="matrix(-1 0 0 1 302 0)"
            fill="url(#paint0_linear_1118_394)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_1118_394"
              x1="272"
              y1="57.5"
              x2="50"
              y2="269.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#007BF8" />
              <stop offset="1" stopColor="#012770" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* second circle */}

      <div className=" block md:hidden absolute top-[calc(var(--spacing)*-22)] left-[calc(var(--spacing)*-22)] z-0 -translate-x-1/4 -translate-y-1/4 ">
        <div className="w-[300px] h-[300px] rounded-full bg-gradient-to-br from-[#007BF8] to-[#007BF8]"></div>
      </div>

      {/* end here */}

      {/* Mobile bottom circle - already visible only on mobile */}
      {/* <div className="block md:hidden mt-6 justify-center">
        <svg
          width="100"
          height="100"
          viewBox="0 0 151 151"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="75.5" cy="75.5" r="75.5" fill="url(#paint0_linear_1118_394)" />
          <defs>
            <linearGradient
              id="paint0_linear_1118_394"
              x1="120"
              y1="30"
              x2="10"
              y2="180"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#007BF8" />
              <stop offset="1" stopColor="#012770" />
            </linearGradient>
          </defs>
        </svg>
      </div> */}
    </div>
  );
};

export default AuthPageLayout;
