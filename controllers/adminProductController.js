import { BadRequestError } from "../errors/customErrors.js";
import { formatImage } from "../middleware/multerMiddleware.js";
import Product from "../models/ProductModel.js";
import { v2 as cloudinary } from "cloudinary";

export const addNewProduct = async (req, res) => {
  const newProduct = new Product({
    productName: req.body.productName,
    hashRate: req.body.hashRate,
    productImage: req.body.productImage,
    productImagePublicId: req.body.productImagePublicId,
    featuredImage: req.body.featuredImage,
    featuredImagePublicId: req.body.featuredImagePublicId,
    power: req.body.power,
    algorithm: req.body.algorithm,
    description: req.body.description,
    price: req.body.price,
    manufacturer: req.body.manufacturerItem,
    cryptoCurrency: req.body.cryptoCurrencyItem,
  });
  await newProduct.save();
  res.status(201).json({ msg: "success" });
};

export const uploadProductImage = async (req, res) => {
  if (req.file) {
    const file = formatImage(req.file);
    const response = await cloudinary.uploader.upload(file);
    res.status(200).json({
      msg: "success",
      url: response.secure_url,
      publicId: response.public_id,
    });
  } else {
    throw new BadRequestError("No files found");
  }
};
