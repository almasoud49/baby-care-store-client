import React, { useState, useEffect } from "react";

type Review = {
  reviewerName: string;
  rating: number;
  comment: string;
  createdAt: string;
};

const ProductReviews = ({ productId }: { productId: string }) => {
  const [review, setReview] = useState({
    reviewerName: "",
    rating: 0,
    comment: "",
  });
  const [message, setMessage] = useState("");
  const [reviews, setReviews] = useState<Review[]>([]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setReview({ ...review, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch(`/api/reviews/${productId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(review),
      });
      const data = await response.json();
      if (response.ok) {
        setMessage("Review Created Successfully!");
        setReview({ reviewerName: "", rating: 0, comment: "" });

        const newReview: Review = {
          reviewerName: review.reviewerName,
          rating: review.rating,
          comment: review.comment,
          createdAt: new Date().toISOString(),
        };
        setReviews([...reviews, newReview]);
      } else {
        setMessage(`Error: ${data.error}`);
      }
    } catch (error) {
      console.error("Submit Error:", error);
      setMessage("An Unexpected Error Occurred.");
    }
  };

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch(`/api/reviews/${productId}`);
        const data = await response.json();
        setReviews(data);
      } catch (error) {
        console.error("Fetch Error:", error);
      }
    };

    fetchReviews();
  }, [productId]);

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
          <label className="block text-gray-700">Rating</label>
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
        <button type="submit" className="px-4 py-2 bg-black text-white rounded">
          Submit Review
        </button>
      </form>
      {message && <p className="mt-4 text-center text-gray-700">{message}</p>}

      <div className="mt-8">
        <h2 className="text-2xl font-bold text-gray-300">Reviews</h2>
        <div className="grid grid-cols-1 gap-4 mt-4">
          {reviews.map((review, index) => (
            <div key={index} className="p-4 bg-white rounded shadow">
              <h3 className="text-lg font-bold">{review.reviewerName}</h3>
              <p className="text-yellow-500">Rating: {review.rating}/5</p>
              <p className="text-gray-700">{review.comment}</p>
              <p className="text-sm text-gray-500">
                Submitted on: {new Date(review.createdAt).toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductReviews;
