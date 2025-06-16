/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Img from "../assets/FB_IMG_1743869048255.jpg";

function SideNav() {
  const location = useLocation();

  // Define nav links
  const navLinks = [
    // { to: "/dashboard", label: "Dashboard" },
    { to: "/uploads", label: "Upload Story" },
    { to: "/all-stories", label: "All Stories" },
    { to: "/articles-upload", label: "Upload Article" },
    { to: "/all-articles", label: "All Articles" },
  ];
  // Find active link
  const activeLink = navLinks.find((link) =>
    location.pathname.startsWith(link.to)
  );
  const header = activeLink ? activeLink.label : "ADMIN";

  return (
    <div className="bg-[#1d1c1c] text-white w-64 h-screen p-4 flex flex-col align-middle justify-around sticky top-0">
      <h2 className="text-lg font-bold mb-4">ADMIN</h2>
      <ul>
        {navLinks.map((link) => (
          <li className="mb-10" key={link.to}>
            <Link
              to={link.to}
              className={`hover:underline ${
                location.pathname.startsWith(link.to)
                  ? "font-bold underline"
                  : ""
              }`}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
      <div className="flex items-center">
        <img
          src={Img}
          alt="Admin Avatar"
          className="w-14 h-14 rounded-full mb-4 object-cover mr-4"
          style={{ border: "2px solid #E02B20" }}
        />
        <h4>Linda</h4>
      </div>
    </div>
  );
}

export default SideNav;
