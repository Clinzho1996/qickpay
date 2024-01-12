"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import {
  AccountBalanceSharp,
  DashboardSharp,
  PaymentSharp,
  Settings,
} from "@mui/icons-material";

function Dashboard() {
  const session = useSession();
  const router = useRouter();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleTabClick = (index) => {
    // You can add logic here to handle tab clicks, e.g., showing tab details
    console.log("Tab clicked:", index);
  };

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
      <Tabs
        value={value}
        centered
        onChange={handleChange}
        aria-label="icon position tabs example"
      >
        <Tab
          icon={<DashboardSharp />}
          iconPosition="start"
          label="Overview"
          onClick={() => handleTabClick(0)}
        />
        <Tab
          icon={<AccountBalanceSharp />}
          iconPosition="end"
          label="Accounts & Balances"
          onClick={() => handleTabClick(1)}
        />
        <Tab
          icon={<PaymentSharp />}
          iconPosition="end"
          label="Paymets"
          onClick={() => handleTabClick(2)}
        />
        <Tab
          icon={<Settings />}
          iconPosition="end"
          label="Settings & Profile"
          onClick={() => handleTabClick(3)}
        />
      </Tabs>
      <Footer />
    </div>
  );
}

export default Dashboard;
