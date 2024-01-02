import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

function Dashboard() {
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
