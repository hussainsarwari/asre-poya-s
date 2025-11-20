"use client";
import Image from "next/image";
import { useLanguage } from "../../provider/languageProvider";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import client from "@/public/images/img1.svg";
import client2 from "@/public/images/img2.svg";
import client3 from "@/public/images/img3.svg";

import Rectangle from "@/public/icons/products/Rectangle.svg";
import client_icon1 from "@/public/icons/home/Frame3.svg";
import client_icon2 from "@/public/icons/home/Frame4.svg";
import client_icon3 from "@/public/icons/home/Frame5.svg";

const projects = [
  {
    img: client,
    icon: client_icon1,
    titleKey: "doctor_assistant",
    textKey: "my_project_box1_paragraph",
    clientKey: "client_name",
  },
  {
    img: client2,
    icon: client_icon2,
    titleKey: "doctor_assistant",
    textKey: "my_project_box2_paragraph",
    clientKey: "client_name",
  },
  {
    img: client3,
    icon: client_icon3,
    titleKey: "doctor_assistant",
    textKey: "my_project_box3_paragraph",
    clientKey: "client_name",
  },
];

export default function MyProject() {
  const { t } = useLanguage();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % projects.length);
    }, 6000); // 6 seconds
    return () => clearInterval(interval);
  }, []);

  const current = projects[index];

  const slideVariant = {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -40 },
  };

  return (
    <div className="w-[360px] md:w-[616px] lg:w-[1056px] m-auto my-20 transition-all duration-500 ease-in-out">
      {/* header */}
      <div className="flex flex-col items-end">
        <h1 className="relative text-[20px] font-bold lg:text-[24px] text-[#1E1E2B]">
          {t("my_project_title")}
          <Image
            src={Rectangle}
            alt="Rectangle"
            className="absolute right-0 h-full top-3"
          />
        </h1>
        <p className="text-right text-[16px] text-[#1E1E2B99] mt-1">
          {t("my_project_paragraph")}
        </p>
      </div>

      {/* content */}
      <div className="flex flex-col-reverse justify-between mt-7 md:flex-row">
        <AnimatePresence mode="wait">
          {/* image section */}
          <motion.div
            key={current.img.src}
            className="md:w-[298px] lg:w-[309px] h-[229px] relative overflow-hidden rounded-[8px]"
            variants={slideVariant}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              className="w-full h-full"
            >
              <Image
                src={current.img}
                alt="project image"
                fill
                className="transition-all duration-700 ease-in-out"
                style={{ objectFit: "cover", objectPosition: "center" }}
              />
            </motion.div>
          </motion.div>

          {/* text section */}
          <motion.div
            key={current.titleKey}
            className="lg:w-[629px] h-[229px] w-[298px] flex flex-col items-end justify-between"
            variants={slideVariant}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="flex flex-row-reverse"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.6 }}
            >
              <h5 className="text-[24px] text-[#1E1E2B]">
                {t("product_name")}: <span className="font-bold">{t(current.titleKey)}</span>
              </h5>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.6 }}
              className="text-right text-[14px] mt-[14px] text-[#1E1E2BCC]"
            >
              {t(current.textKey)}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.6 }}
              className="flex justify-start gap-3 items-center flex-row-reverse w-[255px]"
            >
              <Image src={current.icon} alt="client icon" className="w-12" />
              <h6 className="text-[#1E1E2BCC] text-[20px]">
                {t("services_page_my_project_safarish")}{" "}
                <span className="font-bold">{t(current.clientKey)}</span>
              </h6>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* indicator */}
      <div className="flex justify-center gap-2 mt-6">
        {projects.map((_, i) => (
          <div
            key={i}
            className={` rounded-full transition-all duration-300 ${
              i === index ? "bg-[#06B1FD] w-4" : "bg-[#1E1E2B1A] w-2 h-2"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}
