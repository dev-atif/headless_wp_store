"use client";
import React from "react";
import CountUp from "react-countup";
import { TbTruckDelivery } from "react-icons/tb";
import { BiHappyAlt } from "react-icons/bi";

const ServiceIncrement = () => {
  return (
    <div className="lg:flex items-center justify-between gap-8">
      <div className="w-full flex justify-center">
        <div className="relative w-full p-8 bg-white rounded-lg">
          {/* Inner shadow effect */}
          <div className="absolute inset-0 bg-white rounded-lg shadow-[inset_0_4px_10px_rgba(0,0,0,0.2)]"></div>

          <div className="relative gap-2 h-60 flex flex-col items-center justify-center">
            <div>
              <TbTruckDelivery
                className="bg-black text-white rounded-full p-4"
                size={100}
              />
            </div>
            <div>
              <h1 className="text-3xl font-semibold tracking-wider uppercase">
                Total Delivery
              </h1>
            </div>
            <div>
              <CountUp className="text-7xl" start={0} end={7000} suffix="+" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full  flex justify-center lg:mt-0 mt-4">
        <div className="relative w-full p-8 bg-white rounded-lg">
          {/* Inner shadow effect */}
          <div className="absolute inset-0 bg-white rounded-lg shadow-[inset_0_4px_10px_rgba(0,0,0,0.2)]"></div>

          <div className="relative gap-2 h-56 flex flex-col items-center justify-center">
            <div>
              <BiHappyAlt
                className="bg-black text-white rounded-full p-4"
                size={100}
              />
            </div>
            <div>
              <h1 className="text-3xl font-semibold tracking-wider uppercase">
                Happy Custometr
              </h1>
            </div>
            <div>
              <CountUp className="text-7xl" start={0} end={6500} suffix="+" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceIncrement;
