import React from "react";
import InputFileds from "./InputFileds";
import Image from "next/image";
import write from "../../../Public/write.gif";
import ReactStars from "react-stars";
const WriteReviews = ({
  getValues,
  onRatingChange,
  ratingValue,
  onClick,
}: any) => {
  return (
    <div>
      <div className="flex    ">
        <h1 className="text-3xl font-semibold">Write Reviews</h1>
        <Image
          src={write}
          alt="write"
          className="-translate-y-4"
          width={70}
          height={70}
        />
      </div>
      <div className="mt-8">
        <div>
          <InputFileds
            onChange={getValues}
            label="Name"
            name="Name"
            type="text"
          />
        </div>
        <div>
          <InputFileds
            onChange={getValues}
            label="Email"
            name="Email"
            type="email"
          />
        </div>
        <div>
          <div className="relative z-0 w-full mb-5 group">
            <textarea
              rows={4}
              className="block py-2.5  px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
              onChange={getValues}
              name="Review"
            />
            <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Write review
            </label>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-10">
            <div className="lg:w-1/2 -mt-4">
              <ReactStars
                onChange={onRatingChange}
                color2="#ffd700"
                count={5}
                size={50}
                half
                value={ratingValue}
              />
            </div>
            <div className="w-1/2">
              <button
                onClick={onClick}
                className="bg-black tracking-widest  text-white w-full py-1 uppercase text-lg rounded-lg"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WriteReviews;
