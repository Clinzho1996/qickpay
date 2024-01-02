"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

function Home() {
  return (
    <div>
      <Navbar />
      <div className="p-10 text-center">
        <h2>Home Page</h2>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
