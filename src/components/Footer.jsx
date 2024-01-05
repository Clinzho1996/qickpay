import React from "react";

function Footer() {
  const date = new Date().getFullYear();

  return (
    <div className="bg-[#2B3674] p-3">
      <p className="text-white font-bold text-center text-[12px] md:text-[16px]">
        Copyright &copy; {date} QickPay | All Rights Reserved
      </p>
    </div>
  );
}

export default Footer;
