"use client";
import Image from "next/image";
import { useLanguage } from "../provider/languageProvider";
import box3 from "@/public/icons/home/box3.svg"
import box2 from "@/public/icons/home/box2.svg"
// mobile box
import box1 from "@/public/icons/home/box1.svg"
import box4 from "@/public/icons/home/box4.svg"
import shield_tick from "@/public/icons/home/shield-tick.svg"
import global_search from "@/public/icons/home/global-search.svg"
import calendar from "@/public/icons/home/calendar.svg"
import people from "@/public/icons/home/people.svg"


export default function section2() {


  const { t } = useLanguage();

  return (
    <div className="mt-32 w-[1056px] mx-auto">
      <h2 className="text-[32px] text-right font-bold ">
        {t("advantage_asrePoya")}
      </h2>
      <p className="text-[14px] text-[#1E1E2B99] mt-3 text-right">
        {t("advantage_paragraph")}
      </p>

      {/* desktop */}
      <div className="flex gap-6 mt-10">
        <div className="relative">
          <Image alt="box" src={box2} />
          <div className="absolute top-0 right-0 flex flex-col pt-8 pr-6" dir="rtl">
            <Image src={calendar} alt="calendar" />
            <h3 className="text-[18px] font-bold  mt-4">
              {t("special_plan")}
            </h3>
            <p className="text-[12px] text-[#1E1E2B99] mt-2">
              {t("special_plan_paragraph")}
            </p>
            <span className="w-12 border-3 border-[#06B1FD] block rounded-full mt-6"></span>
          </div>
        </div>
        <div className="relative">
          <Image alt="box" src={box2} />
          <div className="absolute top-0 right-0 flex flex-col pt-8 pr-6" dir="rtl">
            <Image src={global_search} alt="global search " width={25}/>
            <h3 className="text-[18px] font-bold  mt-4">
              {t("agent")}
            </h3>
            <p className="text-[12px] text-[#1E1E2B99] mt-2">
              {t("agent_paragraph")}
            </p>
            <span className="w-12 border-3 border-[#06B1FD] block rounded-full mt-6"></span>
          </div>
        </div>
        <div className="relative">
          <Image alt="box" src={box3} />
          <div className="absolute top-0 right-0 flex flex-col pt-8 pr-6" dir="rtl">
            <Image src={people} width={25} alt="calendar" />
            <h3 className="text-[18px] font-bold  mt-4 text-white">
              {t("team")}
            </h3>
            <p className="text-[12px] text-white mt-2">
              {t("team_paragraph")}
            </p>
            <span className="block w-12 mt-6 border-white rounded-full border-3"></span>
          </div>
        </div>
        <div className="relative">
          <Image alt="box" src={box2} />
          <div className="absolute top-0 right-0 flex flex-col pt-8 pr-6" dir="rtl">
            <Image src={shield_tick} alt="calendar" />
            <h3 className="text-[18px] font-bold  mt-4">
              {t("design")}
            </h3>
            <p className="text-[12px] text-[#1E1E2B99] mt-2">
              {t("design_paragraph")}
            </p>
            <span className="w-12 border-3 border-[#06B1FD] block rounded-full mt-3"></span>
          </div>
        </div>
      </div>
      {/* mobile box */}
      <div className="hidden">
        <div>
          <Image alt="box" src={box1} />
        </div>
        <div>
          <Image alt="box" src={box4} />
        </div>
      </div>


    </div>
  );
}
