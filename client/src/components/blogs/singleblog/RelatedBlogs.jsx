import React from "react";
import BlogCard from "../../Home/blog/BlogCard";

export default function RelatedBlogs() {
  return (
    <div className="px-5 md:px-10 lg:px-[120px] py-10">
      <h3 className="text-xl font-semibold">Related Blogs</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 gap-y-10 w-full justify-items-center my-10">
        <BlogCard
          image={"/blogimage1.jpg"}
          date={"16 Jan 2024"}
          title={"Maximising profits: A beginners guide to crypto Mining"}
          content={
            "Crypto Mining can be a lucrative venture if you know where to start. Learn the basics and essential tips to maximize your mining profits"
          }
        />
        <BlogCard
          image={"/blogimage2.jpg"}
          date={"15 Jan 2024"}
          title={"The Future of Cryptocurrency: Trends to watch in 2024"}
          content={
            "Stay ahead in the crypto world by understanding the latest trends shaping the future of cryptocurrency impacting miners"
          }
        />
        <BlogCard
          image={"/blogimage1.jpg"}
          date={"16 Jan 2024"}
          title={"Choosing the right ASIC miner for your needs"}
          content={
            "Not all ASIC Miners are created equal.Discover how to select the best equipment to optimize your mining efficiency and returns"
          }
        />
      </div>
    </div>
  );
}
