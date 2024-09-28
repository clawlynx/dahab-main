import React from "react";
import { FaPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function AdminBlogPage() {
  return (
    <div>
      <div className="flex justify-end">
        <Link
          to={"/admin/blogs/new"}
          className="flex gap-3 items-center bg-homeBg p-2 rounded-lg text-white hover:bg-blue-500 nav-link"
        >
          Add New Blog
          <span>
            <FaPlus />
          </span>
        </Link>
      </div>
    </div>
  );
}
