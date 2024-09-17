import React from "react";
import { Link } from "react-router-dom";

export default function CategoryListItem() {
  return (
    <div className=" flex justify-between px-10 items-center bg-homeBgGradient rounded-lg my-2 p-3 text-white">
      <h3>Category 1</h3>

      <Link
        to={"/admin/category/1"}
        className="flex p-2 bg-homeBg rounded-lg hover:bg-blue-500 nav-link"
      >
        Details
      </Link>
    </div>
  );
}
