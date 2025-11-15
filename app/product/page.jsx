"use client";
import { useState, useEffect } from "react";
import { useLoading } from "@/app/provider/LoadingProvider";
import Section1 from "./components/section1.jsx"
import Our_client from "./components/our_client.jsx"
import Section3 from "./components/section3.jsx"
import Why_choose_us from "./components/Why_choose_us.jsx"
import Section5 from "./components/section5.jsx"
import Section6 from "./components/section6.jsx"
import Section7 from "./components/section7.jsx"
export default function Product(){
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
        <div className="lg:w-[1056px] md:w-[616px] w-[380px] m-auto flex flex-col  h-[2900px]">




        <Section1 />
        <Our_client />
        <Section3 />
        <Why_choose_us />
        <Section5 />
        <Section6 />
        <Section7 />
   
        </div>
    )
}