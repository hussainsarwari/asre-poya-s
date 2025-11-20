"use client";
import Image from "next/image";
import { useLanguage } from "../../provider/languageProvider";
import Box1 from "@/public/icons/services/Rectangle_box.svg";
import Gallery from "@/public/icons/services/gallery.svg";
import Globale from "@/public/icons/services/global.svg";
import location from "@/public/icons/services/location.svg";

import Rectangle from "@/public/icons/products/Rectangle.svg";
export default function know_needs() {
  const { t } = useLanguage();

  return (
    <div className="w-[360px] md:w-[616px] lg:w-[1056px] m-auto my-10 ">
      <div className="flex flex-col items-end">
        <h2 className="text-[#1E1E2B] text-2xl font-bold relative my-4">
          {t("services_know_needs_title")}
          <Image
            src={Rectangle}
            alt="Rectangle"
            className="absolute right-0 h-full top-2"
          />
        </h2>
        <p className="text-right text-[#1E1E2B99]">
          {t("services_know_needs_paragraph")}
        </p>
      </div>
      {/* box */}
      <div className="flex justify-between gap-6 my-12">
        {/* box1 */}

        <div className="flex flex-col items-end ">
          <Image src={Box1} alt="box" className="absolute " />
          <div className="relative top-0 flex flex-col items-end w-[335px] pt-8 px-6 gap-4">
            {/* location icon */}
            <Image src={location} alt="location" />
            {/* text title */}
            <h4 className="font-bold text-[#1E1E2B] text-[18px] " dir="rtl">
              {t("services_know_needs_box3_title")}
            </h4>
            <p className="text-right text-[14px] text-[#1E1E2B99]">
              {t("service_know_needs_box3_paragraph")}
            </p>
          </div>
        </div>

        {/* box2 */}
        <div className="flex flex-col items-end ">
          <Image src={Box1} alt="box" className="absolute " />
          <div className="relative top-0 flex flex-col items-end w-[335px] pt-8 px-6 gap-4">
            {/* global icon */}
            <Image src={Globale} alt="globale icon" />
            {/* text title */}
            <h4 className="font-bold text-[#1E1E2B] text-[18px] " dir="rtl">
              {t("services_know_needs_box2_title")}
            </h4>
            <p className="text-right text-[14px] text-[#1E1E2B99]">
              {t("service_know_needs_box2_paragraph")}
            </p>
          </div>
        </div>
        {/* box3 */}

        <div className="flex flex-col items-end ">
          <Image src={Box1} alt="box" className="absolute " />
          <div className="relative top-0 flex flex-col items-end w-[335px] pt-8 px-6 gap-4">
            {/* gallery img */}
            <Image src={Gallery} alt="gallery" />
            {/* text title */}

            <h4 className="font-bold text-[#1E1E2B] text-[18px] " dir="rtl">
              {t("services_know_needs_box1_title")}
            </h4>
            <p className="text-right text-[14px] text-[#1E1E2B99]">
              {t("service_know_needs_box1_paragraph")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
