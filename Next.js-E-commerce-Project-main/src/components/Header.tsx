"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import { useCart } from "@/context/CartContext"; 

// Navigation Links
const navLinks = [
  { href: "/", label: "Home" },
  { href: "/categories", label: "Categories" },
  { href: "/explore", label: "Explore" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact Us" },
];

const iconLinks = [
  { href: "/search", icon: "/img/search.svg", alt: "Search" },
  { href: "/user", icon: "/img/user-circle.svg", alt: "User" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { cart } = useCart(); 
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50 transition-all duration-300">
      <div className="main_container mx-auto flex justify-between items-center p-4">

        <Link href="/" className="text-teal-600 font-bold text-xl flex items-center">
          <img src="/img/logo.png" alt="Logo" className="h-8 w-auto mr-2" />
        </Link>

        <nav className="hidden md:flex items-center">
          {navLinks.map(({ href, label }) => (
            <Link key={href} href={href} className="text-gray-700 hover:text-teal-600 mx-10">
              {label}
            </Link>
          ))}
          {iconLinks.map(({ href, icon, alt }) => (
            <Link key={href} href={href} className="text-gray-700 hover:text-teal-600 bg-gray-200 rounded p-2 mx-5">
              <img src={icon} alt={alt} className="h-5 w-5" />
            </Link>
          ))}

          <Link href="/cart" className="relative text-gray-700 hover:text-teal-600 bg-gray-200 rounded p-2 mx-5">
            <img src="img/shopping-cart.svg" alt="" />
            {hasMounted && cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                {cart.length}
              </span>
            )}
          </Link>
        </nav>

        <div className="md:hidden flex space-x-4">
          {iconLinks.map(({ href, icon, alt }) => (
            <Link key={href} href={href} className="text-gray-700 hover:text-teal-600 bg-gray-200 rounded p-2">
              <img src={icon} alt={alt} className="h-5 w-5" />
            </Link>
          ))}
          <Link href="/cart" className="relative text-gray-700 hover:text-teal-600 bg-gray-200 rounded p-2">

            <img src="img/shopping-cart.svg" alt="" />
            {hasMounted && cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                {cart.length}
              </span>
            )}
          </Link>
        </div>

        <button className="md:hidden text-gray-700" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {menuOpen && (
        <div className="absolute top-16 z-20 left-0 w-full bg-white shadow-md md:hidden">
          <nav className="flex flex-col space-y-4 p-4">
            {navLinks.map(({ href, label }) => (
              <Link key={href} href={href} className="text-gray-700 hover:text-teal-600" onClick={() => setMenuOpen(false)}>
                {label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
