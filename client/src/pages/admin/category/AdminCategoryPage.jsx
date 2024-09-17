import React from "react";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import CategoryListItem from "../../../components/Admin/category/CategoryListItem";

export default function AdminCategoryPage() {
  return (
    <div>
      <div className="flex justify-end">
        <Link
          to={"/admin/category/new"}
          className="flex gap-3 items-center bg-homeBg p-2 rounded-lg text-white hover:bg-blue-500 nav-link"
        >
          Add Category
          <span>
            <FaPlus />
          </span>
        </Link>
      </div>
      <h1 className="text-2xl my-2">All Categories</h1>
      <div className="my-10">
        <CategoryListItem />
        <CategoryListItem />
        <CategoryListItem />
        <CategoryListItem />
        <CategoryListItem />
      </div>
    </div>
  );
}
