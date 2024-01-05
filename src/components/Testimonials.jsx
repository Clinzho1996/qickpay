import React from "react";
import Swiper from "react-id-swiper";
import "swiper/css";
import Brad from "../../public/brad.png";
import Alena from "../../public/alena.png";
import Jenlia from "../../public/jenlia.png";
import Image from "next/image";
import { Star } from "@mui/icons-material";

function Testimonials() {
  const params = {
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    spaceBetween: 30,
    slidesPerView: 2,
    autoplay: {
      delay: 3000, // Adjust delay in milliseconds as needed
      disableOnInteraction: false, // Allows auto-scrolling even if the user interacts with the Swiper
    },
  };
  return (
    <div className="bg-white p-[6%]">
      <h2 className="text-black text-[42px] text-center font-bold md:text-[53px] leading-[53px]">
        Client Testimonials
      </h2>
      <p className="text-gray text-[14px] text-center mt-3">
        There are many variations of passages of Lorem Ipsum available, but the
        <br className="md:block hidden" />
        majority have suffered alteration in some form
      </p>
      <div className="mt-10">
        <Swiper {...params}>
          <div className="bg-white shadow-lg p-10 rounded-md">
            <div className="flex flex-row justify-center items-center gap-1">
              <Star className="text-[#FFB32B]" size={20} />
              <Star className="text-[#FFB32B]" size={20} />
              <Star className="text-[#FFB32B]" size={30} />
              <Star className="text-[#FFB32B]" size={20} />
              <Star className="text-[#FFB32B]" size={20} />
            </div>
            <p className="text-gray text-[14px] md:text-[18px] text-center mt-3 font-semibold">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour
            </p>
            <div className="flex flex-row justify-center items-center gap-4 mt-5">
              <div>
                <Image
                  src={Brad}
                  alt="Brad"
                  className="w-10 h-10 md:w-[70px] md:h-[70px] object-contain"
                />
              </div>
              <div>
                <h3 className="text-black text-[16px] text-left font-bold md:text-[18px]">
                  Brad Hogds
                </h3>
                <p>Engineer</p>
              </div>
            </div>
          </div>
          <div className="bg-white shadow-lg p-10 rounded-md">
            <div className="flex flex-row justify-center items-center gap-1">
              <Star className="text-[#FFB32B]" size={20} />
              <Star className="text-[#FFB32B]" size={20} />
              <Star className="text-[#FFB32B]" size={30} />
              <Star className="text-[#FFB32B]" size={20} />
              <Star className="text-[#FFB32B]" size={20} />
            </div>
            <p className="text-gray text-[14px] md:text-[18px] text-center mt-3 font-semibold">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour
            </p>
            <div className="flex flex-row justify-center items-center gap-4 mt-5">
              <div>
                <Image
                  src={Jenlia}
                  alt="Jenlia"
                  className="w-10 h-10 md:w-[70px] md:h-[70px] object-contain"
                />
              </div>
              <div>
                <h3 className="text-black text-[16px] text-left font-bold md:text-[18px]">
                  Jenlia d&apos;suza
                </h3>
                <p>Student</p>
              </div>
            </div>
          </div>
          <div className="bg-white shadow-lg p-10 rounded-md">
            <div className="flex flex-row justify-center items-center gap-1">
              <Star className="text-[#FFB32B]" size={20} />
              <Star className="text-[#FFB32B]" size={20} />
              <Star className="text-[#FFB32B]" size={30} />
              <Star className="text-[#FFB32B]" size={20} />
              <Star className="text-[#FFB32B]" size={20} />
            </div>
            <p className="text-gray text-[14px] md:text-[18px] text-center mt-3 font-semibold">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour
            </p>
            <div className="flex flex-row justify-center items-center gap-4 mt-5">
              <div>
                <Image
                  src={Alena}
                  alt="Alena"
                  className="w-10 h-10 md:w-[70px] md:h-[70px] object-contain"
                />
              </div>
              <div>
                <h3 className="text-black text-[16px] text-left font-bold md:text-[18px]">
                  Alena Hecals
                </h3>
                <p>Doctor</p>
              </div>
            </div>
          </div>
        </Swiper>
      </div>
    </div>
  );
}

export default Testimonials;
