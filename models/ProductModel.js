import mongoose, { model, Schema } from "mongoose";

const ProductSchema = new Schema(
  {
    productName: {
      type: String,
    },
    productImage: {
      type: String,
    },
    productImagePublicId: {
      type: String,
    },
    featuredImage: {
      type: String,
    },
    featuredImagePublicId: {
      type: String,
    },
    hashRate: {
      type: Number,
    },
    power: {
      type: Number,
    },
    algorithm: {
      type: String,
    },
    description: {
      type: String,
    },
    price: {
      type: Number,
    },
    manufacturer: {
      type: String,
    },
    cryptoCurrency: {
      type: [String],
    },
  },
  {
    timestamps: true,
  }
);

const Product = model("Product", ProductSchema);
export default Product;
