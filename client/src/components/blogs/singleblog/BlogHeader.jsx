import React from "react";

export default function BlogHeader() {
  return (
    <div className="bg-[#E5E5E5] px-5 md:px-10 lg:px-[120px] py-10 flex lg:flex-row flex-col gap-5 items-center">
      <img
        src="/blogimage1.jpg"
        className="lg:w-1/2 w-full rounded-lg overflow-hidden"
        alt="blog image"
      ></img>
      <div>
        <h2 className="text-2xl py-3 font-semibold">
          Maximising profits: A beginners guide to crypto Mining
        </h2>
        <p className="text-gray-500 text-base">16/05/2024</p>
        <p className="text-gray-500 text-base">Author</p>
      </div>
    </div>
  );
}
