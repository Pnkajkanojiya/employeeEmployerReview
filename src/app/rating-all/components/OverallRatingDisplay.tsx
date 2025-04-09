import Glowstar from '@/common/components/emojis/Glowstar';
import Unglowstar from '@/common/components/emojis/Unglowstar';

interface OverallRatingDisplayProps {
  averageRating: number;
}

export default function OverallRatingDisplay({ averageRating }: OverallRatingDisplayProps) {
  return (
    <div className="mt-6 p-4 bg-gray-50 border rounded">
      <p className="font-semibold text-black mb-1">Overall Rating:</p>
      <div className="flex items-center gap-2">
        <span className="text-lg font-bold text-gray-800">{averageRating.toFixed(1)} / 5</span>
        <div className="flex">
          {[...Array(5)].map((_, i) =>
            i < Math.round(averageRating) ? (
              <Glowstar key={i} count={1} onClick={() => {}} />
            ) : (
              <Unglowstar key={i} count={1} onClick={() => {}} />
            )
          )}
        </div>
      </div>
    </div>
  );
}
