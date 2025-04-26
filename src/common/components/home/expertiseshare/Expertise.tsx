import Image from 'next/image';
import React from 'react';

const Expertise = () => {
  return (
    <section
      className="relative text-white bg-[#010C43] overflow-hidden pt-16"
      style={{
        clipPath: 'polygon(0 18%, 100% 0%, 100% 82%, 0% 100%)',
      }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 py-24 gap-10">
        {/* Left Side - Globe Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src="/assets/png/Group 53.png"
            alt="Globe"
            width={600}
            height={600}
            className="w-full max-w-lg"
            priority
          />
        </div>

        {/* Right Side - Text */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-semibold leading-snug text-white">
            We Have Support Languages <br />
            For More Than <span className="text-[#2DA1F8]">30 Languages</span> <br />
            Around The World
          </h2>

          <p className="mt-5 text-gray-300 max-w-md mx-auto md:mx-0">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industrys standard dummy text ever since the 1500s.
          </p>

          <button className="mt-6 bg-[#2DA1F8] hover:bg-blue-600 text-white px-6 py-2 rounded-md font-medium transition">
            Read More <span className="ml-2">➔</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
