import React from "react";
import ReferOne from "../../public/referthumb.png";
import ReferTwo from "../../public/boxspeaker.png";
import Register from "../../public/boxregister.png";
import Earn from "../../public/boxamount.png";
import Image from "next/image";

function Refer() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center p-[6%] w-full">
      <div className="w-[100%]">
        <Image src={ReferOne} alt="refer" />
      </div>
      <div className="w-full">
        <h2 className="text-black text-[42px] font-bold md:text-[53px] text-left leading-[53px]">
          Refer & Earn
        </h2>
        <p className="text-gray text-[14px] mt-3">
          Refer your friends and earn up to $20. There are many variations of
          passages of Lorem Ipsum available, but the have suffered alteration in
          some form, by injected humour, or randomised words which don&apos;t
          look even slightly believable. If you are going to use...
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
                Refer your friends
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
              <h3 className="text-black font-bold text-[18px]">
                Register your friends
              </h3>
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
              <h3 className="text-black font-bold text-[18px]">Start Earn</h3>
              <p className="text-gray text-[14px]">
                You earn 10% on every payment they make
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Refer;
