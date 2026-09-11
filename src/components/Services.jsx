import React from "react";
import { motion } from "framer-motion";
import {
  FaHamburger,
  FaTruck,
  FaClock,
  FaLeaf,
  FaStar,
  FaPhoneAlt,
  FaArrowRight,
} from "react-icons/fa";

const services = [
  {
    icon: <FaHamburger />,
    title: "Fresh Fast Food",
    description:
      "Freshly prepared burgers, fries, sandwiches and delicious meals made with quality ingredients.",
    number: "01",
  },
  {
    icon: <FaTruck />,
    title: "Food Van Service",
    description:
      "Enjoy your favourite food directly from our stylish and energetic UrbanBites food van.",
    number: "02",
  },
  {
    icon: <FaClock />,
    title: "Quick Preparation",
    description:
      "No long waiting. We prepare your order quickly so you can enjoy every bite on time.",
    number: "03",
  },
  {
    icon: <FaLeaf />,
    title: "Quality Ingredients",
    description:
      "We use fresh vegetables, premium ingredients and hygienic cooking methods in every order.",
    number: "04",
  },
];

export default function Services() {
  return (
    <section className="relative overflow-hidden bg-[#01544A] px-5 py-25 text-white md:px-10 lg:px-20">
      {/* Decorative 90s shapes */}
      <div className="pointer-events-none absolute -left-20 top-20 h-56 w-56 rounded-full border-[25px] border-[#ffe866]/20" />
      <div className="pointer-events-none absolute -right-24 bottom-10 h-72 w-72 rotate-12 border-[35px] border-white/10" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14 text-center"
        >
          <p className="mb-3 inline-block -rotate-2 bg-[#ffe866] px-4 py-2 text-sm font-black uppercase tracking-[0.25em] text-[#01544A] shadow-[5px_5px_0px_#ffffff]">
            What We Serve
          </p>

          <h2 className="mt-5 text-4xl font-black uppercase leading-tight tracking-tight md:text-6xl">
            Good Food.
            <br />
            <span className="text-[#ffe866]">Good Vibes.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/80 md:text-lg">
            From street-style classics to modern food favourites, UrbanBites
            brings delicious food and unforgettable moments to your table.
          </p>
        </motion.div>

        {/* Service cards */}
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              whileHover={{ y: -10, rotate: index % 2 === 0 ? -2 : 2 }}
              className="group relative border-4 border-[#ffe866] bg-white p-6 text-[#01544A] shadow-[8px_8px_0px_#ffe866]"
            >
              <div className="absolute right-4 top-3 text-5xl font-black text-[#01544A]/10">
                {service.number}
              </div>

              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full border-4 border-[#01544A] bg-[#ffe866] text-3xl transition-transform duration-300 group-hover:rotate-12">
                {service.icon}
              </div>

              <h3 className="mb-3 text-2xl font-black uppercase leading-tight">
                {service.title}
              </h3>

              <p className="text-sm leading-6 text-[#01544A]/75">
                {service.description}
              </p>

              <div className="mt-6 h-1 w-16 bg-[#01544A] transition-all duration-300 group-hover:w-full" />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16 grid items-center gap-8 border-4 border-white bg-[#ffe866] p-6 text-[#01544A] shadow-[10px_10px_0px_#ffffff] md:grid-cols-[1fr_auto] md:p-10"
        >
          <div>
            <div className="mb-3 flex items-center gap-2 text-xl">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>

            <h3 className="text-3xl font-black uppercase leading-tight md:text-4xl">
              Hungry? Let’s fix that.
            </h3>

            <p className="mt-3 max-w-xl text-sm font-semibold md:text-base">
              Order your favourite meal today and experience the UrbanBites
              flavour.
            </p>
          </div>

          <a
            href="/menu"
            className="inline-flex items-center justify-center gap-3 border-4 border-[#01544A] bg-[#01544A] px-6 py-4 text-sm font-black uppercase tracking-wider text-white transition-all duration-300 hover:bg-white hover:text-[#01544A]"
          >
            Explore Menu
            <FaArrowRight />
          </a>
        </motion.div>

        {/* Contact strip */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <p className="text-sm font-bold uppercase tracking-widest text-white/70">
            Fresh food • Street style • Big taste
          </p>

          <a
            href="tel:+919999999999"
            className="flex items-center gap-3 font-black text-[#ffe866] transition hover:text-white"
          >
            <FaPhoneAlt />
            Call Us Now
          </a>
        </div>
      </div>
    </section>
  );
}