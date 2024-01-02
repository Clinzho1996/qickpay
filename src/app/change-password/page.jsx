import React from "react";
import Bg from "../../../public/bg.png";
import Google from "../../../public/google.png";
import Image from "next/image";
import { ArrowBack } from "@mui/icons-material";
import { Box, Checkbox, TextField } from "@mui/material";
import Link from "next/link";

function ChangePassword() {
  return (
    <div className="flex flex-row justify-between w-full my-5">
      <div className="bg-white w-[100%] px-[4%] md:px-[8%] md:w-[50%]">
        <div className="flex flex-row items-center justify-start gap-3">
          <ArrowBack className="text-[#A3AED0] text-[14px]" />
          <p className="text-[#A3AED0] text-[14px]">Back to Homepage</p>
        </div>
        <div className=" mt-10 md:20">
          <h2 className="text-[#1E2B3B] text-[18px] md:text-[24px] font-bold">
            Chang your password
          </h2>
          <p className="text-[14px] md:text-[16px] text-[#A3AED0] mt-2">
            Enter your new details to change password!
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
          <p className="text-[14px] text-[#1E2B3B] font-semibold">
            Enter Password*
          </p>
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
          <p className="text-[14px] text-[#1E2B3B] font-semibold">
            Confirm Password*
          </p>
          <TextField
            id="outlined-basic"
            label="Re-enter password"
            type="password"
            variant="outlined"
            sx={{
              "& .MuiInputBase-input": {
                color: "#A3AED0",
              },
            }}
          />
        </Box>
        <button className="bg-[#2B3674] w-full p-4 mt-3 text-white rounded-md font-bold">
          Change Password
        </button>
      </div>
      <div className="bg-[#2B3674] w-[50%] rounded-s-md p-10 hidden md:block">
        <Image src={Bg} alt="bg" />
      </div>
    </div>
  );
}

export default ChangePassword;
