import React from "react";
import Img from "../assets/house-of-whisperers.jpg";
import Img2 from "../assets/The-Clockwork-Girl-OPT.jpg";
import Img3 from "../assets/The-Storykeepers-OPT.jpg";
import Img4 from "../assets/Unseeingpaperback.jpg";

function OtherSection() {
  return (
    <div className="py-16 px-4 sm:px-8 md:px-16 bg-[#080808] text-center">
      <h1 className="text-3xl md:text-5xl mb-10 text-[#d7ff00]">
        Also by Anna
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-6 lg:gap-0 place-items-center">
        {[Img, Img2, Img3, Img4].map((image, index) => (
          <div
            key={index}
            className="w-full max-w-[180px] hover:scale-105 transition-transform duration-300"
          >
            <a href="#">
              <img
                src={image}
                alt={`Anna's book ${index + 1}`}
                className="w-full h-auto shadow-lg rounded-md"
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OtherSection;
