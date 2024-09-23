import { NotFoundError } from "../errors/customErrors.js";
import Product from "../models/ProductModel.js";

export const getAllUserProducts = async (req, res) => {
  const products = await Product.find();
  if (!products) throw new NotFoundError("No product found");
  res.status(200).json({ msg: "success", products });
};
