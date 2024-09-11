import React from "react";
import { handleChatClick } from "../../../utils/whatsapp";

export default function MiningFacilitiesSection() {
  return (
    <div className="bg-homeBg px-5 md:px-10 lg:px-[120px] py-10">
      <div className="bg-white p-10 flex lg:flex-row flex-col gap-10 lg:justify-around items-center rounded-lg">
        <div className="max-w-[500px] flex flex-col lg:items-start items-center lg:text-left text-center gap-5">
          <h4 className="text-base font-semibold text-btnGreen">Host Mining</h4>
          <h1 className="text-[40px] font-semibold gradient-heading">
            Cutting-Edge Mining Facilities
          </h1>
          <p className="text-lg font-medium leading-7">
            Our mining farms provide the most modern and secure locations for
            your ASIC miners, ensuring optimal infrastucture conditions for peak
            performance
          </p>
          <button
            className="text-base w-fit font-semibold text-white px-4 py-2 rounded-lg bg-btnGreen hover:bg-btnHover nav-link"
            onClick={handleChatClick}
          >
            Know More
          </button>
        </div>
        <div className="max-h-[330px] max-w-[478px] rounded-md overflow-hidden">
          <img src="/miningfacility.jpg"></img>
        </div>
      </div>
    </div>
  );
}
