import { useAppDispatch, useAppSelector } from "@/app/Hooks/useRedux";
import { removeToken } from "@/app/redux/slices/token-slices";
import Link from "next/link";
import React from "react";
const MenuItems = [
  {
    name: "Products",
    link: "/products",
  },
  {
    name: "Blogs",
    link: "/blogs",
  },
  {
    name: "Contact",
    link: "/contact",
  },
  {
    name: "About",
    link: "/about",
  },
  // {
  //   name: "Login",
  //   link: "/login",
  // },
];

const Menu = ({ textcolor }: { textcolor: String }) => {
  const { token } = useAppSelector((s) => s.token);
  const dispatch = useAppDispatch();
  return (
    <div>
      <div className="flex lg:flex-row flex-col  gap-5 items-center font-normal tracking-widest">
        {MenuItems.map((itm, idx) => (
          <div key={idx} className="group relative">
            <Link key={idx} className={`${textcolor}`} href={itm.link}>
              {itm.name}
            </Link>
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-orange-600 transition-all duration-300 group-hover:w-full"></span>
          </div>
        ))}
        {!token ? (
          <div className="group relative">
            <Link className={`text-black`} href={"/login"}>
              Login
            </Link>
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-orange-600 transition-all duration-300 group-hover:w-full"></span>
          </div>
        ) : (
          <div className="group relative">
            <button
              onClick={() => {
                dispatch(removeToken());
              }}
              className={` bg-black px-4 text-white py-2  rounded-lg font-semibold`}
            >
              LogOut
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;
