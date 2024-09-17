import mongoose, { model, Schema } from "mongoose";

const ProductSchema = new Schema(
  {
    productName: {
      type: String,
    },
    productImage: {
      type: String,
    },
    featuredImage: {
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
    category: {
      type: mongoose.Types.ObjectId,
      ref: "Category",
    },
  },
  {
    timestamps: true,
  }
);

const Product = model("Product", ProductSchema);
export default Product;
