import React from "react";
import Img from "../assets/FB_IMG_1743869048255.jpg";
import BackgroundImg from "../assets/background3.jpg";

function Newsletter() {
  return (
    <div
      className="relative w-full min-h-[90vh] bg-cover bg-center bg-no-repeat flex items-center justify-center px-6 sm:px-12"
      style={{ backgroundImage: `url(${BackgroundImg})` }}
    >
      <div className="absolute inset-0 bg-[#080808] opacity-90 z-0"></div>
      <div className="relative z-10 max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 text-white py-20 px-10">
        <div className="flex justify-center md:justify-end lg:mr-15 ">
          <img
            src={Img}
            alt=""
            className="w-full max-w-xs sm:max-w-sm md:max-w-sm shadow-lg"
          />
        </div>
        <div className="py-5">
          <h3 className="text-3xl sm:text-4xl text-[#D7FF00] md:text-5xl leading-tight mb-10">
            Join my Readers' Club
          </h3>
          <p className="text-lg mb-10">
            Join my Readers' Club to receive a FREE short story, plus news of
            giveaways, book recommendations, writing tips and more.
          </p>
          <form>
            <input
              type="text"
              placeholder="Name"
              className="w-full h-12 bg-[#1a1a1a] mb-5 pl-5 rounded-sm"
            />
            <input
              type="text"
              placeholder="Email"
              className="w-full h-12 bg-[#1a1a1a] mb-5 pl-5 rounded-sm"
            />
            <button className="w-full text-center bg-[#D7FF00] h-12 text-lg text-black rounded-sm">Join</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
