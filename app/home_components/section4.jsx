"use client";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../provider/languageProvider";
import arrow_left from "@/public/icons/home/arrow-left.svg";
import arrow_right from "@/public/icons/home/arrow-left_lighter.svg";
import box1 from "@/public/icons/home/box5.svg";
import box2 from "@/public/icons/home/box6.svg";
import box3 from "@/public/icons/home/box7.svg";
import userMan from "@/public/icons/user_man.svg";
import userGirl from "@/public/icons/user_girl.svg";
import start from "@/public/icons/home/Star.svg";
import start2 from "@/public/icons/home/Star_2.svg";
import start_fill from "@/public/icons/home/Star_fill.svg";

export default function Section4() {
  const { t } = useLanguage();
  const [index, setIndex] = useState(0);

  const feedbacks = [
    { box: box1, user: userGirl, dark: true },
    { box: box2, user: userMan, dark: false },
    { box: box2, user: userGirl, dark: false },
    { box: box1, user: userGirl, dark: true },
  ];

  const next = () => setIndex((prev) => (prev + 2) % feedbacks.length);
  const prev = () =>
    setIndex((prev) => (prev - 2 + feedbacks.length) % feedbacks.length);

  // دو باکس همزمان
  const visibleBoxes = [
    feedbacks[index],
    feedbacks[(index + 1) % feedbacks.length],
  ];

  return (
    <div className="relative lg:w-[1056px] lg:h-[514px] mx-auto my-30">
      {/* بالای بخش */}
      <div className="flex flex-row-reverse justify-between">
        <div className="flex flex-col items-end">
          <h1 className="text-[32px] font-bold text-[#1E1E2B]">
            {t("feadback")}
          </h1>
          <p className="text-[14px] text-[#1E1E2B99] mt-4">
            {t("feadbackparagraph")}
          </p>
        </div>
        <div className="flex">
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
      </div>

      {/* باکس‌ها */}
      <div className="flex mt-10 justify-center relative w-full h-[300px] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="absolute flex gap-7"
          >
            {visibleBoxes.map((fb, i) => (
              <div key={i} className="relative">
                <Image src={fb.box} alt="box" />
                <div className="absolute top-0 right-0 w-lg h-[272px] flex flex-col items-end p-6">
                  <div className="flex flex-row-reverse items-center gap-5">
                    <Image src={fb.user} alt="user image" width={80} />
                    <div className="flex flex-col items-end">
                      <h4
                        className={`text-[16px] font-bold ${
                          fb.dark ? "text-white" : "text-[#1E1E2BCC]"
                        }`}
                      >
                        {t("client_name1")}
                      </h4>
                      <p
                        className={`text-[12px] ${
                          fb.dark ? "text-[#FFFFFFCC]" : "text-[#1E1E2B66]"
                        }`}
                      >
                        {t("client_job_title")}
                      </p>
                    </div>
                  </div>
                  <p
                    className={`text-[14px] mt-4 ${
                      fb.dark ? "text-white" : "text-[#1E1E2B66]"
                    }`}
                  >
                    {t("client_feadback")}
                  </p>
                  <div className="flex flex-row justify-between w-full mt-10">
                    <div
                      className={`text-[12px] ${
                        fb.dark ? "text-[#FFFFFF99]" : "text-[#1E1E2B66]"
                      }`}
                    >
                      {t("feadback_date1")}
                    </div>
                    <div className="flex">
                      <Image alt="start" src={fb.dark ? start2 : start} />
                      <Image alt="start" src={fb.dark ? start2 : start} />
                      <Image alt="start" src={fb.dark ? start2 : start} />
                      <Image alt="start" src={start_fill} />
                      <Image alt="start" src={start_fill} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* دات‌های پایین */}
        <div className="absolute bottom-0 flex gap-1 mt-6 -translate-x-1/2 left-1/2">
          {Array.from({ length: Math.ceil(feedbacks.length / 2) }).map(
            (_, i) => {
              const active = Math.floor(index / 2) === i;
              return (
                <div
                  key={i}
                  className={`w-2 h-2 rounded-full transition-all ${
                    active ? "bg-[#00BFFF] w-4" : "bg-[#1E1E2B1A]"
                  }`}
                ></div>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
}
