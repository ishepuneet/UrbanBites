import React from "react";
import { motion } from "framer-motion";
import WriteReview from "../components/WriteReview"

import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaPaperPlane,
  FaInstagram,
  FaFacebookF,
  FaTwitter,
} from "react-icons/fa";

export default function Contact() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#01544A] py-25 text-white">
      {/* Background Pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            radial-gradient(
              circle,
              #ffe866 1.5px,
              transparent 1.5px
            )
          `,
          backgroundSize: "35px 35px",
        }}
      />

      {/* Background Glow */}
      <motion.div
        animate={{
          x: [0, 40, 0],
          y: [0, 30, 0],
          scale: [1, 1.12, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          -left-48
          -top-48
          h-[550px]
          w-[550px]
          rounded-full
          bg-[#ffe866]/20
          blur-3xl
        "
      />

      <motion.div
        animate={{
          x: [0, -40, 0],
          y: [0, -30, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          -bottom-48
          -right-48
          h-[550px]
          w-[550px]
          rounded-full
          bg-orange-400/20
          blur-3xl
        "
      />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <span
            className="
              inline-block
              rounded-full
              bg-[#ffe866]
              px-5
              py-2
              text-sm
              font-bold
              uppercase
              tracking-[0.2em]
              text-[#01544A]
            "
          >
            Get In Touch
          </span>

          <h1 className="mt-5 text-4xl font-black leading-tight text-[#ffe866] sm:text-5xl md:text-7xl">
            Let's Talk About
            <br />
            <span className="text-white">Good Food</span>
          </h1>

          <p className="mt-6 text-base leading-relaxed text-white/70 sm:text-lg">
            Have a question, feedback or special request? Send us a message.
            Our team would love to hear from you.
          </p>
        </motion.div>

        {/* Contact Layout */}
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -70 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="
              rounded-[2rem]
              border
              border-white/15
              bg-white/10
              p-7
              shadow-2xl
              backdrop-blur-xl
              sm:p-9
            "
          >
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-300">
              Contact Details
            </p>

            <h2 className="mt-3 text-3xl font-black text-white">
              We are always
              <br />
              <span className="text-[#ffe866]">ready to help.</span>
            </h2>

            <p className="mt-5 text-sm leading-relaxed text-white/65">
              Visit our food van, call us or drop an email. We will get back
              to you as soon as possible.
            </p>

            <div className="mt-8 space-y-6">
              <ContactInfo
                icon={<FaMapMarkerAlt />}
                title="Our Location"
                text="Main Market, Jaipur, Rajasthan"
              />

              <ContactInfo
                icon={<FaPhoneAlt />}
                title="Phone Number"
                text="+91 98765 43210"
              />

              <ContactInfo
                icon={<FaEnvelope />}
                title="Email Address"
                text="hello@foodvan.com"
              />

              <ContactInfo
                icon={<FaClock />}
                title="Opening Hours"
                text="Monday - Sunday | 10:00 AM - 11:00 PM"
              />
            </div>

            {/* Social Icons */}
            <div className="mt-9 border-t border-white/15 pt-7">
              <p className="mb-4 text-sm font-semibold text-white/70">
                Follow us on social media
              </p>

              <div className="flex gap-3">
                <SocialIcon icon={<FaInstagram />} />
                <SocialIcon icon={<FaFacebookF />} />
                <SocialIcon icon={<FaTwitter />} />
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 70 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="
              rounded-[2rem]
              border
              border-white/15
              bg-[#003c35]/80
              p-7
              shadow-2xl
              backdrop-blur-xl
              sm:p-9
            "
          >
            <div className="mb-8">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-300">
                Send A Message
              </p>

              <h2 className="mt-3 text-3xl font-black text-[#ffe866]">
                Tell us something
              </h2>

              <p className="mt-3 text-sm text-white/60">
                Fill out the form below and our team will contact you.
              </p>
            </div>

            <form className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-semibold text-white/80"
                  >
                    Your Name
                  </label>

                  <input
                    id="name"
                    type="text"
                    placeholder="Enter your name"
                    className="contact-input"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-semibold text-white/80"
                  >
                    Email Address
                  </label>

                  <input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    className="contact-input"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block text-sm font-semibold text-white/80"
                >
                  Phone Number
                </label>

                <input
                  id="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  className="contact-input"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-semibold text-white/80"
                >
                  Subject
                </label>

                <input
                  id="subject"
                  type="text"
                  placeholder="What is this about?"
                  className="contact-input"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-semibold text-white/80"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  rows="5"
                  placeholder="Write your message here..."
                  className="contact-input resize-none"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.96 }}
                className="
                  inline-flex
                  w-full
                  items-center
                  justify-center
                  gap-3
                  rounded-full
                  bg-[#ffe866]
                  px-6
                  py-4
                  font-bold
                  text-[#01544A]
                  transition-colors
                  duration-300
                  hover:bg-white
                "
              >
                Send Message
                <FaPaperPlane />
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="
            mt-10
            rounded-[2rem]
            border
            border-[#ffe866]/30
            bg-[#ffe866]
            p-7
            text-center
            text-[#01544A]
            shadow-2xl
            sm:p-10
          "
        >
          <h2 className="text-2xl font-black sm:text-3xl">
            Craving Something Delicious?
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm font-medium text-[#01544A]/75 sm:text-base">
            Visit our menu and discover your next favorite dish.
          </p>

          <motion.a
            href="/menu"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="
              mt-6
              inline-block
              rounded-full
              bg-[#01544A]
              px-7
              py-3
              text-sm
              font-bold
              text-white
              transition-colors
              hover:bg-[#003c35]
            "
          >
            Explore Menu
          </motion.a>
        </motion.div>
      </div>

      {/* Reusable Input Styles */}
      <style>{`
        .contact-input {
          width: 100%;
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 1rem;
          background: rgba(255, 255, 255, 0.08);
          padding: 0.9rem 1rem;
          color: white;
          outline: none;
          transition: all 0.3s ease;
        }

        .contact-input::placeholder {
          color: rgba(255, 255, 255, 0.4);
        }

        .contact-input:focus {
          border-color: #ffe866;
          background: rgba(255, 255, 255, 0.13);
          box-shadow: 0 0 0 3px rgba(255, 232, 102, 0.12);
        }
      `}</style>


      <WriteReview/>
    </main>
  );
}

/* =========================
   CONTACT INFO COMPONENT
========================= */

function ContactInfo({ icon, title, text }) {
  return (
    <div className="flex items-start gap-4">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#ffe866] text-[#01544A]">
        {icon}
      </div>

      <div>
        <h3 className="font-bold text-white">{title}</h3>
        <p className="mt-1 text-sm leading-relaxed text-white/60">{text}</p>
      </div>
    </div>
  );
}

/* =========================
   SOCIAL ICON COMPONENT
========================= */

function SocialIcon({ icon }) {
  return (
    <motion.a
      href="#"
      whileHover={{ y: -5, scale: 1.08 }}
      whileTap={{ scale: 0.9 }}
      className="
        flex
        h-11
        w-11
        items-center
        justify-center
        rounded-full
        border
        border-white/15
        bg-white/10
        text-[#ffe866]
        transition-colors
        hover:bg-[#ffe866]
        hover:text-[#01544A]
      "
    >
      {icon}
    </motion.a>
  );
}

