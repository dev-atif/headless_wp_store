"use client";
import MarqueSection from "@/app/Components/Home/MarqueSection";
import ProductDetails from "@/app/Components/Products/ProductDetails";
import SingleProductSlider from "@/app/Components/Products/SingleProductSlider";
import SingleProductHero from "@/app/Components/Products/SingleProductSlider";
import {
  BlocksRenderer,
  type BlocksContent,
} from "@strapi/blocks-react-renderer";

import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
type RootNode = {
  type: "heading" | "paragraph"; // Limited to known types
  level?: number; // For headings, optional
  children: Array<{ text: string }>;
};

const page = () => {
    const [product, setProduct] = useState<any>(null);
    

  const { slug } = useParams();
  console.warn(slug);
  useEffect(() => {
    const FetchSingleProduct = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/products?filters[slug][$eq]=${slug}&populate=*`
        );
        console.warn("single product", response.data.data[0]);
        setProduct(response.data.data[0]);
      
      } catch (error) {
        console.warn(error);
      }
    };
    FetchSingleProduct();
  }, [slug]);
 

  
  return (
    <div className="px-5 xl:px-0">
      <MarqueSection />
      <div className="flex lg:flex-row flex-col justify-center my-10 max-w-7xl mx-auto gap-10">
        <div className="lg:w-1/2">
          {product?.gallary ? (
            <SingleProductSlider image={product.gallary} />
          ) : (
            <p>No images available.</p>
          )}
        </div>
        <div className="lg:w-1/2 ">
          <ProductDetails product={product} />
        </div>
      </div>
      <div className=" pt-12 max-w-7xl mx-auto">
        <div className=" xl:w-1/2 lg:px-10 xl:px-0 px-5 ">
          {/* Description  */}

          <h1 className="text-4xl font-medium  tracking-wider">
            Product Details
          </h1>
          <div className="mt-8">
            <BlocksRenderer content={product?.details || []} />
          </div>

          <div />
        </div>
      </div>
    </div>
  );
};

export default page;
