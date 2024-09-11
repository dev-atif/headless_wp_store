import Image from "next/image";
import React from "react";
import banner from "../../../../Public/banner.jpg";
import couple from "../../../../Public/couple.jpg";
const Banner = () => {
  return (
    <div>
      <div className=" my-10 flex flex-row-reverse lg:h-[70dvh] max-w-7xl  justify-center mx-auto xl:px-0 px-5">
        <div className="w-1/2 relative rounded-lg hidden lg:block">
          <Image
            src={couple}
            alt="couple"
            className="rounded-lg"
            objectFit="cover"
            fill
          />
        </div>
        <div className="lg:w-1/2 w-full flex flex-col gap-8  justify-center">
          <h1 className="lg:text-5xl text-4xl uppercase font-semibold  leading-0 tracking-wider">
            Look our New Collections
          </h1>
          <p className=" text-2xl uppercase tracking-wide">
            The best of global Brands at your Door step
          </p>
          <button className="bg-black text-white w-1/2 py-2 rounded-lg font-bold tracking-widest">
            Shop Now
          </button>
        </div>
      </div>
      <div>
        <div className="relative hidden lg:block ">
          {/* <Image src={banner} objectFit=""  className="w-auto h-auto" alt="Banner"  /> */}
          <div
            className="bg-contain bg-center bg-fixed bg-no-repeat w-full h-[60dvh] "
            style={{ backgroundImage: `url(${banner.src})` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
