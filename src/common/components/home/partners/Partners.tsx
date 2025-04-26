import Image from 'next/image';
import React from 'react';

const Partners = () => {
  return (
    <section className=" text-white pt-16  bg-[#010C43]">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-semibold">
          Our <span className="text-[#2DA1F8]">Partners</span>
        </h2>
        <p className="text-sm mt-2 text-gray-300">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse tortor
          aene.
        </p>

        {/* Logos */}
        <div className="mt-10 flex flex-wrap justify-center gap-6 py-14">
          <Image
            src="/assets/png/high-04 1.png"
            alt="Visualytes"
            width={100} // adjust width
            height={64} // adjust height
            className="h-16 rounded-xl bg-white px-4 py-2 object-contain"
          />
          <Image
            src="/assets/png/Tillu logo-02 1.png"
            alt="Tillu"
            className="rounded-xl bg-white px-4 py-2"
            width={64}
            height={64}
          />
          <Image
            src="/assets/png/CRM360 logo_101 STAFF LOGO 1.png"
            alt="CRM360"
            className="rounded-xl bg-white px-4 py-2"
            width={64}
            height={64}
          />
          <Image
            src="/assets/png/Geecon_letterhead and logo-03 1.png"
            alt="Geecon"
            className="rounded-xl bg-white px-4 py-2"
            width={64}
            height={64}
          />
          <Image
            src="/assets/png/next_image_logo.png"
            alt="Next Image"
            className="rounded-xl bg-white px-4 py-2"
            width={64}
            height={64}
          />
        </div>
      </div>

      {/* Expertise Section */}
      <div className="bg-white text-center text-black py-20 px-4 relative">
        <h2 className="text-2xl font-semibold">
          Share Your <span className="text-[#2DA1F8]">Expertise</span>
        </h2>

        <div className="mt-12 grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          {/* Item 1 */}
          <div>
            <Image
              src="/assets/png/Group 49.png"
              alt="Star"
              width={40} // Approx height if h-10
              height={40}
              className="mx-auto mb-4"
            />
            <h3 className="font-semibold text-lg">Write a Reviews</h3>
            <p className="text-gray-600 mt-1">Share your experience with a company</p>
            <a href="#" className="text-[#2DA1F8] mt-2 inline-block font-medium">
              Submit Review
            </a>
          </div>

          {/* Item 2 */}
          <div>
            <Image
              src="/assets/png/Group 50.png"
              alt="Star"
              width={40} // Approx height if h-10
              height={40}
              className="mx-auto mb-4"
            />{' '}
            <h3 className="font-semibold text-lg">Share Interview Advice</h3>
            <p className="text-gray-600 mt-1">Help others prepare for interview</p>
            <a href="#" className="text-[#2DA1F8] mt-2 inline-block font-medium">
              Submit Review
            </a>
          </div>

          {/* Item 3 */}
          <div>
            <Image
              src="/assets/png/Group 51.png"
              alt="Star"
              width={40} // Approx height if h-10
              height={40}
              className="mx-auto mb-4"
            />{' '}
            <h3 className="font-semibold text-lg">Contribute Salary Data</h3>
            <p className="text-gray-600 mt-1">Add transparency for compensation</p>
            <a href="#" className="text-[#2DA1F8] mt-2 inline-block font-medium">
              Submit Review
            </a>
          </div>
        </div>

        {/* Slanted background */}
      </div>
    </section>
  );
};

export default Partners;
