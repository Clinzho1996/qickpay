"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

function Dashboard() {
  const session = useSession();
  const router = useRouter();

  if (session.status === "loading") {
    return (
      <div className="flex flex-row flex-1 justify-center h-screen">
        <Image src="/loader.svg" alt="loading" width={100} height={100} />
      </div>
    );
  }

  if (session.status === "unauthenticated") {
    router?.push("/login");
  }
  return (
    <div>
      <Navbar />
      <div className="p-10 text-center">
        <h2>Dashboard</h2>
      </div>
      <Footer />
    </div>
  );
}

export default Dashboard;
