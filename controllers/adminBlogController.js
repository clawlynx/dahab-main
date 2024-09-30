import { BadRequestError, NotFoundError } from "../errors/customErrors.js";
import { formatImage } from "../middleware/multerMiddleware.js";
import { v2 as cloudinary } from "cloudinary";
import Blog from "../models/BlogModel.js";

export const uploadBlogImage = async (req, res) => {
  if (req.file) {
    const file = formatImage(req.file);
    const response = await cloudinary.uploader.upload(file);
    res.status(200).json({
      msg: "success",
      url: response.secure_url,
      publicId: response.public_id,
    });
  } else {
    throw new BadRequestError("No file found");
  }
};

export const addNewBlog = async (req, res) => {
  const newBlog = new Blog({
    title: req.body.title,
    blogImage: req.body.blogImage,
    blogImagePublicId: req.body.blogImagePublicId,
    content: req.body.content,
  });
  await newBlog.save();
  res.status(201).json({ msg: "success" });
};

export const getAllBlogs = async (req, res) => {
  const blogs = await Blog.find();
  if (!blogs) throw new NotFoundError("No blogs found");
  res.status(200).json({ msg: "success", blogs });
};

export const getSingleBlog = async (req, res) => {
  const blog = await Blog.findById(req.params.id);
  if (!blog) throw new NotFoundError("No blog found");
  res.status(200).json({ msg: "success", blog });
};
