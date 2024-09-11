import React from "react";
import { CiUser } from "react-icons/ci";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";

export default function AdminHead() {
  return (
    <div className="p-3 h-20 bg-homeBg rounded-2xl w-full text-white flex justify-between items-center sticky top-0">
      <div className="text-2xl">
        <RxHamburgerMenu />
      </div>
      <div className="text-2xl">DAHAB MINERS ADMIN</div>
      <div className="flex gap-2 items-center border p-2 rounded-lg hover:shadow-md hover:shadow-white hover:bg-blue-500 nav-link">
        <div>
          <CiUser />
        </div>
        <p>User</p>
        <div>
          <RiArrowDropDownLine />
        </div>
      </div>
    </div>
  );
}
