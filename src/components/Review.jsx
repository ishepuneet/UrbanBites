import React from "react";
import { motion } from "framer-motion";
import {
  FaStar,
  FaQuoteLeft,
  FaUserCircle,
  FaHeart,
} from "react-icons/fa";

const reviews = [
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

export default function Reviews() {
  return (
    <section className="relative overflow-hidden bg-[#01544A] py-20 text-[#ffd66f]">
      {/* Decorative Background */}
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#ffe866]/40 blur-3xl" />

      <div className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-[#01544A]/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-12 max-w-3xl text-center"
        >
          <span
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              bg-[#108275]
              px-5
              py-2
              text-sm
              font-bold shadow-2xl
              uppercase
              tracking-[0.2em]
              text-[#ffe866]
            "
          >
            <FaHeart />
            Customer Love
          </span>

          <h2 className="mt-5 text-4xl font-black leading-tight sm:text-5xl md:text-6xl">
            What Our Customers
            <br />
            <span className="text-[#789b3d]">Say About Us</span>
          </h2>

          <p className="mt-5 text-base leading-relaxed text-[#01544A]/65 sm:text-lg">
            Great food becomes even better when it brings people together.
            Here is what our happy customers think about Food Van.
          </p>
        </motion.div>

        {/* Rating Summary */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="
            mx-auto
            mb-12
            flex
            max-w-3xl
            flex-col
            items-center
            justify-center
            gap-5
            rounded-[2rem]
            bg-[#01544A]
            p-7
            text-center
            text-white
            shadow-xl
            sm:flex-row
            sm:text-left
          "
        >
          <div>
            <p className="text-5xl font-black text-[#ffe866]">4.9</p>

            <div className="mt-2 flex justify-center gap-1 sm:justify-start">
              {[1, 2, 3, 4, 5].map((star) => (
                <FaStar key={star} className="text-[#ffe866]" />
              ))}
            </div>
          </div>

          <div className="hidden h-16 w-px bg-white/20 sm:block" />

          <div>
            <h3 className="text-xl font-bold">Loved by food lovers</h3>
            <p className="mt-1 text-sm text-white/65">
              Fresh ingredients, great taste and memorable experiences.
            </p>
          </div>
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, index) => (
            <motion.article
              key={review.id}
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              whileHover={{ y: -8 }}
              className="
                group
                relative
                rounded-[2rem]
                border
                border-[#01544A]/10
                bg-white
                p-6
                shadow-lg
                transition-all
                duration-500
                hover:shadow-2xl
              "
            >
              {/* Quote Icon */}
              <div
                className="
                  absolute
                  right-6
                  top-6
                  text-4xl
                  text-[#ffe866]
                  transition-transform
                  duration-500
                  group-hover:scale-110
                "
              >
                <FaQuoteLeft />
              </div>

              {/* User */}
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#01544A] text-3xl text-[#ffe866]">
                  <FaUserCircle />
                </div>

                <div>
                  <h3 className="font-bold text-[#01544A]">
                    {review.name}
                  </h3>

                  <p className="text-sm text-[#01544A]/50">
                    {review.role}
                  </p>
                </div>
              </div>

              {/* Stars */}
              <div className="mt-5 flex gap-1">
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <FaStar
                    key={starIndex}
                    className={
                      starIndex < review.rating
                        ? "text-[#f5bd32]"
                        : "text-gray-200"
                    }
                  />
                ))}
              </div>

              {/* Review */}
              <p className="mt-5 text-sm leading-relaxed text-[#01544A]/65">
                “{review.review}”
              </p>

              {/* Bottom Line */}
              <div className="mt-6 h-1 w-16 rounded-full bg-[#ffe866] transition-all duration-500 group-hover:w-full" />
            </motion.article>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-[#01544A]/60">
            Enjoyed your meal? Share your experience with us.
          </p>
<a href="/contact">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="
              mt-5
              rounded-full
              bg-[#268f83]
              px-7
              py-3
              text-sm
              font-bold
              text-[#ffe866]
              shadow-lg
              transition-colors
              hover:bg-[#003c35]
            "
          >
            Write a Review
          </motion.button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}