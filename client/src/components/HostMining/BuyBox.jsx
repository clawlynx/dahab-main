import React from "react";
import ProductCard from "../buyMiners/ProductCard";

export default function BuyBox() {
  return (
    <div className="px-5 md:px-10 xl:px-[120px] py-10">
      <h1 className="text-2xl lg:text-4xl font-semibold text-center">
        Buy and Host Mining
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-10">
        {Array.from({ length: 4 }).map((_, index) => (
          <ProductCard key={index} />
        ))}
      </div>
      <div className="flex justify-center">
        <button className="text-base font-medium border rounded-lg px-4 py-2 hover:bg-gray-200 nav-link">
          View More Products
        </button>
      </div>
    </div>
  );
}
