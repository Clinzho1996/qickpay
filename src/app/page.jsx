"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React, { useState } from "react";
import Works from "@/components/Works";
import Refer from "@/components/Refer";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import Support from "@/components/Support";
import Faq from "@/components/Faq";
import { useSession } from "next-auth/react";
import Login from "./login/page";

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Refer />
      <Works />
      <Testimonials />
      <Support />
      <Faq />
      <Footer />
    </div>
  );
}

export default Home;
