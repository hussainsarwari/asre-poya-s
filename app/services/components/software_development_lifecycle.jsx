"use client";
import Image from "next/image";
import { useLanguage } from "../../provider/languageProvider";
import image_backBox from "@/public/icons/services/box_tablet.svg";
import software_development_lifecycle from "./software_development_lifecycle";
export default function Software_development_lifecycle() {
  const { t } = useLanguage();

  return (
    <div className="relative my-20 m-autlo w-ful">
      <Image
        src={image_backBox}
        alt="background image"
        className="w-full "
      />
      <div className="absolute top-0 w-full">
        
      <div className="lg:w-[1056px] md:w-[616px] w-[380px] m-auto">
        <h5 className="mt-12 text-2xl font-bold text-right text-white">{t("software_development_lifecycle_title")}</h5>
        <p className="text-[18px] text-[#FFFFFFCC] text-right mt-1">{t("software_development_lifecycle_paragraph")}</p>
      </div>
      <div className="lg:w-[1056px] md:w-[616px] w-[380px] m-auto grid md:grid-cols-2 md:grid-rows-2 gap-6 mt-12"> 
        <div className="lg:w-[516px] lg:h-[244px] bg-white rounded-2xl p-6 text-right">
          <h6 className="text-[#1E1E2B] text-[18px] font-bold " dir="rtl">{t("software_development_lifecycle_box_title")}</h6>
          <p className="text-right text-[14px] text-[#1E1E2B99] mt-2">
            {t("software_development_lifecycle_box_paragraph")}
          </p>
            <ul className="mt-6 h-[73px]  flex flex-col justify-between list-disc px-6">
              <li className="text-[#1E1E2BCC] text-[16px]" dir="rtl">{t("software_development_lifecycle_listItems")}</li>
              <li className="text-[#1E1E2BCC] text-[16px]" dir="rtl">{t("software_development_lifecycle_listItems")}</li>
              <li className="text-[#1E1E2BCC] text-[16px]" dir="rtl">{t("software_development_lifecycle_listItems")}</li>
            </ul>
        </div>
        <div className="lg:w-[516px] lg:h-[244px] bg-white rounded-2xl p-6 text-right">
          <h6 className="text-[#1E1E2B] text-[18px] font-bold " dir="rtl">{t("software_development_lifecycle_box_title")}</h6>
          <p className="text-right text-[14px] text-[#1E1E2B99] mt-2">
            {t("software_development_lifecycle_box_paragraph")}
          </p>
            <ul className="mt-6 h-[73px]  flex flex-col justify-between list-disc px-6">
              <li className="text-[#1E1E2BCC] text-[16px]" dir="rtl">{t("software_development_lifecycle_listItems")}</li>
              <li className="text-[#1E1E2BCC] text-[16px]" dir="rtl">{t("software_development_lifecycle_listItems")}</li>
              <li className="text-[#1E1E2BCC] text-[16px]" dir="rtl">{t("software_development_lifecycle_listItems")}</li>
            </ul>
        </div>
        <div className="lg:w-[516px] lg:h-[244px] bg-white rounded-2xl p-6 text-right">
          <h6 className="text-[#1E1E2B] text-[18px] font-bold " dir="rtl">{t("software_development_lifecycle_box_title")}</h6>
          <p className="text-right text-[14px] text-[#1E1E2B99] mt-2">
            {t("software_development_lifecycle_box_paragraph")}
          </p>
            <ul className="mt-6 h-[73px]  flex flex-col justify-between list-disc px-6">
              <li className="text-[#1E1E2BCC] text-[16px]" dir="rtl">{t("software_development_lifecycle_listItems")}</li>
              <li className="text-[#1E1E2BCC] text-[16px]" dir="rtl">{t("software_development_lifecycle_listItems")}</li>
              <li className="text-[#1E1E2BCC] text-[16px]" dir="rtl">{t("software_development_lifecycle_listItems")}</li>
            </ul>
        </div>
        <div className="lg:w-[516px] lg:h-[244px] bg-white rounded-2xl p-6 text-right">
          <h6 className="text-[#1E1E2B] text-[18px] font-bold " dir="rtl">{t("software_development_lifecycle_box_title")}</h6>
          <p className="text-right text-[14px] text-[#1E1E2B99] mt-2">
            {t("software_development_lifecycle_box_paragraph")}
          </p>
            <ul className="mt-6 h-[73px]  flex flex-col justify-between list-disc px-6">
              <li className="text-[#1E1E2BCC] text-[16px]" dir="rtl">{t("software_development_lifecycle_listItems")}</li>
              <li className="text-[#1E1E2BCC] text-[16px]" dir="rtl">{t("software_development_lifecycle_listItems")}</li>
              <li className="text-[#1E1E2BCC] text-[16px]" dir="rtl">{t("software_development_lifecycle_listItems")}</li>
            </ul>
        </div>
      </div>
      </div>
    </div>
  );
}
