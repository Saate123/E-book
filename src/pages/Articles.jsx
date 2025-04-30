import React from "react";
import Header from "../components/Headers";
import Footer from "../components/Footer";
import Contact from "../components/Contact";

function Articles() {

  return (
    <div>
      <Header />
      <div className=" bg-[#262626] p-10">
        <h1 className="text-3xl sm:text-4xl font-semibold mb-6 bg-[#A72024] p-4 w-2xs text-white">
          Articles
        </h1>
        <p className="text-white">Coming soon......</p>
      </div>
      <Contact />
      <Footer />
    </div>
  );
}

export default Articles;
