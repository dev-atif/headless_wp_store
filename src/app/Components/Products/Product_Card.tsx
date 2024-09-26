"use client";
import { useAppDispatch } from "@/app/Hooks/useRedux";
import { addItem } from "@/app/redux/slices/cart-slice";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import toast from "react-hot-toast";
interface ProductCardProps {
  products: Product; // Use the Product interface for the products prop
}
const Product_Card: React.FC<ProductCardProps> = ({ products }) => {
  const [selectedSize, setSelectedSize] = useState<string | null>(null); // State for selected size
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const dispatch = useAppDispatch();
  const handleAddToCart = (product: Product) => {
    if (product) {
      if (
        (product.Size && product.Size.length > 0 && !selectedSize) ||
        (product.Color && product.Color.length > 0 && !selectedColor)
      ) {
        const errorMessage = !selectedSize
          ? "Please select a size before adding to cart."
          : "Please select a color before adding to cart.";
        toast.error(errorMessage);
        return false; // Prevent adding to cart
      }
      const itemToAdd = {
        ...product,
        quantity: 1, // Set the quantity as needed (e.g., 1)
        selectedSize,
        selectedColor,
      };
      dispatch(addItem(itemToAdd)); // Dispatch the action to add item to cart
      toast.success("Product added to cart successfully!");
    }
  };
  return (
    <div>
      <div className="w-full">
        <div className="relative group   flex w-full max-w-full flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
          <Link href={`/products/${products.slug}`}>
            <div>
              <div className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-x ">
                {products.thumbnail && products.thumbnail.url ? (
                  <div className="relative w-full h-full flex items-center justify-center rounded-xl">
                    <Image
                      className="object-cover h-full rounded-xl"
                      src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${products.thumbnail.formats.thumbnail.url}`}
                      alt={products.thumbnail.name}
                      width={400}
                      height={400}
                    />
                  </div>
                ) : (
                  <div className="flex items-center justify-center h-full text-gray-500">
                    No Image Available
                  </div>
                )}
                {products.sale_price && (
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
                    {products.title}
                  </h5>
                </a>
                <div>
                  <p className="flex items-center gap-3">
                    Category :{" "}
                    <span className="text-gray-500 font-medium">
                      {products.productCategory}
                    </span>
                  </p>
                </div>
                <div className="mt-2 flex items-center justify-between">
                  <p className="text-3xl font-bold text-slate-900">
                    ${products.price}
                  </p>

                  <div>
                    <p
                      className={`${
                        products.stock > 0 ? "bg-black" : "bg-red-500"
                      } text-white w-full px-6 rounded-full`}
                    >
                      {products.stock > 0 ? "In Stock" : "Out of Stock"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
          {(products.Size?.length || products.Color?.length) && (
            <div className="group bg-black/30 !flex  px-5 justify-center flex-col backdrop-blur-md border border-white/20 h-[60%] w-full absolute transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100 group-hover:block rounded-lg">
              <div className="flex items-center gap-3 mt-4">
                {products?.Size && (
                  <>
                    <div className="w-14 font-semibold text-white">
                      <h1>Size</h1>
                    </div>
                    {products.Size.map((itm: string, index: number) => (
                      <button
                        key={index}
                        onClick={() => setSelectedSize(itm)} // Update selected Size
                        className={`px-4 py-2  border-2 rounded-md text-sm hover:bg-black text-white font-bold hover:text-white transition-all duration-300 ${
                          selectedSize === itm ? "bg-black text-white" : ""
                        }`} // Highlight selected Size
                        type="button"
                      >
                        {itm}
                      </button>
                    ))}
                  </>
                )}
              </div>
              <div className="flex items-center gap-3 mt-4">
                {products?.Color && (
                  <>
                    <div className="w-14 font-semibold text-white">
                      <h1>Color</h1>
                    </div>
                    {products.Color.map((color: string, index: number) => (
                      <button
                        key={index}
                        onClick={() => setSelectedColor(color)} // Update selected color
                        className={`px-4 py-2 border-2 text-white font-semibold rounded-md text-sm hover:bg-black hover:text-white transition-all duration-300 ${
                          selectedColor === color ? "bg-black text-white" : ""
                        }`} // Highlight selected color
                        type="button"
                      >
                        {color}
                      </button>
                    ))}
                  </>
                )}
              </div>
            </div>
          )}

          <button
            disabled={products.stock <= 0}
            onClick={() => handleAddToCart(products)}
            className="flex w-full items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
          >
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
