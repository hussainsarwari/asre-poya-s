"use client";
import Image from "next/image";
import { useLanguage } from "../../provider/languageProvider";
import arr_left from "@/public/icons/home/arrow-left2.svg";
import calendar from "@/public/icons/products/calendar.png";
import Rectangle from "@/public/icons/products/Rectangle.svg";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Price_plane() {
  const { t } = useLanguage();
  const [selectedSoft, setSelectedSoft] = useState("doctor");

  // دیتای داینامیک — فقط لازم برای سوییچ
    const plans = {
    doctor: ["plan1", "plan2", "plan3"],
    pharmacy: ["plan4", "plan5", "plan6"],
    lab: ["plan7", "plan8", "plan9"],
  };

  return (
    <div className="w-[380px] md:w-[616px] lg:w-[1056px] m-auto mt-20">
      <div className="flex flex-col items-end w-full">
        <h1 className="relative w-full text-right text-[#1E1E2B] lg:text-[32px] font-bold">
          {t("product_price_plane_title")}
          <Image
            src={Rectangle}
            alt="Rectangle"
            className="absolute right-0 h-full top-3"
          />
        </h1>
        <p className="text-[14px] text-[#1E1E2B99] mt-2">
          {t("product_price_plane_paragraph")}
        </p>
      </div>

      {/* SOFTWARE BUTTONS */}
      <div className="relative my-11">
        <ul className="w-[580px] flex gap-3 items-end justify-end absolute right-0 ">

          {/* doctor */}
          <li
            onClick={() => setSelectedSoft("doctor")}
            className={`cursor-pointer flex flex-row-reverse gap-1 w-[146px] h-10 rounded-2xl items-center justify-center 
            ${
              selectedSoft === "doctor"
                ? "bg-[#06B1FD] text-white"
                : "bg-[#1E1E2B0D] text-[#1E1E2BCC]"
            }`}
          >
            {t("doctor_assistant")}
              {selectedSoft === "doctor" &&
            <Image src={arr_left} alt="arrow left" className="rotate-180" />
}
          </li>

          {/* pharmacy */}
          <li
            onClick={() => setSelectedSoft("pharmacy")}
            className={`cursor-pointer flex flex-row-reverse gap-1 w-[146px] h-10 rounded-2xl items-center justify-center 
            ${
              selectedSoft === "pharmacy"
                ? "bg-[#06B1FD] text-white"
                : "bg-[#1E1E2B0D] text-[#1E1E2BCC]"
            }`}
          >
            {t("doctor_assistant")}
            {selectedSoft === "pharmacy" &&
            <Image src={arr_left} alt="arrow left" className="rotate-180" />
            }
          </li>

          {/* lab */}
          <li
            onClick={() => setSelectedSoft("lab")}
            className={`cursor-pointer flex flex-row-reverse gap-1 w-[146px] h-10 rounded-2xl items-center justify-center 
            ${
              selectedSoft === "lab"
                ? "bg-[#06B1FD] text-white"
                : "bg-[#1E1E2B0D] text-[#1E1E2BCC]"
            }`}
          >
            {t("doctor_assistant")}
              {selectedSoft === "lab" &&
            <Image src={arr_left} alt="arrow left" className="rotate-180" />
}
          </li>

        </ul>
      </div>

   <div className="flex flex-col gap-6 -mt-10 md:flex-row">
{/* PLANS */}
<div className="flex flex-col gap-6 my-25 md:flex-row">
  <AnimatePresence mode="wait">
    {plans[selectedSoft].map((p, index) => (
      <motion.div
        key={p}
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: -20 }}
        transition={{ duration: 0.35, delay: index * 0.07 }}
        className="w-[336px] rounded-2xl h-[534px] border border-[#1E1E2B1A] bg-[#1E1E2B0D] flex flex-col items-end p-6"
      >
        <Image src={calendar} alt="icon" />

        <h1 className="text-[20px] font-semibold text-[#1E1E2B] my-3">
          {t(`${p}_title`)}
        </h1>

        <p className="text-[#1E1E2B] text-[24px] flex-row-reverse flex items-center gap-3">
          {t(`${p}_price`)}
          <span className="text-[14px] text-[#1E1E2B99]">
            {t("currency")}
          </span>
        </p>

        <p className="text-[14px] text-[#1E1E2B99] text-right my-3">
          {t(`${p}_paragraph`)}
        </p>

        <button className="w-[288px] py-3 my-4 h-[49px] bg-[#06B1FD] rounded-2xl text-white">
          {t("buy")}
        </button>

        {/* features */}
        <div className="border-t border-[#0000001A] flex flex-col items-end py-4 w-[287px]">
          <h5 className="text-[#1E1E2B] text-[14px] ">
            {t("price_plan1_feature_title")}
          </h5>

          <p className="text-[12px] text-[#1E1E2B99] mt-1">
            {t("price_plan1_feature_paragraph")}
          </p>

          <ul className="h-[152px] mt-3 flex flex-col gap-2">
            {[1, 2, 3, 4].map((num) => (
              <li
                key={num}
                className="text-[#1E1E2B] text-[14px] h-8 flex gap-1 items-center"
              >
                {t(`price_plan1_feature${num}`)}
                <Image
                  src={calendar}
                  alt="calendar"
                  className="w-4 h-4"
                />
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    ))}
  </AnimatePresence>
</div>

    </div>
    </div>
  );
}
