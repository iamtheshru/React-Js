import { useState } from "react";
import logo from "../../src/assets/images/logo.png";
import img1 from "../../src/assets/images/banner1.jpg";
import img2 from "../../src/assets/images/banner2.jpg";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav
        id="home"
        className="font-nunitosans bg-white border-gray-200 dark:bg-white-900 fixed top-0 right-0 left-0 p-2 lg:p-1"
      >
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between md:justify-start mx-auto">
          <a href="#" className="flex items-center space-x-3 lg:pr-10">
            <img
              src={logo}
              className="w-44 lg:w-72 md:w-52 h-full"
              alt="Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
          </a>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-cta"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className={`items-center ${isMenuOpen ? "block" : "hidden"
              } w-full md:flex md:w-auto sm:w-full md:order-1 text-white`}
            id="navbar-cta"
          >
            <ul className="flex flex-col text-center p-2 pb-3 md:p-0 mt-4 border border-gray-100 rounded-lg bg-black md:space-x-8 md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li className="border-b-2 border-white-500 text-white md:border-none">
                <a
                  href="#home"
                  onClick={closeMenu}
                  className="block py-2 px-1 md:p-0 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-600 md:dark:hover:text-green-600 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 text-sm md:text-sm lg:text-lg md:text-gray-900  text-white"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li className="border-b-2 border-white-500  md:border-none">
                <a
                  href="#about"
                  onClick={closeMenu}
                  className="block py-2 px-1 md:p-0  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-600 md:dark:hover:text-green-600 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 text-sm md:text-sm lg:text-lg md:text-gray-900  text-white"
                >
                  About
                </a>
              </li>
              <li className="border-b-2 border-white-500  md:border-none">
                <a
                  href="#services"
                  onClick={closeMenu}
                  className="block py-2 px-1 md:p-0 md:text-gray-900  text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-600 md:dark:hover:text-green-600 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 text-sm md:text-sm lg:text-lg "
                >
                  Services
                </a>
              </li>
              <li className="border-b-2 border-white-500 md:border-none">
                <a
                  href="#locations"
                  onClick={closeMenu}
                  className="block py-2 px-1 md:p-0 md:text-gray-900  text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-600 md:dark:hover:text-green-600 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 text-sm md:text-sm lg:text-lg "
                >
                  Locations
                </a>
              </li>
              <li className="border-b-2 border-white-500 md:border-none">
                <a
                  href="#contact"
                  onClick={closeMenu}
                  className="block py-2 px-1 md:p-0 md:text-gray-900  text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-600 md:dark:hover:text-green-600 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 text-sm md:text-sm lg:text-lg "
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="w-full h-auto mt-14">
        <img className="w-full hidden md:block" src={img1} alt="" />
        <img className="w-full md:hidden" src={img2} alt="" />
      </div>
    </>
  );
}

export default Header;
