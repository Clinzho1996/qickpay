"use client";
import React, { useState, useEffect } from "react";
import { FiLogOut, FiSearch } from "react-icons/fi";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import Logo from "../../public/logo.png";
import Image from "next/image";
import { Box, Checkbox, TextField } from "@mui/material";
import { BiMenuAltRight } from "react-icons/bi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaUser } from "react-icons/fa";

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { data: session, status } = useSession();
  const router = useRouter();

  const handleMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  // Function to get the name initials from the user's name
  const getNameInitials = (name) => {
    if (!name) return "";
    const initials = name
      .split(" ")
      .map((word) => word.charAt(0))
      .join("");
    return initials.toUpperCase();
  };

  const handleSignOut = async () => {
    await signOut();
    toast.success("You are successfully signed out.", {
      autoClose: 5000,
      onClose: () => {
        router?.push("/");
      },
    });
  };

  return (
    <div className="w-full flex flex-row justify-between items-center align-middle py-[2%] md:py-[1%] px-[6%]">
      <ToastContainer />
      <div className="w-full ">
        <Link href="/">
          <Image
            src={Logo}
            alt="logo"
            className="h-[15%] w-[30%] flex flex-row  justify-start md:h-15 md:w-[10%]"
          />
        </Link>
      </div>
      <div className="block md:hidden">
        <button onClick={handleMenuToggle}>
          <BiMenuAltRight size={30} />
        </button>
      </div>
      {mobileMenuOpen && (
        <div className="absolute top-12 right-6 mt-2 py-2 w-[200px] bg-white border rounded-lg z-10">
          <div
            className={`${
              mobileMenuOpen ? "flex" : "hidden"
            } md:hidden flex-col gap-3 h-[120px] p-5  z-10 mt-0`}
          >
            {session?.user ? (
              <div className="hidden md:block">
                {session.user.image ? (
                  <Image
                    src={session.user.image}
                    alt="profile"
                    width={30}
                    height={30}
                  />
                ) : (
                  <div>
                    <h2>{getNameInitials(session.user.name)}</h2>
                  </div>
                )}
                <h3>{session.user.name}</h3>
                <FiLogOut onClick={handleSignOut} size={25} />
              </div>
            ) : (
              <div className="md:hidden flex-col gap-3 h-[120px] p-5  z-10 mt-0">
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
            )}
          </div>
        </div>
      )}
      {session?.user ? (
        <div className="hidden md:flex flex-row w-[30%] justify-end gap-3 items-center">
          {session.user.image ? (
            <Image
              src={session.user.image}
              alt="profile"
              className="rounded-full"
              width={40}
              height={40}
            />
          ) : (
            <div>
              <h2>{getNameInitials(session.user.name)}</h2>
            </div>
          )}
          <h3>Hello, {session.user.name}</h3>
          <FiLogOut onClick={handleSignOut} size={25} />
        </div>
      ) : (
        <div className="md:flex flex-row justify-end gap-5 w-[100%] md:w-[35%] hidden">
          <Link href="/login">
            <button className="border border-[#2B3674] font-bold px-7 p-3 md:px-10 md:text-[16px] text-[12px] rounded-full text-[#2B3674] hover:bg-[#2B3674] hover:text-white hover:scale-110 transition-transform">
              Login
            </button>
          </Link>
          <Link href="/register">
            <button className=" bg-[#2B3674] font-bold px-7 p-3 md:px-10 md:text-[16px] text-[12px] rounded-full text-white hover:scale-110 transition-transform">
              Sign Up
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Navbar;
