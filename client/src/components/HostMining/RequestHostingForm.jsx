import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export default function RequestHostingForm() {
  const [phone, setPhone] = useState("");
  return (
    <div className="lg:w-1/2 w-full flex flex-col gap-7">
      <h1 className="text-[40px] font-semibold gradient-heading">
        Request Hosting
      </h1>
      <p className="text-xl font-normal text-[#667085]">
        A subtext should go here
      </p>
      <div className="flex gap-3 items-center w-full">
        <div className="flex flex-col gap-2 w-full">
          <label className="text-sm font-medium text-[#344054]">
            First Name
          </label>
          <input
            className="p-2 border rounded-lg border-[#D0D5DD] w-full"
            type="text"
            placeholder="First name"
          />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <label className="text-sm font-medium text-[#344054]">
            Last Name
          </label>
          <input
            className="p-2 border rounded-lg border-[#D0D5DD] w-full"
            type="text"
            placeholder="Last name"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-[#344054]">Email</label>
        <input
          className="p-2 border rounded-lg border-[#D0D5DD] w-full"
          type="email"
          placeholder="email@gmail.com"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-[#344054]">Phone</label>
        <PhoneInput
          country={"ae"} // Set default country code (UAE in this case)
          value={phone}
          onChange={setPhone}
          inputStyle={{
            padding: "20px",
            paddingLeft: "40px",
            width: "100%",
            borderColor: "#D0D5DD",
          }}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-[#344054]">Message</label>
        <textarea
          className="p-2 border rounded-lg border-[#D0D5DD] w-full"
          rows={6}
        />
      </div>
      <button className="text-base font-semibold bg-[#1ECBAF] text-white p-2 hover:bg-btnHover nav-link rounded-lg">
        Send Message
      </button>
    </div>
  );
}
