"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../provider/languageProvider";

import box3 from "@/public/icons/home/box3.svg";
import box2 from "@/public/icons/home/box2.svg";
import shield_tick from "@/public/icons/home/shield-tick.svg";
import global_search from "@/public/icons/home/global-search.svg";
import calendar from "@/public/icons/home/calendar.svg";
import people from "@/public/icons/home/people.svg";
import arrow_left from "@/public/icons/home/arrow-left.svg";
import arrow_right from "@/public/icons/home/arrow-left_lighter.svg";

export default function Section2() {
  const { t } = useLanguage();
  const [index, setIndex] = useState(0);
  const [screenSize, setScreenSize] = useState("desktop"); // mobile | tablet | desktop

  // Detect screen size
  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      if (w < 768) setScreenSize("mobile");
      else if (w < 1024) setScreenSize("tablet");
      else setScreenSize("desktop");
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Cards
  const cards = [
    {
      box: box2,
      icon: calendar,
      title: t("special_plan"),
      text: t("special_plan_paragraph"),
      dark: false,
    },
    {
      box: box2,
      icon: global_search,
      title: t("agent"),
      text: t("agent_paragraph"),
      dark: false,
    },
    {
      box: box3,
      icon: people,
      title: t("team"),
      text: t("team_paragraph"),
      dark: true,
    },
    {
      box: box2,
      icon: shield_tick,
      title: t("design"),
      text: t("design_paragraph"),
      dark: false,
    },
  ];

  // How many visible cards depending on screen size
  const visibleCount =
    screenSize === "mobile" ? 2 : screenSize === "tablet" ? 3 : 4;

  // Controls
  const next = () => {
    if (screenSize !== "desktop")
      setIndex((prev) => (prev + visibleCount) % cards.length);
  };
  const prev = () => {
    if (screenSize !== "desktop")
      setIndex((prev) => (prev - visibleCount + cards.length) % cards.length);
  };

  // Visible cards
  const visibleCards =
    screenSize === "desktop"
      ? cards
      : Array.from({ length: visibleCount }, (_, i) => {
          const realIndex = (index + i) % cards.length;
          return cards[realIndex];
        });

  return (
    <div>
      {/* Title and arrows */}
      <div className="flex flex-row-reverse items-start justify-between m-auto w-[376px] md:w-[616px] lg:w-[1056px] mt-40">
        <div className="flex flex-col items-end">
          <h2 className="text-[18px] lg:text-[32px] font-bold text-[#1E1E2B]">
            {t("advantage_asrePoya")}
          </h2>
          <p className="text-[10px] lg:text-[14px] text-[#1E1E2B99] mt-3">
            {t("advantage_paragraph")}
          </p>
        </div>

        {screenSize !== "desktop" && (
          <div className="flex gap-2">
            <Image
              className="transition-transform cursor-pointer hover:scale-110"
              onClick={prev}
              alt="arrow left"
              width={24}
              src={arrow_left}
            />
            <Image
              className="transition-transform cursor-pointer hover:scale-110"
              onClick={next}
              alt="arrow right"
              width={24}
              src={arrow_right}
            />
          </div>
        )}
      </div>

      <div className="relative lg:w-[1056px] mx-auto pt-2">
        <div className="flex justify-center mt-10 relative h-[260px] overflow-hidden">
          {screenSize === "desktop" ? (
            // Desktop (4 boxes, no animation)
            <div className="flex gap-6">
              {cards.map((card, i) => (
                <div key={i} className="relative w-[246px]  h-[220px] flex-none">
                  <Image
                    src={card.box}
                    alt="box"
                    // fill
                    className={`object-contain max-w-[180%]  ${card.dark?"w-[256px]":"w-full"}`}
                  />
                  <div
                    className="absolute top-0 right-0 flex flex-col pt-[28px] pr-6" 
                    dir="rtl"
                  >
                    <Image
                      src={card.icon}
                      alt={card.title}
                      width={28}
                      height={28}
                    />
                    <h3
                      className={`text-[16px] font-bold mt-4 ${
                        card.dark ? "text-white" : ""
                      }`}
                    >
                      {card.title}
                    </h3>
                    <p
                      className={`text-[10px] md:text-[12px] mt-2 leading-5 ${
                        card.dark ? "text-white" : "text-[#1E1E2B99]"
                      }`}
                    >
                      {card.text}
                    </p>
                    <span
                      className={`w-12 border-3 block rounded-full mt-6 ${
                        card.dark ? "border-white" : "border-[#06B1FD]"
                      }`}
                    ></span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            // Mobile & tablet (animated)
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -80 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute flex justify-center w-full gap-3 sm:gap-6"
              >
                {visibleCards.map((card, i) => (
                  <div
                    key={i}
                    className="relative w-[170px] sm:w-[200px] h-[180px] sm:h-[200px] flex-none"
                  >
                    <Image
                      src={card.box}
                      alt="box"
                      // fill
                      className={`object-contain ${card.dark?"w-[210px] max-w-[150%]":"w-full"}`}
                    />
                    <div
                      className="absolute top-0 right-0 flex flex-col pt-[35px] pl-2 pr-4"
                      dir="rtl"
                    >
                      <Image
                        src={card.icon}
                        alt={card.title}
                       
                        className="w-[18px] md:w-[22px]"
                      />
                      <h3
                        className={`text-[12px] sm:text-[14px] font-bold mt-1 md:mt-3 ${
                          card.dark ? "text-white" : ""
                        }`}
                      >
                        {card.title}
                      </h3>
                      <p
                        className={`text-[9px] sm:text-[10px] mt-1 h-15 md:h-full md:mt-2 leading-5 ${
                          card.dark ? "text-white" : "text-[#1E1E2B99]"
                        }`}
                      >
                        {card.text}
                      </p>
                      <span
                        className={`w-8 border-1 md:border-2 block rounded-full -mt-4  md:mt-4 ${
                          card.dark ? "border-white" : "border-[#06B1FD]"
                        }`}
                      ></span>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          )}

          {/* Dots for mobile/tablet */}
          {screenSize !== "desktop" && (
            <div className="absolute bottom-0 flex gap-1 mt-6 -translate-x-1/2 left-1/2">
              {Array.from({
                length: Math.ceil(cards.length / visibleCount),
              }).map((_, i) => {
                const active = Math.floor(index / visibleCount) === i;
                return (
                  <div
                    key={i}
                    className={`w-2 h-2 rounded-full transition-all ${
                      active ? "bg-[#00BFFF] w-4" : "bg-[#1E1E2B1A]"
                    }`}
                  ></div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
