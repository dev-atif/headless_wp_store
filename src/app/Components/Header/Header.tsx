"use client";
import Image from "next/image";
import React from "react";
import Logo from "../../../../Public/logo.png";
import Menu from "./Menu";
import { usePathname } from "next/navigation";
import { BsCart4 } from "react-icons/bs";
import Link from "next/link";
import { useAppSelector } from "@/app/Hooks/useRedux";
const Header = () => {
  const pathname = usePathname();
  const isHidden = pathname === "/register" || pathname === "/login";
  const {items} = useAppSelector(s=>s.cart)
  return (
    <div className={isHidden ? "hidden" : "block"}>
      <div className="max-w-3xl mx-auto">
        <div className="flex  items-center justify-between">
          <div>
            <Image src={Logo} alt="Logo" className="w-28 h-28" />
          </div>
          <div>
            <Menu textcolor={"text-black"} />
          </div>
          <div className="relative">
            <Link href={'/cart'}>
            <h1 className=" text-3xl">
              <BsCart4 />
              <span className="absolute -top-2 -right-3  bg-red-500 w-7 h-7 flex items-center justify-center font-bold text-white rounded-full text-sm">{items.length}</span>
            </h1>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
