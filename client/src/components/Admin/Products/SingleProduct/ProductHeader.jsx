import React from "react";
import { Link } from "react-router-dom";

export default function ProductHeader() {
  return (
    <div className="bg-blue-200 flex justify-between items-center p-5 rounded-lg">
      <div className="flex gap-5 items-center">
        <img
          src="/buycarousel.png"
          className="w-52 h-52 rounded-lg overflow-hidden"
          alt="productimage"
        />
        <div>
          <h1 className="text-2xl font-semibold my-2">Antminer KS5</h1>
          <p className="text-xl font-light">99 AED</p>
        </div>
      </div>
      <Link
        to={"/admin/products"}
        className="flex p-2 bg-homeBg rounded-lg hover:bg-blue-500 text-white nav-link"
      >
        Go Back
      </Link>
    </div>
  );
}
