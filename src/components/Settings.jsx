import React, { useState } from "react";
import States from "../../public/governament.png";
import Bills from "../../public/invoice-two.png";
import Image from "next/image";

function SettingsComponent() {
  return (
    <div className="bg-[#f1f1f1] px-[6%] py-[5%]">
      <>
        <div className="py-0 px-10 flex flex-col md:flex-row justify-between items-center text-center mt-[0%] md:mt-[0%]">
          <div className="flex flex-col w-[100%] pl-[0%] md:mt-0 mt-10">
            <div className="flex flex-row flex-wrap gap-5 mt-5 justify-start">
              <div className="align-middle flex flex-col justify-center gap-5 cursor-pointer items-center p-5 bg-white shadow-lg rounded-lg hover:scale-110 transition-transform w-[200px]">
                <Image
                  src={States}
                  alt="airtime"
                  className="h-13 w-13 bg-white p-4 rounded-full shadow-md"
                />
                <p className="text-black text-center font-semibold text-[14px]">
                  Upgrade KYC
                </p>
              </div>
              <div className="align-middle flex flex-col justify-center gap-5 cursor-pointer items-center p-5 bg-white shadow-lg rounded-lg hover:scale-110 transition-transform w-[200px]">
                <Image
                  src={Bills}
                  alt="airtime"
                  className="h-13 w-13 bg-white p-4 rounded-full shadow-md"
                />
                <p className="text-black text-center font-semibold text-[14px]">
                  Manage Account Status
                </p>
              </div>
              <div className="align-middle flex flex-col justify-center gap-5 cursor-pointer items-center p-5 bg-white shadow-lg rounded-lg hover:scale-110 transition-transform w-[200px]">
                <Image
                  src={Bills}
                  alt="airtime"
                  className="h-13 w-13 bg-white p-4 rounded-full shadow-md"
                />
                <p className="text-black text-center font-semibold text-[14px]">
                  Change Password/PSN
                </p>
              </div>
              <div className="align-middle flex flex-col justify-center gap-5 cursor-pointer items-center p-5 bg-white shadow-lg rounded-lg hover:scale-110 transition-transform w-[200px]">
                <Image
                  src={Bills}
                  alt="airtime"
                  className="h-13 w-13 bg-white p-4 rounded-full shadow-md"
                />
                <p className="text-black text-center font-semibold text-[14px]">
                  Change Profile Picture
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}

export default SettingsComponent;
