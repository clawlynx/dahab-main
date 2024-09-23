import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RiArrowDropUpLine } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import { cryptoCurrency, manufacturer } from "../../utils/dropdowns";

export default function SearchAndFilter({ setShowFilter }) {
  const [showMfgDrop, setShowMfgDrop] = useState(false);
  const [showCryptoDrop, setShowCryptoDrop] = useState(false);
  const [manufacturerOptions, setManufacturerOptions] = useState([]);
  const [cryptoCurrencyOption, setCryptoCurrencyOption] = useState([]);

  const handleManufacturerOptions = (e) => {
    const value = e.target.value;
    if (e.target.checked) {
      setManufacturerOptions((prev) => [...prev, value]);
    } else {
      setManufacturerOptions((prev) => prev.filter((item) => item !== value));
    }
  };

  const handleCryptoChange = (e) => {
    const value = e.target.value;
    if (e.target.checked) {
      setCryptoCurrencyOption((prev) => [...prev, value]);
    } else {
      setCryptoCurrencyOption((prev) => prev.filter((item) => item !== value));
    }
  };
  return (
    <div className="lg:w-72 w-full rounded-xl px-2 py-5 flex flex-col gap-5">
      <div className="w-full flex justify-between items-center mb-10">
        <div className="flex items-center gap-5">
          <p className="lg:hidden" onClick={() => setShowFilter(false)}>
            <IoMdClose />
          </p>
          <h1 className="text-lg font-medium">Filter By</h1>
        </div>

        <p className="text-base font-semibold text-btnGreen underline">Reset</p>
      </div>
      <div className="flex rounded-lg border">
        <label className="flex justify-center items-center p-1 ps-3 text-xl">
          <CiSearch />
        </label>
        <input
          type="text"
          placeholder={` Search your item`}
          className="text-base font-normal px-2 py-1"
        />
      </div>
      <div
        className={`border rounded-lg px-2 py-1 ${
          showMfgDrop && "pb-3"
        } flex flex-col gap-5`}
      >
        <div
          className="flex justify-between items-center"
          onClick={() => setShowMfgDrop(!showMfgDrop)}
        >
          <h1 className="text-base font-normal text-[#070707]">Manufacturer</h1>
          <p>{showMfgDrop ? <RiArrowDropUpLine /> : <RiArrowDropDownLine />}</p>
        </div>
        {showMfgDrop &&
          manufacturer.map((x, index) => (
            <div
              key={index}
              className="flex gap-3 items-center text-base font-medium text-[#667085] animate-slideInTop"
            >
              <input
                type="checkbox"
                value={x}
                checked={manufacturerOptions.includes(x)}
                onChange={handleManufacturerOptions}
                className=""
              />
              <label>{x}</label>
            </div>
          ))}
      </div>
      <div
        className={`border rounded-lg px-2 py-1 ${
          showCryptoDrop && "pb-3"
        } flex flex-col gap-5`}
      >
        <div
          className="flex justify-between items-center"
          onClick={() => setShowCryptoDrop(!showCryptoDrop)}
        >
          <h1 className="text-base font-normal">Cryptocurrency</h1>
          <p>
            {showCryptoDrop ? <RiArrowDropUpLine /> : <RiArrowDropDownLine />}
          </p>
        </div>
        {showCryptoDrop &&
          cryptoCurrency.map((x, index) => (
            <div
              key={index}
              className="flex gap-3 items-center text-base font-medium text-[#667085] animate-slideInTop"
            >
              <input
                type="checkbox"
                value={x}
                checked={cryptoCurrencyOption.includes(x)}
                onChange={handleCryptoChange}
                className=""
              />
              <label>{x}</label>
            </div>
          ))}
      </div>
    </div>
  );
}
