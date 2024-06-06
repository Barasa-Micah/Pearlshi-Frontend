// src/Rating.js
import React, { useState } from 'react';

const Rating = ({ totalStars = 5, rating, setRating }) => {
  const [hover, setHover] = useState(0);

  return (
    <div className="flex">
      {[...Array(totalStars)].map((star, index) => {
        index += 1;
        return (
          <button
            type="button"
            key={index}
            className={`w-10 h-10 ${index <= (hover || rating) ? 'text-yellow-400' : 'text-gray-300'}`}
            onClick={() => setRating(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="star"
              className="w-full h-full"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
            >
              <path
                fill="currentColor"
                d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.2 23 46 46.4 33.7L288 439.6l130.6 68.7c23.4 12.3 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
              />
            </svg>
          </button>
        );
      })}
    </div>
  );
};

export default Rating;
