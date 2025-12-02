"use client";
import Image from "next/image";
import { useLanguage } from "../../provider/languageProvider";
import image_backBox from "@/public/icons/services/box_tablet.svg";
import image_backBox_tablet from "@/public/icons/services/tablet_box.svg";
import image_backBox_mobile from "@/public/icons/services/mobile_box.svg";
export default function Software_development_lifecycle() {
  const { t,dir } = useLanguage();

  return (
    <div dir={dir=="ltr"?"rtl":"ltr"} className="relative my-20 m-autlo w-ful">
      {/* desktop image */}
      <Image
        src={image_backBox}
        alt="background image"
        className="hidden w-full lg:inline"
      />
      {/* tablet image */}
      <Image
        src={image_backBox_tablet}
        alt="background image"
        className="hidden w-full md:inline lg:hidden"
      />
      
      {/* mobile image */}
      <Image
        src={image_backBox_mobile}
        alt="background image"
        className="w-full md:hidden min-h-[1190px]"
      />
      <div className="absolute top-0 w-full">
        
      <div className="lg:w-[1056px] md:w-[616px] w-[350px] m-auto">
        <h5 className="mt-10 text-sm font-bold text-white lg:text-2xl ">{t("software_development_lifecycle_title")}</h5>
        <p className="lg:text-[18px] text-[#FFFFFFCC]  mt-1 text-[14px]">{t("software_development_lifecycle_paragraph")}</p>
      </div>
      <div dir={dir=="ltr"?"rtl":"ltr"} className="lg:w-[1056px] md:w-[616px] w-[350px] m-auto grid md:grid-cols-2 md:grid-rows-2 gap-3 lg:gap-6 lg:mt-12 mt-3"> 
        <div  className="lg:w-[516px] lg:h-[244px] bg-white rounded-2xl p-6  ">
          <h6 className="text-[#1E1E2B] text-[18px] font-bold " >{t("software_development_lifecycle_box_title")}</h6>
          <p className=" text-[14px] text-[#1E1E2B99] mt-2">
            {t("software_development_lifecycle_box_paragraph")}
          </p>
            <ul className="mt-6 h-[73px]  flex flex-col justify-between list-disc px-6">
              <li className="text-[#1E1E2BCC] text-[16px]" >{t("software_development_lifecycle_listItems")}</li>
              <li className="text-[#1E1E2BCC] text-[16px]" >{t("software_development_lifecycle_listItems")}</li>
              <li className="text-[#1E1E2BCC] text-[16px]" >{t("software_development_lifecycle_listItems")}</li>
            </ul>
        </div>
        <div className="lg:w-[516px] lg:h-[244px] bg-white rounded-2xl p-6  ">
          <h6 className="text-[#1E1E2B] text-[18px] font-bold " >{t("software_development_lifecycle_box_title")}</h6>
          <p className=" text-[14px] text-[#1E1E2B99] mt-2">
            {t("software_development_lifecycle_box_paragraph")}
          </p>
            <ul className="mt-6 h-[73px]  flex flex-col justify-between list-disc px-6">
              <li className="text-[#1E1E2BCC] text-[16px]" >{t("software_development_lifecycle_listItems")}</li>
              <li className="text-[#1E1E2BCC] text-[16px]" >{t("software_development_lifecycle_listItems")}</li>
              <li className="text-[#1E1E2BCC] text-[16px]" >{t("software_development_lifecycle_listItems")}</li>
            </ul>
        </div>
        <div className="lg:w-[516px] lg:h-[244px] bg-white rounded-2xl p-6  ">
          <h6 className="text-[#1E1E2B] text-[18px] font-bold " >{t("software_development_lifecycle_box_title")}</h6>
          <p className=" text-[14px] text-[#1E1E2B99] mt-2">
            {t("software_development_lifecycle_box_paragraph")}
          </p>
            <ul className="mt-6 h-[73px]  flex flex-col justify-between list-disc px-6">
              <li className="text-[#1E1E2BCC] text-[16px]" >{t("software_development_lifecycle_listItems")}</li>
              <li className="text-[#1E1E2BCC] text-[16px]" >{t("software_development_lifecycle_listItems")}</li>
              <li className="text-[#1E1E2BCC] text-[16px]" >{t("software_development_lifecycle_listItems")}</li>
            </ul>
        </div>
        <div className="lg:w-[516px] lg:h-[244px] bg-white rounded-2xl p-6 text-right ">
          <h6 className="text-[#1E1E2B] text-[18px] font-bold " >{t("software_development_lifecycle_box_title")}</h6>
          <p className="text-right text-[14px] text-[#1E1E2B99] mt-2">
            {t("software_development_lifecycle_box_paragraph")}
          </p>
            <ul className="mt-6 h-[73px]  flex flex-col justify-between list-disc px-6">
              <li className="text-[#1E1E2BCC] text-[16px]" >{t("software_development_lifecycle_listItems")}</li>
              <li className="text-[#1E1E2BCC] text-[16px]" >{t("software_development_lifecycle_listItems")}</li>
              <li className="text-[#1E1E2BCC] text-[16px]" >{t("software_development_lifecycle_listItems")}</li>
            </ul>
        </div>
      </div>
      </div>
    </div>
  );
}
