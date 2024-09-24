import React, { useEffect, useRef, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import {
  cryptoCurrencySearch,
  manufacturerSearch,
} from "../../utils/dropdowns";
import { useDispatch, useSelector } from "react-redux";
import {
  resetAll,
  setCryptoCurrencyOption,
  setKeyWord,
  setManufacturerOptions,
  setSortBy,
} from "../../slices/userProductSearchSlice";
import FormSelect from "../FormSelect";

export default function SearchAndFilter({ setShowFilter, refetch }) {
  const sortOptions = ["Newest", "Oldest"];

  const dispatch = useDispatch();
  const { manufacturerOptions, cryptoCurrencyOption, keyWord, sortby } =
    useSelector((state) => state.userProductSearch);

  useEffect(() => {
    refetch();
  }, [manufacturerOptions, cryptoCurrencyOption, keyWord, sortby]);

  return (
    <div className="lg:w-72 w-full rounded-xl px-2 py-5 flex flex-col gap-5">
      <div className="w-full flex justify-between items-center mb-10">
        <div className="flex items-center gap-5 justify-end">
          <h1 className="text-lg font-medium">Filter</h1>
        </div>

        <button
          className="text-base font-semibold text-btnGreen underline"
          onClick={() => {
            dispatch(resetAll());
          }}
        >
          Reset
        </button>
      </div>
      <FormSelect
        title={"Sort By"}
        list={sortOptions}
        value={sortby}
        onchange={(e) => dispatch(setSortBy(e.target.value))}
      />
      <div className="flex rounded-lg border">
        <label className="flex justify-center items-center p-1 ps-3 text-xl">
          <CiSearch />
        </label>
        <input
          type="text"
          placeholder={` Search your item`}
          value={keyWord}
          onChange={(e) => dispatch(setKeyWord(e.target.value))}
          className="text-base font-normal px-2 py-1"
        />
      </div>
      <FormSelect
        title={"Manufacturer"}
        list={manufacturerSearch}
        value={manufacturerOptions}
        onchange={(e) => dispatch(setManufacturerOptions(e.target.value))}
      />
      <FormSelect
        title={"CryptoCurrency"}
        list={cryptoCurrencySearch}
        value={cryptoCurrencyOption}
        onchange={(e) => dispatch(setCryptoCurrencyOption(e.target.value))}
      />
    </div>
  );
}
