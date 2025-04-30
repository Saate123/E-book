import React from "react";
import Img from "../assets/WOYINGI.jpeg.jpg";
import Img2 from "../assets/TARI.jpeg.jpg";

function OtherSection() {
  return (
    <div className="py-16 px-4 sm:px-8 md:px-16 bg-[#080808] text-center">
      <h1 className="text-3xl md:text-5xl mb-10 text-[#d7ff00]">
        Also by Linda
      </h1>
      <div className="flex gap-6 lg:gap-6 place-items-center justify-center">
        {[Img, Img2].map((image, index) => (
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
