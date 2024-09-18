import Image from "next/image";
import Link from "next/link";
import React from "react";

const Product_Card: React.FC<ProductProps> = ({ products }) => {
  return (
    <div>
      <div className="w-full">
        <div className="relative  flex w-full max-w-full flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
          <Link href={`/products/${products.id}`}>
            <div>
              <div className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-x ">
                {products.images[0] ? (
                  <div className="relative w-full h-full flex items-center justify-center rounded-xl">
                    <Image
                      className="object-cover h-full rounded-xl"
                      src={products.images[0].src}
                      alt={products.images[0].alt}
                      width={400}
                      height={400}
                    />
                  </div>
                ) : (
                  <div className="flex items-center justify-center h-full text-gray-500">
                    No Image Available
                  </div>
                )}
                {products.on_sale && (
                  <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
                    {products.sale_price
                      ? `Sale - $${products.sale_price}`
                      : "On Sale"}
                  </span>
                )}
              </div>
              <div className="mt-4 px-5 pb-5">
                <a href="#">
                  <h5 className="text-xl h-14 line-clamp-2 text-ellipsis tracking-tight text-slate-900">
                    {products.name}
                  </h5>
                </a>
                <div className="mt-2 flex items-center justify-between">
                  <p className="text-3xl font-bold text-slate-900">
                    ${products.regular_price}
                  </p>

                  <div>
                    <p
                      className={`${
                        products.stock_status === "instock"
                          ? "bg-black"
                          : "bg-red-500"
                      } text-white w-full px-6 rounded-full`}
                    >
                      {products.stock_status}
                    </p>
                  </div>
                </div>
                <div>
                  <p>
                    Category :{" "}
                    {products.categories.map((itm, idx) => (
                      <span className="text-gray-600" key={idx}>
                        {" "}
                        {itm.name}
                        {idx < products.categories.length - 1 && " - "}
                      </span>
                    ))}
                  </p>
                </div>
              </div>
            </div>
          </Link>
          <button className="flex w-full items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product_Card;
