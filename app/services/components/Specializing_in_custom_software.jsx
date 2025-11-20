"use client";
import { useState } from "react";
import { useLanguage } from "../../provider/languageProvider";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Rectangle from "@/public/icons/products/Rectangle.svg";
import arr_down from "@/public/icons/products/arrow-down.svg";
import arrow_black from "@/public/icons/products/arrow-left_black.svg";

export default function FAQSection() {
  const { t, lang } = useLanguage();

  const faqs1 = [
    { question: t("faq_q1"), answer: t("faq_a1") },
    { question: t("faq_q2"), answer: t("faq_a2") },
    { question: t("faq_q3"), answer: t("faq_a3") },
  ];
  const faqs2 = [
    { question: t("faq_q4"), answer: t("faq_a4") },
    { question: t("faq_q5"), answer: t("faq_a5") },
    { question: t("faq_q6"), answer: t("faq_a6") },
  ];

  // single state for all faq items
  const [openIndex, setOpenIndex] = useState(null);

  // convert to unified indices
  const makeIndex = (colIndex, itemIndex) =>
    colIndex === 1 ? itemIndex : itemIndex + faqs1.length;

  return (
    <div
      className={`lg:w-[1056px] md:w-[616px] w-[380px] mx-auto py-12 px-4 ${
        lang === "fa" ? "text-right" : "text-left"
      }`}
    >
      <h2 className="relative mb-6 text-2xl font-bold text-[#1E1E2B] text-[24px]">
        {t("specializing_title")}
        <Image
          src={Rectangle}
          alt="Rectangle"
          className="absolute right-0 h-full top-3"
        />
      </h2>

      <p className="text-[#1E1E2B99] text-[14px] lg:text-[16px]">
        {t("faq_paragragh")}
      </p>

      <div className="flex justify-between gap-3 mt-12">

        {/* LEFT COLUMN */}
        <div className="flex flex-col gap-3 w-lg">
          {faqs1.map((faq, index) => {
            const unifiedIndex = makeIndex(0, index);
            return (
              <div key={unifiedIndex} className="overflow-hidden rounded-[12px]">
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === unifiedIndex ? null : unifiedIndex)
                  }
                  className={`w-full flex items-center ${
                    openIndex === unifiedIndex
                      ? "bg-[#06B1FD0D]"
                      : "bg-[#1E1E2B0D]"
                  } justify-between h-16 text-[16px] py-5 cursor-pointer font-semibold text-right px-4 lg:text-[18px] ${
                    openIndex === unifiedIndex ? "text-[#06B1FD]" : "text-[#1E1E2B]"
                  } ${lang !== "fa" ? "flex-row" : "flex-row-reverse"}`}
                >
                  <span>{faq.question}</span>
                  <span
                    className={`transition-transform duration-200 ${
                      openIndex === unifiedIndex ? "rotate-180" : "rotate-0"
                    }`}
                  >
                    {openIndex === unifiedIndex ? (
                      <Image src={arr_down} alt="arrow" className="rotate-180" />
                    ) : (
                      <Image src={arrow_black} alt="arrow" />
                    )}
                  </span>
                </button>

                <AnimatePresence mode="sync">
                  {openIndex === unifiedIndex && (
                    <motion.div
                      key="answer-left"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 py-5 text-gray-600 border border-[#1E1E2B1A] text-right rounded-[12px] mt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* RIGHT COLUMN */}
        <div className="flex flex-col gap-3 w-lg">
          {faqs2.map((faq, index) => {
            const unifiedIndex = makeIndex(1, index);
            return (
              <div key={unifiedIndex} className="overflow-hidden rounded-[12px]">
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === unifiedIndex ? null : unifiedIndex)
                  }
                  className={`w-full flex items-center ${
                    openIndex === unifiedIndex
                      ? "bg-[#06B1FD0D]"
                      : "bg-[#1E1E2B0D]"
                  } justify-between h-16 text-[16px] py-5 cursor-pointer font-semibold text-right px-4 lg:text-[18px] ${
                    openIndex === unifiedIndex ? "text-[#06B1FD]" : "text-[#1E1E2B]"
                  } ${lang !== "fa" ? "flex-row" : "flex-row-reverse"}`}
                >
                  <span>{faq.question}</span>
                  <span
                    className={`transition-transform duration-200 ${
                      openIndex === unifiedIndex ? "rotate-180" : "rotate-0"
                    }`}
                  >
                    {openIndex === unifiedIndex ? (
                      <Image src={arr_down} alt="arrow" className="rotate-180" />
                    ) : (
                      <Image src={arrow_black} alt="arrow" />
                    )}
                  </span>
                </button>

                <AnimatePresence mode="sync">
                  {openIndex === unifiedIndex && (
                    <motion.div
                      key="answer-right"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 py-5 text-gray-600 border border-[#1E1E2B1A] text-right rounded-[12px] mt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
