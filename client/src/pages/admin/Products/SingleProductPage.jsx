import React from "react";
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
    </div>
  );
}
