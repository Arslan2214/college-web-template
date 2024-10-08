"use client";
import Link from "next/link";
import { useState } from "react";

type NavLinkProps = {
  text: string;
  link: string;
};

const navbarItems: NavLinkProps[] = [
  { text: "About", link: "/about" },
  { text: "Projects", link: "/projects" },
  { text: "Blogs", link: "/blogs" },
  { text: "Contact", link: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="sticky top-0 z-[1000] bg-black text-white">
      <nav className="container md:max-w-6xl lg:max-w-[88rem] mx-auto flex flex-wrap items-center justify-between py-3 px-8">
        {/* Logo and Title */}
        <Link href="/">
          <span className="flex items-center space-x-3">
            <span className="text-4xl font-[400]">
              Staging<span className="text-yellow">.</span>
            </span>
          </span>
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-2 text-gray-500 rounded-lg md:hidden hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600"
          aria-controls="navbar-menu"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Navbar Links */}
        <div
          className={`w-full md:flex md:items-center md:space-x-8 ${
            isOpen ? "block" : "hidden"
          } md:w-auto`}
          id="navbar-menu"
        >
          <ul className="flex flex-col md:flex-row md:space-x-8">
            {navbarItems.map((item) => (
              <li key={item.link}>
                <Link href={item.link}>
                  <span className="block py-2 px-3 text-gray-300 hover:text-yellow">
                    {item.text}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="hidden font-head lg:flex flex-col items-center">
          <span>Call us for any questions</span>
          <span className="text-2xl text-yellow">
            +01 123 456 789
          </span>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
