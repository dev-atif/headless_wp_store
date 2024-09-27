"use client";
import Image from "next/image";
import React, { useState } from "react";
import coins from "../../../../Public/coins.png";
import card from "../../../../Public/cards.png";
import gifcod from "../../../../Public/check.gif";
import InputFileds from "../InputFileds";
const PayMent = ({ formik }: { formik: any }) => {
  const [payment, setPayment] = useState<string | null>("CardPayment");

  return (
    <div className="w-full">
      <div className="my-14">
        <div>
          <h1 className="text-2xl text-center font-semibold tracking-wider uppercase">
            Payment Method
          </h1>
          <p className="text-gray-500 text-center mt-2">
            All transactions are secure and encrypted.
          </p>
        </div>

        <div className="my-10">
          <div className="mb-5">
            <p className="text-gray-500  mt-2">
              Please Select the Payment Method from Below
            </p>
          </div>
          <div className="lg:flex  gap-5">
            {/* Cash On deilvery---------------------- */}

            <div
              onClick={() => {
                setPayment("COD"), formik.setFieldValue("PaymentMethod", "COD");
              }}
              className={` cursor-pointer relative lg:w-1/2 h-44 py-2 px-4 rounded-lg  border flex items-start  flex-col ${
                payment === "COD" ? "border-green-500" : "border-black"
              }`}
            >
              <h1 className="text-lg mt-6 font-medium uppercase tracking-widest">
                Cash on Delivery
              </h1>
              {payment === "COD" && (
                <Image
                  src={gifcod} // Replace with the path to your GIF
                  className="w-20 h-20 mt-2" // Adjust size and margin as needed
                  alt="Cash on Delivery GIF"
                />
              )}
              <Image
                src={coins}
                className=" absolute w-44 h-44 -bottom-2 right-0"
                alt="cash on delivery"
              />
            </div>
            {/* PayMent Using Card ---------------------------------------- */}
            <div
              onClick={() => {setPayment("CardPayment"),
                formik.setFieldValue("PaymentMethod", "CardPayment");}}
              className={` cursor-pointer mt-4 lg:mt-0 relative lg:w-1/2 h-44 py-2 px-4 rounded-lg  border flex items-start  flex-col ${
                payment === "CardPayment" ? "border-green-500" : "border-black"
              }`}
            >
              <h1 className="text-lg mt-6 font-medium uppercase tracking-widest">
                Payment On Card
              </h1>
              {payment === "CardPayment" && (
                <Image
                  src={gifcod} // Replace with the path to your GIF
                  className="w-20 h-20 mt-2" // Adjust size and margin as needed
                  alt="Cash on Delivery GIF"
                />
              )}
              <Image
                src={card}
                className=" absolute w-44 h-44 -bottom-2 right-0"
                alt="cash on delivery"
              />
            </div>
          </div>

          <div
            className={`mt-10 transition-all transform duration-500  ${
              payment === "CardPayment"
                ? " !h-[350px] md:!h-[220px]  overflow-clip "
                : "h-0 overflow-hidden"
            }`}
          >
            <div>
              <h1 className="text-xl text-gray-500 lg:flex   items-center gap-3 mb-10">
                Please Enter Your Card Details{" "}
                <span className="text-sm">
                  (Wrong Details Cause the Order Cancellation)
                </span>
              </h1>
            </div>
            <div className="lg:flex gap-6">
              <div className="lg:w-1/2">
                <InputFileds
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.CardHolderName}
                  name="CardHolderName"
                  type="text"
                  label="Card Holder Name"
                />
              </div>
              <div className="lg:w-1/2">
                <InputFileds
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.CardNumber}
                  name="CardNumber"
                  type="text"
                  label="Card Number"
                />
              </div>
            </div>
            <div className="lg:flex gap-6 my-10">
              <div className="lg:w-1/2">
                <InputFileds
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.ExpirationDate}
                  name="ExpirationDate"
                  type="date"
                  label="Expiration Date"
                />
              </div>
              <div className="lg:w-1/2">
                <InputFileds
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.CVC}
                  name="CVC"
                  label="CVV/CVC"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PayMent;
