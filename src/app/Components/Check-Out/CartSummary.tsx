import { useAppSelector } from "@/app/Hooks/useRedux";
import React from "react";

const CartSummary = () => {
  const { items } = useAppSelector((s) => s.cart);
  return (
    <div>
      <div className="my-14">
        <div className="xl:w-1/2 lg:w-[70%] px-5 lg:px-0 mx-auto">
          <h1 className="text-2xl text-end font-semibold tracking-wider uppercase">
            Summary
          </h1>
        </div>
        <div className="mt-14 px-5 lg:px-0">
          <div className=" max-w-6xl mx-auto flex lg:flex-row flex-col-reverse lg:gap-12 ">
            <div className="lg:w-1/3 shadow-lg rounded-xl bg-gray-100 p-4 mt-8 lg:mt-0 h-fit">
              <div className="flex items-center justify-between font-medium text-center">
                <p className="leading-1 text-base">
                  At{" "}
                  <span className="uppercase tracking-wider font-extrabold ">
                    omniGoods
                  </span>
                  , we accept returns within 30 days for unused, undamaged items
                  in original packaging. Contact our support team for assistance
                  with returns, exchanges, or damaged items, and we'll ensure a
                  smooth and hassle-free process.
                </p>
              </div>
            </div>
            {/* Table-------------------------- */}
            <div className="overflow-x-auto w-full">
              <h1 className="text-xl text-gray-500 tracking-wider mb-5">
                Verify Your Products
              </h1>
              <table className="min-w-full bg-white rounded-lg shadow">
                <thead>
                  <tr className="w-full bg-gray-200">
                    <th className="py-4 px-6 text-left">Product</th>
                    <th className="py-4 px-6 text-left">Image</th>
                    <th className="py-4 px-6 text-left">Attributes</th>

                    <th className="py-4 px-6 text-left">Quantity</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((product, idx) => (
                    <tr className="border-t">
                      <td className="py-4 px-6 min-w-[250px] ">
                        <span className="text-gray-800 font-medium">
                          {product.title}
                        </span>
                      </td>
                      <td className="py-4 px-6 min-w-[130px]">
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

                      <td className="py-4 px-6">{product.quantity}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartSummary;
