import React from "react";
interface ProductDetailsProps {
  product: Product | null;
}
const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
 
  return (
    <div>
      <div>
        <div>
          <h1 className="xl:text-6xl text-4xl tracking-wider font-semibold line-clamp-3">
            {product?.name}
          </h1>
        </div>
        <div className="my-4">
          <h1 className="flex items-center text-lg gap-2 font-medium">
            Category :
            {product?.categories.map((itm, idx) => (
              <span className="  font-semibold text-gray-500">
                {itm.name}
                {idx < product?.categories.length - 1 && " - "}
              </span>
            ))}
          </h1>
        </div>
        <div className="leading-normal tracking-wide text-base "
          dangerouslySetInnerHTML={{ __html: product?.short_description || "" }}
        />
        <div className="my-4 flex items-center gap-4">
          <h1 className="font-medium text-base">SKU</h1>
          <span
            className={` px-8  text-white text-base rounded-xl leading-normal`}
          >
            {product?.sku}
          </span>
        </div>
        <div className="my-4 flex items-center gap-4">
          <h1 className="font-medium text-base">Status</h1>
          <span
            className={` ${
              product?.stock_status === "instock" ? "bg-black" : "bg-red-500"
            } px-8  text-white text-base rounded-xl leading-normal`}
          >
            {product?.stock_status}
          </span>
        </div>
        <div>
          {product?.attributes.map((itm, idx) => {
            return (
              <div className="flex items-center gap-6">
                <h1 className="font-medium text-lg">
                  <span key={idx}>{itm.name}</span>
                </h1>
                <div className="flex gap-2 mt-2">
                  {itm.options.map((option: String, optionIdx: number) => (
                    <button
                      key={optionIdx}
                      className="px-4 hover:bg-black hover:text-white transition-all transform duration-500 py-2 border rounded-md text-sm "
                      type="button"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
        <div className="my-4 flex items-center gap-4">
          <h1 className="font-medium text-lg"> Price</h1>
          <h1 className="flex gap-2 items-end">
            {product?.sale_price ? (
              <>
                <span className="line-through text-lg decoration-red-500">
                  PKR {product?.regular_price}
                </span>
              </>
            ) : null}
            <span className="text-2xl font-medium">PKR {product?.price}</span>
          </h1>
        </div>
        <div className="mt-8">
          <button className="flex w-full items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
