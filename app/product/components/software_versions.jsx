"use client";
import Image from "next/image";
import { useLanguage } from "../../provider/languageProvider";
import softwareversion1 from "@/public/icons/products/box1.png";
import softwareversion2 from "@/public/icons/products/box2.png";
import softwareversion3 from "@/public/icons/products/box3.png";
import softwareversion4 from "@/public/icons/products/box4.svg";

import Rectangle from "@/public/icons/products/Rectangle.svg";
export default function Section1() {
  const { t } = useLanguage();

  return (
    <div className="mt-20 ">
      <div className="flex flex-col items-end"> 
        <h3 className="relative lg:text-[32px] text-[20px] font-bold">{t("product_software_versions_title")}
             <Image
                        src={Rectangle}
                        alt="Rectangle"
                        className="absolute right-0 top-7"
                      />
        </h3>
        <p className="text-[14px] text-[#1E1E2B99] mt-3">{t("product_sofware_version_paragraph")}</p>
      </div>



      {/* ========================= */}
      <div className="grid md:grid-cols-2 md:grid-rows-2 mt-[60px] gap-9">
        <div className="flex flex-col lg:w-[503.9998779296875px] md:w-[324px] lg:flex-row-reverse  w-[392px] items-end">
          <Image src={softwareversion1} alt="software version" className="mx-6" />
          <div className="flex flex-col items-end ">
            <h4 className="text-[20px] font-bold text-[#1E1E2B]" >{t("product_software_version_box1_title")}</h4>
            <p className="text-right text-[#1E1E2B99] text-[14px] my-4">{t("product_software_version_box1_paragraph")}</p>
            <button className="w-[106px] h-[49px] bg-[#06B1FD] text-white rounded-[24px]">{t("product_software_version_box1_view_btn")}</button>
          </div>
        </div>
        <div className="flex flex-col lg:w-[503.9998779296875px] md:w-[324px] lg:flex-row-reverse  w-[392px] items-end">
          <Image src={softwareversion2} alt="software version" className="mx-6" />
          <div className="flex flex-col items-end ">
            <h4 className="text-[20px] font-bold text-[#1E1E2B]" >{t("product_software_version_box2_title")}</h4>
            <p className="text-right text-[#1E1E2B99] text-[14px] my-4">{t("product_software_version_box2_paragraph")}</p>
            <button className="w-[106px] h-[49px] bg-[#06B1FD] text-white rounded-[24px]">{t("product_software_version_box2_view_btn")}</button>
          </div>
        </div>
        <div className="flex flex-col lg:w-[503.9998779296875px] md:w-[324px] lg:flex-row-reverse  w-[392px] items-end">
          <Image src={softwareversion3} alt="software version" className="mx-6" />
          <div className="flex flex-col items-end ">
            <h4 className="text-[20px] font-bold text-[#1E1E2B]" >{t("product_software_version_box3_title")}</h4>
            <p className="text-right text-[#1E1E2B99] text-[14px] my-4">{t("product_software_version_box3_paragraph")}</p>
            <button className="w-[106px] h-[49px] bg-[#06B1FD] text-white rounded-[24px]">{t("product_software_version_box3_view_btn")}</button>
          </div>
        </div>
        <div className="flex flex-col lg:w-[503.9998779296875px] md:w-[324px] lg:flex-row-reverse  w-[392px] items-end">
          <Image src={softwareversion4} alt="software version" className="mx-6" />
          <div className="flex flex-col items-end ">
            <h4 className="text-[20px] font-bold text-[#1E1E2B]" >{t("product_software_version_box4_title")}</h4>
            <p className="text-right text-[#1E1E2B99] text-[14px] my-4">{t("product_software_version_box4_paragraph")}</p>
            <button className="w-[106px] h-[49px] bg-[#06B1FD] text-white rounded-[24px]">{t("product_software_version_box4_view_btn")}</button>
          </div>
        </div>
      </div>
    </div>
  );
}
