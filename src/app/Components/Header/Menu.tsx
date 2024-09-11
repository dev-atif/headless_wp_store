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
];
const Menu = ({textcolor}:{textcolor:String}) => {
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
      </div>
    </div>
  );
};

export default Menu;
