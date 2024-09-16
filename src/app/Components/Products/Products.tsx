"use client";
import React from "react";
import Product_Card from "./Product_Card";
import useFetchproducts from "@/app/Hooks/useFetchproducts";
import { CircleLoader, DotLoader } from "react-spinners";

const Products = () => {
  const { products, loading, error } = useFetchproducts();
  console.warn(products);
  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
       <DotLoader size={100}/>
      </div>
    );
  }
  return (
    <div>
      <div className="flex flex-wrap gap-10 my-12 justify-center">
        {products.map((item, idx) => (
          <div className="w-1/5 ">
            <Product_Card products={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
