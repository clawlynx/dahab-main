import React from "react";
import DetailElt from "./DetailElt";

export default function ProductDetails() {
  return (
    <div className="bg-white rounded-lg p-5 my-10">
      <div className="flex flex-col gap-10">
        <DetailElt title={"HashRate"} value={"20 Th/s"} />
        <DetailElt title={"Power"} value={"100 Watts"} />
        <DetailElt title={"Algorithm"} value={"KHeavyHash"} />
      </div>
    </div>
  );
}
