"use client";

import { useState } from "react";

import Section1 from "./doctor-assistant/components/section1.jsx";
import Our_client from "./doctor-assistant/components/our_client.jsx";

import Loading from "@/app/components/loading.jsx";
import Home from "./doctor-assistant/home/page.jsx";
import Hospital from "./doctor-assistant/hospital/page.jsx";
import Laborator from "./doctor-assistant/laborator/page.jsx";
import Pharmacy from "./doctor-assistant/pharmacy/page.jsx";
import Clinic from "./doctor-assistant/clinic/page.jsx";
import Home_inspection from "./doctor-assistant/home_inspection/page.jsx";
import Operation from "./doctor-assistant/opration/page.jsx";
export default function Doctor_assistat_page() {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div className="lg:w-[1056px] md:w-[616px] w-[360px] m-auto flex flex-col">
      <Loading />

      <Section1 activeTab={activeTab} setActiveTab={setActiveTab} />

      <Our_client />
      {activeTab === "home" && <Home />}
      {activeTab === "hospital" && <Hospital />}
      {activeTab === "laborator" && <Laborator />}
      {activeTab === "pharmacy" && <Pharmacy />}
      {activeTab === "clinic" && <Clinic />}
      {activeTab === "home_inspection" && <Home_inspection />}
      {activeTab === "Operation" && <Operation />}
    </div>
  );
}
