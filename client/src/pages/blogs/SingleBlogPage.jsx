import React from "react";
import BlogHeader from "../../components/blogs/singleblog/BlogHeader";
import BlogContent from "../../components/blogs/singleblog/BlogContent";
import RelatedBlogs from "../../components/blogs/singleblog/RelatedBlogs";
import useGetSingleUserBlog from "../../hooks/userBlogs/useGetSingleUserBlog";
import Loading from "../../components/Loading";
import { Link, useParams } from "react-router-dom";
import useGetRelatedBlogs from "../../hooks/userBlogs/useGetRelatedBlogs";

export default function SingleBlogPage() {
  const { id } = useParams();
  const { loading, blog } = useGetSingleUserBlog({ id });
  const { loading: relatedLoading, blogs } = useGetRelatedBlogs({ id });
  return loading ? (
    <Loading />
  ) : (
    <div>
      <div className="my-5 flex justify-end">
        <Link
          className=" p-2 text-lg text-white px-4 mx-5 rounded-lg bg-btnGreen hover:bg-btnHover nav-link"
          to={"/blogs"}
        >
          Back
        </Link>
      </div>

      <BlogHeader data={blog && blog} />
      <BlogContent data={blog && blog} />
      <RelatedBlogs loading={relatedLoading} data={blogs} />
    </div>
  );
}
