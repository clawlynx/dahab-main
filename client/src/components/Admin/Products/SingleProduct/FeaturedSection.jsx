import React from "react";

export default function FeaturedSection() {
  return (
    <div className="p-5">
      <div className="flex justify-between my-5">
        <h1 className="text-2xl">Featured Image</h1>
        <button className="bg-homeBg p-2 text-white rounded-lg hover:bg-blue-500">
          Make featured
        </button>
      </div>
      <img className="w-56 h-56 rounded-lg" src="/antiminer ks5.jpeg"></img>
    </div>
  );
}
