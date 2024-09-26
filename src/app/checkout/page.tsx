"use client";
import React from "react";
import Stepper from "awesome-react-stepper";
import PersonelInformation from "../Components/Check-Out/PersonelInformation";
import { FaTruckFast } from "react-icons/fa6";
import Marquee from "react-fast-marquee";
import PayMent from "../Components/Check-Out/PayMent";
const page = () => {
  return (
    <div>
      <div>
        <Marquee className=" " direction="right" speed={100} >
          <span>
            <FaTruckFast  className="  text-[5rem]" />
          </span>
        </Marquee>
      </div>
      <div className="xl:w-1/2 lg:w-[70%] px-5 lg:px-0 mx-auto">
        <div className="my-20">
          <Stepper>
            <div>
              <PersonelInformation />
            </div>
            <div>
              <PayMent/>
            </div>
            <div>
              <h1>Thank you for using Awesome React Stepper</h1>
            </div>
          </Stepper>
        </div>
      </div>
    </div>
  );
};

export default page;
