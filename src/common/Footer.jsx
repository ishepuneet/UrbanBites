import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaArrowRight,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#003c35] text-white">
      {/* Decorative Background */}
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#ffe866]/10 blur-3xl" />

      <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-[#6fbeb2]/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 pb-8 pt-16 sm:px-8">
        {/* Footer Main Content */}
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link
              to="/"
              className="inline-block text-3xl font-black tracking-tight text-[#ffe866]"
            >
              Urban<span className="text-white">Bites</span>
            </Link>

            <p className="mt-5 max-w-xs text-sm leading-7 text-white/65">
              Fresh flavors, delicious meals and unforgettable food
              experiences. Your favorite bites are just one click away.
            </p>

            {/* Social Links */}
            <div className="mt-6 flex items-center gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-all duration-300 hover:bg-[#ffe866] hover:text-[#003c35]"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-all duration-300 hover:bg-[#ffe866] hover:text-[#003c35]"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                aria-label="Twitter"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-all duration-300 hover:bg-[#ffe866] hover:text-[#003c35]"
              >
                <FaTwitter />
              </a>

              <a
                href="#"
                aria-label="YouTube"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-all duration-300 hover:bg-[#ffe866] hover:text-[#003c35]"
              >
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="relative inline-block text-lg font-bold text-[#ffe866]">
              Quick Links
              <span className="absolute -bottom-2 left-0 h-1 w-8 rounded-full bg-[#ffe866]" />
            </h3>

            <ul className="mt-7 space-y-3 text-sm">
              <li>
                <Link
                  to="/"
                  className="text-white/65 transition-colors hover:text-[#ffe866]"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/menu"
                  className="text-white/65 transition-colors hover:text-[#ffe866]"
                >
                  Our Menu
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="text-white/65 transition-colors hover:text-[#ffe866]"
                >
                  Contact Us
                </Link>
              </li>

              <li>
                <a
                  href="#reviews"
                  className="text-white/65 transition-colors hover:text-[#ffe866]"
                >
                  Customer Reviews
                </a>
              </li>

              <li>
                <a
                  href="#offers"
                  className="text-white/65 transition-colors hover:text-[#ffe866]"
                >
                  Special Offers
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="relative inline-block text-lg font-bold text-[#ffe866]">
              Contact Us
              <span className="absolute -bottom-2 left-0 h-1 w-8 rounded-full bg-[#ffe866]" />
            </h3>

            <ul className="mt-7 space-y-5 text-sm">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="mt-1 shrink-0 text-[#ffe866]" />

                <span className="leading-6 text-white/65">
                  Main Market Road,
                  <br />
                  Jaipur, Rajasthan
                </span>
              </li>

              <li className="flex items-center gap-3">
                <FaPhoneAlt className="shrink-0 text-[#ffe866]" />

                <a
                  href="tel:+919876543210"
                  className="text-white/65 transition-colors hover:text-[#ffe866]"
                >
                  +91 98765 43210
                </a>
              </li>

              <li className="flex items-center gap-3">
                <FaEnvelope className="shrink-0 text-[#ffe866]" />

                <a
                  href="mailto:hello@urbanbites.com"
                  className="break-all text-white/65 transition-colors hover:text-[#ffe866]"
                >
                  hello@urbanbites.com
                </a>
              </li>

              <li className="flex items-start gap-3">
                <FaClock className="mt-1 shrink-0 text-[#ffe866]" />

                <span className="leading-6 text-white/65">
                  Mon - Sun
                  <br />
                  10:00 AM - 11:00 PM
                </span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="relative inline-block text-lg font-bold text-[#ffe866]">
              Stay Updated
              <span className="absolute -bottom-2 left-0 h-1 w-8 rounded-full bg-[#ffe866]" />
            </h3>

            <p className="mt-7 text-sm leading-6 text-white/65">
              Subscribe to get updates about new dishes, offers and exciting
              food deals.
            </p>

            <form
              onSubmit={(event) => {
                event.preventDefault();
                alert("Thank you for subscribing!");
              }}
              className="mt-5"
            >
              <div className="flex overflow-hidden rounded-full border border-white/10 bg-white/10 p-1">
                <input
                  type="email"
                  placeholder="Your email address"
                  required
                  className="min-w-0 flex-1 bg-transparent px-4 py-3 text-sm text-white outline-none placeholder:text-white/40"
                />

                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#ffe866] text-[#003c35] transition-colors hover:bg-white"
                >
                  <FaArrowRight />
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="mt-14 border-t border-white/10 pt-6">
          <div className="flex flex-col items-center justify-between gap-3 text-center text-xs text-white/50 sm:flex-row sm:text-left">
            <p>
              © {new Date().getFullYear()} UrbanBites. All rights reserved.
            </p>

            <div className="flex items-center gap-5">
              <a
                href="#"
                className="transition-colors hover:text-[#ffe866]"
              >
                Privacy Policy
              </a>

              <a
                href="#"
                className="transition-colors hover:text-[#ffe866]"
              >
                Terms & Conditions
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}