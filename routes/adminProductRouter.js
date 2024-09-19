import { Router } from "express";
import { validateAddProductInput } from "../middleware/validationMiddleware.js";
import {
  addNewProduct,
  uploadProductImage,
} from "../controllers/adminProductController.js";
import upload from "../middleware/multerMiddleware.js";

const router = Router();

router.post("/", validateAddProductInput, addNewProduct);
router.post(
  "/product-image",
  upload.single("productImage"),
  uploadProductImage
);
router.post(
  "/featured-image",
  upload.single("featuredImage"),
  uploadProductImage
);
export default router;
