'use client';
import React, { ReactNode, useEffect, useState } from 'react';
import Image from 'next/image';
import StarSVG from '@/common/icons/svg/StarSVG';

interface AuthPageLayoutProps {
    children: ReactNode;
}

const AuthPageLayout: React.FC<AuthPageLayoutProps> = ({ children }) => {
    const [isClient, setIsClient] = useState(false);

    // Set isClient state to true after the first render to avoid hydration mismatch
    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return null; // Or a loading spinner, or fallback content
    }

    return (
        <div className="bg-gray-900 flex items-center justify-center min-h-screen p-4">
            <div className="w-full max-w-5xl overflow-hidden bg-white h-auto md:h-[585px] rounded-lg shadow-lg relative">
                <div className="flex flex-col md:flex-row h-full">
                    {/* Left Welcome Panel */}
                    <div className="relative hidden md:flex w-full md:w-1/2 p-8 flex-col justify-center items-center text-white overflow-hidden">
                        <div className="absolute inset-0 -translate-y-[10%]">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="absolute w-full h-full"
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
                            <div className="absolute bottom-[-124px] -left-26 w-64 h-64 rounded-full bg-[linear-gradient(32.35deg,#007BF8_15.82%,#012770_67.43%)] transform scale-x-[-1]" />
                            <div className="absolute top-85 right-17 w-38 h-38 rounded-full bg-gradient-to-r from-[#007BF8] to-[#012770] transform scale-x-[-1]" />
                        </div>
                        <div className="relative z-10 text-center" style={{ left: '-10%', top: '-50px' }}>
                            <h1 className="text-4xl font-bold mb-2">WELCOME</h1>
                            <div className="flex justify-center mb-2">
                                <StarSVG />
                            </div>
                            <h2 className="text-[16px] font-thin">Employee Review</h2>
                            <h2 className="text-[16px] font-thin">Management</h2>
                        </div>
                    </div>

                    {/* Right Panel (Form content) */}
                    <div className="w-full md:w-1/2 p-6 relative flex items-center justify-center">
                        <div className="w-full max-w-md">
                            {/* Mobile Welcome Circle */}
                            <div className="md:hidden mb-6">
                                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#007BF8] to-[#012770] mx-auto flex flex-col items-center justify-center text-white text-center p-2">
                                    <h1 className="text-xs font-medium">WELCOME</h1>
                                    <Image src="/Star.png" alt="star" width={40} height={40} className="my-1" />
                                    <p className="text-[10px] leading-tight">Employee Review</p>
                                    <p className="text-[10px] leading-tight">Management</p>
                                </div>
                            </div>

                            {/* Independent children block */}
                            <div className="relative z-10">{children}</div>
                        </div>
                    </div>
                </div>

                {/* Desktop bottom circle */}
                <div className="hidden md:block absolute bottom-0 right-0 z-0 translate-x-1/4 translate-y-1/4">
                    <svg width="140" height="154" viewBox="0 0 151 151" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="151" cy="151" r="151" transform="matrix(-1 0 0 1 302 0)" fill="url(#paint0_linear_1118_394)" />
                        <defs>
                            <linearGradient id="paint0_linear_1118_394" x1="272" y1="57.5" x2="50" y2="269.5" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#007BF8" />
                                <stop offset="1" stopColor="#012770" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>

                {/* Mobile bottom circle */}
                <div className="block md:hidden mt-6 justify-center">
                    <svg width="100" height="100" viewBox="0 0 151 151" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="75.5" cy="75.5" r="75.5" fill="url(#paint0_linear_1118_394)" />
                        <defs>
                            <linearGradient id="paint0_linear_1118_394" x1="120" y1="30" x2="10" y2="180" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#007BF8" />
                                <stop offset="1" stopColor="#012770" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default AuthPageLayout;
