import React from "react";
import BackgroundImg from "../assets/images.jpg";
import { FaInstagram } from "react-icons/fa";
import Img from "../assets/annamazzolawriter.webp";
import Img2 from "../assets/img.webp";
import Img3 from "../assets/img2.webp";
import { Link } from "react-router-dom";

function Social() {
  return (
    <div
      className="relative w-full min-h-[100vh] bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center px-4 py-16"
      style={{ backgroundImage: `url(${BackgroundImg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#080808] opacity-90 z-0"></div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl w-full text-white text-left">
        <h2 className="text-3xl sm:text-4xl md:text-5xl p-3 mb-10 bg-[#A72024] inline-block">
          Linda’s Instagram
        </h2>

        {/* Profile */}
        <div className="flex flex-row items-center mb-10">
          <div className="relative group w-[100px] h-[100px] mb-4 rounded-full overflow-hidden">
            <img
              src={Img}
              alt="Anna Instagram"
              className="w-full h-full object-cover rounded-full transition-transform duration-300 group-hover:scale-110"
            />
            <Link to="https://www.instagram.com/lindasomiari?igsh=MWw1YjRnanBteDMybw==">
              <div className="absolute inset-0 bg-[#262626] bg-opacity-50 z-0 flex items-center justify-center opacity-0 group-hover:opacity-50 transition-opacity duration-300">
                <FaInstagram className="text-white text-3xl" />
              </div>
            </Link>
          </div>
          <div className="ml-2.5 text-[#A72024]">
            <Link to="https://www.instagram.com/lindasomiari?igsh=MWw1YjRnanBteDMybw==">
              <p className="text-xl font-semibold">lindasomiari</p>
            </Link>
            <p className="text-sm">Writer. Very small. Also a Lawyer.</p>
          </div>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <Link
            to="https://www.instagram.com/lindasomiari?igsh=MWw1YjRnanBteDMybw=="
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={Img2}
              alt="Instagram Post 1"
              className="w-full h-[250px] object-cover rounded-md shadow-lg hover:scale-105 transition duration-300"
            />
          </Link>

          <Link
            to="https://www.instagram.com/lindasomiari?igsh=MWw1YjRnanBteDMybw=="
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={Img3}
              alt="Instagram Post 2"
              className="w-full h-[250px] object-cover rounded-md shadow-lg hover:scale-105 transition duration-300"
            />
          </Link>
        </div>
        <div className="flex justify-center mt-8">
          <Link
            to="https://www.instagram.com/lindasomiari?igsh=MWw1YjRnanBteDMybw=="
            className="flex items-center gap-2 bg-[#A72024] text-white px-4 py-2 rounded-full hover:bg-[#870f18] transition duration-300"
          >
            <FaInstagram className="text-xl sm:text-2xl" />
            <p className="text-sm sm:text-base font-medium">
              Follow on Instagram
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Social;
