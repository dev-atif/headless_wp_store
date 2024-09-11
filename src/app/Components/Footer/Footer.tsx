import Image from "next/image";
import React from "react";
import logo from "../../../../Public/logo.png";
import Menu from "../Header/Menu";
import { CiFacebook } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { LuStore } from "react-icons/lu";
const Footer = () => {
  return (
    <div className="bg-black py-8 mt-28">
      <div className="max-w-6xl mx-auto flex lg:flex-row flex-col items-center justify-around">
        <div className="">
          <div className="relative w-60 h-60">
            <Image
              src={logo}
              alt="logo"
              className="  object-cover absolute w-full h-full "
              objectFit="cover"
            />
          </div>
        </div>
        <div className="flex lg:flex-col gap-4 items-center justify-around w-full">
          <div>
            <Menu textcolor={"text-white"} />
          </div>
          <div className="flex lg:flex-row flex-col  gap-6">
            <span className="text-4xl lg:text-5xl">
              <CiFacebook className="bg-white text-black rounded-xl  p-1" />
            </span>
            <span className="text-4xl lg:text-5xl">
              <FaWhatsapp className="bg-white text-black rounded-xl  p-1" />
            </span>
            <span className="text-4xl lg:text-5xl">
              <LuStore className="bg-white text-black rounded-xl  p-1" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
