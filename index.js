import "express-async-errors";
import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import cors from "cors";
import { v2 as cloudinary } from "cloudinary";

import errorHandlerMiddleware from "./middleware/errorHandleMiddleware.js";

import authRouter from "./routes/authRouter.js";
import adminProductRouter from "./routes/adminProductRouter.js";
import { authenticateUser } from "./middleware/authMiddleware.js";

const app = express();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);

app.get("/", (req, res) => {
  res.send("Welcome to dahab server");
});

app.use("/api/admin/auth", authRouter);
app.use("/api/admin/product", authenticateUser, adminProductRouter);

app.use("*", (req, res) => {
  res.status(404).json({ msg: "Not Found" });
});

app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;
try {
  await mongoose.connect(process.env.MONGODB_URI);
  app.listen(port, () => {
    console.log(`server running on port ${port}`);
  });
} catch (error) {
  console.log(error);
  process.exit(1);
}
