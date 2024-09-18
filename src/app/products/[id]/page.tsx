"use client";
import MarqueSection from "@/app/Components/Home/MarqueSection";
import ProductDetails from "@/app/Components/Products/ProductDetails";
import SingleProductSlider from "@/app/Components/Products/SingleProductSlider";
import SingleProductHero from "@/app/Components/Products/SingleProductSlider";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const page = () => {
  const [products, setProducts] = useState<Product | null>(null);
  const { id } = useParams();
  console.warn(id);
  useEffect(() => {
    const FetchSingleProduct = async () => {
      const auth = Buffer.from(
        `${process.env.NEXT_PUBLIC_ADMIN}:${process.env.NEXT_PUBLIC_PASS_KEY}`
      ).toString("base64");
      try {
        const response = await axios.get(
          `http://localhost/wordpress/wp-json/wc/v3/products/${id}`,
          {
            headers: {
              Authorization: `Basic ${auth}`,
            },
          }
        );
        console.warn(response.data);
        setProducts(response.data);
      } catch (error) {
        console.warn(error);
      }
    };
    FetchSingleProduct();
  }, [id]);
  //   const imageUrl = products?.images[0]?.src || "";

  return (
    <div className="px-5 xl:px-0">
      <MarqueSection />
      <div className="flex lg:flex-row flex-col justify-center my-10 max-w-7xl mx-auto gap-10">
        <div className="lg:w-1/2">
          <SingleProductSlider image={products?.images || []} />
        </div>
        <div className="lg:w-1/2 ">
          <ProductDetails product={products} />
        </div>
      </div>
      <div className=" pt-12 max-w-7xl mx-auto">
        <div className=" w-1/2 ">
          {/* Description  */}
          <h1 className="text-4xl font-medium tracking-wider">
            Product Details
          </h1>
          <div
            className="mt-4 text-gray-700 leading-loose"
            dangerouslySetInnerHTML={{ __html: products?.description || "" }}
          />
          <div />
        </div>
      </div>
    </div>
  );
};

export default page;
