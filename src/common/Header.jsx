"use client";

import React, { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { IoIosClose } from "react-icons/io";

export default function Header() {
  const [open, setOpen] = useState(false);

  const links = [
    {
      name: "Menu",
      path: "/menu",
    },
    {
      name: "Contact",
      path: "/contact",
    },
      {
      name: "Services",
      path: "/service",
    },
  ];

  return (
    <header className="fixed top-5 left-1/2 z-50 w-[92%] max-w-7xl -translate-x-1/2">
      
      <div className="rounded-2xl bg-white/10 px-5 py-4 shadow-2xl backdrop-blur-md md:px-8">
        
        {/* Desktop + Mobile Top Bar */}
        <div className="flex items-center justify-between">

          {/* Logo */}
          <a href="/">
            <h1 className="text-2xl font-serif font-bold text-[#ffb700]">
              UrbanBites
            </h1>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-8">
              {links.map((link) => (
                <li key={link.path}>
                  <a
                    href={link.path}
                    className="font-medium text-white transition duration-300 hover:text-[#ffb700]"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="rounded-lg p-2 text-white transition hover:bg-white/10 md:hidden"
            aria-label="Toggle menu"
          >
            {open ? <IoIosClose size={26} /> : <CiMenuFries size={26} />}
          </button>

        </div>

        {/* Mobile Navigation */}
        {open && (
          <nav className="mt-4 border-t border-white/10 pt-4 md:hidden">
            <ul className="flex flex-col gap-2">
              {links.map((link) => (
                <li key={link.path}>
                  <a
                    href={link.path}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-4 py-3 font-medium text-white transition hover:bg-white/10 hover:text-[#ffb700]"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}

      </div>
    </header>
  );
}