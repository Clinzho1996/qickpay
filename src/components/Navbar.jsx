"use client";
import React, { useState } from "react";
import Logo from "../../public/logo.png";
import Image from "next/image";
import { Box, Checkbox, TextField } from "@mui/material";
import { BiMenuAltRight } from "react-icons/bi";
import Link from "next/link";

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };
  return (
    <div className="w-full flex flex-row justify-between items-center align-middle py-[1%] px-[6%]">
      <div className="w-full ">
        <Link href="/">
          <Image
            src={Logo}
            alt="logo"
            className="h-[15%] w-[30%] flex flex-row  justify-start md:h-15 md:w-[10%]"
          />
        </Link>
      </div>
      <button onClick={handleMenuToggle}>
        <BiMenuAltRight size={30} />
      </button>
      {mobileMenuOpen && (
        <div className="absolute top-12 right-6 mt-2 py-2 w-[200px] bg-white border rounded-lg z-10">
          <div
            className={`${
              mobileMenuOpen ? "flex" : "hidden"
            } md:hidden flex-col gap-3 h-[120px] p-5  z-10 mt-0`}
          >
            <Link href="/login">
              <button className="border border-[#2B3674] font-bold px-12 p-3 md:px-10 md:text-[16px] text-[12px] rounded-full text-[#2B3674] hover:bg-[#2B3674] hover:text-white">
                Login
              </button>
            </Link>
            <Link href="/register">
              <button className=" bg-[#2B3674] font-bold px-12 p-3 md:px-10 md:text-[16px] text-[12px] rounded-full text-white">
                Sign Up
              </button>
            </Link>
          </div>
        </div>
      )}
      <div className="md:flex flex-row justify-end gap-5 w-[100%] md:w-[35%] hidden">
        <Link href="/login">
          <button className="border border-[#2B3674] font-bold px-7 p-3 md:px-10 md:text-[16px] text-[12px] rounded-full text-[#2B3674] hover:bg-[#2B3674] hover:text-white">
            Login
          </button>
        </Link>
        <Link href="/register">
          <button className=" bg-[#2B3674] font-bold px-7 p-3 md:px-10 md:text-[16px] text-[12px] rounded-full text-white">
            Sign Up
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
