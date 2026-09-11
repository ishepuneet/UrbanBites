import React from "react";
import { motion } from "framer-motion";

export default function Toplist() {
  const topList = [
    {
      img: "/img/man.png",
      name: "Manchurian",
      rating: "4.5",
      price: "$10",
      desc: "Crispy, spicy and full of delicious flavor.",
    },
    {
      img: "/img/matcha.png",
      name: "Japanese Matcha",
      rating: "4.5",
      price: "$10",
      desc: "Fresh, smooth and perfectly refreshing.",
    },
    {
      img: "/img/bread.png",
      name: "Garlic Bread Cheese",
      rating: "4.5",
      price: "$10",
      desc: "Golden garlic bread loaded with melted cheese.",
    },
  ];

  // Container animation
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // Card animation
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 80,
      scale: 0.85,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-20 relative overflow-hidden">

      {/* ================= BACKGROUND SHAPE ================= */}

      <motion.div
        initial={{ x: -150, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="
          w-[500px]
          h-[300px]
          rounded-full
          absolute
          top-0
          -left-30
          border-8
          border-orange-400/20
        "
      />

      {/* ================= TITLE ================= */}

      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
        className="
          relative
          z-10
          text-5xl
          md:text-6xl
          text-amber-600
          underline
          underline-offset-10
          font-sans
          text-center
          font-bold
        "
      >
        Top List
      </motion.h1>

      {/* ================= CARDS ================= */}

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.2,
        }}
        className="
          w-full
          max-w-5xl
          grid
          grid-cols-1
          md:grid-cols-3
          gap-20
          md:gap-10
          mt-32
          relative
          mx-auto
          px-6
        "
      >
        {topList.map((item, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{
              y: -12,
              scale: 1.04,
              transition: {
                duration: 0.3,
              },
            }}
            className="
              relative
              bg-white/20
              backdrop-blur-xl
              border
              border-white/20
              rounded-3xl
              w-full
              max-w-[280px]
              h-[300px]
              mx-auto
              p-5
              pt-24
              shadow-xl
              cursor-pointer
              transition-shadow
              duration-300
              hover:shadow-2xl
            "
          >

            {/* ================= FOOD IMAGE ================= */}

            <motion.img
              src={item.img}
              alt={item.name}
              initial={{
                opacity: 0,
                scale: 0.5,
                y: -30,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: "backOut",
              }}
              whileHover={{
                y: -12,
                rotate: 3,
                scale: 1.08,
                transition: {
                  duration: 0.3,
                },
              }}
              className="
                absolute
                w-[190px]
                h-[190px]
                object-contain
                -top-24
                left-1/2
                -translate-x-1/2
                drop-shadow-2xl
              "
            />

            {/* ================= CARD CONTENT ================= */}

            <div className="text-center">

              <h2 className="text-2xl font-bold text-white">
                {item.name}
              </h2>

              <p className="text-sm text-gray-300 mt-3 leading-relaxed">
                {item.desc}
              </p>

              <div className="flex justify-between items-center mt-5">

                <span className="text-yellow-400 font-semibold">
                  ⭐ {item.rating}
                </span>

                <span className="text-orange-400 text-xl font-bold">
                  {item.price}
                </span>

              </div>

              <motion.button
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                className="
                  mt-5
                  px-6
                  py-2
                  rounded-full
                  bg-orange-600
                  text-white
                  font-semibold
                  hover:bg-orange-500
                  transition-colors
                  duration-300
                "
              >
                Order Now
              </motion.button>

            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* ================= BOTTOM SHAPE ================= */}

      <motion.div
        initial={{ x: 150, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 1,
        }}
        className="
          w-[500px]
          h-[300px]
          rounded-full
          absolute
          bottom-0
          -right-30
          border-8
          border-blue-400/20
        "
      />

    </section>
  );
}