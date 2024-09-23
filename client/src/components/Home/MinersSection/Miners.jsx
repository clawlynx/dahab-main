import React from "react";
import { GoCpu } from "react-icons/go";
import { PiLightning } from "react-icons/pi";
import { HiOutlineCube } from "react-icons/hi2";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { handleChatClick } from "../../../utils/whatsapp";

export default function Miners() {
  return (
    <div className="bg-white px-5 md:px-10 lg:px-[120px] py-10">
      <div className="text-center">
        <p className="text-base font-semibold text-btnGreen py-5">Miners</p>
        <h1 className="text-[40px] font-semibold gradient-heading mb-5">
          <a href="https://dahabminers.ae/">Crypto Mining Machines in UAE</a>
        </h1>
        <button
          className="px-3 py-2 my-5 rounded-lg text-base font-semibold border hover:bg-gray-300 nav-link border-gray-300"
          onClick={handleChatClick}
        >
          View all Products
        </button>
      </div>
      <div className="flex md:flex-row flex-col my-10 justify-center gap-40 items-center">
        <div className="w-full max-w-[400px] h-auto md:max-w-[350px] overflow-hidden">
          <img
            src="/antiminer ks5.jpeg"
            alt="Find-top-asic-miner-models-in-abu-dhabi-UAE-here"
            title="Dahab Miners is your trusted partner for crypto mining in UAE, offering a diverse array of advanced ASIC miners in Abu Dhabi. Discover our premium CRYPTO MINING MACHINES IN UAE and optimize your mining operations with the best tools available."
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="max-w-[488px] flex flex-col gap-7">
          <h4 className="text-2xl font-semibold">Buy Antminer KS5 (20Th)</h4>
          <p className="text-base font-normal">
            The Bitmain Antminer KS5 (20Th) is a high-performance Bitcoin miner
            known for its efficiency and reliability. It delivers 20 tetrahashes
            per second, making it ideal for maximizing mining profits
          </p>
          <div className="flex justify-between">
            <div className="flex flex-col gap-1">
              <div className="w-10 h-10 bg-gray-200 rounded-full text-xl text-gray-400 flex justify-center items-center">
                <GoCpu />
              </div>
              <span className="text-sm font-normal">HashRate</span>
              <span className="text-lg font-medium">20 Th/s</span>
            </div>
            <div className="flex flex-col gap-1">
              <div className="w-10 h-10 bg-gray-200 rounded-full text-xl text-gray-400 flex justify-center items-center">
                <PiLightning />
              </div>
              <span className="text-sm font-normal">Power</span>
              <span className="text-lg font-medium">3000 Watts</span>
            </div>
            <div className="flex flex-col gap-1">
              <div className="w-10 h-10 bg-gray-200 rounded-full text-xl text-gray-400 flex justify-center items-center">
                <HiOutlineCube />
              </div>
              <span className="text-sm font-normal">Algorithm</span>
              <span className="text-lg font-medium">KHeavyHash</span>
            </div>
          </div>
          <div className="text-lg font-semibold flex justify-between items-center">
            <button
              className="bg-btnGreen text-white px-10 hover:bg-btnHover nav-link py-3 rounded-lg"
              onClick={handleChatClick}
            >
              Buy Now
            </button>
            <h4 className="text-btnGreen underline" onClick={handleChatClick}>
              View Specifications
            </h4>
          </div>
        </div>
      </div>
      <div className="flex justify-around">
        <div></div>
        {/* <div className="text-3xl flex gap-2">
          <div className="w-12 h-12 border flex items-center justify-center rounded-lg">
            <MdKeyboardArrowLeft />
          </div>
          <div className="w-12 h-12 border flex items-center justify-center rounded-lg">
            <MdKeyboardArrowRight />
          </div>
        </div> */}
      </div>
    </div>
  );
}
