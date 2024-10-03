"use client";
import MarqueSection from "@/app/Components/Home/MarqueSection";
import ProductDetails from "@/app/Components/Products/ProductDetails";
import SingleProductSlider from "@/app/Components/Products/SingleProductSlider";
import SingleProductHero from "@/app/Components/Products/SingleProductSlider";
import Reviews from "@/app/Components/Reviews";
import WriteReviews from "@/app/Components/WriteReviews";
import { useAppSelector } from "@/app/Hooks/useRedux";
import {
  BlocksRenderer,
  type BlocksContent,
} from "@strapi/blocks-react-renderer";

import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Rating } from "react-simple-star-rating";
// type RootNode = {
//   type: "heading" | "paragraph"; // Limited to known types
//   level?: number; // For headings, optional
//   children: Array<{ text: string }>;
// };

const page = () => {
  const [product, setProduct] = useState<any>(null);
  const [getReviews, setGetreviews] = useState<any>(null);
  const [productReview, setProductreview] = useState({
    Name: "",
    Email: "",
    Review: "",
    rating: 0,
  });

  const { slug } = useParams();
  const { token } = useAppSelector((s) => s.token);
  useEffect(() => {
    const FetchSingleProduct = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/products?filters[slug][$eq]=${slug}&populate=*`
        );
        console.warn(response.data.data[0]);
        setProduct(response.data.data[0]);
        if (response.data.data[0]?.product_reviews) {
          const sorted = sortReviews(response.data.data[0]);
        }
      } catch (error) {
        console.warn(error);
      }
    };
    const sortReviews = (product: any) => {
      return product.product_reviews.sort((a: any, b: any) => {
        const dateA = new Date(a.updatedAt);
        const dateB = new Date(b.updatedAt);
        return dateB.getTime() - dateA.getTime(); // Sort in descending order
      });
    };
    FetchSingleProduct();
  }, [slug]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setProductreview((prevReview) => ({
      ...prevReview,
      [name]: value,
    }));
    console.warn(productReview);
  };
  const handleRatingChange = (newRating: number) => {
    setProductreview((prevReview) => ({
      ...prevReview,
      rating: newRating,
    }));
    console.warn("Rating updated:", newRating);
  };

  ///Submit Reviews to Backend---------------------------------------
  const Subit_Review = async () => {
    console.warn(productReview);
    if (
      !productReview.Name ||
      !productReview.Email ||
      !productReview.Review ||
      productReview.rating === 0
    ) {
      toast.error("All Fields Are Required");
      return; // Exit the function early
    }

    try {
      if (!token) {
        toast.error("Please Login First to Write Review");
        return;
      }
      const payload = {
        data: {
          Name: productReview.Name,
          Email: productReview.Email,
          Review: productReview.Review,
          rating: productReview.rating,
          product: product.id,
        },
      };
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/product-reviews`,
        payload
      );

      if (response) {
        toast.success("Review Submit Successfully ");
      }
    } catch (error) {}
  };
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
      <div className="bg-gray-200 h-[0.5px] max-w-4xl mx-auto mt-8"></div>
      <div className="max-w-7xl mx-auto mt-8">
        <div className="flex gap-20 lg:flex-row flex-col-reverse">
          <div className="lg:w-1/2">
            <h1 className="text-3xl font-semibold">Product Reviews</h1>
            <Reviews rev={product} />
          </div>
          <div className="lg:w-1/2">
            <WriteReviews
              getValues={handleChange}
              onRatingChange={handleRatingChange}
              ratingValue={productReview.rating}
              onClick={Subit_Review}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
