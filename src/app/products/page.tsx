import React from "react";
import Product_Hero_Section from "../Components/Products/Product_Hero_Section";
import Product_Card from "../Components/Products/Product_Card";
import Products from "../Components/Products/Products";
interface IProp {
  params: {};
  searchParams: { page: string };
}
const Product = ({ searchParams }: IProp) => {
  // console.log("Page props", props);
  return (
    <div>
      <div>
        <section>
          <Product_Hero_Section />
        </section>
        <section>
          <Products page={searchParams.page ? searchParams.page : "1"} />
        </section>
      </div>
    </div>
  );
};

export default Product;
