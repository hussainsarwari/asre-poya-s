"use client";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import arr_left from "@/public/icons/products/arrow-left.svg";
import Rectangle from "@/public/icons/products/Rectangle.svg";
export default function why_choose_us({
  SectionName,
})  {
  const t = useTranslations();
  const locale = useLocale();

  const dir = locale === "fa" || locale === "ps" ? "ltr" : "rtl";

  return (
    <div dir={dir=="rtl"?"rtl":"ltr"} className="w-[350px] md:w-[616px] lg:w-[1056px] mt-20">
      <div className="flex flex-col items-end">
        <h1 dir={dir=="ltr"?"rtl":"ltr"} className="relative font-bold lg:text-[32px] text-2xl text-[#1E1E2B]">
          {t("why_choose_us_title")}
          <Image
            src={Rectangle}
            alt="Rectangle"
                className={`absolute h-full top-3 ${dir === "rtl" ? "[transform:rotateY(180deg)] left-0":"right-0" }`}
          />
        </h1>
        <p className="mt-3 text-[14px]  text-[#1E1E2B99]">
          {t("why_choose_us_paragraph")}
        </p>
      </div>


      {/* ==================== */}
      <div className="flex flex-col justify-between mt-10 lg:flex-row">
        <div className="flex flex-col-reverse justify-center md:flex-row">
          <div className={`flex md:flex-col flex-col-reverse  h-[440px] justify-center border-[#00000033] md:pb-20  ${dir=="rtl"?"md:pl-6 md:border-l":"md:pr-6 md:border-r"}`}>
            {/* box4 */}

            <div className={`${dir=="rtl"?"md:pr-0":"md:pr-0"} lg:w-[244px] flex flex-col items-end border-b border-[#00000033] py-10 pr-30 `}>
              <span className="w-10 h-10 mb-2 rounded-full bg-[#06B1FD0D] text-[#06B1FD] text-[20px] text-center flex items-center justify-center">
                {t("why_choose_us_number4")}
              </span>
              <h2 className="text-[16px ]">{t("why_choose_us_box4_title")}</h2>
              <p dir={dir=="ltr"?"rtl":"ltr"} className="text-[#1E1E2B99] ">
                {t("why_choose_us_box4_paragraph")}
              </p>
            </div>
            {/* box3 */}
            <div className="lg:w-[244px] flex flex-col items-end   mt-0 border-b border-[#00000033] py-10  pt-40 md:pt-10  md:border-0">
              <span className="w-10 h-10 mb-2 rounded-full bg-[#06B1FD0D] text-[#06B1FD] text-[20px] text-center flex items-center justify-center">
                {t("why_choose_us_number3")}
              </span>
              <h2 className="text-[16px ]">{t("why_choose_us_box3_title")}</h2>
              <p dir={dir=="ltr"?"rtl":"ltr"} className="text-[#1E1E2B99] ">
                {t("why_choose_us_box3_paragraph")}
              </p>
            </div>
          </div>

          {/* left side box 2 and 1 */}
          <div dir={dir=="rtl"?"rtl":"ltr"} className={` h-[290px] flex md:flex-col flex-col-reverse justify-around md:mt-10 ${dir=="rtl"?"md:pr-6 ":"md:pl-6"}`}>
            {/* box2 */}
            <div className={`${dir=="rtl"?"md:pr-0":"md:pr-0"} lg:w-[244px] flex flex-col items-end border-b border-[#00000033] py-10 pr-30 `}>
              <span className="w-10 h-10 mb-2 rounded-full bg-[#06B1FD0D] text-[#06B1FD] text-[20px] text-center flex items-center justify-center">
                {t("why_choose_us_number2")}
              </span>
              <h2 className="text-[16px ]">{t("why_choose_us_box2_title")}</h2>
              <p dir={dir=="ltr"?"rtl":"ltr"} className="text-[#1E1E2B99] ">
                {t("why_choose_us_box2_paragraph")}
              </p>
            </div>

            {/* box1 */}

            <div className="lg:w-[244px] flex flex-col items-end border-b border-[#00000033] py-10 md:border-0">
              <span className="w-10 h-10 mb-2 rounded-full bg-[#06B1FD0D] text-[#06B1FD] text-[20px] text-center flex items-center justify-center">
                {t("why_choose_us_number1")}
              </span>
              <h2 className="text-[16px ]">{t("why_choose_us_box1_title")}</h2>
              <p dir={dir=="ltr"?"rtl":"ltr"} className="text-[#1E1E2B99] ">
                {t("why_choose_us_box1_paragraph")}
              </p>
            </div>
          </div>
        </div>

        {/* right side */}
        <div dir={dir=="ltr"?"rtl":"ltr"} className="lg:w-[414px] mt-20 flex flex-col items-end justify-around">
          <h3 className="text-[24px] font-bold  lg:w-[400px]">
            {t("why_choose_us_right_box_title_start")}
            <span className="bg-linear-to-r from-[#06B1FD] px-1 to-[#046A97] bg-clip-text text-transparent">{t("why_choose_us_right_box_title_middle")}</span>
            {t("why_choose_us_right_box_title_end")}
          </h3>
          <p className=" text-[#1E1E2BCC] text-[16px] lg:w-[400px]">{t("why_choose_us_right_box_paragraph")}</p>
          <div className={`relative  gap-[32px] flex ${dir === "ltr" ? " left-0":"right-0" }`}>
            <button className="flex text-[#06B1FD] items-center justify-center gap-2">
              <Image src={arr_left} alt="arrow" className={`${dir === "rtl" && "[transform:rotateY(180deg)] " }`}/> {t("why_choose_us_btn1")}
            </button>
            <button className="flex text-[#06B1FD] items-center justify-center gap-2">
              <Image src={arr_left} alt="arrow" className={`${dir === "rtl" && "[transform:rotateY(180deg)] " }`}/> {t("why_choose_us_btn2")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
