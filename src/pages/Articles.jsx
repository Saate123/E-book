import React from "react";
import Img from "../assets/art.jpg";
import Img2 from "../assets/art2.jpg";
import Img3 from "../assets/art3.jpg";
import Header from "../components/Headers";
import Footer from "../components/Footer";

function Articles() {
  const data = [
    {
      image: Img,
      title: "Step 6: Character motivation and agency in historical fiction",
      description:
        "Today I want to look at how to ensure your characters have agency. That’s often tricky in historical fiction, particularly for female characters who in their daily lives would have been highly circumscribed.",
    },
    {
      image: Img2,
      title: "Step 5 – Writing a killer historical hook",
      description:
        "You may have heard literary agents talking about ‘hooks’ and books being ‘hooky’ or, devastatingly, ‘not hooky enough’? What the hell does this mean, and how do you find a killer hook for your historical novel?",
    },
    {
      image: Img3,
      title: "Step 4 – Researching for historical fiction",
      description:
        "Today I’m discussing the bit most historical writers love just a bit too much: the research. How much research should you do? Should you research in depth before you begin, or only as you go along? And how do you avoid getting lost down a research rabbit hole?.",
    },
  ];
  return (
    <div>
      <Header />
      <div className="max-w-7xl mx-auto px-10 py-10">
        <h1 className="text-3xl sm:text-4xl mb-6 bg-[#A72024] p-4 w-2xs text-white">
          Articles
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-6">
          {data.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-lg overflow-hidden w-[350px] border-1 border-gray-300 h-full flex flex-col min-h-[460px]"
            >
              <div className="w-[350px] h-48">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full  object-cover"
                />
              </div>
              <h2 className="text-xl text-[#A72024] mb-3 mt-3 p-2.5">{item.title}</h2>
              <p className="text-lg text-gray-700 flex-grow p-2.5">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Articles;
