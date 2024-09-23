import { Router } from "express";
import { getAllUserProducts } from "../controllers/userProductController.js";

const router = Router();

router.get("/", getAllUserProducts);

export default router;
