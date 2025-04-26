'use client';
import Image from 'next/image';
import { SlantedBackground } from '../gradiantbanner/Rectangle';
import { FaStar } from 'react-icons/fa';

const ReviewsSection = () => {
  return (
    <section className="relative bg-[#f6faff] py-12 pl-6 pr-0 md:pl-20 md:pr-0 overflow-hidden min-h-[92vh]">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 relative z-10">
        {/* Left Content */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#0070f0] mb-6">
            Reviews Management System
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            Empower Your Business with Authentic Customer Feedback
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-[#0070f0] text-white font-semibold px-6 py-2 rounded-md shadow-md hover:bg-[#005cd1] transition">
              GET START
            </button>
            <button className="border border-[#0070f0] text-[#0070f0] font-semibold px-6 py-2 rounded-md hover:bg-[#e6f0fe] transition">
              REGISTER NOW
            </button>
          </div>
        </div>

        {/* Right Side with Background and Cards */}
        <div className="relative w-full">
          {/* Background SVG aligned to right */}
          <div className="absolute top-0 right-0 bottom-0 w-full md:w-1/2 h-[900px] z-0">
            <SlantedBackground />
          </div>

          {/* Cards above the background */}
          <div className="flex flex-row gap-6 relative z-10 mr-0 pr-0">
            {/* Gabriel Card – Vertical */}
            <div className="w-[270px] h-[380px] bg-white rounded-[62px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] p-6 mt-[60px] left-14">
              <div className="flex items-center gap-6 mt-4 ">
                <Image
                  src="/assets/png/Ellipse 9.png"
                  alt="Gabriel Ramirez"
                  width={60}
                  height={60}
                  className="rounded-full"
                />
                <div>
                  <p className="font-medium">Gabriel Ramirez</p>
                  <p className="text-sm text-gray-500">98 Reviews</p>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-1">
                {[1, 2, 3, 4].map((_, i) => (
                  <FaStar
                    key={i}
                    className="text-[#007DFC] text-2xl drop-shadow-[0_4px_6px_rgba(0,125,252,0.4)]"
                  />
                ))}
                <FaStar className="text-blue-200 text-2xl" />
              </div>

              <p className="text-xs text-gray-400 mt-4">06/11/2023</p>
              <p className="font-semibold mt-3">Satisfactorio</p>
              <p className="text-2sm text-gray-900 leading-5 mt-2" style={{ wordSpacing: '4px' }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been the industry standard.{' '}
                <a href="#" className="text-[#0070f0] hover:underline">
                  Learn more
                </a>
              </p>
            </div>

            {/* Tony Card – Horizontal */}
            <div className="w-[385px] h-[260px] bg-white rounded-[62px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] p-6 flex flex-col mt-[250px]">
              <div className="flex items-center gap-4">
                <Image
                  src="/assets/png/Ellipse 20.png"
                  alt="Tony Ruiz"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <div>
                  <p className="text-[#0070f0] font-medium text-lg">Tony Ruiz</p>
                  <p className="text-sm text-gray-500">142 Reviews</p>
                </div>
                <p className="ml-auto text-xs text-gray-400">06/11/2023</p>
              </div>
              <div className="mt-4">
                <p className="flex items-center gap-4 font-semibold">
                  Genial
                  <span className="bg-[#0070f0] text-white text-sm px-2 py-1 rounded-md">★ 5</span>
                </p>
                <p className="text-2sm text-gray-900 leading-5 mt-2" style={{ wordSpacing: '4px' }}>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                  Ipsum has been the industry standard.{' '}
                  <a href="#" className="text-[#0070f0] hover:underline">
                    Learn more
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
