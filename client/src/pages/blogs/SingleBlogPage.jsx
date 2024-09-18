import React from "react";
import BlogHeader from "../../components/blogs/singleblog/BlogHeader";
import BlogContent from "../../components/blogs/singleblog/BlogContent";
import RelatedBlogs from "../../components/blogs/singleblog/RelatedBlogs";

export default function SingleBlogPage() {
  return (
    <div>
      <BlogHeader />
      <BlogContent />
      <RelatedBlogs />
    </div>
  );
}
