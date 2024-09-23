import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { handleEnquiryFormClick } from "../../../utils/whatsapp";

const ContactForm = ({ popup }) => {
  const [phone, setPhone] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, SetMessage] = useState("");

  return (
    <div className="px-3 xl:px-[120px] py-10 w-full flex flex-col gap-2 lg:gap-7">
      <h5
        className={`font-semibold gradient-heading ${
          popup ? "text-xl" : "text-[40px] "
        }`}
      >
        Contact Us
      </h5>
      <div className="flex lg:flex-row flex-col gap-2 lg:gap-3 items-center w-full">
        <div className="flex flex-col gap-2 w-full">
          <label className="text-sm font-medium text-[#344054]">
            First Name
          </label>
          <input
            className="p-2 border rounded-lg border-[#D0D5DD] w-full"
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
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
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Last name"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-[#344054]">Email</label>
        <input
          className="p-2 border rounded-lg border-[#D0D5DD] w-full"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
          rows={popup ? "3" : "6"}
          onChange={(e) => SetMessage(e.target.value)}
        />
      </div>
      <button
        onClick={() =>
          handleEnquiryFormClick({ firstName, lastName, email, phone, message })
        }
        className="text-base font-semibold bg-[#1ECBAF] text-white p-2 hover:bg-btnHover nav-link rounded-lg"
      >
        Send Message
      </button>
    </div>
  );
};

export default ContactForm;
