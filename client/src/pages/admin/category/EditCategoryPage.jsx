import React from "react";
import { Link } from "react-router-dom";
import FormInput from "../../../components/FormInput";

export default function EditCategoryPage() {
  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="text-2xl">Edit Category</h1>
        <Link
          to={"/admin/category/1"}
          className="bg-homeBg p-2 rounded-lg text-white hover:bg-blue-500 nav-link"
        >
          Go Back
        </Link>
      </div>
      <div className="my-10">
        <FormInput
          title={"Category Name"}
          type={"text"}
          placeholder={"Enter Name"}
        />
        <button className="bg-homeBg p-2 rounded-lg text-white hover:bg-blue-500 nav-link">
          Save Category
        </button>
      </div>
    </div>
  );
}
