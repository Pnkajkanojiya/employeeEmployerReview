'use client';
import React, { useState } from 'react'; //useRef nikal diya hai import mein
import { Search } from 'lucide-react'; // Star nikal diya hai import mein
import Image from 'next/image';
import { ChevronUp, ChevronDown } from 'lucide-react';
import SingleReview from '../single-review/page';

export default function RespondToReviews() {
  const [isOpen, setIsOpen] = useState(true);
  const [rating, setRating] = useState(0);
  //  const textdata = useRef;

  return (
    <div className="min-h-screen bg-gray-50">
      <header className=" p-4 flex justify-between items-center" style={{ background: '#007DFC' }}>
        <div className="">
          <Image src="/emp-logo.png" alt="" height={100} width={100} />
        </div>
        <div className="relative">
          <input
            placeholder="Search reviews"
            className="pl-10 w-72 rounded-xl py-2 px-4 bg-white outline-none"
          />
          <Search className="absolute left-3 top-2.5 text-blue-600" size={20} />
        </div>
      </header>

      <main className="p-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Respond to Reviews</h2>

        <div className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="absolute right-2 text-gray-600 hover:text-black transition-transform"
            style={{ top: '36px', marginBottom: '100px' }}
          >
            {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>

          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="bg-white rounded-xl shadow p-4 mb-6 mt-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold">
                  <Image src="/Man.png" alt="Man logo" width={100} height={100} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <p className="font-semibold">Emma Fox</p>
                    <span className="text-sm text-gray-500">Software Developer</span>
                  </div>
                  <div className="flex items-center gap-1 text-yellow-400 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        onClick={() => setRating(i + 1)}
                        className={`cursor-pointer text-xl transition duration-200 ${
                          i < rating ? 'text-yellow-400' : 'text-gray-300'
                        }`}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                  <p className="text-sm text-gray-500">Review #1283</p>
                  <p className="mt-2 text-sm">
                    Tech Corp Solutions is a leading innovator in cloud computing and artificial
                    intelligence solutions. We help businesses transform their operations and
                    achieve digital excellence.
                  </p>
                  <textarea
                    className="w-full mt-4 p-2 border border-gray-300 rounded-md outline-none"
                    placeholder="Type your response here..."
                  />
                  <div className="flex items-center gap-2 mt-4">
                    <button className="flex items-center gap-2 border border-gray-300 px-4 py-2 rounded-md">
                      <Image src="/Tag.png" alt="Tag icon" width={20} height={10} />
                      <span>Tag for Action</span>
                    </button>

                    <select className="border border-gray-300 px-4 py-2 rounded-md">
                      <option>Select Template</option>
                      <option value="thanks">Thank You</option>
                      <option value="followup">Follow Up</option>
                    </select>
                    <button className="px-4 py-2 border rounded-md bg-gray-100">
                      <Image src="/Select.png" alt="select" width={20} height={10} />
                    </button>
                  </div>
                  <div className="flex gap-2 mt-4">
                    <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md">
                      <div className="flex gap-2 px-4">
                        <Image src="/Tick.png" alt="Tick icon" width={25} height={3} />
                        <span>Marked as Resolved</span>
                      </div>
                    </button>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md">
                      <div className="flex gap-2 px-4">
                        <Image src="/Send.png" alt="Send icon" width={25} height={3} />
                        <span>Send for response</span>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`bg-white rounded-xl shadow p-4 mb-4 items-start gap-4 
    transition-all duration-500 ease-in-out 
    ${!isOpen ? 'mt-[70px]' : 'mt-0'}`}
        >
          <SingleReview />

          <SingleReview />
          <SingleReview />
        </div>
      </main>
    </div>
  );
}
