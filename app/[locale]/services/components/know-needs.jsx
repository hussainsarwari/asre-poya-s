"use client";
import Image from "next/image";
import Box1 from "@/public/icons/services/Rectangle_box.svg";
import Gallery from "@/public/icons/services/gallery.svg";
import Globale from "@/public/icons/services/global.svg";
import location from "@/public/icons/services/location.svg";
import Rectangle from "@/public/icons/products/Rectangle.svg";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";

export default function KnowNeeds() {
  const t = useTranslations();
  const locale = useLocale();

  const dir = locale === "fa" || locale === "ps" ? "ltr" : "rtl";

  return (
    <div dir= {dir === "rtl" ? "rtl" : "ltr"}  className="w-[350px] md:w-[616px] lg:w-[1056px] m-auto lg:-mt-30 my-48">
      <div className="flex flex-col items-end">
        <h2 className="text-[#1E1E2B] text-2xl font-bold relative my-4">
          {t("services_know_needs_title")}
          <Image
            src={Rectangle}
            alt="Rectangle"
             className={`absolute  h-full ${dir === "rtl" && "[transform:rotateY(180deg)]" } top-3 ${dir=="ltr"?"right-0":"left-0"}`}
        />
        </h2>
        <p className={` text-[#1E1E2B99]  ${dir === "ltr" ? "text-right" : "text-left"}`}>
          {t("services_know_needs_paragraph")}
        </p>
      </div>

      {/* Boxes */}
      <div className="flex flex-col items-center justify-center w-full gap-6 my-12 md:justify-between md:flex-row">
        {/* Box 1 */}
        <div className="relative flex flex-col items-end">
          <Image src={Box1} alt="box" className={` w-[290px] ${dir === "rtl" && "[transform:rotateY(180deg)]" } h-full  lg:w-[336px]`} />
          <div className="absolute top-0 right-3 flex flex-col items-end lg:pt-8 lg:px-6 md:pr-[0px] md:pt-3 pt-8 px-2 lg:gap-4 gap-1">
            <Image src={location} alt="location" className="w-8 lg:w-12" />
            <h4 className="font-bold text-[#1E1E2B] text-[18px] md:text-[12px] lg:text-[18px]" dir="rtl">
              {t("services_know_needs_box3_title")}
            </h4>
            <p className={` text-[14px] text-[#1E1E2B99] lg:text-[14px] md:text-[8px] w-[260px]  md:w-40 lg:w-[280px] ${dir === "ltr" ? "text-right" : "text-left"}`}>
              {t("service_know_needs_box3_paragraph")}
            </p>
          </div>
        </div>

        {/* Box 2 */}
        <div className="relative flex flex-col items-end">
          <Image src={Box1} alt="box" className={` w-[290px] ${dir === "rtl" && "[transform:rotateY(180deg)]" }  lg:w-[336px]`} />
          <div className="absolute top-0 right-3 flex flex-col items-end lg:pt-8 lg:px-6 md:pr-[0px] md:pt-3 pt-8 px-2 lg:gap-4 gap-1">
            <Image src={Globale} alt="global icon" className="w-8 lg:w-12" />
            <h4 className="font-bold text-[#1E1E2B] text-[18px] md:text-[12px] lg:text-[18px]" dir="rtl">
              {t("services_know_needs_box2_title")}
            </h4>
            <p className={` text-[14px] text-[#1E1E2B99] lg:text-[14px] md:text-[8px] w-[260px]  md:w-40 lg:w-[280px] ${dir === "ltr" ? "text-right" : "text-left"}`}>
              {t("service_know_needs_box2_paragraph")}
            </p>
          </div>
        </div>
        {/* Box 3 */}
        <div className="relative flex flex-col items-end">
          <Image src={Box1} alt="box" className={` w-[290px] ${dir === "rtl" && "[transform:rotateY(180deg)]" }  lg:w-[336px]`} />
          <div className="absolute top-0 right-3 flex flex-col items-end lg:pt-8 lg:px-6 md:pr-[0px] md:pt-3 pt-5 px-2 lg:gap-4 gap-1">
            <Image src={Gallery} alt="gallery" className="w-8 lg:w-12" />
            <h4 className="font-bold text-[#1E1E2B] text-[18px] md:text-[12px] lg:text-[18px] text-left" >
              {t("services_know_needs_box1_title")}
            </h4>
            <p className={` text-[14px] text-[#1E1E2B99] lg:text-[14px] md:text-[8px] w-[260px]  md:w-40 lg:w-[280px] ${dir === "ltr" ? "text-right" : "text-left"}`}>
              {t("service_know_needs_box1_paragraph")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
