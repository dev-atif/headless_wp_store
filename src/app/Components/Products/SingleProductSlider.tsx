"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const SingleProductSlider = ({ image }: { image: Image[] }) => {
  const settings = {
    customPaging: function (i: number) {
      return (
        <div className="!lg:w-28 !lg:h-28 !w-16 !h-16 rounded-lg  ">
          <Image
            className="!lg:w-28 !lg:h-28 !w-16 !h-16 rounded-lg !text-center"
            src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${image[i]?.url}`}
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
    <div>
      <div>
        <Slider {...settings}>
          {image.map((image, idx) => (
            <div
              className="relative !rounded-xl !w-full !m-auto  lg:h-[550px] h-[300px] !flex !justify-center "
              key={idx}
            >
              <Image
                className="rounded-xl absolute w-full xl:w-[80%] lg:w-[100%] h-full object-fit"
                src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${image.url}`} // Ensure full URL is used
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
