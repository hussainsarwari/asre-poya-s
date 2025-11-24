"use client";

import Image from "next/image";
import { useLanguage } from "../../../provider/languageProvider";
import bg_image from "@/public/icons/img_programming.svg";

export default function Section1({ activeTab, setActiveTab }) {
  const { t } = useLanguage();

  const tabs = [
    { key: "home", label: t("home") },
    { key: "home_inspection", label: t("pharmacyHomeـexamination") },
    { key: "pharmacy", label: t("pharmacy") },
    { key: "clinic", label: t("clinic") },
    { key: "laborator", label: t("laborator") },
    { key: "Operation", label: t("operation") },
    { key: "hospital", label: t("hospital") },
  ];

  return (
    <>
      <div className="lg:w-[1056px] md:w-[616px] w-[360px] mt-14">

        <div className="hidden lg:flex flex-row-reverse   w-full  h-[51px] border-y border-y-[#00000014]  items-center gap-6 justify-start mx-auto mt-15">
          {tabs.map((item) => (
            <button
              key={item.key}
              onClick={() => setActiveTab(item.key)}
              className={`text-[12px] transition-all cursor-pointer ${
                activeTab === item.key
                  ? "text-[#06B1FD] font-semibold"
                  : "text-[#1E1E2B99]"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Title */}
        <h1 className="font-bold mt-15 text-[24px] text-center">
          <span className="bg-linear-to-r from-[#06B1FD] to-[#046A97] bg-clip-text text-transparent">
            {t("product_section1_title_section2")}
          </span>{" "}
          {t("production_section1_title")}
        </h1>

        {/* Paragraph */}
        <p className="lg:w-[570px] w-[362px] md:w-[616px] m-auto text-[#1E1E2B99] text-center mt-4">
          {t("product_section1_paragraph")}
        </p>

        {/* Buttons */}
        <div className="lg:w-[235px] flex gap-6 text-[14px] m-auto mt-10 mb-[56px]">
          <button className="lg:w-[114px] w-full rounded-xl h-[46px] bg-[#06B1FD] text-white cursor-pointer">
            {t("product_section1_btn")}
          </button>
          <button className="lg:w-[114px] w-full rounded-xl h-[46px] border border-[#06B1FD] text-[#06B1FD] cursor-pointer">
            {t("product_section1_btn")}
          </button>
        </div>

        {/* Background Image */}
        <div className="flex justify-center">
          <Image src={bg_image} alt="bg image" />
        </div>
      </div>
    </>
  );
}
