import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useGetSingleBlog from "../../../hooks/adminBlogs/useGetSingleBlog";
import Loading from "../../../components/Loading";
import FormInput from "../../../components/FormInput";
import ProductImageUpload from "../../../components/Admin/Products/ProductImageUpload";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import useUpdateBlogImage from "../../../hooks/adminBlogs/useUpdateBlogImage";
import useEditBlog from "../../../hooks/adminBlogs/useEditBlog";

export default function EditAdminBlog() {
  const { id } = useParams();
  const { loading, blog } = useGetSingleBlog({ id });
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [blogImage, setBlogImage] = useState("");
  const [blogImageId, setBlogImageId] = useState("");
  const {
    loading: imageLoading,
    details,
    updateBlogImage,
  } = useUpdateBlogImage();
  const { loading: editLoading, editBlog } = useEditBlog();

  useEffect(() => {
    if (blog) {
      setContent(blog.content);
      setTitle(blog.title);
      setBlogImage(blog.blogImage);
      setBlogImageId(blog.blogImagePublicId);
    }
  }, [blog]);

  useEffect(() => {
    if (details) {
      setBlogImage(details.blogImage);
      setBlogImageId(details.blogImagePublicId);
    }
  }, [details, imageLoading]);

  return loading ? (
    <Loading />
  ) : (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="text-2xl">Edit Blog</h1>
        <Link
          to={`/admin/blogs/${id}`}
          className="bg-homeBg p-2 rounded-lg text-white hover:bg-blue-500 nav-link"
        >
          Go Back
        </Link>
      </div>
      <div className="my-10">
        <FormInput
          type={"text"}
          title={"Blog Title"}
          value={title}
          onchange={(e) => setTitle(e.target.value)}
          placeholder={"Enter Title"}
        />
        <div className="flex gap-2 items-end">
          <ProductImageUpload
            title={"Blog Image"}
            changeFunction={(e) => updateBlogImage({ e, id })}
          />
          {imageLoading && <Loading />}
          {blogImage && (
            <div className="w-20 h-20 pb-5 rounded-lg overflow-hidden">
              <img src={blogImage} className="object-contain"></img>
            </div>
          )}
        </div>
        <ReactQuill
          theme="snow"
          value={content}
          onChange={(value) => setContent(value)}
          className="bg-purple-50 rounded-lg"
        />
        <button
          onClick={() =>
            editBlog({
              title,
              blogImage,
              blogImagePublicId: blogImageId,
              content,
              id,
            })
          }
          className="bg-homeBg p-2 my-5 rounded-lg text-white hover:bg-blue-500 nav-link"
          disabled={editLoading}
        >
          Save Blog
        </button>
        {editLoading && <Loading />}
      </div>
    </div>
  );
}
