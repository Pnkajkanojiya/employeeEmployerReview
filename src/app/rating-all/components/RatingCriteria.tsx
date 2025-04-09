'use client';

import CustomGlowStar from '@/common/components/emojis/CustomGlowStar';
import CustomUnglowStar from '@/common/components/emojis/CustomUnglowStar';

interface RatingCriteriaProps {
  ratings: { [key: string]: number };
  handleRatingChange: (category: string, value: number) => void;
  errors?: { [key: string]: string };
}
// interface OverallRatingDisplayProps {
//   averageRating: number;
// }
export default function RatingCriteria({
  ratings,
  handleRatingChange,
  errors = {},
}: RatingCriteriaProps) {
  // const totalRating = Object.values(ratings).reduce((acc, val) => acc + val, 0);
  // const criteriaCount = Object.keys(ratings).length;
  // const averageRating = criteriaCount > 0 ? totalRating / criteriaCount : 0;

  return (
    <div className="mt-4">
      <p className="font-bold text-xl text-black mb-2">
        Rate your company on the following criteria
        <span className="text-[#F94A4A]"> *</span>
      </p>

      <div className="flex flex-wrap">
        {Object.keys(ratings).map((key) => (
          <div key={key} className="w-1/2 mb-4 p-2">
            <div className="w-full">
              <p className="capitalize text-black">
                {key.replace(/([A-Z])/g, ' $1')}
                <span className="text-[#F94A4A]"> *</span>
              </p>
              <div className="flex gap-2 mt-1">
                {[...Array(5)].map((_, i) =>
                  i < ratings[key] ? (
                    <CustomGlowStar
                      key={i}
                      count={1}
                      size={24}
                      onClick={() => handleRatingChange(key, i + 1)}
                    />
                  ) : (
                    <CustomUnglowStar
                      key={i}
                      count={1}
                      size={24}
                      onClick={() => handleRatingChange(key, i + 1)}
                    />
                  )
                )}
              </div>
              {errors[key] && (
                <p className="text-red-500 text-sm mt-1">
                  {key.replace(/([A-Z])/g, ' $1')} is required
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Overall Average Display */}
      {/* <div className="mt-6 p-4 bg-gray-50 border rounded">
        <p className="font-semibold text-black mb-1">Overall Rating:</p>
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-gray-800">{averageRating.toFixed(1)} / 5</span>
          <div className="flex">
            {[...Array(5)].map((_, i) =>
              i < Math.round(averageRating) ? (
                <CustomGlowStar key={i} count={1} size={20} onClick={() => {}} />
              ) : (
                <CustomUnglowStar key={i} count={1} size={20} onClick={() => {}} />
              )
            )}
          </div>
        </div>
      </div> */}
    </div>
  );
}
