"use client";
import axios from "axios";
import Link from "next/link";
import React, { useState } from "react";
import toast from "react-hot-toast";

const page = () => {
  const [formData, setFormData] = useState({
    email: "",
    Password: "",
    username: "",
  });
  const [cpassword, setCpassword] = useState("");

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const registerUser = async (e: any) => {
    e.preventDefault();
    const { email, Password, username } = formData;

    if (!email || !Password || !cpassword || !username) {
      toast.error("Please fill in all required fields.");
      return;
    }

    // Check if Password and Confirm_Password match
    if (Password !== cpassword) {
      toast.error("Passwords do not match.");
      return;
    }
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/auth/local/register`,
        {
          email,
          password: formData.Password,
          username,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      toast.success("User registered successfully");
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
        <div className="w-1/2">
          <form className="max-w-md mx-auto">
            <h1 className="text-3xl tracking-wider font-semibold my-10">
              Register Now{" "}
            </h1>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                User Name
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Email address
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
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
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="password"
                name="Confirm_Password"
                onChange={(e) => setCpassword(e.target.value)}
                className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Confirm password
              </label>
            </div>

            <div>
              <h1>
                Already have an account{" "}
                <Link className="text-orange-500" href={"/login"}>
                  Login Now
                </Link>
              </h1>
            </div>
            <button
              onClick={registerUser}
              className="bg-black w-full text-white tracking-wider font-medium text-xl py-2 rounded-lg mt-4 "
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
