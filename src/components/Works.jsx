import React from "react";
import Choose from "../../public/chossetouch.png";
import Find from "../../public/find.png";
import Code from "../../public/code.png";
import Image from "next/image";

function Works() {
  return (
    <div className="bg-[#F4F5FC] p-[6%]">
      <h2 className="text-black text-[42px] text-center font-bold md:text-[53px] leading-[53px]">
        How It Works
      </h2>
      <p className="text-gray text-[14px] md:text-[18px] text-center mt-3">
        There are many variations of passages of Lorem Ipsum available, but the
        <br className="md:block hidden" />
        majority have suffered alteration in some form
      </p>
      <div className="flex flex-col md:flex-row justify-center gap-5 items-center mt-5">
        <div className="bg-white shadow-sm p-5 rounded-md hover:scale-110 transition-transform hover:border hover:border-[#2B3674]">
          <div className="flex flex-row justify-between items-center">
            <Image src={Choose} alt="choose" />
            <h2 className="text-[#EBEBEB] text-[64px] italic font-bold">01</h2>
          </div>
          <h3 className="text-black text-[18px] text-left font-bold md:text-[24px] leading-[53px]">
            Choose what to do
          </h3>
          <p className="text-gray text-[14px] text-left mt-1">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour
          </p>
        </div>
        <div className="bg-white shadow-sm p-5 rounded-md hover:scale-110 transition-transform hover:border hover:border-[#2B3674]">
          <div className="flex flex-row justify-between items-center">
            <Image src={Find} alt="choose" />
            <h2 className="text-[#EBEBEB] text-[64px] italic font-bold">02</h2>
          </div>
          <h3 className="text-black text-[18px] text-left font-bold md:text-[24px] leading-[53px]">
            Find what you want
          </h3>
          <p className="text-gray text-[14px] text-left mt-1">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour
          </p>
        </div>
        <div className="bg-white shadow-sm p-5 rounded-md hover:scale-110 transition-transform hover:border hover:border-[#2B3674]">
          <div className="flex flex-row justify-between items-center">
            <Image src={Code} alt="choose" />
            <h2 className="text-[#EBEBEB] text-[64px] italic font-bold">03</h2>
          </div>
          <h3 className="text-black text-[18px] text-left font-bold md:text-[24px] leading-[53px]">
            Explore amazing code
          </h3>
          <p className="text-gray text-[14px] text-left mt-1">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour
          </p>
        </div>
      </div>
    </div>
  );
}

export default Works;
