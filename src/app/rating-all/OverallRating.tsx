'use client';
import { reviewSchema } from '@/common/validations/authSchemas';
import Image from 'next/image';
import { useState } from 'react';
import AverageRatingDisplay from './components/AverageRatingDisplay';
import RatingCriteria from './components/RatingCriteria';

export default function ReviewForm() {
  const [overallRating] = useState(3);
  const [ratings, setRatings] = useState({
    culture: 0,
    management: 0,
    workLifeBalance: 0,
    salaryBenefits: 0,
  });

  const [companyName, setCompanyName] = useState('');
  const [review, setReview] = useState('');
  const [pros, setPros] = useState('');
  const [cons, setCons] = useState('');
  const [designation, setDesignation] = useState('');
  const [category, setCategory] = useState('');
  const [anonymous, setAnonymous] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleRatingChange = (category: string, value: number) => {
    setRatings((prev) => ({ ...prev, [category]: value }));
  };
  const handleSubmit = () => {
    const formData = {
      overallRating,
      companyName,
      review,
      pros,
      cons,
      designation,
      category,
      anonymous,
      ratings,
    };

    const result = reviewSchema.safeParse(formData);

    if (!result.success) {
      const fieldErrors = result.error.flatten().fieldErrors;
      const ratingErrors = fieldErrors['ratings'];
      const combinedErrors: Record<string, string> = {};

      // Top-level errors (excluding nested ratings)
      Object.entries(fieldErrors).forEach(([key, value]) => {
        if (key !== 'ratings' && value?.length) {
          combinedErrors[key] = value[0];
        }
      });

      // Nested ratings errors
      if (typeof ratingErrors === 'object' && ratingErrors !== null) {
        Object.entries(ratingErrors).forEach(([key, value]) => {
          if (value?.length) {
            combinedErrors[`ratings.${key}`] = value[0];
          }
        });
      }

      setErrors(combinedErrors);

      return;
    }

    setErrors({});
    console.log('✅ Submitted Review:', result.data);
    // Proceed with API call or logic here
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
            <p className="text-2xl font-semibold text-white mb-2">Overall Rating</p>

            <div className="flex justify-center gap-4">
              {/* {[...Array(5)].map((_, index) =>
                index < overallRating ? (
                  <Glowstar key={index} count={1} onClick={() => setOverallRating(index + 1)} />
                ) : (
                  <Unglowstar key={index} count={1} onClick={() => setOverallRating(index + 1)} />
                )
              )} */}

              <AverageRatingDisplay ratings={ratings} />
            </div>
            {errors.overallRating && (
              <p className="text-red-500 text-sm mt-1">{errors.overallRating}</p>
            )}
          </div>

          <div className="bg-white max-w-6xl rounded-2xl p-8 md:p-12 shadow-xl space-y-6">
            <div>
              <p className="text-black font-bold text-xl">
                Company Name <span className="text-[#F94A4A]">*</span>
              </p>
              <input
                type="text"
                placeholder="Enter Company Name"
                className="w-full border p-2 rounded mt-2 border-gray-400 text-gray-700"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
              />
              {errors.companyName && <p className="text-red-500 text-sm">{errors.companyName}</p>}
            </div>

            <RatingCriteria ratings={ratings} handleRatingChange={handleRatingChange} errors={{}} />
            {Object.entries(ratings).map(([key]) => {
              const error = errors[`ratings.${key}`];
              return (
                error && (
                  <p key={key} className="text-red-500 text-sm">
                    {key.replace(/([A-Z])/g, ' $1')} is required
                  </p>
                )
              );
            })}

            <div>
              <p className="text-black font-bold text-xl">
                Write Your Review <span className="text-[#F94A4A]">*</span>
              </p>
              <textarea
                placeholder="Share your experience..."
                className="w-full border-gray-400 text-gray-700 border p-2 rounded mt-2 h-40"
                value={review}
                onChange={(e) => setReview(e.target.value)}
              ></textarea>
              {errors.review && <p className="text-red-500 text-sm">{errors.review}</p>}
            </div>

            <div>
              <p className="text-black font-semibold">Pros</p>
              <input
                type="text"
                placeholder="Pros"
                className="w-full border border-gray-400 text-gray-700 p-2 rounded mt-2"
                value={pros}
                onChange={(e) => setPros(e.target.value)}
              />
            </div>

            <div>
              <p className="text-black font-bold mt-5">Cons</p>
              <input
                type="text"
                placeholder="Cons"
                className="w-full border p-2 border-gray-400 text-gray-700 rounded mt-2"
                value={cons}
                onChange={(e) => setCons(e.target.value)}
              />
            </div>

            <div className="flex gap-2 mt-2">
              <div className="w-1/2">
                <p className="text-black font-bold mt-5">Designation</p>
                <select
                  className="border p-2 rounded text-gray-700 border-gray-400 w-full"
                  value={designation}
                  onChange={(e) => setDesignation(e.target.value)}
                >
                  <option value="">Select</option>
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
                  <option value="">Select</option>
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
