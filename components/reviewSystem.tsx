// components/reviewSystem.tsx
import { reviews } from './reviews';

interface ReviewProps {
  index: number;
}

const Review: React.FC<ReviewProps> = ({ index }) => {
  const review = reviews[index];
  if (!review) {
    return null;
  }
  return (
    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div className="flex space-x-4">
        <div className="m-1 rounded-lg border-y py-2">
          <h3 className="mt-3 p-1 font-semibold text-white md:text-xl xl:text-xl">
            "{review.motto}"
          </h3>
          <p className="xl:text-md mt-3 px-3 text-sm text-white md:text-lg">
            {review.text}
          </p>
          <h3 className="mt-3 text-white md:text-xl lg:text-2xl xl:text-lg">
            - {review.name}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Review;
