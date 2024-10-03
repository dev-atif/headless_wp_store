"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

interface IProp {
  skip: number;
  page: number;
}
const useFetchproducts = ({ skip, page }: IProp) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [total, setTotal] = useState<number>(0);
  const [error, setError] = useState<null | string>(null);
  //fetch product
  useEffect(() => {
    const fetchProducts = async () => {
      //encode auth

      try {
        const { data } = await axios.get(
          `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/products?populate=*&sort[0]=createdAt:desc&pagination[start]=${skip}&pagination[limit]=4`,
          {}
        );
        setTotal(data.meta.pagination.total);
        setProducts(data.data);
        setLoading(false);
      } catch (error: any) {
        setError(error);
        setLoading(false);
      }
    };
    fetchProducts();
  }, [page]);
  return { products, loading, error, total };
};

export default useFetchproducts;
