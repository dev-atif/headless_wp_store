import React from "react";
import blog from "../../../../Public/blog.jpg";
import Image from "next/image";
const BlogSection = () => {
  return (
    <div>
      <div>
        <div className=" my-10 flex lg:flex-row flex-col  lg:h-[70dvh] items-center  justify-center  gap-12">
          <div className="relative lg:w-1/2 w-auto !h-60 !lg:h-72 ">
            <Image
              src={blog}
              alt="blog"
              className="  object-cover "
              //   layout="fill"
              height={400}
              width={4000}
              objectFit="cover"
            />
          </div>
          <div className="lg:w-1/2 w-full flex flex-col gap-8  justify-center ">
            <h1 className="lg:text-3xl text-42xl uppercase font-semibold  leading-0 tracking-wider">
              Unveiling the Future: How AI is Transforming Everyday Life
            </h1>
            <p className=" text-lg">
              Discover how artificial intelligence is seamlessly integrating
              into our daily routines, from smart homes to personalized shopping
              experiences. Explore the ways AI is reshaping industries and
              enhancing convenience in our modern world.
            </p>
            <button className="bg-black text-white w-1/2 py-2 rounded-lg font-bold tracking-widest">
              Read now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
