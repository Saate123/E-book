import React from "react";
import BackgroundImg from "../assets/about-bg.jpg";
import Img from "../assets/Anna-New-BW.jpg";

function AboutUs() {
  return (
    <div
      className="relative w-full min-h-[100vh] bg-cover bg-center bg-no-repeat flex items-center justify-center px-4"
      style={{ backgroundImage: `url(${BackgroundImg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#080808] opacity-90 z-0"></div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl grid grid-cols-1 md:grid-cols-[auto_1fr] gap-6 py-16 px-[10px] text-white">
        {/* Image Section */}
        <div className="flex justify-center md:justify-end">
          <img
            src={Img}
            alt="Anna"
            className="h-[450px] w-[350px] shadow-lg object-cover"
          />
        </div>

        {/* Text Section */}
        <div className="p-6 bg-[#2E2E2E] bg-opacity-90 shadow-md w-2xl">
          <h3 className="text-3xl sm:text-4xl md:text-5xl p-3 text-white mb-6 bg-[#A72024] ">
            About Anna
          </h3>

          <div className="space-y-5 text-lg leading-relaxed">
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
