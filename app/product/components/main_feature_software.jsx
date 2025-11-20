"use client";
import Image from "next/image";
import { useLanguage } from "../../provider/languageProvider";
import code_icon1 from "@/public/icons/products/code1.svg";
import code_icon2 from "@/public/icons/products/code2.svg";
import code_icon3 from "@/public/icons/products/code3.svg";
import code_icon4 from "@/public/icons/products/code4.svg";
import code_icon5 from "@/public/icons/products/code5.svg";
import code_icon6 from "@/public/icons/products/code6.svg";
import Rectangle from "@/public/icons/products/Rectangle.svg";
export default function Section1() {
  const { t } = useLanguage();

  return (
    <div className="lg:w-[1056px] md:w-[616px] w-[350px]  m-auto  md:mt-50 mt-30 ">
      <div className="flex flex-col items-end ">
        <h1 className="text-[#1E1E2B] lg:text-[32px] text-[20px]  relative font-bold">
          {t("product_section3_title")}
          <Image
            src={Rectangle}
            alt="Rectangle"
            className="absolute right-0 top-3 lg:top-7 md:top-3"
          />
        </h1>
        <p className="text-[14px] text-[#1E1E2B99] text-right my-2">
          {t("product_section3_paragraph")}
        </p>
      </div>
      <div className="grid grid-cols-2 grid-rows-3 gap-2 md:gap-10 lg:grid-cols-3 lg:grid-rows-2 lg:mt-15 lg:gap-3">
        <div className="flex flex-col justify-center items-end lg:w-[344px] lg:p-6 relative ">
          {/* right blue border */}
          <span className="md:border border-[#06B1FD] h-40 absolute -mr-6 "></span>
          <Image src={code_icon1} alt="code" />
          <h1 className="lg:text-[24px] font-semibold text-[16px] text-[#1E1E2B] lg:mt-5">
            {t("product_section3__box1_title")}
          </h1>
          <p className="text-[#1E1E2B99] tex-[14px] lg:text-[16px] text-right lg:mt-2">
            {t("product_section3__box1_paragraph")}
          </p>
          <span className="text-[#06B1FD]  text-[12px] lg:text-[14px] font-bold lg:mt-2">
            {t("continue")}
          </span>
          <span className="border md:hidden border-[#06B1FD] h-4 absolute bottom-0 -mr-2 "></span>
        </div>
        <div className="flex flex-col justify-center items-end lg:w-[344px] lg:p-6 relative">
          {/* right blue border */}
          <span className="md:border border-[#06B1FD] h-40 absolute -mr-6 "></span>
          <Image src={code_icon2} alt="code" />
          <h1 className="lg:text-[24px] font-semibold text-[16px] text-[#1E1E2B] lg:mt-5">
            {t("product_section3__box2_title")}
          </h1>
          <p className="text-[#1E1E2B99] tex-[14px] lg:text-[16px] text-right lg:mt-2">
            {t("product_section3__box2_paragraph")}
          </p>
          <span className="text-[#06B1FD] text-[12px] lg:text-[14px] font-bold lg:mt-2">
            {t("continue")}
          </span>
            <span className="border md:hidden border-[#06B1FD] h-4 absolute bottom-0 -mr-2 "></span>
        </div>
        <div className="flex flex-col justify-center items-end lg:w-[344px] lg:p-6 relative">
          {/* right blue border */}
          <span className="md:border border-[#06B1FD] h-40 absolute -mr-6 "></span>
          <Image src={code_icon3} alt="code" />
          <h1 className="lg:text-[24px] font-semibold text-[16px] text-[#1E1E2B] lg:mt-5">
            {t("product_section3__box3_title")}
          </h1>
          <p className="text-[#1E1E2B99] tex-[14px] lg:text-[16px] text-right lg:mt-2">
            {t("product_section3__box3_paragraph")}
          </p>
          <span className="text-[#06B1FD] text-[12px] lg:text-[14px] font-bold lg:mt-2">
            {t("continue")}
          </span>
            <span className="border md:hidden border-[#06B1FD] h-4 absolute bottom-0 -mr-2 "></span>
        </div>
        <div className="flex flex-col justify-center items-end lg:w-[344px] lg:p-6 relative">
          {/* right blue border */}
          <span className="md:border border-[#06B1FD] h-40 absolute -mr-6 "></span>
          <Image src={code_icon4} alt="code" />
          <h1 className="lg:text-[24px] font-semibold text-[16px] text-[#1E1E2B] lg:mt-5">
            {t("product_section3__box4_title")}
          </h1>
          <p className="text-[#1E1E2B99] tex-[14px] lg:text-[16px] text-right lg:mt-2">
            {t("product_section3__box4_paragraph")}
          </p>
          <span className="text-[#06B1FD] text-[12px] lg:text-[14px] font-bold lg:mt-2">
            {t("continue")}
          </span>
            <span className="border md:hidden border-[#06B1FD] h-4 absolute bottom-0 -mr-2 "></span>
        </div>
        <div className="flex flex-col justify-center items-end lg:w-[344px] lg:p-6 relative">
          {/* right blue border */}
          <span className="md:border border-[#06B1FD] h-40 absolute -mr-6 "></span>
          <Image src={code_icon5} alt="code" />
          <h1 className="lg:text-[24px] font-semibold text-[16px] text-[#1E1E2B] lg:mt-5">
            {t("product_section3__box5_title")}
          </h1>
          <p className="text-[#1E1E2B99] tex-[14px] lg:text-[16px] text-right lg:mt-2">
            {t("product_section3__box5_paragraph")}
          </p>
          <span className="text-[#06B1FD] text-[12px] lg:text-[14px] font-bold lg:mt-2">
            {t("continue")}
          </span>
            <span className="border md:hidden border-[#06B1FD] h-4 absolute bottom-0 -mr-2 "></span>
        </div>
        <div className="flex flex-col justify-center items-end lg:w-[344px] lg:p-6 relative">
          {/* right blue border */}
          <span className="md:border border-[#06B1FD] h-40 absolute -mr-6 "></span>
          <Image src={code_icon6} alt="code" />
          <h1 className="lg:text-[24px] font-semibold text-[16px] text-[#1E1E2B] lg:mt-5">
            {t("product_section3__box6_title")}
          </h1>
          <p className="text-[#1E1E2B99] tex-[14px] lg:text-[16px] text-right lg:mt-2">
            {t("product_section3__box6_paragraph")}
          </p>
          <span className="text-[#06B1FD] text-[12px] lg:text-[14px] font-bold lg:mt-2">
            {t("continue")}
          </span>
            <span className="border md:hidden border-[#06B1FD] h-4 absolute bottom-0 -mr-2 "></span>
        </div>
      </div>
    </div>
  );
}
