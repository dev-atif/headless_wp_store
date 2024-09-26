"use client";
import useCarttotal from "@/app/Hooks/useCarttotal";
import { useAppDispatch, useAppSelector } from "@/app/Hooks/useRedux";
import { addItem, decreaseItem, increaseItem } from "@/app/redux/slices/cart-slice";
import Image from "next/image";
import React from "react";
import empty from '../../../../Public/emptycart.jpg'
import Link from "next/link";
const CartProducts = () => {
  const { items } = useAppSelector((state) => state.cart);
  const { Subtotal } = useCarttotal();
  const dispatch = useAppDispatch();
  return (
    <div className="mt-8">
      {items.length > 0 ? (
        <>
          <div className="container mx-auto">
            <h1 className="text-3xl font-semibold mb-6 text-center uppercase tracking-wider">
              Shopping Cart
            </h1>

            <div className="overflow-x-auto">
              <table className="min-w-full bg-white rounded-lg shadow">
                <thead>
                  <tr className="w-full bg-gray-200">
                    <th className="py-4 px-6 text-left">Product</th>
                    <th className="py-4 px-6 text-left">Image</th>
                    <th className="py-4 px-6 text-left">Attributes</th>
                    <th className="py-4 px-6 text-left">Price</th>
                    <th className="py-4 px-6 text-left">Quantity</th>
                    <th className="py-4 px-6 text-left">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((product, idx) => (
                    <tr className="border-t">
                      <td className="py-4 px-6">
                        <span className="text-gray-800 font-medium">
                          {product.title}
                        </span>
                      </td>
                      <td className="py-4 px-6">
                        <img
                          className="h-16 w-16 object-cover rounded-md"
                          src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${product.thumbnail.formats.thumbnail.url}`}
                          alt="Product Image"
                        />
                      </td>
                      <td className="py-4 px-6">
                        {product.selectedSize && (
                          <span className="block text-gray-700 font-semibold">
                            Size: {product.selectedSize}
                          </span>
                        )}
                        {product.selectedColor && (
                          <span className="block text-gray-700 font-semibold">
                            Color: {product.selectedColor}
                          </span>
                        )}
                      </td>
                      <td className="py-4 px-6 font-semibold">
                        {product.sale_price ? (
                          <>
                            <span className="text-gray-800 flex flex-col  gap-1">
                              <span className="text-sm line-through decoration-2 decoration-red-500">
                                {product.price}
                              </span>
                              {product.sale_price}
                            </span>
                          </>
                        ) : (
                          <>
                            <span className="text-gray-800">
                              {product.price}
                            </span>
                          </>
                        )}
                      </td>
                      <td className="py-4 px-6">
                        <div>
                          <div className="flex items-center gap-4">
                            <button
                              onClick={() => dispatch(decreaseItem(product))}
                              className="bg-black text-white w-7 h-7 flex items-center justify-center rounded-lg"
                            >
                              -
                            </button>
                            <h1>{product.quantity}</h1>
                            <button
                              onClick={() => dispatch(increaseItem(product))}
                              className="bg-black text-white w-7 h-7 flex items-center justify-center rounded-lg"
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        <span className="text-gray-800">
                          {Number(
                            product.sale_price
                              ? product.sale_price
                              : product.price
                          ) * product.quantity}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-8 flex justify-between items-center max-w-7xl mx-auto">
              <a
                href="/products"
                className="text-blue-600 hover:text-blue-800 font-semibold"
              >
                Continue Shopping
              </a>
              <div>
                <span className="text-lg font-semibold bg-gray-100 text-black  !tracking-widest px-10 py-2 !rounded-lg">
                  Total Amount : {Subtotal}
                </span>
              </div>
              <div>
                <button className="ml-4 uppercase bg-black text-white px-6 py-2 rounded-lg hover:scale-105 transition-all transform duration-300">
                  <Link href={'/checkout'}>Check out</Link>
                </button>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          {" "}
          <div>
            <div className="max-w-3xl mx-auto flex flex-col gap-3">
              <h1 className="text-3xl tracking-widest font-medium">
                OPPSss Cart is Empty
              </h1>
              <Link
                className="text-xl font-semibold tracking-widest uppercase bg-black w-fit px-10 rounded-lg py-2 text-white"
                href={"/products"}
              >
                Shop Now
              </Link>
            </div>
            <div className="relative h-[50dvh]">
              <Image src={empty} fill alt="empty cart" objectFit="contain" />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CartProducts;
