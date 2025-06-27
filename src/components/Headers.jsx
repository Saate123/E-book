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

  // State for mobile books dropdown
  const [mobileBooksOpen, setMobileBooksOpen] = useState(false);

  return (
    <header className="bg-black text-white px-4 py-4 z-50 relative">
      <div className="max-w-7xl mx-auto flex justify-between lg:justify-around items-center">
        <h1 className="text-2xl font-serif tracking-wide">LINDA-X</h1>

        <nav className="hidden md:flex items-center gap-6 text-sm uppercase font-medium">
          <NavLink to="/" className={navClass}>
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
                    Tamara: The Gender of God
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/book/tari-ere-the-picky-virgin"
                    className={navClass}
                  >
                    She Who Loved A Lie
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/book/the-square-of-lost-sons"
                    className={navClass}
                  >
                    The Square Of Lost Sons
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>

          <NavLink to="/about" className={navClass}>
            About
          </NavLink>
          <NavLink
            to="#other-books"
            className="bg-[#A72024] text-white rounded px-1"
            onClick={(e) => {
              e.preventDefault();
              const el = document.getElementById("other-books");
              if (el) {
                el.scrollIntoView({ behavior: "smooth" });
              } else {
                window.location.href = "/";
              }
            }}
          >
            Short Stories
          </NavLink>
          <NavLink to="/foundation" className={navClass}>
            Foundation
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
                to="/"
                className={navClass}
                onClick={() => setMenuOpen(false)}
              >
                Home
              </NavLink>

              <div className="relative group dropdown-container">
                <span
                  className={`flex items-center cursor-pointer transition duration-300 ${
                    isBookRoute
                      ? "text-[#CCFF00] font-bold"
                      : "hover:text-[#A72024]"
                  }`}
                  onClick={() => setMobileBooksOpen((prev) => !prev)}
                >
                  Books <RiArrowDownSLine className="ml-2" />
                </span>

                {mobileBooksOpen && (
                  <div className="dropdown-menu">
                    <ul className="space-y-2 text-white text-sm tracking-wide">
                      <li>
                        <NavLink
                          to="/book/woyingi-god-is-a-woman"
                          className={navClass}
                          onClick={() => {
                            setMenuOpen(false);
                            setMobileBooksOpen(false);
                          }}
                        >
                          Tamara: The Gender of God
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/book/tari-ere-the-picky-virgin"
                          className={navClass}
                          onClick={() => {
                            setMenuOpen(false);
                            setMobileBooksOpen(false);
                          }}
                        >
                          She Who Loved A Lie
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/book/the-square-of-lost-sons"
                          className={navClass}
                          onClick={() => {
                            setMenuOpen(false);
                            setMobileBooksOpen(false);
                          }}
                        >
                          The Square Of Lost Sons
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
              <NavLink
                to="/about"
                className={navClass}
                onClick={() => setMenuOpen(false)}
              >
                About
              </NavLink>
              <NavLink
                to="#other-books"
                className="bg-[#A72024] text-white rounded px-1"
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById("other-books");
                  setMenuOpen(false);
                  setMobileBooksOpen(false);
                  if (el) {
                    el.scrollIntoView({ behavior: "smooth" });
                  } else {
                    window.location.href = "/";
                  }
                }}
              >
                Short Stories
              </NavLink>
              <NavLink to="/foundation" className={navClass}>
                Foundation
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
