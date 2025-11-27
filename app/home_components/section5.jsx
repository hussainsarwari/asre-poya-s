"use client";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../provider/languageProvider";
import { useLoading } from "@/app/provider/LoadingProvider";
import Link from "next/link";

import bg_img from "@/public/icons/home/bg_img3.svg";
import calendar from "@/public/icons/calendar-tick.svg";
import calendar_search from "@/public/icons/calendar-search.svg";
import cal from "@/public/icons/home/calendar.svg";
import arrow_left from "@/public/icons/home/arrow-left.svg";
import arrow_right from "@/public/icons/home/arrow-left_lighter.svg";

import our_client1 from "@/public/icons/home/Frame1.svg";
import our_client2 from "@/public/icons/home/Frame2.svg";
import our_client3 from "@/public/icons/home/Frame3.svg";
import our_client4 from "@/public/icons/home/Frame4.svg";
import our_client5 from "@/public/icons/home/Frame5.svg";
import our_client6 from "@/public/icons/home/Frame6.svg";
import our_client7 from "@/public/icons/home/Frame7.svg";
import our_client8 from "@/public/icons/home/Frame8.svg";
import our_client9 from "@/public/icons/home/Frame9.svg";
import OurClient from "@/app/product/components/our_client.jsx";

export default function Section5() {
  const { t } = useLanguage();
  const { showLoading } = useLoading();

  return (
    <div className="lg:relative overflow-hidden mt-15 h-[1200px] lg:h-[870px] relative">
      {/* blue background section */}
      <div className="lg:w-[50%] h-[285px] absolute hidden lg:block lg:top-[120px] md:w-[1700px] top-[500px] md:right-[10%] z-0 rounded-tr-[32px] rounded-br-[32px] bg-[#06B1FD] lg:left-0"></div>

      {/* content */}
      <div className="m-auto lg:w-[1056px] relative z-10 md:w-[616px] w-[346px] overflow-visible">
        {/* blue box mobile */}
        <div className="lg:w-[50%] h-[285px] lg:hidden lg:top-[120px] top-[500px] w-[900px] absolute rounded-tr-[32px] rounded-br-[32px] bg-[#06B1FD] -right-5"></div>

        {/* three white boxes */}
        <div className="flex flex-col gap-[16px] z-40 left-[0px] lg:top-25 md:top-120 top-115 absolute">
          <div className="lg:w-[516px] lg:h-[95px] rounded-xl bg-white border border-[#1E1E2B1A] p-3 shadow-lg shadow-[#00000026]">
            <h1 className="flex flex-row text-[12px] lg:text-[16px] text-[#1E1E2B] font-semibold gap-1 justify-end">
              {t("home_page_section5_about_us_exprience_title1")}
              <span>
                <Image src={calendar} alt="calculator tick" />
              </span>
            </h1>
            <p className="text-[#1E1E2B99] text-[10px] lg:text-[12px] text-right mt-2">
              {t("home_page_section5_about_us_exprience_paragraph1")}
            </p>
          </div>

          <div className="lg:w-[516px] lg:h-[76px] rounded-xl bg-white border border-[#1E1E2B1A] p-3 shadow-lg shadow-[#00000026]">
            <h1 className="flex flex-row text-[12px] lg:text-[16px] text-[#1E1E2B] font-semibold gap-1 justify-end">
              {t("home_page_section5_about_us_exprience_title2")}
              <span>
                <Image src={calendar_search} alt="calculator tick" />
              </span>
            </h1>
            <p className="text-[#1E1E2B99] text-[10px] lg:text-[12px] text-right mt-2">
              {t("home_page_section5_about_us_exprience_paragraph2")}
            </p>
          </div>

          <div className="lg:w-[516px] lg:h-[76px] rounded-xl bg-white border border-[#1E1E2B1A] p-3 shadow-lg shadow-[#00000026]">
            <h1 className="flex flex-row text-[12px] lg:text-[16px] text-[#1E1E2B] font-semibold gap-1 justify-end">
              {t("home_page_section5_about_us_exprience_title3")}
              <span>
                <Image src={cal} alt="calculator tick" />
              </span>
            </h1>
            <p className="text-[#1E1E2B99] text-[10px] lg:text-[12px] text-right mt-2">
              {t("home_page_section5_about_us_exprience_paragraph3")}
            </p>
          </div>
        </div>

        {/* top title */}
        <div className="flex items-center justify-between">
          <Link
            className="text-[#06B1FD] text-[14px] font-semibold"
            href="/about-us"
            onClick={() => {
              showLoading();
              localStorage.setItem("activeMenu", "about-us");
            }}
          >
            {t("see_all")}
          </Link>

          <div className="flex flex-col justify-end">
            <h1 className="text-[18px] lg:text-[32px] font-bold text-[#1E1E2B]">
              {t("aboutus")}
            </h1>
            <p className="text-[#1E1E2B99] text-right text-[8px] lg:text-[14px]">
              {t("home_page_section5_aboutusparagraph")}
            </p>
          </div>
        </div>

        {/* background image */}
        <div className="lg:relative right-[-40px] mt-10">
          <Image
            src={bg_img}
            alt="background image"
            className="absolute right-0 lg:w-[519px]"
          />
        </div>

        <div className="relative lg:top-80 md:top-190 top-190">
          <OurClient />
        </div>
      </div>
    </div>
  );
}
