import React from "react";
import HeroSection from "./HeroSection";
import ServiceIncrement from "./ServiceIncrement";
import Banner from "./Banner";
import MarqueSection from "./MarqueSection";
import BlogSection from "./BlogSection";

const HeroPage = () => {
  return (
    <div>
      <div>
        <section>
          <HeroSection />
        </section>

        <section className="max-w-5xl mx-auto py-8 px-5 xl:px-0">
          <ServiceIncrement />
        </section>
        <section className="my-20">
          <MarqueSection />
        </section>
        <section>
          <Banner />
        </section>
        <section className="max-w-7xl  mx-auto xl:px-0 px-5">
          <BlogSection />
        </section>
      </div>
    </div>
  );
};

export default HeroPage;
