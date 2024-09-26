"use client";
import axios from "axios";
import Link from "next/link";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useAppDispatch } from "../Hooks/useRedux";
import { setToken } from "../redux/slices/token-slices";

const page = () => {
  const [formData, setFormData] = useState({
    email: "",
    Password: "",
  });
  const dispatch = useAppDispatch();
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const LoginHandler = async (e: any) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/auth/local`,
        {
          identifier: formData.email,
          password: formData.Password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      toast.success("Login Successfully");
      console.warn(response.data.jwt);
      dispatch(setToken(response.data.jwt));
      return response.data;
    } catch (error: any) {
      const errorResponse = error.response.data;

      // Check if errorResponse exists and extract the message
      const errorMessage = errorResponse?.error?.message || error.message;

      toast.error(errorMessage);
    }
  };

  return (
    <div>
      <div className="h-screen flex items-center justify-center">
        <div className="w-full ">
          <h1 className="text-3xl text-center tracking-wider font-semibold my-10">
            Login Now{" "}
          </h1>
          <form className=" max-w-xl mx-auto">
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="block py-2.5  px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Email address
              </label>
            </div>
            <div className="relative z-0 w-full my-10 group">
              <input
                type="password"
                name="Password"
                value={formData.Password}
                onChange={handleChange}
                className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Password
              </label>
            </div>
            <div>
              <h1>
                Don't Have an Account{" "}
                <span className="text-orange-500">
                  <Link href={"/register"}>Register Now</Link>
                </span>
              </h1>
            </div>

            <button
              onClick={LoginHandler}
              className="bg-black w-full text-white tracking-wider font-medium text-xl py-2 rounded-lg mt-8 "
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default page;
