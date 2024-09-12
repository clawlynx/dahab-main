import React from "react";
import { Link } from "react-router-dom";
import ProductHeader from "../../../components/Admin/Products/SingleProduct/ProductHeader";
import ProductDetails from "../../../components/Admin/Products/SingleProduct/ProductDetails";
import DescriptionBox from "../../../components/Admin/Products/SingleProduct/DescriptionBox";
import FeaturedSection from "../../../components/Admin/Products/SingleProduct/FeaturedSection";

export default function SingleProductPage() {
  return (
    <div>
      <ProductHeader />
      <ProductDetails />
      <DescriptionBox />
      <FeaturedSection />
      <div className="p-5 flex gap-4 justify-end">
        <Link
          to={"/admin/products/1/edit"}
          className="p-2 px-5 bg-homeBg text-white rounded-lg hover:bg-blue-500 nav-link"
        >
          Edit
        </Link>
        <button className="p-2 px-5 bg-red-700 text-white rounded-lg hover:bg-red-500 nav-link">
          Delete
        </button>
      </div>
    </div>
  );
}
