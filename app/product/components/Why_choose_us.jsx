"use client";
import Image from "next/image";
import { useLanguage } from "../../provider/languageProvider";
import arr_left from "@/public/icons/products/arrow-left.svg";
import Rectangle from "@/public/icons/products/Rectangle.svg";
export default function why_choose_us() {
  const { t } = useLanguage();

  return (
    <div className="w-[380px] md:w-[616px] lg:w-[1056px]">
      <div className="flex flex-col items-end">
        <h1 className="relative font-bold lg:text-[32px] text-xl text-[#1E1E2B]">
          {t("why_choose_us_title")}
          <Image
            src={Rectangle}
            alt="Rectangle"
            className="absolute right-0 top-7"
          />
        </h1>
        <p className="mt-3 text-[14px] text-[#1E1E2B99]">
          {t("why_choose_us_paragraph")}
        </p>
      </div>


      {/* ==================== */}
      <div className="flex justify-between mt-10">
        <div className="flex justify-center">
          <div className="flex flex-col pr-6 border-r h-[440px] justify-center border-[#00000033]">
            {/* box4 */}

            <div className="lg:w-[244px] flex flex-col items-end border-b border-[#00000033] pb-[26px]">
              <span className="w-10 h-10 mb-2 rounded-full bg-[#06B1FD0D] text-[#06B1FD] text-[20px] text-center flex items-center justify-center">
                {t("why_choose_us_number4")}
              </span>
              <h2 className="text-[16px ]">{t("why_choose_us_box4_title")}</h2>
              <p className="text-[#1E1E2B99] text-right">
                {t("why_choose_us_box4_paragraph")}
              </p>
            </div>
            {/* box3 */}
            <div className="lg:w-[244px] flex flex-col items-end  pb-[26px] mt-6">
              <span className="w-10 h-10 mb-2 rounded-full bg-[#06B1FD0D] text-[#06B1FD] text-[20px] text-center flex items-center justify-center">
                {t("why_choose_us_number3")}
              </span>
              <h2 className="text-[16px ]">{t("why_choose_us_box3_title")}</h2>
              <p className="text-[#1E1E2B99] text-right">
                {t("why_choose_us_box3_paragraph")}
              </p>
            </div>
          </div>

          {/* left side box 2 and 1 */}
          <div className="pl-6 h-[290px] flex flex-col justify-around mt-30">
            {/* box2 */}
            <div className="lg:w-[244px] flex flex-col items-end border-b border-[#00000033] pb-[26px]">
              <span className="w-10 h-10 mb-2 rounded-full bg-[#06B1FD0D] text-[#06B1FD] text-[20px] text-center flex items-center justify-center">
                {t("why_choose_us_number2")}
              </span>
              <h2 className="text-[16px ]">{t("why_choose_us_box2_title")}</h2>
              <p className="text-[#1E1E2B99] text-right">
                {t("why_choose_us_box2_paragraph")}
              </p>
            </div>

            {/* box1 */}

            <div className="lg:w-[244px] flex flex-col items-end ">
              <span className="w-10 h-10 mb-2 rounded-full bg-[#06B1FD0D] text-[#06B1FD] text-[20px] text-center flex items-center justify-center">
                {t("why_choose_us_number1")}
              </span>
              <h2 className="text-[16px ]">{t("why_choose_us_box1_title")}</h2>
              <p className="text-[#1E1E2B99] text-right">
                {t("why_choose_us_box1_paragraph")}
              </p>
            </div>
          </div>
        </div>

        {/* right side */}
        <div className="lg:w-[414px] mt-20 flex flex-col items-end justify-around">
          <h3 className="text-[24px] font-bold text-right lg:w-[400px]">
            {t("why_choose_us_right_box_title_start")}
            <span className="bg-linear-to-r from-[#06B1FD] to-[#046A97] bg-clip-text text-transparent">{t("why_choose_us_right_box_title_middle")}</span>
            {t("why_choose_us_right_box_title_end")}
          </h3>
          <p className="text-right text-[#1E1E2BCC] text-[16px] lg:w-[400px]">{t("why_choose_us_right_box_paragraph")}</p>
          <div className="relative right-0 gap-[32px] flex">
            <button className="flex text-[#06B1FD] items-center justify-center gap-2">
              <Image src={arr_left} alt="arrow" /> {t("why_choose_us_btn1")}
            </button>
            <button className="flex text-[#06B1FD] items-center justify-center gap-2">
              <Image src={arr_left} alt="arrow" /> {t("why_choose_us_btn2")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
