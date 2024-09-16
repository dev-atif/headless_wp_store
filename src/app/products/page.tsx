import React from "react";
import Product_Hero_Section from "../Components/Products/Product_Hero_Section";
import Product_Card from "../Components/Products/Product_Card";
import Products from "../Components/Products/Products";

const page = () => {
  return (
    <div>
      <div>
        <section>
            <Product_Hero_Section/>
        </section>
        <section>
        <Products/>
        </section>
      </div>
    </div>
  );
};

export default page;
