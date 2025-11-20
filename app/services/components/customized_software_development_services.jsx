"use client";
import Image from "next/image";
import { useLanguage } from "../../provider/languageProvider";
import programming_img from "@/public/icons/img_programming.svg";
import clock from "@/public/icons/services/clock.svg";
import calendar from "@//public/icons/services/calendar_ser.svg";
import people_search from "@//public/icons/services/people_search.svg";
export default function client_opinion() {
  const { t } = useLanguage();

  return (
    <div className="w-[360px] md:w-[616px] lg:w-[1056px] m-auto my-20">
      <div className="flex flex-col items-end">
        <h1 className="lg:text-[32px] text-[22px] text-[#1E1E2B] font-bold my-2">
          {t("service_section1_title")}
        </h1>
        <p className="text-right text-[#1E1E2B99]  text-[14px]">
          {t("service_section1_paragraph")}
        </p>
      </div>
      {/* image */}
      <Image src={programming_img} alt="programming img" className="my-8" />
      {/* footer of section 1 */}
      <div className="flex flex-row-reverse justify-between gap-[31px]">
        <div className="h-[82px] pr-6 border-r  border-[#06B1FD99] flex flex-col justify-between ">
          <h3 className="text-[24px] font-bold">
            {t("customized_software_development_title")}
          </h3>
          <p className="text-[18px] text-right text-[#1E1E2B99]">
            {t("customized_software_development_pragraph")}
          </p>
        </div>
        <div className="flex flex-row-reverse gap-3">

        <div className="flex w-[211px] h-[84px] rounded-3xl border border-[#1E1E2B1A] flex-row-reverse text-[#1E1E2B] text-[12px] gap-2 items-center py-6 px-4">
          <Image src={clock} alt="clock" />
          <h5>{t("more_18_years_exprience")}</h5>
        </div>
        <div className="flex w-[245px] h-[84px] rounded-3xl border border-[#1E1E2B1A] flex-row-reverse text-[#1E1E2B] text-[12px] gap-2 items-center py-6 px-4">
          <Image src={calendar} alt="calendar" />
          <h5>{t("more_1000_project")}</h5>
        </div>
        <div className="flex w-[231px] h-[84px] rounded-3xl border border-[#1E1E2B1A] flex-row-reverse text-[#1E1E2B] text-[12px] gap-2 items-center py-6 px-4">
          <Image src={people_search} alt="people_search" />
          <h5>{t("more_200_support")}</h5>
        </div>
        </div>
      </div>
    </div>
  );
}
