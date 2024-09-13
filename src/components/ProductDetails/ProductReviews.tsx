
import React, { useState } from 'react';

const ProductReviews = () => {
  const [review, setReview] = useState({
    reviewerName: '',
    rating: 0,
    comment: '',
  });
  const [message, setMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setReview({ ...review, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/reviews/[productId]', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(review),
      });
      const data = await response.json();
      if (response.ok) {
        setMessage('Review Created Successfully!');
        setReview({ reviewerName: '', rating: 0, comment: '' });
      } else {
        setMessage(`Error: ${data.error}`);
      }
    } catch (error) {
      setMessage('An Unexpected Error Occurred.');
    }
  };

  return (
    <div className="mt-8">
      <h1 className="text-center text-2xl font-bold text-gray-300">
        Please Submit Your Review
      </h1>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto mt-4">
        <div className="mb-4">
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            name="reviewerName"
            value={review.reviewerName}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Rating (1-5)</label>
          <input
            type="number"
            name="rating"
            min="1"
            max="5"
            value={review.rating}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Comment</label>
          <textarea
            name="comment"
            value={review.comment}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <button type="submit" className="px-4 py-2 bg-black  text-white rounded">
          Submit Review
        </button>
      </form>
      {message && <p className="mt-4 text-center text-gray-700">{message}</p>}
    </div>
  );
};

export default ProductReviews;
