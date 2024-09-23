import React from "react";
import BestSellingProducts from "./BestSellingProducts";
import SearchAndFilter from "./SearchAndFilter";
import ProductCard from "./ProductCard";
import Pagination from "./Pagination";
import useGetAllProducts from "../../hooks/userProducts/useGetAllProducts";
import Loading from "../Loading";

export default function BuyMinersSection() {
  const { loading, refetch, products } = useGetAllProducts();
  return (
    <div className="">
      <div className="h-24 lg:h-60 buy-miners-heading-bg flex justify-center items-center">
        <h1 className="buy-miners-heading text-2xl lg:text-[40px] font-semibold">
          Shop Best Miners
        </h1>
      </div>
      <div className="flex gap-4 px-5 md:px-10 lg:px-[120px] py-10">
        <div className="lg:block hidden">
          <SearchAndFilter />
        </div>
        {loading ? <Loading /> : <BestSellingProducts products={products} />}
      </div>
      <div className="flex justify-center">
        <Pagination />
      </div>
      <div className="px-5 md:px-10 lg:px-[120px] bg-homeBg lg:bg-inherit py-10">
        <h1 className="text-base lg:text-4xl font-semibold lg:text-black text-white text-center">
          Top Rated Products
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-10">
          {products?.length > 0 &&
            products
              .slice(0, 4)
              .map((x) => (
                <ProductCard
                  key={x._id}
                  name={x.productName}
                  img={x.productImage}
                  price={x.price}
                />
              ))}
        </div>
      </div>
    </div>
  );
}
