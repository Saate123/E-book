import React, { useState } from "react";
import phoneMockup from "../assets/book.webp";
import { Link } from "react-router";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const ComingSoon = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email.trim()) {
      setSuccess(true);
      setEmail("");

      // Optionally reset message after some time
      setTimeout(() => {
        setSuccess(false);
      }, 4000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-[#ffe19c] flex flex-col justify-between">
      {/* Nav */}
      <nav className="flex justify-center px-6 md:px-12 py-6">
        <div className="text-3xl font-bold">LINDA-X</div>
      </nav>

      {/* Hero Section */}
      <main className="flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-12 md:py-24 gap-12">
        {/* Left */}
        <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
          <p className="text-black font-semibold">— Coming Soon</p>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Get Notified <br /> When we Launch
          </h1>

          <form
            onSubmit={handleSubmit}
            className="relative w-full max-w-md mt-6"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="w-full px-5 py-3 pr-32 rounded-full border focus:outline-none"
            />
            <button
              type="submit"
              className="absolute top-1/2 right-1.5 transform -translate-y-1/2 bg-black text-white px-5 py-2 rounded-full text-sm hover:opacity-90 transition h-[45px] w-[150px]"
            >
              Notify Me
            </button>
          </form>

          {success && (
            <p className="text-green-600 text-sm mt-2">
              Subscription successful!
            </p>
          )}

          <p className="text-black text-sm">
            *Don’t worry we will not spam you ;)
          </p>
        </div>

        {/* Right */}
        <div className="w-full md:w-1/2 flex justify-center relative">
          <img
            src={phoneMockup}
            alt="Coming Soon Visual"
            className="w-full max-w-md md:max-w-lg"
          />
        </div>
      </main>

      {/* Footer */}
      <footer className="px-6 md:px-12 py-8 flex flex-col md:flex-row items-center justify-between text-gray-500 bg-yellow-50">
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
};

export default ComingSoon;
