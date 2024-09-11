import React from "react";
import { FaPlus } from "react-icons/fa6";
import ProductListItem from "../../../components/Admin/Products/ProductListItem";
import { Link } from "react-router-dom";

export default function AdminProductPage() {
  return (
    <div>
      <div className="flex justify-end">
        <Link
          to={"/admin/products/new"}
          className="flex gap-3 items-center bg-homeBg p-2 rounded-lg text-white hover:bg-blue-500 nav-link"
        >
          Add Product
          <span>
            <FaPlus />
          </span>
        </Link>
      </div>
      <h1 className="text-2xl my-2">All Products</h1>
      <div className="my-10">
        <ProductListItem />
        <ProductListItem />
        <ProductListItem />
        <ProductListItem />
        <ProductListItem />
        <ProductListItem />
      </div>
    </div>
  );
}
