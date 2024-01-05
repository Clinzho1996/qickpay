import React from "react";
import ReferOne from "../../public/referthumb.png";
import ReferTwo from "../../public/boxspeaker.png";
import Register from "../../public/boxregister.png";
import Earn from "../../public/boxamount.png";
import Image from "next/image";
import SupportImg from "../../public/spealsupport.png";
import Link from "next/link";

function Support() {
  return (
    <div className="flex bg-[#F4F5FC] flex-col md:flex-row justify-between items-center p-[6%] w-full">
      <div className="w-full">
        <h2 className="text-black text-[42px] font-bold md:text-[53px] text-left leading-[53px]">
          Enjoy our special support
        </h2>
        <p className="text-gray text-[14px] mt-3">
          There are many variations of passages of Lorem Ipsum available, but
          the have suffered alteration in some form, by injected humour, or
          randomised words which don&apos;t look even slightly believable. If
          you are going to use...
        </p>
        <div className="mt-5">
          <div className="flex flex-row justify-start gap-5 items-center">
            <div>
              <Image
                src={ReferTwo}
                alt="refer"
                className="h-[60px] w-[60px] md:h-[70px] md:w-[70px] object-contain"
              />
            </div>
            <div>
              <h3 className="text-black font-bold text-[18px]">
                Secure Payment
              </h3>
              <p className="text-gray text-[14px]">
                Share your referral link with friends.
              </p>
            </div>
          </div>
          <div className="flex flex-row justify-start gap-5 items-center mt-4">
            <div>
              <Image
                src={Register}
                alt="refer"
                className="h-[70px] w-[70px] object-contain"
              />
            </div>
            <div>
              <h3 className="text-black font-bold text-[18px]">Refer & Earn</h3>
              <p className="text-gray text-[14px]">
                Ensure they register their accounts on Qickpay
              </p>
            </div>
          </div>
          <div className="flex flex-row justify-start gap-5 items-center mt-4">
            <div>
              <Image
                src={Earn}
                alt="refer"
                className="h-[70px] w-[70px] object-contain"
              />
            </div>
            <div>
              <h3 className="text-black font-bold text-[18px]">24/7 Support</h3>
              <p className="text-gray text-[14px]">
                You earn 10% on every payment they make
              </p>
            </div>
          </div>
          <Link href="/register" className="flex justify-start">
            <button className="bg-[#2B3674] text-white px-10 rounded-md py-4 mt-10 w-full md:w-[35%] hover:scale-110 transition-transform">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
      <div className="w-[100%] mt-10 md:mt-0">
        <Image src={SupportImg} alt="refer" />
      </div>
    </div>
  );
}

export default Support;
