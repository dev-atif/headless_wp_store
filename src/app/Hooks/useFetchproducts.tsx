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
      const auth = Buffer.from(
        `${process.env.NEXT_PUBLIC_ADMIN}:${process.env.NEXT_PUBLIC_PASS_KEY}`
      ).toString("base64");

      try {
        const response = await axios.get(
          "http://localhost/wordpress/wp-json/wc/v3/products",
          {
            headers: {
              Authorization: `Basic ${auth}`,
            },
          }
        );
        setProducts(response.data);
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
