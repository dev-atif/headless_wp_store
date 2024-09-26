"use client";
import { useAppDispatch } from "@/app/Hooks/useRedux";
import { addItem } from "@/app/redux/slices/cart-slice";
import React, { useState } from "react";
import toast from "react-hot-toast";
interface ProductDetailsProps {
  product: Product | null;
}
const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
  const [selectedSize, setSelectedSize] = useState<string | null>(null); // State for selected size
  const [selectedColor, setSelectedColor] = useState<string | null>(null); // State for selected color
  const dispatch = useAppDispatch();
  const handleAddToCart = () => {
    if (product) {
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
      <div>
        <div>
          <h1 className="xl:text-5xl text-4xl tracking-wider font-semibold line-clamp-3">
            {product?.title}
          </h1>
        </div>
        <div className="my-4">
          <h1 className="flex items-center text-lg gap-2 font-medium">
            Category :{" "}
            <span className="  font-semibold text-gray-500">
              {product?.productCategory}
            </span>
          </h1>
        </div>
        <div className="leading-normal tracking-wide text-base ">
          <p className=" h-36 overflow-clip">{product?.Description}</p>
        </div>
        <div className="my-4 flex items-center gap-4">
          <h1 className="font-medium text-base">SKU</h1>
          <span
            className={` px-8  text-black font-bold text-base rounded-xl leading-normal`}
          >
            {product?.Sku}
          </span>
        </div>
        <div className="my-4 flex items-center gap-4">
          <h1 className="font-medium text-base">Status</h1>
          {product?.stock && (
            <p
              className={`${
                product.stock > 0 ? "bg-black" : "bg-red-500"
              } text-white w-fit px-6 rounded-full`}
            >
              {product.stock > 0 ? "In Stock" : "Out of Stock"}
            </p>
          )}
        </div>
        <div className="flex items-center gap-3">
          <div className="w-14 font-semibold">
            <h1>Size</h1>
          </div>
          {product?.Size && (
            <>
              <div className="w-14 font-semibold">
                <h1>Size</h1>
              </div>
              {product.Size.map((itm: string, index: number) => (
                <button
                  key={index}
                  onClick={() => setSelectedSize(itm)} // Update selected Size
                  className={`px-4 py-2 border rounded-md text-sm hover:bg-black hover:text-white transition-all duration-300 ${
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
          {product?.Color && (
            <>
              <div className="w-14 font-semibold">
                <h1>Color</h1>
              </div>
              {product.Color.map((color: string, index: number) => (
                <button
                  key={index}
                  onClick={() => setSelectedColor(color)} // Update selected color
                  className={`px-4 py-2 border rounded-md text-sm hover:bg-black hover:text-white transition-all duration-300 ${
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
        <div className="my-4 flex items-center gap-4">
          <h1 className="font-medium text-lg"> Price</h1>
          <h1 className="flex gap-2 items-end">
            {product?.sale_price ? (
              <>
                <span className="line-through text-lg decoration-red-500">
                  PKR {product?.price}
                </span>
                <span className="text-2xl font-medium">
                  PKR {product?.sale_price}
                </span>
              </>
            ) : (
              <>
                <span className="text-2xl font-medium">
                  PKR {product?.price}
                </span>
              </>
            )}
          </h1>
        </div>
        <div className="mt-8">
          <button
            onClick={handleAddToCart}
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

export default ProductDetails;
