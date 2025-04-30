import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom"; // ✅ Fix here
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import "./Header.css";
import { RiArrowDownSLine } from "react-icons/ri";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isBookRoute = location.pathname.startsWith("/book"); // ✅ Active check for /book/anything

  const navClass = ({ isActive }) =>
    isActive
      ? "text-[#CCFF00] font-bold"
      : "hover:text-[#A72024] transition duration-300";

  return (
    <header className="bg-black text-white px-4 py-4 z-50 relative">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-serif tracking-wide">LINDA-X</h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm uppercase font-medium">
          <NavLink to="/home" className={navClass}>
            Home
          </NavLink>

          <div className="relative group dropdown-container">
            <span
              className={`flex items-center cursor-pointer transition duration-300 ${
                isBookRoute
                  ? "text-[#CCFF00] font-bold"
                  : "hover:text-[#A72024]"
              }`}
            >
              Books <RiArrowDownSLine className="ml-2" />
            </span>

            <div className="dropdown-menu">
              <ul className="space-y-2 text-white text-sm tracking-wide">
                <li>
                  <NavLink
                    to="/book/woyingi-god-is-a-woman"
                    className={navClass}
                  >
                    Woyingi: God is a Woman
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/book/tari-ere-the-picky-virgin"
                    className={navClass}
                  >
                    Tari-Ere: The Picky Virgin
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>

          <NavLink to="/about" className={navClass}>
            About
          </NavLink>
          <NavLink to="/articles" className={navClass}>
            Articles
          </NavLink>
          <NavLink to="/events" className={navClass}>
            News & Events
          </NavLink>
          <NavLink to="/contact" className={navClass}>
            Contact
          </NavLink>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <HiOutlineX className="text-2xl" />
            ) : (
              <HiOutlineMenu className="text-2xl" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden fixed top-16 left-12.5 z-50">
          <div className="w-[300px] bg-black border-t-4 border-[#CCFF00] px-6 py-6 text-sm uppercase font-medium animate-slide-down">
            <div className="flex flex-col space-y-4 text-left text-white">
              <NavLink
                to="/home"
                className={navClass}
                onClick={() => setMenuOpen(false)}
              >
                Home
              </NavLink>

              <div>
                <span
                  className={`flex items-center transition duration-300 ${
                    isBookRoute
                      ? "text-[#CCFF00] font-bold"
                      : "hover:text-[#A72024]"
                  }`}
                >
                  Books <RiArrowDownSLine className="ml-2" />
                </span>
                <ul className="ml-4 mt-2 space-y-2 text-sm">
                  <li>
                    <NavLink
                      to="/book/woyingi-god-is-a-woman"
                      className={navClass}
                      onClick={() => setMenuOpen(false)}
                    >
                      Woyingi: God is a Woman
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/book/tari-ere-the-picky-virgin"
                      className={navClass}
                      onClick={() => setMenuOpen(false)}
                    >
                      Tari-Ere: The Picky Virgin
                    </NavLink>
                  </li>
                </ul>
              </div>

              <NavLink
                to="/about"
                className={navClass}
                onClick={() => setMenuOpen(false)}
              >
                About
              </NavLink>
              <NavLink
                to="/articles"
                className={navClass}
                onClick={() => setMenuOpen(false)}
              >
                Articles
              </NavLink>
              <NavLink
                to="/events"
                className={navClass}
                onClick={() => setMenuOpen(false)}
              >
                News & Events
              </NavLink>
              <NavLink
                to="/contact"
                className={navClass}
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </NavLink>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
