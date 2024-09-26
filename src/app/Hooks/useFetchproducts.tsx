"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

const useFetchproducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<null | string>(null);
  //fetch product
  useEffect(() => {
    const fetchProducts = async () => {
      //encode auth
      
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/products?populate=*`,
          {}
        );
        console.warn(response.data)
        setProducts(response.data.data);
        setLoading(false);
      } catch (error: any) {
        setError(error);
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);
  return { products, loading, error };
};

export default useFetchproducts;
