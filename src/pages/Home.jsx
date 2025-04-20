import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Hero2 from "../components/Hero2";
import Footer from "../components/Footer";
import Newsletter from "../components/Newsletter";
import OtherSection from "../components/OtherSection";

function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Hero2 />
      <OtherSection />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default Home;
