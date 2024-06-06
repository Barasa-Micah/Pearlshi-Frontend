// src/ReviewForm.js
import React, { useState } from 'react';
import Rating from './Rating';

const ReviewForm = () => {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');
  const [reviews, setReviews] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newReview = {
      rating,
      review,
      date: new Date().toLocaleDateString(),
    };
    setReviews([...reviews, newReview]);
    setRating(0);
    setReview('');
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">Write a Review</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Rating:</label>
          <Rating rating={rating} setRating={setRating} />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Review:</label>
          <textarea
            className="w-full p-2 border border-gray-300 rounded"
            value={review}
            onChange={(e) => setReview(e.target.value)}
            rows="4"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </form>

      <div className="mt-6">
        <h2 className="text-xl font-bold mb-4">Customer Reviews</h2>
        {reviews.length === 0 ? (
          <p>No reviews yet.</p>
        ) : (
          reviews.map((review, index) => (
            <div key={index} className="mb-4">
              <div className="flex items-center mb-1">
                {[...Array(5)].map((star, i) => (
                  <svg
                    key={i}
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="star"
                    className={`w-4 h-4 ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                  >
                    <path
                      fill="currentColor"
                      d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.2 23 46 46.4 33.7L288 439.6l130.6 68.7c23.4 12.3 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                    />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700">{review.review}</p>
              <p className="text-gray-500 text-sm">{review.date}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ReviewForm;
