import React from "react";
import { Link } from "react-router-dom";
import FormInput from "../../../components/FormInput";
import ProductImageUpload from "../../../components/Admin/Products/ProductImageUpload";

export default function EditProduct() {
  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="text-2xl">Edit Product</h1>
        <Link
          to={"/admin/products/1"}
          className="bg-homeBg p-2 rounded-lg text-white hover:bg-blue-500 nav-link"
        >
          Go Back
        </Link>
      </div>
      <div className="my-10">
        <FormInput title={"Name"} type={"text"} placeholder={"Enter Name"} />
        <ProductImageUpload title={"Product Image"} />
        <FormInput
          title={"HashRate (Th/s)"}
          type={"Number"}
          placeholder={"Enter hashrate in Th/s"}
        />
        <FormInput
          title={"Power (Watts)"}
          type={"Number"}
          placeholder={"Enter power in Watts"}
        />
        <FormInput
          title={"Algorithm"}
          type={"text"}
          placeholder={"Enter the algorithm of your Miner"}
        />
        <FormInput
          title={"Price (AED)"}
          type={"Number"}
          placeholder={"Enter price of product"}
        />
        <ProductImageUpload title={"Featured Image"} />
        <div className="form-row">
          <label className="form-label">Description</label>
          <div className="flex items-center">
            <textarea
              rows={3}
              className="w-full py-1 px-3 rounded-lg bg-purple-50 border border-gray-300 text-gray-900"
              placeholder="Enter your description"
              required
            ></textarea>
          </div>
        </div>
        <button className="bg-homeBg p-2 rounded-lg text-white hover:bg-blue-500 nav-link">
          Save Product
        </button>
      </div>
    </div>
  );
}
