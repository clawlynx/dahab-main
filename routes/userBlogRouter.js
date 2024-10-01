import { Router } from "express";
import { getAllUserBlogs } from "../controllers/userBlogController.js";

const router = Router();

router.get("/", getAllUserBlogs);

export default router;
