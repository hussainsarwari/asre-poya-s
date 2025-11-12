"use client";

import { useState, useEffect } from "react";
import { useLoading } from "@/app/provider/LoadingProvider";
import { useLanguage } from "../provider/languageProvider";
import Gallery from "./component/Gallery.jsx";
import Image from "next/image";
import asrepoya from "@/public/icons/asrepoyaLogo2.svg";
import globalSearch from "@/public/icons/global-search.svg";
import calenderEdit from "@/public/icons/calendar-edit.svg";
import people from "@/public/icons/people.svg";
import locationtick from "@/public/icons/location-tick.svg";
import archivetick from "@/public/icons/archive-tick.svg";
import calenderSearch from "@/public/icons/calendar-search.svg";
import calendartick from "@/public/icons/calendar-tick.svg";

export default function AboutUs() {
  
  const { t, dir } = useLanguage();

 const { isLoading, showLoading, hideLoading } = useLoading();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    showLoading(); // شروع لودینگ
    const timer = setTimeout(() => {
      hideLoading(); // پایان لودینگ
      setLoaded(true);
    }, 1000); // شبیه‌سازی لودینگ 1 ثانیه‌ای
    return () => clearTimeout(timer);
  }, []);

  
  return (
    <div className="w-[300px] md:w-[616px] lg:w-[1056px] mx-auto mt-[56px] mb-[7px]">
      <div>
        <h1
          className={`${dir === "rtl" ? "flex flex-row-reverse" : "flex flex-row"} font-bold  lg:text-[32px] text-[20px] md:text-[24px]`}
        >
          {t("aboutus")}
        </h1>

        <p
          className={`${dir === "rtl" ? "flex flex-row-reverse" : "flex flex-row"} text-[#1E1E2B99] text-[12px] lg:text-[14px] my-5`}
        >
          {t("aboutUsParagraph")}
        </p>
      </div>

      <Gallery />

      {/* text section */}
      <div className={`flex flex-row-reverse w-full relative`}>
        <h1 className="border-b border-[#1E1E2B1A] pb-2 mt-20 w-[1056px] flex-row-reverse relative flex before:bg-[#06B1FD]  before:absolute before:top-4 md:before:top-[26px] lg:before:top-10  before:h-0.5 md:before:h-1 before:w-[30px] sm:before:w-[60px] before:rounded-full before:content-['']">
          <Image src={asrepoya} alt="Asre Poya Logo" />
        </h1>
      </div>

      <div className="flex flex-col gap-10 my-12 sm:my-[18px] " dir="rtl">
        <div className="flex flex-col">

          <div className="flex items-center gap-4 mb-6">
            <Image src={globalSearch} alt="globalSearch" className="w-5 sm:w-6" />
            <span className="text-right text-[#1E1E2BCC] text-[12px]  sm:text-[16px]">
              {t("aboutusfirstParagraph")}
            </span>
          </div>
          <span className="border border-[#1E1E2B0D] w-[300px] md:w-[550px] lg:w-[832px] m-auto"></span>
        </div>




   <div className="flex flex-col">
    
        <div className="flex items-center gap-4 mb-6">
          <Image src={calenderEdit} alt="calenderEdit" className="w-5 sm:w-6" />
          <span className="text-right text-[#1E1E2BCC] text-[12px]  sm:text-[16px]">
            {t("aboutushistory")}
          </span>
        </div>
    <span className="border border-[#1E1E2B0D] w-[300px] md:w-[550px] lg:w-[832px] m-auto"></span>
      
   </div>







   <div className="flex flex-col">

        <div className="flex items-center gap-4 mb-6">
          <Image src={people} alt="people" className="w-5 sm:w-6" />
          <span className="text-right text-[#1E1E2BCC] text-[12px]  sm:text-[16px]">
            {t("aboutuspeople")}
          </span>
        </div>
            <span className="border border-[#1E1E2B0D] w-[300px] md:w-[550px] lg:w-[832px] m-auto"></span>
      
   </div>






   <div className="flex flex-col">
    
        <div className="flex items-center gap-4 mb-6">
          <Image src={locationtick} alt="locationtick" className="w-5 sm:w-6" />
          <span className="text-right text-[#1E1E2BCC] text-[12px]  sm:text-[16px]">
            {t("aboutuslocation")}
          </span>
        </div>
            <span className="border border-[#1E1E2B0D] w-[300px] md:w-[550px] lg:w-[832px] m-auto"></span>
      
   </div>




   <div className="flex flex-col">

        <div className="flex items-center gap-4 mb-6">
          <Image src={archivetick} alt="archivetick" className="w-5 sm:w-6" />
          <span className="text-right text-[#1E1E2BCC] text-[12px]  sm:text-[16px]">
            {t("aboutusarchivetick")}
          </span>
        </div>
      </div>
      
   </div>
      


      <h1 className="border-b text-2xl md:text-4xl sm:text-2xl font-bold border-[#1E1E2B1A] pb-4 my-[56px] w-full flex-row-reverse relative flex before:bg-[#06B1FD] md:before:top-13 before:absolute before:top-12 before:h-0.5 md:before:h-1 before:w-[60px] before:rounded-full before:content-['']">
        {t("mission")}
      </h1>

      <div className="flex flex-row-reverse items-center gap-4">
        <Image src={calenderSearch} alt="calenderSearch" className="w-5 sm:w-6" />
        <span className="text-right text-[#1E1E2BCC] text-[12px]  sm:text-[16px]">
          {t("aboutusfirstParagraph")}
        </span>
      </div>

      <h1 className="border-b text-xl md:text-4xl sm:text-2xl font-bold border-[#1E1E2B1A] pb-4 my-[56px] w-full flex-row-reverse relative flex before:bg-[#06B1FD] md:before:top-13 before:absolute before:top-12 before:h-0.5 md:before:h-1 before:w-[60px] before:rounded-full before:content-['']">
        {t("vision")}
      </h1>

      <div className="flex flex-row-reverse items-center gap-4">
        <Image src={calendartick} alt="calenderSearch" className="w-5 sm:w-8" />
        <span className="text-right text-[#1E1E2BCC] text-[12px]  sm:text-[16px]">
          {t("aboutuscalendartick")}
        </span>
      </div>
    </div>
  );
}
