"use client";
import Image from "next/image";
import { useLanguage } from "../../provider/languageProvider";
import Box1 from "@/public/icons/services/Rectangle_box.svg";
import Gallery from "@/public/icons/services/gallery.svg";
import Globale from "@/public/icons/services/global.svg";
import location from "@/public/icons/services/location.svg";
import Rectangle from "@/public/icons/products/Rectangle.svg";

export default function KnowNeeds() {
  const { t } = useLanguage();

  return (
    <div className="w-[360px] md:w-[616px] lg:w-[1056px] m-auto lg:my-0 my-48">
      <div className="flex flex-col items-end">
        <h2 className="text-[#1E1E2B] text-2xl font-bold relative my-4">
          {t("services_know_needs_title")}
          <Image
            src={Rectangle}
            alt="Rectangle"
            className="absolute right-0 h-full top-2 z-[-1]"
          />
        </h2>
        <p className="text-right text-[#1E1E2B99]">
          {t("services_know_needs_paragraph")}
        </p>
      </div>

      {/* Boxes */}
      <div className="flex flex-col items-center justify-center w-full gap-6 my-12 md:justify-between md:flex-row">
        {/* Box 1 */}
        <div className="relative flex flex-col items-end">
          <Image src={Box1} alt="box" className="w-[290px] h-full  lg:w-[336px]" />
          <div className="absolute top-0 right-3 flex flex-col items-end lg:pt-8 lg:px-6 md:pr-[0px] md:pt-3 pt-8 5 lg:gap-4 gap-1">
            <Image src={location} alt="location" className="w-8 lg:w-12" />
            <h4 className="font-bold text-[#1E1E2B] text-[18px] md:text-[12px] lg:text-[18px]" dir="rtl">
              {t("services_know_needs_box3_title")}
            </h4>
            <p className="text-right text-[14px] text-[#1E1E2B99] lg:text-[14px] md:text-[8px] w-[260px]  md:w-40 lg:w-[280px]">
              {t("service_know_needs_box3_paragraph")}
            </p>
          </div>
        </div>

        {/* Box 2 */}
        <div className="relative flex flex-col items-end">
          <Image src={Box1} alt="box" className="w-[290px]  lg:w-[336px]" />
          <div className="absolute top-0 right-3 flex flex-col items-end lg:pt-8 lg:px-6 md:pr-[0px] md:pt-3 pt-8 px5 lg:gap-4 gap-1">
            <Image src={Globale} alt="global icon" className="w-8 lg:w-12" />
            <h4 className="font-bold text-[#1E1E2B] text-[18px] md:text-[12px] lg:text-[18px]" dir="rtl">
              {t("services_know_needs_box2_title")}
            </h4>
            <p className="text-right text-[14px] text-[#1E1E2B99] lg:text-[14px] md:text-[8px] w-[260px]  md:w-40 lg:w-[280px]">
              {t("service_know_needs_box2_paragraph")}
            </p>
          </div>
        </div>
        {/* Box 3 */}
        <div className="relative flex flex-col items-end">
          <Image src={Box1} alt="box" className="w-[290px]  lg:w-[336px]" />
          <div className="absolute top-0 right-3 flex flex-col items-end lg:pt-8 lg:px-6 md:pr-[0px] md:pt-3 pt-5 px-0 lg:gap-4 gap-1">
            <Image src={Gallery} alt="gallery" className="w-8 lg:w-12" />
            <h4 className="font-bold text-[#1E1E2B] text-[18px] md:text-[12px] lg:text-[18px]" dir="rtl">
              {t("services_know_needs_box1_title")}
            </h4>
            <p className="text-right text-[14px] text-[#1E1E2B99] lg:text-[14px] md:text-[8px] w-[260px]  md:w-40 lg:w-[280px]">
              {t("service_know_needs_box1_paragraph")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
