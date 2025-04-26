import Image from 'next/image';
import React from 'react';

const About = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-500 to-blue-300 text-white overflow-hidden py-16 px-4 md:px-12">
      {/* Curved Corner SVG */}
      <div className="absolute top-0 right-0">
        <svg
          width="240"
          height="240"
          viewBox="0 0 240 240"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-white"
        >
          <path d="M240 0V240C240 107.452 132.548 0 0 0H240Z" fill="white" />
        </svg>
      </div>

      <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-12 items-center z-10 relative">
        {/* Left Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 leading-snug">
            About Our Review <br /> Management System
          </h2>
          <p className="text-white text-base md:text-lg leading-relaxed">
            Our RMS empowers businesses to take control of their online reputation. With advanced
            analytics, sentiment analysis, and response management tools, you can turn customer
            feedback into actionable insights and improve your brand perception.
          </p>
        </div>

        {/* Right Illustration */}
        <div className="flex justify-center">
          <Image
            src="/assets/png/rb_12186 1.png"
            alt="Review Management Illustration"
            width={500}
            height={500}
            className="w-full h-auto max-w-md"
          />
        </div>
      </div>

      {/* Feature Cards */}
      <div className="mt-16 grid md:grid-cols-3 gap-8 text-center z-10 relative">
        {/* Analytics */}
        <div>
          <div className="w-12 h-12 mx-auto mb-4">
            <Image src="/assets/png/Vector.png" alt="Analytics" width={48} height={48} />
          </div>
          <h4 className="text-lg font-semibold">Analytics</h4>
          <p className="text-sm text-white/90 mt-2">
            Gain deep insights into your reviews and ratings
          </p>
        </div>

        {/* Response */}
        <div>
          <div className="w-12 h-12 mx-auto mb-4">
            <Image
              src="/assets/png/Vector(1).png"
              alt="Response Management"
              width={48}
              height={48}
            />
          </div>
          <h4 className="text-lg font-semibold">Response Management</h4>
          <p className="text-sm text-white/90 mt-2">
            Efficiently manage and respond to customer feedback
          </p>
        </div>

        {/* Reputation */}
        <div>
          <div className="w-12 h-12 mx-auto mb-4">
            <Image src="/assets/png/Vector(2).png" alt="Reputation Boost" width={48} height={48} />
          </div>
          <h4 className="text-lg font-semibold">Reputation Boost</h4>
          <p className="text-sm text-white/90 mt-2">
            Improve your online presence and customer trust
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
