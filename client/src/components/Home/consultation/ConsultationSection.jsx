import React from "react";
import { handleChatClick } from "../../../utils/whatsapp";

export default function ConsultationSection() {
  return (
    <div className="px-5 md:px-10 lg:px-[120px] py-10 gradient-bg">
      <div className="bg-white rounded-lg p-5 py-10 flex lg:flex-row flex-col gap-10 justify-around items-center">
        <div className="flex flex-col lg:items-start items-center lg:text-left text-center gap-10 max-w-[550px]">
          <h1 className="text-[40px] font-semibold gradient-heading">
            Unlock Your Mining Potential with Expert Guidance
          </h1>
          <p className="text-lg font-medium leading-7">
            Get custom recommendations for your mining equipment needs,
            including buying, hosting, and repairs. <br></br>Expert consultation
            is just a call away!
          </p>
          <button
            className="text-base font-semibold text-white bg-btnGreen hover:bg-btnHover nav-link rounded-lg px-4 py-2 w-fit"
            onClick={handleChatClick}
          >
            Personal Consultation
          </button>
        </div>
        <div>
          <div className="max-w-[490px] max-h-[340px] rounded-lg overflow-hidden">
            <img src="/consultation.jpg"></img>
          </div>
        </div>
      </div>
    </div>
  );
}
