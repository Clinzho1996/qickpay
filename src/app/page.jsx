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
import Image from "next/image";
import { useRouter } from "next/navigation";

function Home() {
  const session = useSession();
  const router = useRouter();

  if (session.status === "loading") {
    return (
      <div className="flex flex-row flex-1 justify-center h-screen">
        <Image src="/loader.svg" alt="loading" width={100} height={100} />
      </div>
    );
  }

  if (session.status === "authenticated") {
    router?.push("/dashboard");
  }
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
