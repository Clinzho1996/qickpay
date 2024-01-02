import React from "react";
import Bg from "../../../public/bg.png";
import Google from "../../../public/google.png";
import Image from "next/image";
import { ArrowBack } from "@mui/icons-material";
import { Box, Checkbox, TextField } from "@mui/material";
import Link from "next/link";

function Login() {
  return (
    <div className="flex flex-row justify-between w-full my-5">
      <div className="bg-white w-[100%] mx-0 px-[8%] md:w-[50%]">
        <div className="flex flex-row items-center justify-start gap-3">
          <ArrowBack className="text-[#A3AED0] text-[14px]" />
          <p className="text-[#A3AED0] text-[14px]">Back to Homepage</p>
        </div>
        <div className=" mt-10 md:20">
          <h2 className="text-[#1E2B3B] text-[18px] md:text-[24px] font-bold">
            Sign In to access your dashboard
          </h2>
          <p className="text-[14px] md:text-[16px] text-[#A3AED0] mt-2">
            Enter your email and password to sign in!
          </p>
          <button className="bg-[#F4F7FE] flex flex-row items-center gap-5 justify-center rounded-sm font-semibold mt-5 w-full p-3 capitalize">
            <Image src={Google} alt="google" className="w-6 h-6" />
            Sign in with Google
          </button>
        </div>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "100%" },
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
              keep me logged in
            </p>
          </div>
          <Link
            href="/forgot-password"
            className="text-[14px] text-[#1E2B3B] font-semibold"
          >
            Forgot Password?
          </Link>
        </div>
        <button className="bg-[#2B3674] w-full p-4 ml-2 mt-3 text-white rounded-md font-bold">
          Sign In
        </button>
        <div className="mt-4 ml-2">
          <p className="text-[14px] text-[#1E2B3B] font-semibold">
            Not registered yet?{" "}
            <Link href="/register" className="text-[#F55425] font-semibold">
              Create an Account
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

export default Login;
