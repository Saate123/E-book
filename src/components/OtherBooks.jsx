import React from "react";
import Img from "../assets/the-song.jpg";
import Img2 from "../assets/at-dawn.jpg";
import Img3 from "../assets/stare.jpg";
import { useNavigate } from "react-router-dom";


// Main component
const stories = {
  dispersal: {
    image: Img,
    title: "THE DISPERSAL SONG",
    subtitle: "A tale of music and memory",
    description: "A moving story about the power of music in our lives.",
  },
  dawn: {
    image: Img2,
    title: "AT DAWN, THE ANTELOPE KNOWS",
    subtitle: "New beginnings",
    description: "A story about hope and the promise of a new day.",
  },
  stare: {
    image: Img3,
    title: "WHAT IS IN A MAN'S STARE?",
    subtitle: "A moment frozen in time",
    description: "An exploration of what it means to truly see.",
  },
};

function OtherBooks() {
  const navigate = useNavigate();

  return (
    <div className="max-w-screen p-10 bg-black relative">
      <h1 className="text-center text-3xl md:text-5xl mb-10 text-[#E02B20]">
        Short Stories By Linda
      </h1>
      <div className="grid gap-8 transition-all duration-300">
        {Object.entries(stories).map(([key, story], index) => (
          <div
            key={index}
            className="flex gap-6 items-start bg-gray-100 rounded-lg shadow-md p-5 relative flex-wrap"
          >
            <img
              src={story.image}
              alt={story.title}
              className="w-30 h-40 object-cover rounded-md shadow"
            />
            <div className="flex-1">
              <h2 className="m-0 mb-2 font-serif text-xl text-gray-900">
                {story.title}
              </h2>
              <p className="italic text-gray-500 mb-3">{story.subtitle}</p>
              <p className="text-gray-700 mb-2">{story.description}</p>
              <button
                className="bg-blue-600 text-white rounded px-4 py-2 font-semibold shadow hover:bg-blue-700 transition"
                onClick={() => navigate(`/story/${key}`, { state: { storyKey: key } })}
              >
                Read more...
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OtherBooks;
