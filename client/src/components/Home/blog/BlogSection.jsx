import React from "react";
import BlogCard from "./BlogCard";

export default function BlogSection() {
  return (
    <div className="px-5 md:px-10 lg:px-[120px] py-10">
      <h4 className="text-base font-semibold text-btnGreen text-center">
        Blogs
      </h4>
      <h4 className="text-[40px] font-semibold gradient-heading text-center">
        Our Latest Insights
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 w-full justify-items-center my-10">
        <BlogCard
          image={"/blogimage1.jpg"}
          alt={
            "Crypto-mining-machines-in-abu-dhabi-UAE-for-maximum-profitability"
          }
          date={"16 Jan 2024"}
          title={"Maximising profits: A beginners guide to crypto Mining"}
          desc={
            "Explore top-tier CRYPTO MINING MACHINES IN UAE at Dahab Miners. Specializing in high-efficiency ASIC miners in Abu Dhabi, UAE, we offer the best solutions for crypto mining in UAE. Browse our range today and enhance your mining setup!"
          }
          content={
            "Crypto Mining can be a lucrative venture if you know where to start. Learn the basics and essential tips to maximize your mining profits"
          }
        />
        <BlogCard
          image={"/blogimage2.jpg"}
          alt={
            "Complete-guide-to-crypto-mining-in-abu-dhabi-UAE-available-here"
          }
          date={"15 Jan 2024"}
          desc={
            "Dahab Miners is your trusted partner for crypto mining in UAE, offering a diverse array of advanced ASIC miners in Abu Dhabi. Discover our premium CRYPTO MINING MACHINES IN UAE and optimize your mining operations with the best tools available."
          }
          title={"The Future of Cryptocurrency: Trends to watch in 2024"}
          content={
            "Stay ahead in the crypto world by understanding the latest trends shaping the future of cryptocurrency impacting miners"
          }
        />
        <BlogCard
          image={"/blogimage1.jpg"}
          alt={"asic-miners-in-abu-dhabi-UAE-for-new-miners"}
          date={"16 Jan 2024"}
          desc={
            "Looking for reliable crypto mining solutions in UAE? Dahab Miners provides cutting-edge ASIC miners in Abu Dhabi, perfect for beginners and pros alike. Check out our CRYPTO MINING MACHINES IN UAE and start mining efficiently today!"
          }
          title={"Choosing the right ASIC miner for your needs"}
          content={
            "Not all ASIC Miners are created equal.Discover how to select the best equipment to optimize your mining efficiency and returns"
          }
        />
      </div>
    </div>
  );
}
