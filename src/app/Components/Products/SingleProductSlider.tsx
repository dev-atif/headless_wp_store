"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
interface ImageProps {
  src: string;
}

const SingleProductSlider = ({ image }: { image: ImageProps[] }) => {
  const settings = {
    customPaging: function (i: number) {
      return (
        <div
          className="!lg:w-28 !lg:h-28 !w-16 !h-16 rounded-lg  "
          
        >
          <Image
            className="!lg:w-28 !lg:h-28 !w-16 !h-16 rounded-lg !text-center"
            src={image[i]?.src}
            alt={`Thumbnail ${i}`}
            width={600}
            height={600}
          />
        </div>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: image.length > 1,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div > 
      <div className="     ">
        <Slider {...settings}>
          {image.map((image, idx) => (
            <div className="relative w-full lg:h-[600px] h-[400px] !flex !justify-center " key={idx}>
              <Image
                className="rounded-xl absolute w-full h-full object-fit"
                src={image.src}
                alt={`Product image ${idx}`}
                width={600}
                height={500}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SingleProductSlider;
