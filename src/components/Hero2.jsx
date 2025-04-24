import React from "react";
import BackgroundImg from "../assets/background2.webp";
import Img from "../assets/TARI.jpeg.jpg";
import { Link } from "react-router-dom";
import Img2 from "../assets/bird-and-shroom.webp"

function Hero2() {
  return (
    <div
      className="relative w-full min-h-[90vh] bg-cover bg-center bg-no-repeat flex items-center justify-center py-10 px-6 sm:px-12"
      style={{ backgroundImage: `url(${BackgroundImg})` }}
    >
      <div className="absolute inset-0 bg-[#080808] opacity-90 z-0"></div>

      <div className="relative z-10 max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 text-white py-20 px-10">
        {/* Text Content */}
        <div className="space-y-6 text-left lg:w-[700px] md:text-left">
          <h1 className="text-3xl sm:text-4xl text-[#E02B20] md:text-4xl leading-tight">
            A captivating and enchanting tale inspired by ancient Ijaw legends,
            Tari-Ere: The Picky Virgin will immerse you in a world of love,
            mystery, and self-discovery.
          </h1>
          <div className="hidden md:block mt-6 justify-center">
            <button className="mt-4 bg-[#E02B20] text-black px-6 py-3 hover:bg-transparent hover:border-2 hover:border-[#E02B20] hover:text-[#E02B20] transition">
              <Link to="">FIND OUT MORE</Link>
            </button>
          </div>
          <div className="absolute lg:top-75 -bottom-8 left-55">
            <img src={Img2} alt="" className="lg:w-[150px] w-[100px]" />
          </div>
        </div>

        {/* Image Content */}
        <div className="flex justify-center md:justify-end">
          <Link to="">
            <img
              src={Img}
              alt="Notes Cover"
              className="w-full max-w-xs sm:max-w-sm md:max-w-sm shadow-lg"
            />
          </Link>
        </div>

        <div className="block md:hidden mt-6 order-3 w-full text-center">
          <a href="">
            <button className="w-[180px] bg-[#E02B20] hover:bg-transparent hover:border hover:border-[#E02B20] text-black hover:text-[#E02B20] px-5 py-3 text-sm transition-all duration-300">
              FIND OUT MORE
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero2;
