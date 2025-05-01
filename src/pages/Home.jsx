import React from "react";
import Header from "../components/Headers";
import Footer from "../components/Footer";
import Newsletter from "../components/Newsletter";
import OtherSection from "../components/OtherSection";
import HeroPage from "../components/Hero";

function Home() {
  return (
    <div>
      <Header />
      <HeroPage />
      <OtherSection />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default Home;
