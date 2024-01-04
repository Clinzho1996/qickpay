"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React, { useState } from "react";
import Airtime from "../../public/viber.png";
import Data from "../../public/internet.png";
import Electricity from "../../public/backup.png";
import Cable from "../../public/smart-tv.png";
import Water from "../../public/water-tap.png";
import States from "../../public/governament.png";
import Bills from "../../public/invoice-two.png";
import Tax from "../../public/tax.png";
import Folder from "../../public/folder.png";
import Invoice from "../../public/invoice.png";
import Debit from "../../public/credit-card.png";
import Waec from "../../public/payment.png";
import { ArrowRightAltSharp } from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";
import Works from "@/components/Works";
import Refer from "@/components/Refer";
import Hero from "@/components/Hero";

function Home() {
  return (
    <div>
      <Navbar />
      {/* Hero Section */}
      <Hero />
      {/* Refer & Earn */}
      <Refer />
      {/* Works */}
      <Works />
      <Footer />
    </div>
  );
}

export default Home;
