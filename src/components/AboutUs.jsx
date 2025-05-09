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
              Linda Somiari-Stewart (Linda X) is a Nigerian journalist-turned-griot with a
              passion for preserving Africa’s rich storytelling traditions. With
              an extensive background in both print and television media, she
              has dedicated her life to reviving the fading art of African oral
              narratives through the written word. Her works, including{" "}
              <em>
                Woyingi: God Is a Woman and The Legend of Tari-Ere: The Picky
                Virgin,
              </em>
              celebrate African folklore while challenging conventional ideas
              about spirituality, gender, and identity.
            </p>
            <p>
              Drawing deeply from her Ijaw heritage, Somiari-Stewart’s
              storytelling is both personal and universal, weaving myth,
              history, and philosophy into rich, lyrical narratives. Her
              exploration of the divine feminine and her commitment to cultural
              authenticity position her as a powerful voice in contemporary
              African literature.
            </p>
            <p>
              Through her writing, Linda Somiari-Stewart invites readers to
              reconnect with ancestral wisdom, rethink entrenched narratives,
              and discover the timeless relevance of African myths in today’s
              world. She continues to work on new projects that aim to keep the
              spirit of African storytelling alive for future generations.
            </p>
            <p>She is a widow, mother and grandmother.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
