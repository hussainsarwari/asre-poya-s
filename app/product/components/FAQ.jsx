"use client"
import { useState } from "react";
import { useLanguage } from "../../provider/languageProvider";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Rectangle from "@/public/icons/products/Rectangle.svg";
import arr_down from "@/public/icons/products/arrow-down.svg";
import arrow_black from "@/public/icons/products/arrow-left_black.svg";

export default function FAQSection() {
  const { t, lang } = useLanguage();

  const faqs = [
    { question: t("faq_q1"), answer: t("faq_a1") },
    { question: t("faq_q2"), answer: t("faq_a2") },
    { question: t("faq_q3"), answer: t("faq_a3") },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div
      className={`lg:w-[1056px] md:w-[616px] w-[380px] mx-auto py-12 px-4 ${
        lang === "fa" ? "text-right" : "text-left"
      }`}
    >
      <h2 className="relative mb-6 text-2xl font-bold text-[#1E1E2B] text-[24px]">
        {t("faq_title")}
        <Image
          src={Rectangle}
          alt="Rectangle"
          className="absolute right-0 h-full top-3"
        />
      </h2>

      <p className="text-[#1E1E2B99] text-[14px] lg:text-[16px]">
        {t("faq_paragragh")}
      </p>

      <div className="mt-12 space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="overflow-hidden rounded-[12px]">
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className={`w-full flex items-center ${
                openIndex === index ? "bg-[#06B1FD0D]" : "bg-[#1E1E2B0D]"
              } justify-between h-16 text-[16px] py-5 cursor-pointer font-semibold text-right px-4 lg:text-[18px] ${
                openIndex === index ? "text-[#06B1FD]" : "text-[#1E1E2B]"
              } ${lang !== "fa" ? "flex-row" : "flex-row-reverse"}`}
            >
              <span>{faq.question}</span>
              <span
                className={`transition-transform duration-200 ${
                  openIndex === index ? "rotate-180" : "rotate-0"
                }`}
              >
                {openIndex === index ? (
                  <Image src={arr_down} alt="arrow" className="rotate-180" />
                ) : (
                  <Image src={arrow_black} alt="arrow" />
                )}
              </span>
            </button>

            {/* Smooth Animated Answer */}
            <AnimatePresence mode="sync">
              {openIndex === index && (
                <motion.div
                  key="answer"
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
        ))}
      </div>
    </div>
  );
}