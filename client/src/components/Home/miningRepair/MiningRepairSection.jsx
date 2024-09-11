import React from "react";
import { handleChatClick } from "../../../utils/whatsapp";

export default function MiningRepairSection() {
  return (
    <div className="bg-homeBg px-5 md:px-10 lg:px-[120px] py-10">
      <div className="bg-white p-10 flex flex-col gap-10 rounded-lg">
        <div className="flex xl:flex-row flex-col gap-5 xl:text-left text-center  justify-around items-center">
          <div>
            <p className="text-base font-semibold text-homeBgGradient">
              Repair Miners
            </p>
            <h1 className="text-[40px] font-semibold gradient-heading xl:max-w-[380px]">
              From Equipment to Maintenance : Your Complete Mining Partner
            </h1>
          </div>
          <p className="text-lg font-medium leading-7 xl:max-w-[400px]">
            Take your mining to the next level with our complete range of
            services. Get top-quality equipment, reliable hosting, and expert
            maintenance all in one place. Experience exceptional performance
            with our expert solutions and dedicated support.
          </p>
          <button
            className="text-base font-semibold text-white px-4 py-2 bg-btnGreen hover:bg-btnHover nav-link rounded-lg"
            onClick={handleChatClick}
          >
            Know More
          </button>
        </div>
        <div className="flex 2xl:flex-row flex-col items-center justify-center gap-10">
          <div className="max-w-[600px] max-h-[400px] overflow-hidden rounded-lg">
            <img src="/repair1.jpg"></img>
          </div>
          <div className="max-w-[600px] max-h-[400px] overflow-hidden rounded-lg">
            <img src="/repair2.jpg"></img>
          </div>
        </div>
        <p className="text-center text-lg font-semibold">
          Seamless Mining Solutions for Every Need
        </p>
      </div>
    </div>
  );
}
