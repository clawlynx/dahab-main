import React from "react";
import { useParams } from "react-router-dom";
import useGetSingleBlog from "../../../hooks/adminBlogs/useGetSingleBlog";

export default function AdminSingleBlogPage() {
  const { id } = useParams();
  const { loading, blog } = useGetSingleBlog({ id });
  console.log(blog);

  return <div>AdminSingleBlogPage</div>;
}
