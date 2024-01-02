import React from "react";
import Bg from "../../../public/bg.png";
import Google from "../../../public/google.png";
import Logo from "../../../public/logo.png";
import Image from "next/image";
import { Box, Checkbox, TextField } from "@mui/material";
import Link from "next/link";

function ForgotPassword() {
  return (
    <div className="flex flex-row justify-between w-full my-5">
      <div className="bg-white w-[100%] px-[4%] md:px-[8%] md:w-[50%]">
        <Link href="/">
          <Image src={Logo} alt="logo" className="h-20 object-contain" />
        </Link>
        <div className=" mt-20 md:20">
          <h2 className="text-[#1E2B3B] text-[18px] md:text-[24px] font-bold">
            Please enter your email address
          </h2>
          <p className="text-[14px] md:text-[16px] text-[#A3AED0] mt-2">
            Enter your email to reset your password!
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
          <p className="text-[14px] text-[#1E2B3B] font-semibold">Email*</p>
          <TextField
            id="outlined-basic"
            label="name@example.com"
            type="email"
            variant="outlined"
            sx={{
              "& .MuiInputBase-input": {
                color: "#A3AED0",
              },
            }}
          />
        </Box>
        <Link href="/reset-password">
          <button className="bg-[#2B3674] w-full p-4 mt-3 text-white rounded-md font-bold">
            Reset my password
          </button>
        </Link>
        <div className="mt-4 ml-2">
          <p className="text-[14px] text-[#1E2B3B] font-semibold">
            Didn&apos;t receive code?{" "}
            <button className="text-[#F55425] font-semibold">Resend OTP</button>
          </p>
        </div>
      </div>
      <div className="bg-[#2B3674] w-[50%] rounded-s-md p-10 hidden md:block">
        <Image src={Bg} alt="bg" />
      </div>
    </div>
  );
}

export default ForgotPassword;
