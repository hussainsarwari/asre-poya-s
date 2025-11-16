"use client";
import { useState, useEffect } from "react";
import { useLoading } from "@/app/provider/LoadingProvider";
import Section1 from "./components/section1.jsx"
import Our_client from "./components/our_client.jsx"
import Main_feature_software from "./components/main_feature_software.jsx"
import Why_choose_us from "./components/Why_choose_us.jsx"
import Software_versions from "./components/software_versions.jsx"
import Price_plane from "./components/Price_plane.jsx"
import Client_opinion from "./components/client_opinion.jsx"
import  FAQ from "./components/FAQ.jsx"
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
        <div className="lg:w-[1056px] md:w-[616px] w-[380px] m-auto flex flex-col  ">




        <Section1 />
        <Our_client />
        <Main_feature_software />
        <Why_choose_us />
        <Software_versions />
        <Price_plane />
        <Client_opinion />

        <FAQ />
   
        </div>
    )
}