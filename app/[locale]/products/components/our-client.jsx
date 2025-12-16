"use client";
import Image from "next/image";
import arrow_left from "@/public/icons/home/arrow-left.svg";
import arrow_right from "@/public/icons/home/arrow-left_lighter.svg";

import { motion, AnimatePresence } from "framer-motion";
import our_client_image1 from "@/public/icons/home/Frame1.svg";
import our_client_image2 from "@/public/icons/home/Frame2.svg";
import our_client_image3 from "@/public/icons/home/Frame3.svg";
import our_client_image4 from "@/public/icons/home/Frame4.svg";
import our_client_image5 from "@/public/icons/home/Frame5.svg";
import our_client_image6 from "@/public/icons/home/Frame6.svg";
import our_client_image7 from "@/public/icons/home/Frame7.svg";
import our_client_image8 from "@/public/icons/home/Frame8.svg";
import our_client_image9 from "@/public/icons/home/Frame9.svg";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
export default function ourClient({ SectionName }) {
  const [index, setIndex] = useState(0);
  const t = useTranslations();
  const locale = useLocale();

  const dir = locale === "fa" || locale === "ps" ? "ltr" : "rtl";

  const clients = [
    our_client_image1,
    our_client_image2,
    our_client_image3,
    our_client_image4,
    our_client_image5,
    our_client_image6,
    our_client_image7,
    our_client_image8,
    our_client_image9,
  ];
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

  const next = () => setIndex((prev) => (prev + 3) % clients.length);
  const prev = () =>
    setIndex((prev) => (prev - 3 + clients.length) % clients.length);

  return (
    <>
      {/* clients section */}
      <div
        className={`relative right-0 top-20 lg:top-10 lg:w-[1056px] md:w-[616px] w-[350px]`}
      >
        <div className="flex items-center justify-between mb-5">
          <div className="flex gap-3 items-center md:w-[116px]">
            <div className="flex lg:hidden">
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

          <div dir={dir === "rtl" ? "ltr" : "rtl"}>
            <h1 className="text-[24px] font-bold text-[#1E1E2B] ">
              {t("our_client")}
            </h1>
            <p className="text-[#1E1E2B99] text-[14px] ">
              {t("our_client_paragraph")}
            </p>
          </div>
        </div>

        {/* slider */}
        <div className="relative right-0 flex mt-10 lg:w-[1056px]">
          <AnimatePresence mode="sync">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute right-0 flex justify-end gap-3 overflow-visible lg:justify-center"
            >
              {visibleClients.map((client, i) => (
                <Image
                  key={i}
                  src={client}
                  alt="our client"
                  className="w-16 lg:w-24"
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* pagination dots */}
        <div className="flex justify-center gap-2 mt-30 lg:hidden ">
          {[0, 1, 2].map((page) => (
            <div
              key={page}
              onClick={() => setIndex(page * 3)}
              className={`rounded-full cursor-pointer transition-all ${
                index === page * 3
                  ? "bg-[#06B1FD] w-3 h-2"
                  : "bg-[#D9D9D9] w-2 h-2"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </>
  );
}
