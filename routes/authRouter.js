import { Router } from "express";
import {
  validateLoginInput,
  validateRegisterInput,
} from "../middleware/validationMiddleware.js";
import {
  getUserInfo,
  loginAdmin,
  logoutUser,
  registerAdmin,
} from "../controllers/authController.js";
import { authenticateUser } from "../middleware/authMiddleware.js";

const router = Router();

router.post("/register", validateRegisterInput, registerAdmin);
router.post("/login", validateLoginInput, loginAdmin);
router.post("/logout", logoutUser);
router.get("/user", authenticateUser, getUserInfo);

export default router;
