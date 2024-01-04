import React, { useState } from "react";
import Airtime from "../../public/viber.png";
import Data from "../../public/internet.png";
import Electricity from "../../public/backup.png";
import Cable from "../../public/smart-tv.png";
import Water from "../../public/water-tap.png";
import States from "../../public/governament.png";
import Bills from "../../public/invoice-two.png";
import Tax from "../../public/tax.png";
import Folder from "../../public/folder.png";
import Invoice from "../../public/invoice.png";
import Debit from "../../public/credit-card.png";
import Waec from "../../public/payment.png";
import { ArrowRightAltSharp } from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";

function Hero() {
  return (
    <div
      className="p-10 flex flex-col md:flex-row justify-between items-center text-center mt-[-20%] md:mt-[-6%]"
      style={{
        background: " url('/hero_img.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        width: "100%",
        padding: "8% 6%",
      }}
    >
      <div className="flex justify-start flex-col pr-[0%] w-[100%] md:w-[65%] md:mt-0 mt-[100px]">
        <h2 className="text-black text-[42px] md:text-[53px] text-left leading-[53px]">
          <strong>Empower</strong> your <strong>Customers</strong> to pay you
          easily as you <strong>grow</strong>
        </h2>
        <Link href="/register" className="flex justify-start">
          <button className="bg-[#2B3674] text-white px-20 rounded-full py-4 mt-10 w-full md:w-[85%]">
            Click to Sign Up <ArrowRightAltSharp />
          </button>
        </Link>
      </div>
      <div className="flex flex-col w-[100%] pl-[0%] md:mt-0 mt-10 md:pl-[10%]">
        <div>
          <input
            placeholder="Search here for a biller"
            className="p-3 w-full rounded-full border border-gray-400 text-black text-[14px] text-center"
          />
        </div>
        <div className="flex flex-row flex-wrap gap-5 mt-5 justify-between">
          <div className="align-middle flex flex-col justify-center gap-5 cursor-pointer items-center p-5 bg-white shadow-lg rounded-lg hover:scale-110 transition-transform w-[145px]">
            <Image
              src={Airtime}
              alt="airtime"
              className="h-13 w-13 bg-white p-4 rounded-full shadow-md"
            />
            <p className="text-black text-center font-semibold text-[14px]">
              Buy Airtime
            </p>
          </div>
          <div className="align-middle flex flex-col justify-center gap-5 cursor-pointer items-center p-5 bg-white shadow-lg rounded-lg hover:scale-110 transition-transform w-[145px]">
            <Image
              src={Data}
              alt="airtime"
              className="h-13 w-13 bg-white p-4 rounded-full shadow-md"
            />
            <p className="text-black text-center font-semibold text-[14px]">
              Buy Data
            </p>
          </div>
          <div className="align-middle flex flex-col justify-center gap-5 cursor-pointer items-center p-5 bg-white shadow-lg rounded-lg hover:scale-110 transition-transform w-[145px]">
            <Image
              src={Electricity}
              alt="airtime"
              className="h-13 w-13 bg-white p-4 rounded-full shadow-md"
            />
            <p className="text-black text-center font-semibold text-[14px]">
              Buy Electricity
            </p>
          </div>
          <div className="align-middle flex flex-col justify-center gap-5 cursor-pointer items-center p-5 bg-white shadow-lg rounded-lg hover:scale-110 transition-transform w-[145px]">
            <Image
              src={Cable}
              alt="airtime"
              className="h-13 w-13 bg-white p-4 rounded-full shadow-md"
            />
            <p className="text-black text-center font-semibold text-[14px]">
              Cable TV
            </p>
          </div>
          <div className="align-middle flex flex-col justify-center gap-5 cursor-pointer items-center p-5 bg-white shadow-lg rounded-lg hover:scale-110 transition-transform w-[145px]">
            <Image
              src={Water}
              alt="airtime"
              className="h-13 w-13 bg-white p-4 rounded-full shadow-md"
            />
            <p className="text-black text-center font-semibold text-[14px]">
              Pay Water
            </p>
          </div>
          <div className="align-middle flex flex-col justify-center gap-5 cursor-pointer items-center p-5 bg-white shadow-lg rounded-lg hover:scale-110 transition-transform w-[145px]">
            <Image
              src={States}
              alt="airtime"
              className="h-13 w-13 bg-white p-4 rounded-full shadow-md"
            />
            <p className="text-black text-center font-semibold text-[14px]">
              Pay TSA & States
            </p>
          </div>
          <div className="align-middle flex flex-col justify-center gap-5 cursor-pointer items-center p-5 bg-white shadow-lg rounded-lg hover:scale-110 transition-transform w-[145px]">
            <Image
              src={Bills}
              alt="airtime"
              className="h-13 w-13 bg-white p-4 rounded-full shadow-md"
            />
            <p className="text-black text-center font-semibold text-[14px]">
              Bills & Purchases
            </p>
          </div>
          <div className="align-middle flex flex-col justify-center gap-5 cursor-pointer items-center p-5 bg-white shadow-lg rounded-lg hover:scale-110 transition-transform w-[145px]">
            <Image
              src={Tax}
              alt="airtime"
              className="h-13 w-13 bg-white p-4 rounded-full shadow-md object-contain"
            />
            <p className="text-black text-center font-semibold text-[14px]">
              Pay Taxes
            </p>
          </div>
          <div className="align-middle flex flex-col justify-center gap-5 cursor-pointer items-center p-5 bg-white shadow-lg rounded-lg hover:scale-110 transition-transform w-[145px]">
            <Image
              src={Folder}
              alt="airtime"
              className="h-13 w-13 bg-white p-4 rounded-full shadow-md"
            />
            <p className="text-black text-center font-semibold text-[14px]">
              Pay Salaries
            </p>
          </div>
          <div className="align-middle flex flex-col justify-center gap-5 cursor-pointer items-center p-5 bg-white shadow-lg rounded-lg hover:scale-110 transition-transform w-[145px]">
            <Image
              src={Invoice}
              alt="airtime"
              className="h-13 w-13 bg-white p-4 rounded-full shadow-md"
            />
            <p className="text-black text-center font-semibold text-[14px]">
              Resend Invoice
            </p>
          </div>
          <div className="align-middle flex flex-col justify-center gap-5 cursor-pointer items-center p-5 bg-white shadow-lg rounded-lg hover:scale-110 transition-transform w-[145px]">
            <Image
              src={Debit}
              alt="airtime"
              className="h-13 w-13 bg-white p-4 rounded-full shadow-md"
            />
            <p className="text-black text-center font-semibold text-[14px]">
              Direct Debits
            </p>
          </div>
          <div className="align-middle flex flex-col justify-center gap-5 cursor-pointer items-center p-5 bg-white shadow-lg rounded-lg hover:scale-110 transition-transform w-[145px]">
            <Image
              src={Waec}
              alt="airtime"
              className="h-13 w-13 bg-white p-4 rounded-full shadow-md"
            />
            <p className="text-black text-center font-semibold text-[14px]">
              Buy WAEC PIN
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
