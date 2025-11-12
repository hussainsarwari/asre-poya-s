"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../provider/languageProvider";

// تصاویر
import img1 from "@/public/icons/home/bg_img2.svg";
import img2 from "@/public/icons/home/bg_img2.svg";
import img3 from "@/public/icons/home/bg_img3.svg";
import img4 from "@/public/icons/home/bg_img2.svg";
import img5 from "@/public/icons/home/bg_img2.svg";

import arrow from "@/public/icons/home/arrow.svg";
import left_arrow from "@/public/icons/home/arrow-left2.svg";

export default function Section3() {
  const { t } = useLanguage();

  const products = [
    {
      id: 1,
      title: t("home_section_product1"),
      img: img1,
      text: t("home_section3_product_paragrapg"),
    },
    {
      id: 2,
      title: t("home_section_product2"),
      img: img2,
      text: t("home_section3_product_paragrapg2"),
    },
    {
      id: 3,
      title: t("home_section_product3"),
      img: img3,
      text: t("home_section3_product_paragrapg3"),
    },
    {
      id: 4,
      title: t("home_section_product4"),
      img: img4,
      text: t("home_section3_product_paragrapg4"),
    },
    {
      id: 5,
      title: t("home_section_product5"),
      img: img5,
      text: t("home_section3_product_paragrapg5"),
    },
  ];

  const [active, setActive] = useState(products[0]);

  return (
    <div
      dir="ltr"
      className="lg:w-[1056px] mx-auto lg:h-[621px] mt-20 overflow-visible"
    >
      {/* عنوان بالا */}
      <h1 className="text-[32px] text-right text-[#1E1E2B]">
        {t("homePagesection3Title")}
      </h1>
      <p className="text-[14px] text-right text-[#1E1E2B99] mt-1">
        {t("homePageSection3paragraph")}
      </p>

      {/* بخش اصلی */}
      <div className="flex flex-col items-center justify-between mt-8 lg:h-[621px] relative">
        <div className="flex items-center justify-between w-full">
          {/* دکمه‌ها */}
          <div className="flex flex-col gap-4">
            {products.map((item) => (
              <button
                key={item.id}
                onClick={() => setActive(item)}
                className={`lg:w-[205px] flex items-center justify-center gap-2 lg:h-12 cursor-pointer rounded-2xl transition-all duration-200 ${
                  active.id === item.id
                    ? "bg-[#06B1FD] text-white shadow-md shadow-[#06B1FD33]"
                    : "bg-[#1E1E2B0D] text-[#1E1E2BCC] hover:bg-[#1E1E2B1A]"
                }`}
              >
                {item.title}
                {active.id === item.id && (
                  <Image src={left_arrow} alt="arrow" className="w-4 h-4" />
                )}
              </button>
            ))}
          </div>

          {/* تصویر مرکزی با انیمیشن */}
          <div className=" flex items-center justify-center lg:h-[621px] w-[500px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <Image
                  src={active.img}
                  alt="product image"
                  className="w-[500px] h-[395px] object-contain"
                  width={500}
                  height={395}
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* متن سمت راست با انیمیشن */}
          <div
            className="lg:w-[320px] lg:h-[395px] flex flex-col justify-between py-3"
            dir="rtl"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id + "_text"}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <h1 className="font-bold text-[16px] text-[#1E1E2BCC] mb-3">
                  {active.title}
                </h1>
                <p className="text-[#1E1E2B99] lg:w-[296px] text-[12px] leading-relaxed">
                  {active.text}
                </p>
              </motion.div>
            </AnimatePresence>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="lg:w-[113px] lg:h-[46px] rounded-xl bg-[#06B1FD] shadow-sm mt-20 shadow-[#06B1FD33] flex justify-center items-center text-white text-[14px] gap-2"
            >
              {t("home_section3_product_btn")}
              <Image src={arrow} alt="arrow" />
            </motion.button>
          </div>
        </div>
        <div className="absolute flex items-center gap-1 m-auto -translate-x-2/9 bottom-19">
          {products.map((item) => (
            <motion.div
              key={item.id}
              layout
              onClick={() => setActive(item)}
              className={`rounded-full cursor-pointer ${
                active.id === item.id
                  ? "bg-[#06B1FD] w-4 h-2"
                  : "bg-[#1E1E2B1A] w-2 h-2"
              }`}
              transition={{ type: "spring", stiffness: 300 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
