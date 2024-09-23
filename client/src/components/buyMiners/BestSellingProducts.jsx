import React, { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RiArrowDropUpLine } from "react-icons/ri";
import { CiFilter } from "react-icons/ci";
import ProductCard from "./ProductCard";
import SearchAndFilter from "./SearchAndFilter";

const sortOptions = [
  "Popularity",
  "Price: Low-High",
  "Price: High-Low",
  "Bearscore: Low-High",
];

export default function BestSellingProducts({ products }) {
  const [sortby, setSortBy] = useState("Popularity");
  const [showSortDrop, setShowSortDrop] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  return (
    <div className="px-2 py-5 w-full">
      <div className="flex justify-between items-center">
        <h1 className="text-base lg:text-2xl font-semibold">
          Our Bestselling Products
        </h1>
        <div className="relative">
          <button
            className="flex lg:hidden items-center gap-3 border rounded-lg px-3 py-2 hover:bg-gray-200 nav-link text-[#667085]"
            onClick={() => setShowFilter(!showFilter)}
          >
            <span>
              <CiFilter />
            </span>
            <span>Filter</span>
          </button>
          {showFilter && (
            <div className="absolute lg:hidden popupwidth right-0 top-12 h-screen animate-slideInBottom bg-gray-200 z-20 p-5 rounded-lg">
              <SearchAndFilter setShowFilter={setShowFilter} />
            </div>
          )}
        </div>

        <div className="relative lg:block hidden">
          <div
            className="flex gap-7 items-center text-base font-normal text-[#667085] border p-2 rounded-lg cursor-pointer"
            onClick={() => setShowSortDrop(!showSortDrop)}
          >
            <h1>Sort By: {sortby}</h1>
            <p>
              {showSortDrop ? <RiArrowDropUpLine /> : <RiArrowDropDownLine />}
            </p>
          </div>
          {showSortDrop && (
            <div className="flex flex-col gap-5 py-5 px-2 border rounded-lg absolute w-full top-12 bg-white">
              {sortOptions.map((x, index) => (
                <p
                  className="cursor-pointer animate-slideInTop"
                  key={index}
                  onClick={() => {
                    setSortBy(x);
                    setShowSortDrop(false);
                  }}
                >
                  {x}
                </p>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10">
        {products?.length > 0 &&
          products.map((x) => (
            <ProductCard
              key={x._id}
              img={x.productImage}
              name={x.productName}
              price={x.price}
            />
          ))}
      </div>
    </div>
  );
}
