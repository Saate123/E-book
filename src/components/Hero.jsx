import React from "react";
import BackgroundImg from "../assets/background.jpg";
import Img from "../assets/WOYINGI.jpeg.jpg";

function Hero() {
  return (
    <div
      className="relative w-full min-h-[90vh] bg-cover bg-center bg-no-repeat flex items-center justify-center px-6 sm:px-12"
      id="book-of-secret"
      style={{ backgroundImage: `url(${BackgroundImg})` }}
    >
      <div className="absolute inset-0 bg-[#1a1a1a] opacity-90 z-0"></div>

      <div className="relative z-10 max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-8  text-white py-20 px-10">
        {/* Text Content */}
        <div className="space-y-6 text-left lg:w-[700px] md:text-left">
          <h1 className="text-3xl sm:text-4xl text-[#D7FF00] md:text-4xl leading-tight">
            The first book in Linda’s captivating spiritual series, Woyingi: God
            is a Woman, is out now!
          </h1>
          <p className="text-lg md:text-xl">
            “A thought-provoking exploration of the Divine, weaving together
            history, spirituality, and culture. A powerful narrative that
            challenges perceptions and celebrates the sacred feminine.”
          </p>
          <div className="hidden md:block mt-6 justify-center">
            <button className="mt-4 bg-[#D7FF00] text-black px-6 py-3 hover:bg-transparent hover:border-2 hover:border-[#d7ff00] hover:text-[#d7ff00] transition">
              <a href="/book/woyingi-god-is-a-woman">FIND OUT MORE</a>
            </button>
          </div>
        </div>

        {/* Image Content */}
        <div className="flex justify-center md:justify-end">
          <a href="/book/woyingi-god-is-a-woman">
            <img
              src={Img}
              alt="Notes Cover"
              className="w-full max-w-xs sm:max-w-sm md:max-w-sm shadow-lg"
            />
          </a>
        </div>

        <div className="block md:hidden mt-6 order-3 w-full text-center">
          <a href="/book/woyingi-god-is-a-woman">
            <button className="w-[180px] bg-[#D7FF00] hover:bg-transparent hover:border hover:border-[#D7FF00] text-black hover:text-[#D7FF00] px-5 py-3 text-sm transition-all duration-300">
              FIND OUT MORE
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
