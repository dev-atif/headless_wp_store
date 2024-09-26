import React from "react";
import { useAppSelector } from "./useRedux";

const useCarttotal = () => {
  const { items } = useAppSelector((s) => s.cart);
  console.log("Items", items);
  const Subtotal = items.reduce((total, product: any) => {
    // Convert price to a number and calculate subtotal for the product
    const productTotal =
      parseFloat(product.sale_price ? product.sale_price : product.price) *
      product.quantity;
    return total + productTotal; // Add to the running total
  }, 0);
  console.log("Total amount", Subtotal);
  return { Subtotal };
};

export default useCarttotal;
