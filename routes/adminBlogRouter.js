import { Router } from "express";
import upload from "../middleware/multerMiddleware.js";
import {
  addNewBlog,
  getAllBlogs,
  getSingleBlog,
  uploadBlogImage,
} from "../controllers/adminBlogController.js";
import { validateBlogInput } from "../middleware/validationMiddleware.js";

const router = Router();

router.get("/", getAllBlogs);
router.get("/:id", getSingleBlog);
router.post("/", validateBlogInput, addNewBlog);
router.post("/blog-image", upload.single("blogImage"), uploadBlogImage);

export default router;
