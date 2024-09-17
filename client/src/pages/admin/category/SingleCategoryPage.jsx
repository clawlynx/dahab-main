import React from "react";
import { Link } from "react-router-dom";

export default function SingleCategoryPage() {
  return (
    <div>
      <div className="flex justify-end">
        <Link
          to={"/admin/category"}
          className="flex gap-3 items-center bg-homeBg p-2 rounded-lg text-white hover:bg-blue-500 nav-link"
        >
          Go Back
        </Link>
      </div>
      <h1 className="text-2xl my-2">Category Name</h1>
      <div className="p-5 flex gap-4 justify-end">
        <Link
          to={"/admin/category/1/edit"}
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
