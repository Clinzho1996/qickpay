import React from "react";
import Bg from "../../../public/bg.png";
import Google from "../../../public/google.png";
import Logo from "../../../public/logo.png";
import Image from "next/image";
import { Box, Checkbox, TextField } from "@mui/material";
import Link from "next/link";

function Register() {
  return (
    <div className="flex flex-row justify-between w-full h-screen items-center">
      <div className="bg-white w-[100%] px-[4%] md:px-[8%] md:w-[50%]">
        <Link href="/">
          <Image src={Logo} alt="logo" className="h-10 object-contain" />
        </Link>
        <div className=" mt-10">
          <h2 className="text-[#1E2B3B] text-[18px] md:text-[24px] font-bold">
            Create your QickPay account
          </h2>
          <p className="text-[14px] md:text-[16px] text-[#A3AED0] mt-2">
            Please provide the required details
          </p>
        </div>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { mt: 2, width: "100%" },
          }}
          autoComplete="off"
          className="mt-5"
        >
          <p className="text-[14px] text-[#1E2B3B] font-semibold">Full Name*</p>
          <TextField
            id="outlined-basic"
            label="Your full name"
            type="text"
            variant="outlined"
            sx={{
              "& .MuiInputBase-input": {
                color: "#A3AED0",
              },
            }}
          />
          <p className="text-[14px] text-[#1E2B3B] font-semibold">
            Email Address*
          </p>
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
          <p className="text-[14px] text-[#1E2B3B] font-semibold">
            Phone number*
          </p>
          <TextField
            id="outlined-basic"
            label="your phone number"
            type="text"
            variant="outlined"
            sx={{
              "& .MuiInputBase-input": {
                color: "#A3AED0",
              },
            }}
          />
          <p className="text-[14px] text-[#1E2B3B] font-semibold">Password*</p>
          <TextField
            id="outlined-basic"
            label="type your password"
            type="password"
            variant="outlined"
            sx={{
              "& .MuiInputBase-input": {
                color: "#A3AED0",
              },
            }}
          />
        </Box>
        <div className="flex flex-row justify-between items-center align-middle">
          <div className="flex flex-row justify-start gap-0 items-center">
            <Checkbox />
            <p className="text-[14px] text-[#1E2B3B] font-semibold">
              I agree to qickpay&apos;s privacy policy
            </p>
          </div>
        </div>
        <button className="bg-[#2B3674] w-full p-4 mt-3 text-white rounded-md font-bold">
          Register
        </button>
        <div className="mt-4 ml-2">
          <p className="text-[14px] text-[#1E2B3B] font-semibold">
            Already have an account?{" "}
            <Link href="/login" className="text-[#F55425] font-semibold">
              Sign In
            </Link>
          </p>
        </div>
      </div>
      <div className="bg-[#2B3674] w-[50%] p-10 hidden md:block h-screen">
        <Image src={Bg} alt="bg" />
      </div>
    </div>
  );
}

export default Register;
