import { NotFoundError } from "../errors/customErrors.js";
import Blog from "../models/BlogModel.js";

export const getAllUserBlogs = async (req, res) => {
  const blogs = (await Blog.find()).reverse();
  if (!blogs) throw new NotFoundError("No blogs found");
  res.status(200).json({ msg: "success", blogs });
};
