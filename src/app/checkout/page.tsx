"use client";
import React, { useState } from "react";
import Stepper from "awesome-react-stepper";
import PersonelInformation from "../Components/Check-Out/PersonelInformation";
import { FaTruckFast } from "react-icons/fa6";
import Marquee from "react-fast-marquee";
import PayMent from "../Components/Check-Out/PayMent";
import CartSummary from "../Components/Check-Out/CartSummary";
import { Formik, useFormik } from "formik";
import toast from "react-hot-toast";
import axios from "axios";
import { useAppSelector } from "../Hooks/useRedux";
import useCarttotal from "../Hooks/useCarttotal";
import { format } from "date-fns";

const page = () => {
  const { items } = useAppSelector((s) => s.cart);
  const { Subtotal } = useCarttotal();
  const initialValues = {
    FirstName: "",
    LastName: "",
    Address: "",
    City: "",
    State: "",
    PostCode: "",
    Country: "",
    Email: "",
    Number: "",
    PaymentMethod: "",
    CardHolderName: "",
    CardNumber: "",
    ExpirationDate: "",
    CVC: "",
  };
  // const validateFields = (values: typeof initialValues) => {
  //   const errors: { [key: string]: string } = {};

  //   // Check if required fields are empty
  //   if (!values.FirstName) {
  //     errors.FirstName = "First name is required.";
  //   }
  //   if (!values.LastName) {
  //     errors.LastName = "Last name is required.";
  //   }
  //   if (!values.Address) {
  //     errors.Address = "Address is required.";
  //   }
  //   if (!values.City) {
  //     errors.City = "City is required.";
  //   }
  //   if (!values.State) {
  //     errors.State = "State is required.";
  //   }
  //   if (!values.PostCode) {
  //     errors.PostCode = "Post code is required.";
  //   }
  //   if (!values.Country) {
  //     errors.Country = "Country is required.";
  //   }
  //   if (!values.Email) {
  //     errors.Email = "Email is required.";
  //   } else if (!/\S+@\S+\.\S+/.test(values.Email)) {
  //     errors.Email = "Email is invalid.";
  //   }
  //   if (!values.Number) {
  //     errors.Number = "Phone number is required.";
  //   } else if (!/^\d{10}$/.test(values.Number)) {
  //     errors.Number = "Phone number must be 10 digits.";
  //   }

  //   // Conditional validation for card details
  //   if (values.PaymentMethod === "CardPayment") {
  //     if (!values.CardHolderName) {
  //       errors.CardHolderName = "Card holder name is required.";
  //     }
  //     if (!values.CardNumber) {
  //       errors.CardNumber = "Card number is required.";
  //     } else if (!/^\d{16}$/.test(values.CardNumber)) {
  //       errors.CardNumber = "Card number must be 16 digits.";
  //     }
  //     if (!values.ExpirationDate) {
  //       errors.ExpirationDate = "Expiration date is required.";
  //     }
  //     if (!values.CVC) {
  //       errors.CVC = "CVC is required.";
  //     } else if (!/^\d{3}$/.test(values.CVC)) {
  //       errors.CVC = "CVC must be 3 digits.";
  //     }
  //   }

  //   return errors;
  // };

  const handleFinalSubmit = async (values: any) => {
    console.warn("paymentytpe", values.PaymentMethod);
    // const errors = validateFields(values);

    //   if (Object.keys(errors).length > 0) {
    //     // Show toast notifications for each error
    //     Object.entries(errors).forEach(([field, message]) => {
    //       toast.error(`${field}: ${message}`);
    //     });
    //     return;
    //   }
    const payload = {
      data: {
        Customer_Name: `${values.FirstName} ${values.LastName}`,
        Email: values.Email,
        Address: `${values.Address} ${values.City} ${values.State} ${values.PostCode} ${values.Country}`,
        phone: values.Number,
        Products: items.map((product: any) => ({
          product_id: product.id,
          product_name: product.title,
          quantity: product.quantity,
          price: product.price,
          Selected_Size: product.selectedSize || "N/A",
          Selected_Color: product.selectedColor || "N/A",
        })),
        Total_Amount: Subtotal,
        Payment_Method: values.PaymentMethod,
        Card_Holder_Name: values.CardHolderName,
        Card_Number: values.CardNumber,
        Expiration_Date:
          values.PaymentMethod === "COD" ? null : values.ExpirationDate,
        CVC: values.CVC,
      },
    };
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/orders`,
        payload
      );
      if (response) {
        toast.success("Your Order Has been Placed");
      }
    } catch (error) {
      console.warn("error", error);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => {
        // console.warn("Final values:", values);
      }}
    >
      {(formik) => {
        return (
          <form onSubmit={formik.handleSubmit}>
            <div>
              <Marquee className=" " direction="right" speed={100}>
                <span>
                  <FaTruckFast className="  text-[5rem]" />
                </span>
              </Marquee>
            </div>
            <div>
              <div className="my-20 px-5 ">
                <Stepper
                  btnPos="center"
                  onSubmit={(step) => {
                    if (step === 3) {
                      handleFinalSubmit(formik.values);
                    } else {
                      formik.setTouched({}); // Optionally reset touched
                    }
                  }}
                >
                  <div className="xl:w-1/2 lg:w-[70%] px-5 lg:px-0 mx-auto">
                    <PersonelInformation formik={formik} />
                  </div>
                  <div className="xl:w-1/2 lg:w-[70%] px-5 lg:px-0 mx-auto">
                    <PayMent formik={formik} />
                  </div>
                  <div>
                    <CartSummary />
                  </div>
                </Stepper>
              </div>
            </div>
          </form>
        );
      }}
    </Formik>
  );
};

export default page;
