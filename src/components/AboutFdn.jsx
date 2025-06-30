import React from "react";
import bookImage from "../assets/griot3.png";

function AboutFdn() {
  return (
    <div>
      <section className="w-full py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="bg-[#A72024] text-center text-white p-4 rounded-lg shadow mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold">
              About the Foundation
            </h2>
          </div>
          <div className="flex flex-col md:flex-row md:justify-between items-center md:items-start w-full gap-8 mt-4">
            <div className="flex-1 max-w-full md:max-w-[48%] lg:max-w-[50%] text-center md:text-left">
              <h3 className="text-xl text-[#A72024] sm:text-2xl font-semibold mb-4">
                Reviving Culture. Restoring Dignity.
              </h3>
              <p className="text-white leading-relaxed text-base sm:text-lg">
                The Griot Foundation is a cultural and healing initiative
                founded by Linda Somiari-Stewart to reconnect African children
                and youth with their roots through the power of storytelling. In
                a world where identity is fading and values are being lost, we
                return to the ancient fire—where stories once taught us who we
                are, how to live, and why we matter. Through folktales,
                mentorship, healing programs, and cultural education, we raise a
                generation that remembers their worth, walks in dignity, and
                carries the story forward.
                <br />
                <span className="text-[#A72024]">
                  We are not just preserving culture - we are rebuilding people.
                </span>
              </p>
            </div>
            <div className="flex-1 max-w-full md:max-w-[48%] lg:max-w-[40%] flex justify-center md:justify-end">
              <img
                src={bookImage}
                alt="Book"
                className="w-full max-w-xs sm:max-w-sm h-auto object-cover rounded-md shadow-lg"
              />
            </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-10">
          <div className="bg-[#A72024] text-center text-white p-4 rounded-lg shadow mb-4">
            <h2 className="text-2xl sm:text-3xl font-bold">The Crises</h2>
          </div>
          <div className="flex flex-col md:flex-row md:justify-between items-center md:items-start w-full gap-8 mt-4">
            <div className="flex-1 max-w-full md:max-w-[48%] lg:max-w-[50%] text-center md:text-left">
              <h3 className="text-xl text-[#A72024] sm:text-2xl font-semibold mb-4">
                When a Child Forgets Their Story, They Forget Their Worth.
              </h3>
              <p className="text-white leading-relaxed text-base sm:text-lg">
                Across Africa—and indeed the world—children and youth,
                especially those impacted by violence, are growing up
                disconnected from the values, etiquette, and cultural identity
                that once anchored their communities.
              </p>
            </div>
            <div className="flex-1 max-w-full md:max-w-[48%] lg:max-w-[50%] text-center md:text-left">
              <p className="text-xl text-white sm:text-lg font-medium mb-4">
                This has led to:
              </p>
              <div className="bg-white text-[#A72024]  italic rounded-md p-2 shadow-lg text-left">
                <li>Rising youth violence, trauma, and loss of identity</li>
              </div>
              <div className="bg-white text-[#A72024] italic rounded-md p-2 shadow-lg text-left mt-2">
                <li>Erosion of traditional etiquette and moral foundations</li>
              </div>
              <div className="bg-white text-[#A72024] italic rounded-md p-2 shadow-lg text-left mt-2">
                <li>
                  Loss of cultural identity, weakened moral guidance, fading
                  languages, stifled imagination, and broken inter-generational
                  bonds
                </li>
              </div>
              <div className="bg-white text-[#A72024] italic rounded-md p-2 shadow-lg text-left mt-2">
                <li>
                  Absence of culturally rooted healing and mentorship pathways
                </li>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center text-white">
            <p>
              We are witnessing the rise of generations who no longer remember
              who they are—and in forgetting their stories, risk forgetting
              their worth.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutFdn;
