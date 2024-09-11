import React from "react";
import { IoMdAddCircleOutline } from "react-icons/io";

export default function ProductCard({ bgwhite }) {
  return (
    <div
      className={`pt-2 border flex flex-col gap-5 items-center rounded-lg hover:shadow-xl nav-link ${
        bgwhite && "bg-white"
      }`}
    >
      <div className="w-[200px] h-[200px]">
        <img src="shopproduct.jpg"></img>
      </div>
      <h1 className="text-xl text-center font-medium">
        Anexminer ET5 1200MH ETHashETC Miner
      </h1>
      <p className="text-xl font-semibold text-[#F79009]">AED 1998</p>
      <div className="text-base w-full font-semibold flex gap-3 justify-center py-3 border-t items-center hover:bg-[#1ECBAF] rounded-lg nav-link">
        <p>Buy Now</p>
        <p>
          <IoMdAddCircleOutline />
        </p>
      </div>
    </div>
  );
}
