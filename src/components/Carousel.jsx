import React, { useState, useEffect, useRef } from "react";
import Img from "../assets/background.jpg"
import Img2 from "../assets/background2.webp"
import Img3 from "../assets/background3.jpg"

const images = [
  Img,
  Img2,
  Img3,
];

const Carousel = ({ interval = 3000 }) => {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef(null);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  useEffect(() => {
    timeoutRef.current = setTimeout(nextSlide, interval);
    return () => clearTimeout(timeoutRef.current);
  }, [current, interval]);

  const goToSlide = (idx) => setCurrent(idx);

  return (
    <div className="relative w-full">
      <img
        src={images[current]}
        alt={`Slide ${current + 1}`}
        className="w-full h-90 object-cover transition-opacity duration-500"
      />
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToSlide(idx)}
            className={`w-3 h-3 rounded-full border-none p-0 cursor-pointer transition-colors ${
              idx === current ? "bg-gray-800" : "bg-gray-300"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;