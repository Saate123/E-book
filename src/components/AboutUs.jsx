import React from "react";
import BackgroundImg from "../assets/about-bg.jpg";
import Img from "../assets/FB_IMG_1743869048255.jpg";

function AboutUs() {
  return (
    <div
      className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center px-4"
      style={{ backgroundImage: `url(${BackgroundImg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#080808] opacity-90 z-0" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 py-16 px-4 text-white">
        {/* Image Section */}
        <div className="flex justify-center items-start">
          <img
            src={Img}
            alt="Linda"
            className="w-full max-w-[350px] md:h-[450px] object-cover shadow-xl rounded-sm"
          />
        </div>

        {/* Text Section */}
        <div className="bg-[#2E2E2E] bg-opacity-90 p-6 shadow-lg rounded-sm">
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-6 bg-[#A72024] p-3">
            About Linda
          </h3>
          <div className="space-y-4 text-base sm:text-lg leading-relaxed">
            <p>
              Anna is an award-winning writer of historical, Gothic and crime
              fiction. She also writes legal/political thrillers under the name
              Anna Sharpe, the first of which, <em>NOTES ON A DROWNING</em>, is
              published by Orion in January 2025.
            </p>
            <p>
              Anna regularly appears at literary festivals and events and gives
              talks and teaches workshops on creative writing. She has
              previously tutored at The Novelry and The Arvon Foundation.
            </p>
            <p>
              Her debut novel, <em>THE UNSEEING</em>, won an Edgar Allan Poe
              award. Her fourth novel, <em>THE HOUSE OF WHISPERS</em>, won a
              Fingerprint Award for Best Historical Crime. Her bestselling third
              novel, <em>THE CLOCKWORK GIRL</em>, was shortlisted for two CWA
              Dagger awards and a Fingerprint Award, and nominated for the
              Dublin Literary award.
            </p>
            <p>
              Her fifth novel, <em>THE BOOK OF SECRETS</em>, is based on a real
              case from 17th century Rome and was a{" "}
              <strong>Times Historical Novel of the Month</strong> for March
              2024.
            </p>
            <p>
              When not writing, Anna works as a human rights and criminal
              justice solicitor acting for survivors of crime. She is also a
              volunteer for Doorstep Library, working with underprivileged
              children.
            </p>
            <p>
              She lives in South London, with one husband, two children, a black
              cat and a snake.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
