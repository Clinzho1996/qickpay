import React from "react";
import Bg from "../../../public/bg.png";
import Google from "../../../public/google.png";
import Image from "next/image";
import { ArrowBack } from "@mui/icons-material";
import { Box, Checkbox, TextField } from "@mui/material";
import Link from "next/link";

function ResetPassword() {
  return (
    <div className="flex flex-row justify-between w-full my-5">
      <div className="bg-white w-[100%] px-[4%] md:px-[8%] md:w-[50%]">
        <div className="flex flex-row items-center justify-start gap-3">
          <ArrowBack className="text-[#A3AED0] text-[14px]" />
          <p className="text-[#A3AED0] text-[14px]">Back to Homepage</p>
        </div>
        <div className=" mt-20 md:20">
          <h2 className="text-[#1E2B3B] text-[18px] md:text-[24px] font-bold">
            Please enter the OTP Code
          </h2>
          <p className="text-[14px] md:text-[16px] text-[#A3AED0] mt-2">
            Enter to OTP Code sent to your mail
          </p>
        </div>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { mt: 2, width: "100%" },
          }}
          autoComplete="off"
          className="mt-10"
        >
          <p className="text-[14px] text-[#1E2B3B] font-semibold">OTP COde*</p>
          <TextField
            id="outlined-basic"
            label="Enter OTP Code"
            type="text"
            variant="outlined"
            sx={{
              "& .MuiInputBase-input": {
                color: "#A3AED0",
              },
            }}
          />
        </Box>
        <Link href="/change-password">
          <button className="bg-[#2B3674] w-full p-4 mt-3 text-white rounded-md font-bold">
            Confirm OTP
          </button>
        </Link>
      </div>
      <div className="bg-[#2B3674] w-[50%] rounded-s-md p-10 hidden md:block">
        <Image src={Bg} alt="bg" />
      </div>
    </div>
  );
}

export default ResetPassword;
