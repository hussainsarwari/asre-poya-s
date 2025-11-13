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

export default function Section5() {
  const { t } = useLanguage();
  const { showLoading } = useLoading();
  const [index, setIndex] = useState(0);

  const clients = [
    our_client1,
    our_client2,
    our_client3,
    our_client4,
    our_client5,
    our_client6,
    our_client7,
    our_client8,
    our_client9,
  ];

  const next = () => setIndex((prev) => (prev + 3) % clients.length);
  const prev = () =>
    setIndex((prev) => (prev - 3 + clients.length) % clients.length);

  const visibleClients = [
    clients[index],
    clients[(index + 1) % clients.length],
    clients[(index + 2) % clients.length],
    clients[(index + 3) % clients.length],
    clients[(index + 4) % clients.length],
    clients[(index + 5) % clients.length],
    clients[(index + 6) % clients.length],
    clients[(index + 7) % clients.length],
    clients[(index + 8) % clients.length],
    clients[(index + 9) % clients.length],
  ];

  return (
    <div className="relative overflow-hidden -mt-15">
      {/* blue background section */}
      <div className="lg:w-[50%] lg:h-[285px] absolute lg:top-[120px] z-0 rounded-tr-[32px] rounded-br-[32px] bg-[#06B1FD] left-0">
      



      
      </div>

      {/* content */}
      <div className="m-auto lg:w-[1056px] relative z-10">
        
<div className="flex flex-col gap-[16px] z-40 left-[0px] top-25 absolute">
          <div className="lg:w-[516px] lg:h-[95px] rounded-xl bg-white border border-[#1E1E2B1A]   p-3 shadow-lg shadow-[#00000026]">
            <h1 className="flex flex-row text-[16px] text-[#1E1E2B] font-semibold gap-1 justify-end">
              {t("home_page_section5_about_us_exprience_title1")}
              <span>
                <Image src={calendar} alt="calculator tick" />
              </span>
            </h1>
            <p className="text-[#1E1E2B99] text-[12px] text-right mt-2">
              {t("home_page_section5_about_us_exprience_paragraph1")}
            </p>
          </div>
          <div className="lg:w-[516px] lg:h-[76px] rounded-xl bg-white border border-[#1E1E2B1A]  p-3 shadow-lg shadow-[#00000026]">
            <h1 className="flex flex-row text-[16px] text-[#1E1E2B] font-semibold gap-1 justify-end">
              {t("home_page_section5_about_us_exprience_title2")}
              <span>
                <Image src={calendar_search} alt="calculator tick" />
              </span>
            </h1>
            <p className="text-[#1E1E2B99] text-[12px] text-right mt-2">
              {t("home_page_section5_about_us_exprience_paragraph2")}
            </p>
          </div>
          <div className="lg:w-[516px] lg:h-[76px] rounded-xl bg-white border border-[#1E1E2B1A]  p-3 shadow-lg shadow-[#00000026]">
            <h1 className="flex flex-row text-[16px] text-[#1E1E2B] font-semibold gap-1 justify-end">
              {t("home_page_section5_about_us_exprience_title3")}
              <span>
                <Image src={cal} alt="calculator tick" />
              </span>
            </h1>
            <p className="text-[#1E1E2B99] text-[12px] text-right mt-2">
              {" "}
              {t("home_page_section5_about_us_exprience_paragraph3")}
            </p>
          </div>
        </div>


        <div className="flex justify-between">
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
            <h1 className="text-[32px] font-bold text-[#1E1E2B]">
              {t("aboutus")}
            </h1>
            <p className="text-[#1E1E2B99] text-right text-[14px]">
              {t("home_page_section5_aboutusparagraph")}
            </p>
          </div>
        </div>

        {/* background img */}
        <div className="relative right-[-40px] mt-10">
          <Image
            src={bg_img}
            alt="background image"
            className="absolute right-0 lg:w-[519px]"
          />
        </div>

        {/* clients section */}
        <div className=" mt-110">
          <div className="relative flex items-center justify-between mb-5">
            <div className="flex gap-3 lg lg:hidden">
              <Image
                className="transition-transform cursor-pointer hover:scale-110"
                onClick={prev}
                alt="arrow left"
                src={arrow_left}
              />
              <Image
                className="transition-transform cursor-pointer hover:scale-110"
                onClick={next}
                alt="arrow right"
                src={arrow_right}
              />
            </div>
            <div className="absolute right-0">
              <h1 className="text-[24px] font-bold text-[#1E1E2B] text-right">
                {t("our_client")}
              </h1>
              <p className="text-[#1E1E2B99] text-[14px] text-right">
                {t("our_client_paragraph")}
              </p>
            </div>
          </div>

          <div className="flex mt-20">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="flex justify-center gap-3"
              >
                {visibleClients.map((client, i) => (
                  <Image
                    key={i}
                    src={client}
                    alt="our client"
                    className="lg:w-[96px]"
                  />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
