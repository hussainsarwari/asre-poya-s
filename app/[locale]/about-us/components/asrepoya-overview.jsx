"use client";

import Image from "next/image";
import asrepoya_logo from "@/public/icons/asrepoyaLogo.svg";
import globalSearch from "@/public/icons/global-search.svg";
import calenderEdit from "@/public/icons/calendar-edit.svg";
import people from "@/public/icons/people.svg";
import locationtick from "@/public/icons/location-tick.svg";
import archivetick from "@/public/icons/archive-tick.svg";
import calenderSearch from "@/public/icons/calendar-search.svg";
import calendartick from "@/public/icons/calendar-tick.svg";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
export default function AsrePoyaOverview() {
  const t = useTranslations();
  const locale = useLocale();

  const dir = locale === "fa" || locale === "ps" ? "rtl" : "ltr";
  
  return (
<div >
  
      {/* text section */}
      <div  className={`flex  w-full relative`}   dir= {dir === "rtl" ? "rtl" : "ltr"}>
        <h1   className={`border-b border-[#1E1E2B1A] pb-2 mt-20 w-[1056px]  relative flex before:bg-[#06B1FD]   before:absolute before:top-11 md:before:top-11 lg:before:top-10  before:h-0.5 md:before:h-1 before:w-[60px] before:rounded-full before:content-['']`}>
          <Image  src={asrepoya_logo} alt="Asre Poya Logo"  />
          <span className="text-[24px] text-[#1E1E2B] font-bold">{t("asrepoya")}</span>
        </h1>
      </div>

      <div  className="flex flex-col gap-10 my-12 sm:my-[18px] "  dir= {dir === "rtl" ? "rtl" : "ltr"}>
        <div className="flex flex-col">

          <div  className="flex items-center gap-4 mb-6">
            <Image src={globalSearch} alt="globalSearch" className="w-5 sm:w-6" />
            <span className=" text-[#1E1E2BCC] text-[12px]  sm:text-[16px]">
              {t("aboutusfirstParagraph")}
            </span>
          </div>
          <span className="border border-[#1E1E2B0D] w-[300px] md:w-[550px] lg:w-[832px] m-auto"></span>
        </div>




   <div className="flex flex-col"  dir= {dir === "rtl" ? "rtl" : "ltr"}>
    
        <div   className="flex items-center gap-4 mb-6">
          <Image src={calenderEdit} alt="calenderEdit" className="w-5 sm:w-6" />
          <span className=" text-[#1E1E2BCC] text-[12px]  sm:text-[16px]">
            {t("aboutushistory")}
          </span>
        </div>
    <span className="border border-[#1E1E2B0D] w-[300px] md:w-[550px] lg:w-[832px] m-auto"></span>
      
   </div>







   <div className="flex flex-col"  dir= {dir === "rtl" ? "rtl" : "ltr"}>

        <div className="flex items-center gap-4 mb-6">
          <Image src={people} alt="people" className="w-5 sm:w-6" />
          <span className=" text-[#1E1E2BCC] text-[12px]  sm:text-[16px]">
            {t("aboutuspeople")}
          </span>
        </div>
            <span className="border border-[#1E1E2B0D] w-[300px] md:w-[550px] lg:w-[832px] m-auto"></span>
      
   </div>






   <div className="flex flex-col">
    
        <div className="flex items-center gap-4 mb-6"  dir= {dir === "rtl" ? "rtl" : "ltr"}>
          <Image src={locationtick} alt="locationtick" className="w-5 sm:w-6" />
          <span className=" text-[#1E1E2BCC] text-[12px]  sm:text-[16px]">
            {t("aboutuslocation")}
          </span>
        </div>
            <span className="border border-[#1E1E2B0D] w-[300px] md:w-[550px] lg:w-[832px] m-auto"></span>
      
   </div>




   <div className="flex flex-col">

        <div dir= {dir === "rtl" ? "rtl" : "ltr"} className="flex items-center gap-4 mb-6">
          <Image src={archivetick} alt="archivetick" className="w-5 sm:w-6" />
          <span className=" text-[#1E1E2BCC] text-[12px]  sm:text-[16px]">
            {t("aboutusarchivetick")}
          </span>
        </div>
      </div>
      
   </div>
      


      <h1 dir= {dir === "ltr" ? "rtl" : "ltr"} className="border-b text-2xl md:text-4xl sm:text-2xl font-bold border-[#1E1E2B1A] pb-4 my-[56px] w-full flex-row-reverse relative flex before:bg-[#06B1FD] md:before:top-13 before:absolute before:top-12 before:h-0.5 md:before:h-1 before:w-[60px] before:rounded-full before:content-['']">
        {t("mission")}
      </h1>

      <div dir= {dir === "ltr" ? "rtl" : "ltr"} className="flex flex-row-reverse items-center gap-4">
        <Image src={calenderSearch} alt="calenderSearch" className="w-5 sm:w-6" />
        <span dir= {dir === "rtl" ? "rtl" : "ltr"}  className=" text-[#1E1E2BCC] text-[12px]  sm:text-[16px]">
          {t("aboutusfirstParagraph")}
        </span>
      </div>

      <h1 dir= {dir === "ltr" ? "rtl" : "ltr"} className="border-b text-xl md:text-4xl sm:text-2xl font-bold border-[#1E1E2B1A] pb-4 my-[56px] w-full flex-row-reverse relative flex before:bg-[#06B1FD] md:before:top-13 before:absolute before:top-11 before:h-0.5 md:before:h-1 before:w-[60px] before:rounded-full before:content-['']">
        {t("vision")}
      </h1>

      <div dir= {dir === "ltr" ? "rtl" : "ltr"} className="flex flex-row-reverse items-center gap-4">
        <Image src={calendartick} alt="calenderSearch" className="w-5 sm:w-8" />
        <span dir= {dir === "rtl" ? "rtl" : "ltr"}  className=" text-[#1E1E2BCC] text-[12px]  sm:text-[16px]">
          {t("aboutuscalendartick")}
        </span>
      </div>
</div> 
  );
}
