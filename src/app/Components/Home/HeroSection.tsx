"use client";
import Image from "next/image";
import React from "react";
import women from "../../../../Public/women.jpg";
import men from "../../../../Public/menwear.jpg";
import menfootwear from "../../../../Public/menfootwear.jpg";
import womenfootwear from "../../../../Public/womenfootwear.jpg";
import mob from "../../../../Public/MobiileAccesories.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const sliderMenu = [
  {
    name: "Women's fashion",
    slogan: "Embrace Your Inner Chic",
    img: women,
  },
  {
    name: "Men's fashion",
    slogan: "Where Style Meets Confidence",
    img: men,
  },
  {
    name: "Women's Footwear",
    slogan: "Elegance Redefined",
    img: womenfootwear,
  },
  {
    name: "Men's Footwear",
    slogan: "Radiate Grace, Wear Confidence",
    img: menfootwear,
  },
];
const settings = {
  infinite: true,
  speed: 4500,
  slidesToShow: 1,
  slidesToScroll: 1,
  adaptiveHeight: true,

  waitForAnimate: false,
  autoplay: true,
  fade: true,
  autoplaySpeed: 4000,
};
const HeroSection = () => {
  return (
    <div>
      <Slider {...settings} className="overflow-clip">
        {sliderMenu.map((item, idx) => (
          <div key={idx} className="relative  min-h-[70dvh]  ">

        
         
            <Image
              src={item.img}
              alt={item.name}
              objectFit="cover"
              fill
              className="absolute -z-10 "
            />
            <div
              className={`z-10 px-8 pt-32 uppercase absolute w-full h-full  bg-black/60 text-white`}
            >
              <h1 className="lg:text-7xl text-5xl font-bold tracking-widest drop-shadow-2xl">
                {item.name}
              </h1>
              <div className="lg:text-4xl text-2xl font-semibold mt-4 drop-shadow-2xl">
                <p>{item.slogan}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroSection;
