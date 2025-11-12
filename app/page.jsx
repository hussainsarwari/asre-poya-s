"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

import Section1 from "./home_components/section1.jsx";
import Section2 from "./home_components/section2.jsx";
import Section3 from "./home_components/section3.jsx";
import Section4 from "./home_components/section4.jsx";
import Section5 from "./home_components/section5.jsx";
import { useLoading } from "@/app/provider/LoadingProvider";
import whatsapp from "@/public/icons/home/whatsapp_green.svg";

export default function Home() {
  const { isLoading, showLoading, hideLoading } = useLoading();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // ابتدا لودینگ رو فعال کن
    showLoading();

    // بعد با timeout جدا از render اصلی، لودینگ رو hide کن و state تغییر بده
    const timer = setTimeout(() => {
      hideLoading();
      setLoaded(true);
    }, 500); // زمان شبیه‌سازی لودینگ

    return () => clearTimeout(timer);
  }, [showLoading, hideLoading]);

  return (
    <div className="flex flex-col mt-[134px]">
   

      {loaded && (
        <>
          <Section1 className="bg-white" />
          <Section2 />
          <Section3 />
          <Section4 />
          <Section5 />
          <Image
            src={whatsapp}
            alt="whatsapp"
            className="fixed right-3 top-[666px] cursor-pointer"
          />
        </>
      )}
    </div>
  );
}
