"use client";

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

  return (
    <div className="w-[90%] sm:w-[75%] mx-auto my-20 ">
      <div>
        <h1
          className={`${dir === "rtl" ? "flex flex-row-reverse" : "flex flex-row"} font-bold  md:text-4xl text-xl`}
        >
          {t("aboutus")}
        </h1>

        <p
          className={`${dir === "rtl" ? "flex flex-row-reverse" : "flex flex-row"} text-[#1E1E2B99] text-sm sm:text-md my-5`}
        >
          {t("aboutUsParagraph")}
        </p>
      </div>

      <Gallery />

      {/* text section */}
      <div className={`flex flex-row-reverse w-full relative`}>
        <h1 className="border-b border-[#1E1E2B1A] pb-2 my-20 w-full flex-row-reverse relative flex before:bg-[#06B1FD] before:absolute before:top-5 sm:before:top-10 before:h-1 before:w-[30px] sm:before:w-[60px] before:rounded-full before:content-['']">
          <Image src={asrepoya} alt="Asre Poya Logo"   />
        </h1>
      </div>

      <div className="flex flex-col my-0 sm:my-10 gap-10 sm:gap-20" dir="rtl">
        <div className="flex items-center gap-3">
          <Image src={globalSearch} alt="globalSearch" className="w-5 sm:w-6"  />
          <span className="text-right text-[#1E1E2BCC] text-[12px]  sm:text-[16px]">
            {t("aboutusfirstParagraph")}
          </span>
        </div>

        <div className="flex items-center gap-3">
          <Image src={calenderEdit} alt="calenderEdit" className="w-5 sm:w-6"  />
          <span className="text-right text-[#1E1E2BCC] text-[12px]  sm:text-[16px]">
            {t("aboutushistory")}
          </span>
        </div>

        <div className="flex items-center gap-3">
          <Image src={people} alt="people" className="w-5 sm:w-6"  />
          <span className="text-right text-[#1E1E2BCC] text-[12px]  sm:text-[16px]">
            {t("aboutuspeople")}
          </span>
        </div>

        <div className="flex items-center gap-3">
          <Image src={locationtick} alt="locationtick" className="w-5 sm:w-6"  />
          <span className="text-right text-[#1E1E2BCC] text-[12px]  sm:text-[16px]">
            {t("aboutuslocation")}
          </span>
        </div>

        <div className="flex items-center gap-3">
          <Image src={archivetick} alt="archivetick" className="w-5 sm:w-6"  />
          <span className="text-right text-[#1E1E2BCC] text-[12px]  sm:text-[16px]">
            {t("aboutusarchivetick")}
          </span>
        </div>
      </div>

      <h1 className="border-b text-2xl md:text-4xl sm:text-2xl font-bold border-[#1E1E2B1A] pb-4 my-20 w-full flex-row-reverse relative flex before:bg-[#06B1FD] before:absolute before:top-13 before:h-1 before:w-[60px] before:rounded-full before:content-['']">
        {t("mission")}
      </h1>

      <div className="flex items-center gap-3 flex-row-reverse">
        <Image src={calenderSearch} alt="calenderSearch" className="w-5 sm:w-6"  />
        <span className="text-right text-[#1E1E2BCC] text-[12px]  sm:text-[16px]">
          {t("aboutusfirstParagraph")}
        </span>
      </div>

      <h1 className="border-b text-xl md:text-4xl sm:text-2xl font-bold border-[#1E1E2B1A] pb-4 my-20 w-full flex-row-reverse relative flex before:bg-[#06B1FD] before:absolute before:top-13 before:h-1 before:w-[60px] before:rounded-full before:content-['']">
        {t("vision")}
      </h1>

      <div className="flex items-center gap-3 flex-row-reverse">
        <Image src={calendartick} alt="calenderSearch" className="w-5 sm:w-8"  />
        <span className="text-right text-[#1E1E2BCC] text-[12px]  sm:text-[16px]">
          {t("aboutuscalendartick")}
        </span>
      </div>
    </div>
  );
}
