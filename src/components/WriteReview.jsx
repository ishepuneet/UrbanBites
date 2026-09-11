import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaStar,
  FaQuoteRight,
  FaUserCircle,
  FaHeart,
  FaArrowRight,
  FaPen,
  FaTimes,
  FaCheckCircle,
} from "react-icons/fa";

const initialReviews = [
  {
    id: 1,
    name: "Aarav Sharma",
    role: "Regular Customer",
    rating: 5,
    review:
      "The burger was fresh, juicy and full of flavor. The presentation was amazing and the service was very quick.",
  },
  {
    id: 2,
    name: "Meera Kapoor",
    role: "Food Lover",
    rating: 5,
    review:
      "Absolutely loved the fries and cold coffee. Everything tasted fresh and the staff was really friendly.",
  },
  {
    id: 3,
    name: "Rohan Verma",
    role: "Happy Customer",
    rating: 4,
    review:
      "A beautiful food experience with delicious dishes. The chocolate dessert was my favorite part of the meal.",
  },
  {
    id: 4,
    name: "Ananya Singh",
    role: "Food Explorer",
    rating: 5,
    review:
      "Great taste, clean presentation and affordable prices. I would definitely recommend Food Van to everyone.",
  },
  {
    id: 5,
    name: "Kabir Malhotra",
    role: "Regular Customer",
    rating: 5,
    review:
      "The quality of the food is excellent. Every dish feels freshly prepared and the flavors are perfectly balanced.",
  },
  {
    id: 6,
    name: "Ishita Jain",
    role: "Happy Customer",
    rating: 5,
    review:
      "Food Van has become my favorite place for quick bites. The service is fast and every item is delicious.",
  },
];

const Stars = ({ rating = 5, size = "text-base" }) => {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <FaStar
          key={star}
          className={`${size} ${
            star <= rating ? "text-[#f5bd32]" : "text-gray-200"
          }`}
        />
      ))}
    </div>
  );
};

export default function Reviews() {
  const [reviews, setReviews] = useState(initialReviews);
  const [showForm, setShowForm] = useState(false);
  const [selectedRating, setSelectedRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    foodItem: "",
    review: "",
  });

  const averageRating =
    reviews.reduce((total, item) => total + item.rating, 0) / reviews.length;

  const ratingCounts = [5, 4, 3, 2, 1].map((rating) => ({
    rating,
    count: reviews.filter((item) => item.rating === rating).length,
  }));

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!formData.name.trim() || !formData.review.trim()) {
      alert("Please enter your name and review.");
      return;
    }

    if (!selectedRating) {
      alert("Please select a rating.");
      return;
    }

    const newReview = {
      id: Date.now(),
      name: formData.name,
      role: formData.foodItem || "Food Lover",
      rating: selectedRating,
      review: formData.review,
    };

    setReviews((previous) => [newReview, ...previous]);

    setFormData({
      name: "",
      email: "",
      foodItem: "",
      review: "",
    });

    setSelectedRating(0);
    setHoverRating(0);
    setShowForm(false);
  };

  return (
    <section className="relative overflow-hidden bg-[#01544A] py-20 text-white sm:py-24">
      {/* Background Decoration */}
      <div className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-[#ffe866]/20 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#6fbeb2]/20 blur-3xl" />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(#ffffff 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-[#ffe866]/30 bg-white/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#ffe866] backdrop-blur-md sm:text-sm">
            <FaHeart />
            Customer Love
          </span>

          <h2 className="mt-6 text-4xl font-black leading-tight sm:text-5xl md:text-6xl">
            Real People.
            <br />
            <span className="text-[#ffe866]">Real Reviews.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-white/70 sm:text-lg">
            Every bite tells a story. Read what our customers say and share
            your own Food Van experience.
          </p>
        </motion.div>

        {/* Rating Summary */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-14 grid max-w-5xl gap-8 rounded-[2rem] border border-white/10 bg-white/10 p-7 shadow-2xl backdrop-blur-xl md:grid-cols-[0.8fr_1fr]"
        >
          {/* Average Rating */}
          <div className="flex flex-col items-center justify-center border-b border-white/10 pb-7 text-center md:border-b-0 md:border-r md:pb-0 md:pr-8">
            <p className="text-6xl font-black text-[#ffe866]">
              {averageRating.toFixed(1)}
            </p>

            <div className="mt-3">
              <Stars rating={5} size="text-xl" />
            </div>

            <p className="mt-3 text-sm text-white/60">
              Based on {reviews.length} customer reviews
            </p>
          </div>

          {/* Rating Breakdown */}
          <div className="flex flex-col justify-center gap-3">
            {ratingCounts.map((item) => {
              const percentage = (item.count / reviews.length) * 100;

              return (
                <div
                  key={item.rating}
                  className="flex items-center gap-3 text-sm"
                >
                  <span className="flex w-10 items-center gap-1 text-white/80">
                    {item.rating}
                    <FaStar className="text-xs text-[#ffe866]" />
                  </span>

                  <div className="h-2 flex-1 overflow-hidden rounded-full bg-white/10">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8 }}
                      className="h-full rounded-full bg-[#ffe866]"
                    />
                  </div>

                  <span className="w-8 text-right text-xs text-white/50">
                    {item.count}
                  </span>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Write Review Button */}
        <div className="mb-10 flex justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowForm((previous) => !previous)}
            className="inline-flex items-center gap-3 rounded-full bg-[#ffe866] px-7 py-3 text-sm font-bold text-[#01544A] shadow-lg transition-colors duration-300 hover:bg-white"
          >
            {showForm ? <FaTimes /> : <FaPen />}
            {showForm ? "Close Review Form" : "Write a Review"}
          </motion.button>
        </div>

        {/* Review Form */}
        <AnimatePresence>
          {showForm && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -20 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="mx-auto mb-14 max-w-4xl overflow-hidden"
            >
              <form
                onSubmit={handleSubmit}
                className="rounded-[2rem] border border-white/10 bg-white p-6 text-[#01544A] shadow-2xl sm:p-8"
              >
                <div className="mb-7 text-center">
                  <h3 className="text-2xl font-black sm:text-3xl">
                    Share Your Experience
                  </h3>

                  <p className="mt-2 text-sm text-[#01544A]/60">
                    Tell us what you loved about your Food Van meal.
                  </p>
                </div>

                {/* Star Selection */}
                <div className="mb-7 text-center">
                  <p className="mb-3 text-sm font-bold">
                    How would you rate your experience?
                  </p>

                  <div className="flex justify-center gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setSelectedRating(star)}
                        onMouseEnter={() => setHoverRating(star)}
                        onMouseLeave={() => setHoverRating(0)}
                        className="text-3xl transition-transform duration-200 hover:scale-125 sm:text-4xl"
                        aria-label={`Rate ${star} stars`}
                      >
                        <FaStar
                          className={
                            star <= (hoverRating || selectedRating)
                              ? "text-[#f5bd32]"
                              : "text-gray-200"
                          }
                        />
                      </button>
                    ))}
                  </div>

                  <p className="mt-2 text-xs text-[#01544A]/50">
                    {selectedRating
                      ? `${selectedRating} out of 5 stars selected`
                      : "Select your rating"}
                  </p>
                </div>

                {/* Form Fields */}
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-bold">
                      Your Name
                    </label>

                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      className="w-full rounded-xl border border-[#01544A]/15 px-4 py-3 text-sm outline-none transition focus:border-[#01544A]"
                      required
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-bold">
                      Email Address
                    </label>

                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      className="w-full rounded-xl border border-[#01544A]/15 px-4 py-3 text-sm outline-none transition focus:border-[#01544A]"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="mb-2 block text-sm font-bold">
                      Food Item
                    </label>

                    <input
                      type="text"
                      name="foodItem"
                      value={formData.foodItem}
                      onChange={handleChange}
                      placeholder="Which food did you try?"
                      className="w-full rounded-xl border border-[#01544A]/15 px-4 py-3 text-sm outline-none transition focus:border-[#01544A]"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="mb-2 block text-sm font-bold">
                      Your Review
                    </label>

                    <textarea
                      name="review"
                      value={formData.review}
                      onChange={handleChange}
                      rows="5"
                      placeholder="Write your food experience..."
                      className="w-full resize-none rounded-xl border border-[#01544A]/15 px-4 py-3 text-sm outline-none transition focus:border-[#01544A]"
                      required
                    />
                  </div>
                </div>

                {/* Form Actions */}
                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-end">
                  <button
                    type="button"
                    onClick={() => setShowForm(false)}
                    className="rounded-full border border-[#01544A]/20 px-6 py-3 text-sm font-bold text-[#01544A] transition hover:bg-[#01544A]/5"
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#01544A] px-6 py-3 text-sm font-bold text-[#ffe866] transition hover:bg-[#003c35]"
                  >
                    Submit Review
                    <FaArrowRight />
                  </button>
                </div>
              </form>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Reviews Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, index) => (
            <motion.article
              layout
              key={review.id}
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              whileHover={{ y: -8 }}
              className="group relative rounded-[2rem] border border-white/10 bg-white p-6 text-[#01544A] shadow-xl transition-all duration-500 hover:shadow-2xl"
            >
              {/* Quote Icon */}
              <div className="absolute right-6 top-6 text-4xl text-[#ffe866] transition-transform duration-500 group-hover:scale-110">
                <FaQuoteRight />
              </div>

              {/* User Info */}
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#01544A] text-3xl text-[#ffe866]">
                  <FaUserCircle />
                </div>

                <div>
                  <h3 className="font-bold">{review.name}</h3>

                  <p className="text-sm text-[#01544A]/55">
                    {review.role}
                  </p>
                </div>
              </div>

              {/* Rating */}
              <div className="mt-5">
                <Stars rating={review.rating} />
              </div>

              {/* Review Text */}
              <p className="mt-5 text-sm leading-relaxed text-[#01544A]/70">
                “{review.review}”
              </p>

              {/* Verified Review */}
              <div className="mt-6 flex items-center justify-between border-t border-[#01544A]/10 pt-4">
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#01544A]/50">
                  <FaCheckCircle className="text-[#01544A]" />
                  Verified Customer
                </span>

                <FaHeart className="text-[#01544A]/20 transition-colors duration-300 group-hover:text-[#ffe866]" />
              </div>

              {/* Bottom Hover Line */}
              <div className="absolute bottom-0 left-6 right-6 h-1 origin-left scale-x-0 rounded-full bg-[#ffe866] transition-transform duration-500 group-hover:scale-x-100" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}