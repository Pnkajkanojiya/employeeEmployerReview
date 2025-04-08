'use client';
import Glowstar from '@/common/components/emojis/Glowstar';
import Unglowstar from '@/common/components/emojis/Unglowstar';
import Image from 'next/image';
import { useState } from 'react';
// import { FaStar } from 'react-icons/fa';

export default function ReviewForm() {
  const [overallRating, setOverallRating] = useState(3);
  const [ratings, setRatings] = useState({
    workLifeBalance: 3,
    salaryBenefits: 3,
    promotionsAppraisal: 3,
    jobSecurity: 3,
    skillDevelopmentLearning: 3,
    workSatisfaction: 3,
    companyCulture: 3,
  });
  
  const [companyName, setCompanyName] = useState('');
  const [review, setReview] = useState('');
  const [pros, setPros] = useState('');
  const [cons, setCons] = useState('');
  const [designation, setDesignation] = useState('');
  const [category, setCategory] = useState('');
  const [anonymous, setAnonymous] = useState(false);

  const handleRatingChange = (category: string, value: number) => {
    setRatings((prevRatings) => ({ ...prevRatings, [category]: value }));
  };
  

  const handleSubmit = () => {
    //Ismein e pass kiya hai parameter mein jo a
    // e.preventDefault();
    const formData = {
      overallRating,
      ratings,
      companyName,
      review,
      pros,
      cons,
      designation,
      category,
      anonymous,
    };
    console.log('Submitted Review:', formData); 
    // You can replace this with an API call
  };

  return (
    <div>
      <div className="bg-white h-30">
        <Image
          src="/assets/png/emp_logo.png"
          alt="Logo"
          className="ml-5 pt-4"
          width={200}
          height={70}
        />
      </div>

      <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-[#007DFC] via-[#015FC0] to-[#015FC0]">
        <div className="p-6 sm:p-10 max-w-5xl mx-auto w-full">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-extrabold tracking-wide text-white text-center leading-snug">
              Reviews Management System
            </h2>
            <p className="text-base text-white opacity-90 mt-1 leading-snug">
              Rate your company, anonymously!
            </p>
          </div>

          <div className="text-center mb-6">
            <p className="text-2xl font-semibold text-white mb-2">
              Overall Rating <span className="text-[#F94A4A]">*</span>
            </p>

            <div className="flex justify-center gap-4">
              {[...Array(5)].map((_, index) =>
                index < overallRating ? (
                  <Glowstar key={index} count={1} onClick={() => setOverallRating(index + 1)} />
                ) : (
                  <Unglowstar key={index} count={1} onClick={() => setOverallRating(index + 1)} />
                )
              )}
            </div>
          </div>

          <div className="bg-white max-w-6xl rounded-2xl p-8 md:p-12 shadow-xl space-y-6">
            <p className="text-black font-bold text-xl">
              {' '}
              Company Name <span className="text-[#F94A4A]">*</span>{' '}
            </p>
            <input
              type="text"
              placeholder="Enter Company Name"
              className="w-full border p-2 rounded mt-2 border-gray-400 text-gray-700"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
            />

            <div className="mt-4">
              <p className="font-bold text-xl text-black  mb-2">
                Rate your company on the following criteria
                <span className="text-[#F94A4A]"> *</span>
              </p>
              <div className="flex flex-wrap">
                {Object.keys(ratings).map((key) => (
                  <div key={key} className="w-1/2 mb-3 p-2">
                    <div className="w-full">
                      <p className="capitalize text-black">{key.replace(/([A-Z])/g, ' $1')}</p>
                      <div className="flex">
                      <div className="flex gap-2 mt-1">
  {[...Array(5)].map((_, i) =>
    i < ratings[key as keyof typeof ratings] ? (
      <Glowstar key={i} onClick={() => handleRatingChange(key, i + 1)} />
    ) : (
      <Unglowstar key={i} onClick={() => handleRatingChange(key, i + 1)} />
    )
  )}
</div>

                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-black font-bold mt-5">Write Your Review</p>
            <textarea
              placeholder="Share your experience..."
              className="w-full border-gray-400 text-gray-700 border p-2 rounded mt-2 h-40"
              value={review}
              onChange={(e) => setReview(e.target.value)}
            ></textarea>

            <div>
              <p className="text-black font-semibold">Pro s</p>
              <input className="w-full border p-3 mt-2 rounded-md ..." />
            </div>

            <input
              type="text"
              placeholder="Pros"
              className="w-full border border-gray-400 text-gray-700 p-2 rounded mt-2"
              value={pros}
              onChange={(e) => setPros(e.target.value)}
            />
            <p className="text-black font-bold mt-5">Con s</p>
            <input
              type="text"
              placeholder="Cons"
              className="w-full border p-2 border-gray-400 text-gray-700 rounded mt-2"
              value={cons}
              onChange={(e) => setCons(e.target.value)}
            />

            <div className="flex gap-2 mt-2">
              <div className="w-1/2">
                <p className="text-black font-bold mt-5">Designation</p>
                <select
                  className="border p-2 rounded text-gray-700 border-gray-400"
                  value={designation}
                  onChange={(e) => setDesignation(e.target.value)}
                >
                  <option>Select</option>
                  <option>Software Engineer</option>
                  <option>Manager</option>
                  <option>Intern</option>
                </select>
              </div>
              <div className="w-1/2">
                <p className="text-black font-bold mt-5">Company Category</p>
                <select
                  className="w-full border p-2 rounded text-gray-700 border-gray-400"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option>Select</option>
                  <option>IT</option>
                  <option>Finance</option>
                  <option>Healthcare</option>
                </select>
              </div>
            </div>

            <div className="flex items-center mt-2">
              <input
                type="checkbox"
                className="mr-2"
                checked={anonymous}
                onChange={() => setAnonymous(!anonymous)}
              />
              <p className="text-black">Submit Anonymously</p>
            </div>

            <button
              className="w-full bg-blue-600 text-white p-3 rounded-lg mt-6"
              onClick={handleSubmit}
            >
              Submit Review
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
