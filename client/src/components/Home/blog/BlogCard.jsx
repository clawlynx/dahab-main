import React from "react";
import { Link } from "react-router-dom";

export default function BlogCard({ image, date, title, content }) {
  return (
    <div className="max-w-96 p-2 rounded-lg shadow-sm border">
      <div className="rounded-lg overflow-hidden mb-5">
        <img src={image}></img>
      </div>
      <div className="flex flex-col gap-5 ">
        <p className="font-semibold text-base text-btnGreen">{date}</p>
        <h3 className="text-lg font-semibold text-black">{title}</h3>
        <p className="text-lg font-normal text-gray-600">{content}</p>
        <Link
          to={"/blogs/1"}
          className="text-lg font-semibold text-btnGreen underline"
        >
          Read More
        </Link>
      </div>
    </div>
  );
}
