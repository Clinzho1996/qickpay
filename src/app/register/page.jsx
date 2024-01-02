import React from "react";
import Bg from "../../../public/bg.png";
import Google from "../../../public/google.png";
import Image from "next/image";
import { ArrowBack } from "@mui/icons-material";
import { Box, Checkbox, TextField } from "@mui/material";
import Link from "next/link";

function Register() {
  return (
    <div className="flex flex-row justify-between w-full my-5">
      <div className="bg-white w-[100%] mx-0 px-[8%] md:w-[50%]">
        <div className="flex flex-row items-center justify-start gap-3">
          <ArrowBack className="text-[#A3AED0] text-[14px]" />
          <p className="text-[#A3AED0] text-[14px]">Back to Homepage</p>
        </div>
        <div className=" mt-20">
          <h2 className="text-[#1E2B3B] text-[24px] font-bold">
            Create your QickPay account
          </h2>
          <p className="text-[16px] text-[#A3AED0] mt-2">
            Please provide the required details
          </p>
        </div>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "100%" },
          }}
          autoComplete="off"
          className="mt-10"
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
          <div className="flex flex-row justify-start gap-2 items-center">
            <Checkbox />
            <p className="text-[14px] text-[#1E2B3B] font-semibold">
              I agree to qickpay&apos;s privacy policy
            </p>
          </div>
        </div>
        <button className="bg-[#2B3674] w-full p-4 ml-2 mt-3 text-white rounded-md font-bold">
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
      <div className="bg-[#2B3674] w-[50%] rounded-s-md p-10 hidden md:block">
        <Image src={Bg} alt="bg" />
      </div>
    </div>
  );
}

export default Register;
