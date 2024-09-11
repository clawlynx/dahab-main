import React from "react";
import { Link } from "react-router-dom";

export default function ProductListItem() {
  return (
    <div className=" flex justify-between px-10 items-center bg-homeBgGradient rounded-lg my-2 p-3 text-white">
      <div className="flex gap-3 items-center">
        <img
          className="w-10 h-10 rounded-md overflow-hidden"
          src="/buycarousel.png"
          alt="product image"
        ></img>

        <h3>Antminer KS5</h3>
      </div>
      <Link
        to={"/admin/products/1"}
        className="flex p-2 bg-homeBg rounded-lg hover:bg-blue-500 nav-link"
      >
        Details
      </Link>
    </div>
  );
}
