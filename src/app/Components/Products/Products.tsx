"use client";
import React, { useState } from "react";
import Product_Card from "./Product_Card";
import useFetchproducts from "@/app/Hooks/useFetchproducts";
import { CircleLoader, DotLoader } from "react-spinners";
import { useRouter, useSearchParams } from "next/navigation";

const Products = ({ page }: { page: string }) => {
  // const [Productpage, setPage] = useState<number>(0);
  const skip = (Number(page) - 1) * 4;

  // const page = params.get("page") || 1;
  const { products, loading, total } = useFetchproducts({
    skip: skip,
    page: Number(page),
  });
  const router = useRouter();
  console.warn(products);
  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <DotLoader size={100} />
      </div>
    );
  }
  console.warn(skip);
  const handleNext = () => {
    // setPage((Productpage) + 1);
    const num = Number(page) + 1;
    router.push(`/products?page=${num}`);
  };
  const handlePrev = () => {
    if (Number(page) > 1) {
      // Ensure page doesn't go below 1
      const num = Number(page) - 1;
      router.push(`/products?page=${num}`);
    }
  };
  const disableNext = skip + products.length >= total;
  return (
    <div>
      <div className="flex flex-wrap gap-10 my-12 justify-center">
        {products.map((item, idx) => (
          <div className="w-1/5 ">
            <Product_Card products={item} />
          </div>
        ))}
      </div>
      <div className="max-w-xl flex items-center justify-between mx-auto">
        <div className="w-1/3">
          <button
            onClick={handlePrev}
            className="bg-black text-white rounded-lg py-1 w-full"
          >
            Prev
          </button>
        </div>
        <div className="w-1/3">
          <button
            disabled={disableNext}
            onClick={handleNext}
            className={`${disableNext ? 'cursor-not-allowed':''} bg-black text-white rounded-lg py-1 w-full`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;
