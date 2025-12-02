"use client";
import Image from "next/image";
import { useLanguage } from "../../provider/languageProvider";
import programming_img from "@/public/icons/img_programming.svg";
import clock from "@/public/icons/services/clock.svg";
import calendar from "@//public/icons/services/calendar_ser.svg";
import people_search from "@//public/icons/services/people_search.svg";
export default function client_opinion() {
  const { t ,dir} = useLanguage();

  return (
    <div dir= {dir === "rtl" ? "rtl" : "ltr"} className="w-[350px] md:w-[616px] lg:w-[1056px] m-auto my-30">
      <div className="flex flex-col items-end">
        <h1 className="lg:text-[32px] text-[22px] text-[#1E1E2B] font-bold my-2">
          {t("service_section1_title")}
        </h1>
        <p className=" text-[#1E1E2B99]  text-[14px]">
          {t("service_section1_paragraph")}
        </p>
      </div>
      {/* image */}
      <Image src={programming_img} alt="programming img" className="my-8" />
      {/* footer of section 1 */}
      <div className="flex flex-col lg:flex-row-reverse  justify-between gap-[21px] relative my-10">
        <div className={`md:h-[50px] lg:h-[82px]   border-[#06B1FD99] flex flex-col justify-between items-end  ${dir === "ltr" ? " border-r pr-6" : " border-l pl-6"}`}>
          <h3 className={`lg:text-[24px] md:text-[20px] font-bold    ${dir === "ltr" ? "w-70 text-right" : "w-90 text-left"}`}>
            {t("customized_software_development_title")}
          </h3>
          <p className="text-[14px] lg:text-[18px]  text-[#1E1E2B99]">
            {t("customized_software_development_pragraph")}
          </p>
        </div>
        <div dir= {dir === "rtl" ? "rtl" : "ltr"}  className="flex flex-row-reverse gap-2 lg:w-[959px] lg:overflow-hidden overflow-x-scroll absolute w-[380px] md:w-[616px] overflow-visible lg:relative right-0 top-15 lg:-top-8 my-10">

        <div className="flex w-[211px] h-[84px]  min-w-[211px] rounded-3xl border border-[#1E1E2B1A] flex-row-reverse text-[#1E1E2B] text-[12px] gap-2 items-center py-6 px-4">
          <Image src={clock} alt="clock" />
          <h5 className="text-left w-fit ">{t("more_18_years_exprience")}</h5>
        </div>
        <div className="flex w-[245px] h-[84px] rounded-3xl min-w-[211px] border border-[#1E1E2B1A] flex-row-reverse text-[#1E1E2B] text-[12px] gap-2 items-center py-6 px-4">
          <Image src={calendar} alt="calendar" />
          <h5 className="text-left w-fit ">{t("more_1000_project")}</h5>
        </div>
        <div className="flex w-[231px] h-[84px] rounded-3xl min-w-[211px] border border-[#1E1E2B1A] flex-row-reverse text-[#1E1E2B] text-[12px] gap-2 items-center py-6 px-4">
          <Image src={people_search} alt="people_search" />
          <h5 className="text-left w-fit ">{t("more_200_support")}</h5>
        </div>
        </div>
      </div>
    </div>
  );
}
