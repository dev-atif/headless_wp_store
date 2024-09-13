import React from "react";
import Marquee from "react-fast-marquee";

const MarqueSection = () => {
  return (
    <div>
      <div>
        <Marquee speed={100}>
          <div
            className=" uppercase text-transparent font-bold text-6xl leading-relaxed"
            style={{ WebkitTextStroke: "1.5px black" }} // Apply the stroke with black color
          >
            Omni Goods{" "} .. Sounds Of Quality
          </div>
         
        </Marquee>
      </div>
    </div>
  );
};

export default MarqueSection;
