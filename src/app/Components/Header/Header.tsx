import Image from "next/image";
import React from "react";
import Logo from "../../../../Public/logo.png";
import Menu from "./Menu";
const Header = () => {
  return (
    <div>
      <div className="max-w-3xl mx-auto">
        <div className="flex  items-center justify-between">
          <div>
            <Image src={Logo} alt="Logo" className="w-28 h-28" />
          </div>
          <div>
            <Menu textcolor={'text-black'}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
