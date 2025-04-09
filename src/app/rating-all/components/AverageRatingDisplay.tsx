'use client';

import React from 'react';
import Glowstar from '@/common/components/emojis/Glowstar';
import Unglowstar from '@/common/components/emojis/Unglowstar';

interface AverageRatingDisplayProps {
  ratings: { [key: string]: number };
}

const AverageRatingDisplay = ({ ratings }: AverageRatingDisplayProps) => {
  const ratingValues = Object.values(ratings);
  const count = ratingValues.length;
  const averageRating = count > 0 ? ratingValues.reduce((acc, val) => acc + val, 0) / count : 0;

  const roundedRating = Math.round(averageRating); // rounded to nearest whole number for stars

  return (
    <div className="flex items-center gap-2">
      <span className="text-lg font-bold text-white">{averageRating.toFixed(1)} / 5</span>
      <div className="flex">
        {[...Array(5)].map((_, i) =>
          i < roundedRating ? <Glowstar key={i} count={1} /> : <Unglowstar key={i} count={1} />
        )}
      </div>
    </div>
  );
};

export default AverageRatingDisplay;
