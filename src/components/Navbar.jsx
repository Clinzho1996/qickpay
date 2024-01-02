import React from "react";
import Logo from "../../public/logo.png";
import Image from "next/image";
import { Box, Checkbox, TextField } from "@mui/material";
import Link from "next/link";

function Navbar() {
  return (
    <div className="w-full flex flex-row justify-between items-center align-middle py-[2%] px-[6%]">
      <div className="w-full ">
        <Link href="/">
          <Image
            src={Logo}
            alt="logo"
            className="h-15 w-[10%] flex flex-row  justify-start"
          />
        </Link>
      </div>
      <div className="flex flex-row justify-end gap-5 w-[30%]">
        <button className="border border-[#2B3674] font-bold px-10 p-3 rounded-full text-[#2B3674] hover:bg-[#2B3674] hover:text-white">
          Login
        </button>
        <button className=" bg-[#2B3674] font-bold px-10 p-3 rounded-full text-white">
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default Navbar;
