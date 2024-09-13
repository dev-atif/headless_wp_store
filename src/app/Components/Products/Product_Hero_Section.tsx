import React from "react";
import productbanner from '../../../../Public/productbanner.jpg'
const Product_Hero_Section = () => {
  return (
    <div>
      <div>
        <div
          className="bg-cover  bg-top  bg-no-repeat w-full h-[60dvh] "
          style={{ backgroundImage: `url(${productbanner.src})` }}
        >
          <div className="border flex items-center  tracking-widest uppercase leading-relaxed   bg-black/60 px-12 text-white h-full">
            <div className="max-w-xl  ">
              <h1 className="lg:text-7xl text-5xl font-semibold">Your One Stop Shop</h1>
              <p className="mt-8">
                Discover a world of choices with our full range of products.
                Find your favorites and enjoy seamless shopping.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product_Hero_Section;
