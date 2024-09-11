import React from "react";
import { BsUpload } from "react-icons/bs";

export default function ProductImageUpload({ title }) {
  return (
    <div className="my-3">
      <h1 className="mb-2">{title}</h1>
      <label className="flex flex-col gap-2 justify-center border w-fit items-center p-3 rounded-lg border-blue-500 cursor-pointer hover:bg-blue-700 nav-link hover:text-white">
        <input type="file" className="hidden" accept="image/*" required />
        <div className="text-xl">
          <BsUpload />
        </div>
        <p>Upload</p>
      </label>
    </div>
  );
}
