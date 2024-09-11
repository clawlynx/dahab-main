import React from "react";
import crypto from "../../../assets/crypto.svg";
import bg from "../../../assets/cryptobg.svg";
import { handleChatClick } from "../../../utils/whatsapp";
export default function CryptoCurrencySection() {
  return (
    <div
      className="bg-homeBg bg-blend-color-dodge px-5 md:px-10 lg:px-[120px] py-10 flex lg:flex-row flex-col justify-between items-center"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
      }}
    >
      <div className="max-w-[610px] flex flex-col lg:items-start items-center lg:text-left text-center gap-10">
        <p className="text-base font-semibold text-homeBgGradient">
          Unlock the potential of crypto
        </p>
        <h1 className="text-5xl font-semibold gradient-heading">
          Explore the future of cryptocurrency
        </h1>
        <p className="text-lg font-medium text-white leading-7">
          Discover Bitcoin, Ethereum, and Kaspa with our top-tier selection.
          Invest, trade or mine securely and innovatively. Start your journey
          with us and shape the future of finance today.
        </p>
        <button
          className="px-4 py-2 mb-4 bg-btnGreen text-white text-base font-semibold rounded-lg w-fit hover:bg-btnHover nav-link"
          onClick={handleChatClick}
        >
          View Products
        </button>
      </div>
      <div>
        <div className="max-w-[590px] max-h-[645px] overflow-hidden">
          <img src={crypto}></img>
        </div>
      </div>
    </div>
  );
}
