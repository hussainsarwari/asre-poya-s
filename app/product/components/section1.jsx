"use client";
import Image from "next/image";
import { useLanguage } from "../../provider/languageProvider";
import bg_image from "@/public/icons/img_programming.svg";
export default function Section1() {
  const { t } = useLanguage();

  return (
    <>
      <div className="lg:w-[1056px] md:w-[616px] w-[360px]">
        <div className="hidden bg-white rounded-[8px] m-auto  w-[407px] h-[78px] border border-[#00000014] shadow-2xl shadow-[#0000001C] lg:grid relative grid-cols-3 grid-rows-2 text-[12px] text-[#1E1E2B99] text-center top-10 mt-[14px] m-auto">
          <span className="pt-4">{t("hospital")}</span>
          <span className="pt-4 text-[#06B1FD]">{t("doctor_assistant")}</span>
          <span className="pt-4">{t("clinic")}</span>
          <span className="pt-2 pb-4">{t("laborator")}</span>
          <span className="pt-2 pb-4">{t("business_assistant")}</span>
          <span className="pt-2 pb-4">{t("pharmacy")}</span>
        </div>

        <h1 className="font-bold mt-15 text-[24px] text-center">
          <span className="bg-linear-to-r from-[#06B1FD] to-[#046A97] bg-clip-text text-transparent">
            {t("product_section1_title_section2")}
          </span>{" "}
          {t("production_section1_title")}
        </h1>
        <p className="lg:w-[570px] w-[362px] md:w-[616px] m-auto text-[#1E1E2B99] text-center mt-4">
          {t("product_section1_paragraph")}
        </p>

        {/* btn */}
        <div className="lg:w-[235px] full flex gap-6 text-[14px] m-auto mt-10 mb-[56px]">
          <button className="lg:w-[114px] w-full rounded-xl h-[46] bg-[#06B1FD] text-white">
            {t("product_section1_btn")}
          </button>
          <button className="lg:w-[114px] w-full rounded-xl h-[46] border border-[#06B1FD] text-[#06B1FD]">
            {t("product_section1_btn")}
          </button>
        </div>
        <Image src={bg_image} alt="bg image" />
      </div>
    </>
  );
}
