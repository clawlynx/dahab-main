import React from "react";

export default function PriceTable() {
  return (
    <div className="max-w-[794px] mx-auto my-10">
      <div className="bg-[#1ECBAF4D] p-3 text-[#086153] text-2xl font-semibold">
        THERMAL PASTE
      </div>
      <div className="p-3 flex justify-around border border-[#B7ECE4] text-base font-medium text-[#B1B1B1]">
        <div>{""}</div>
        <div className="ms-20">Price</div>
      </div>
      <div className="p-3 flex justify-around border border-[#B7ECE4] text-base font-semibold">
        <div>{"Antminer"}</div>
        <div>{""}</div>
      </div>
      {Array.from({ length: 6 }).map((_, index) => (
        <div
          key={index}
          className="p-3 flex justify-around border border-[#B7ECE4] text-base font-medium"
        >
          <div>{"Each Hashboard (single side)"}</div>
          <div>{"50 AED"}</div>
        </div>
      ))}
      <div className="bg-[#1ECBAF4D] p-3 text-[#086153] text-2xl font-semibold">
        TROUBLESHOOTING
      </div>
      <div className="p-3 flex justify-around border border-[#B7ECE4] text-base font-medium text-[#B1B1B1]">
        <div>{""}</div>
        <div className="ms-20">Price</div>
      </div>
      <div className="p-3 flex justify-around border border-[#B7ECE4] text-base font-semibold">
        <div>{"Antminer"}</div>
        <div>{""}</div>
      </div>
      {Array.from({ length: 6 }).map((_, index) => (
        <div
          key={index}
          className="p-3 flex justify-around border border-[#B7ECE4] text-base font-medium"
        >
          <div>{"Each Hashboard (single side)"}</div>
          <div>{"50 AED"}</div>
        </div>
      ))}
    </div>
  );
}
