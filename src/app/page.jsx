"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
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
import Refer from "../../public/referthumb.png";
import ReferTwo from "../../public/boxspeaker.png";
import Register from "../../public/boxregister.png";
import Earn from "../../public/boxamount.png";

function Home() {
  return (
    <div>
      <Navbar />
      {/* Hero Section */}
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
      {/* Refer & Earn */}
      <div className="flex flex-col md:flex-row justify-between items-center p-[6%] w-full">
        <div className="w-[100%]">
          <Image src={Refer} alt="refer" />
        </div>
        <div className="w-full">
          <h2 className="text-black text-[42px] font-bold md:text-[53px] text-left leading-[53px]">
            Refer & Earn
          </h2>
          <p className="text-gray text-[14px] mt-3">
            Refer your friends and earn up to $20. There are many variations of
            passages of Lorem Ipsum available, but the have suffered alteration
            in some form, by injected humour, or randomised words which
            don&apos;t look even slightly believable. If you are going to use...
          </p>
          <div className="mt-5">
            <div className="flex flex-row justify-start gap-5 items-center">
              <div>
                <Image src={ReferTwo} alt="refer" />
              </div>
              <div>
                <h3 className="text-black font-bold text-[18px]">
                  Refer your friends
                </h3>
                <p>Share your referral link with friends.</p>
              </div>
            </div>
            <div className="flex flex-row justify-start gap-5 items-center mt-4">
              <div>
                <Image src={Register} alt="refer" />
              </div>
              <div>
                <h3 className="text-black font-bold text-[18px]">
                  Register your friends
                </h3>
                <p>Ensure they register their accounts on Qickpay</p>
              </div>
            </div>
            <div className="flex flex-row justify-start gap-5 items-center mt-4">
              <div>
                <Image src={Earn} alt="refer" />
              </div>
              <div>
                <h3 className="text-black font-bold text-[18px]">Start Earn</h3>
                <p>You earn 10% on every payment they make</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
