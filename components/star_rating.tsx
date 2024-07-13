import React from 'react';

interface StarRatingProps {
  rating: number;
  totalStars?: number;
}

const StarRating: React.FC<StarRatingProps> = ({ rating, totalStars = 5 }) => {
  const filledStars = Math.round(rating);
  const emptyStars = totalStars - filledStars;

  return (
    <div className="flex">
      {Array(filledStars)
        .fill(0)
        .map((_, index) => "★")}
      {Array(emptyStars)
        .fill(0)
        .map((_, index) => "☆")}
    </div>
  );
};

export default StarRating;
