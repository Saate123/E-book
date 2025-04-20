import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  const navLinks = [
    { name: "Home", path: "/home" },
    {
      name: "Books",
      path: "/books",
      submenu: [
        { name: "All Books", path: "/books" },
        { name: "New Arrivals", path: "/books/new" },
        { name: "Top Rated", path: "/books/top-rated" },
      ],
    },
    { name: "About", path: "/about" },
    { name: "Articles", path: "/articles" },
    { name: "News & Events", path: "/events" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="w-full bg-black shadow-md relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
        {/* Logo */}
        <Link to="/home" className="flex text-white">
          <div className="text-3xl font-bold">LINDA-X</div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center text-white space-x-8">
          <ul className="flex gap-6">
            {navLinks.map((link, index) => (
              <li key={index} className="relative group">
                <Link
                  to={link.path}
                  className={`flex items-center gap-1 transition ${
                    isActive(link.path)
                      ? "text-[#D7FF00] font-semibold"
                      : "hover:text-[#D7FF00]"
                  }`}
                >
                  {link.name}
                  {link.submenu && (
                    <FaChevronDown
                      size={12}
                      className="transition-transform duration-300 ml-2 group-hover:rotate-180"
                    />
                  )}
                </Link>

                {link.submenu && (
                  <ul className="absolute top-full left-0 h-32 bg-black shadow-lg mt-2 rounded-md w-48 scale-95 opacity-0 group-hover:opacity-100 group-hover:scale-100 group-hover:visible invisible transition-all duration-300 z-50">
                    {link.submenu.map((subLink, subIndex) => (
                      <li key={subIndex}>
                        <Link
                          to={subLink.path}
                          className={`block px-4 py-2 text-white transition hover:text-[#D7FF00] ${
                            isActive(subLink.path)
                              ? "text-[#D7FF00] font-semibold"
                              : ""
                          }`}
                        >
                          {subLink.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Slide-in Mobile Nav */}
      <div
        className={`fixed top-0 left-1/2 w-[300px] h-[90vh] border-2 border-[#ffcc00] bg-black shadow-lg z-50 transition-transform duration-500 ease-in-out transform -translate-x-1/2 ${
          isOpen ? "translate-y-16" : "-translate-y-full"
        } md:hidden`}
      >
        <div className="p-6 flex flex-col justify-between h-full">
          <ul className="flex flex-col space-y-6 text-white font-medium items-center">
            {navLinks.map((link) => (
              <li key={link.name} onClick={() => setIsOpen(false)}>
                <Link
                  to={link.path}
                  className={`block py-2 px-6 rounded-lg w-full text-center ${
                    isActive(link.path)
                      ? "text-[#D7FF00] font-semibold"
                      : "hover:text-[#D7FF00]"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
