import React from "react";
import { Link } from "react-router";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <div>
      <footer className="px-6 md:px-12 py-8 flex flex-col md:flex-row items-center justify-between text-gray-500 bg-[#171717]">
        <div className="flex space-x-6 text-xl mb-4 md:mb-0">
          <Link to="https://www.facebook.com/share/16H5Kn7dHk/">
            <FaFacebookF className="hover:text-black cursor-pointer" />
          </Link>
          <Link to="https://www.linkedin.com/in/linda-somiari-stewart-858556150?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
            <FaLinkedinIn className="hover:text-black cursor-pointer" />
          </Link>
          <Link to="https://www.instagram.com/lindasomiari?igsh=MWw1YjRnanBteDMybw==">
            <FaInstagram className="hover:text-black cursor-pointer" />
          </Link>
        </div>
        <div className="flex space-x-6 text-sm">
          <Link to="#" className="hover:underline">
            FAQ
          </Link>
          <Link to="#" className="hover:underline font-semibold">
            Privacy Policy
          </Link>
          <Link to="#" className="hover:underline">
            Email Us
          </Link>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
