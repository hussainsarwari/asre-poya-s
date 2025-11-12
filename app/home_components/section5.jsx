"use client";
import Image from "next/image";
import { useLanguage } from "../provider/languageProvider";
import { useLoading } from "@/app/provider/LoadingProvider";
import bg_img from "@/public/icons/home/bg_img3.svg";
import Link from "next/link";
import calendar from "@/public/icons/calendar-tick.svg";
import calendar_search from "@/public/icons/calendar-search.svg";
import cal from "@/public/icons/home/calendar.svg";
export default function section5() {
  const { t, dir } = useLanguage();
  const { showLoading } = useLoading();
  return (
    <div className=" lg:h-[529px] -mt-15 relative">
      <div className="lg:w-[760px] lg:h-[285px] absolute lg:top-[120px]  z-0 rounded-tr-[32px] rounded-br-[32px] bg-[#06B1FD] left-0">
        <div className="flex flex-col gap-[16px] z-40 left-[220px] bottom-9 absolute">
          <div className="lg:w-[516px] lg:h-[95px] rounded-xl bg-white border border-[#1E1E2B1A]   p-3 shadow-lg shadow-[#00000026]">
            <h1 className="flex flex-row text-[16px] text-[#1E1E2B] font-semibold gap-1 justify-end">
              {t("home_page_section5_about_us_exprience_title1")}
              <span>
                <Image src={calendar} alt="calculator tick" />
              </span>
            </h1>
            <p className="text-[#1E1E2B99] text-[12px] text-right mt-2">
              {t("home_page_section5_about_us_exprience_paragraph1")}
            </p>
          </div>
          <div className="lg:w-[516px] lg:h-[76px] rounded-xl bg-white border border-[#1E1E2B1A]  p-3 shadow-lg shadow-[#00000026]">
            <h1 className="flex flex-row text-[16px] text-[#1E1E2B] font-semibold gap-1 justify-end">
              {t("home_page_section5_about_us_exprience_title2")}
              <span>
                <Image src={calendar_search} alt="calculator tick" />
              </span>
            </h1>
            <p className="text-[#1E1E2B99] text-[12px] text-right mt-2">
              {t("home_page_section5_about_us_exprience_paragraph2")}
            </p>
          </div>
          <div className="lg:w-[516px] lg:h-[76px] rounded-xl bg-white border border-[#1E1E2B1A]  p-3 shadow-lg shadow-[#00000026]">
            <h1 className="flex flex-row text-[16px] text-[#1E1E2B] font-semibold gap-1 justify-end">
              {t("home_page_section5_about_us_exprience_title3")}
              <span>
                <Image src={cal} alt="calculator tick" />
              </span>
            </h1>
            <p className="text-[#1E1E2B99] text-[12px] text-right mt-2">
              {" "}
              {t("home_page_section5_about_us_exprience_paragraph3")}
            </p>
          </div>
        </div>
      </div>

      <div className="m-auto  lg:w-[1056px] ">
        <div className="flex justify-between">
          <Link
            className="text-[#06B1FD] text-[1۴px] font-semibold"
            href="/about-us"
            onClick={() => {
              showLoading();
              localStorage.setItem("activeMenu", "about-us");
              handleSetActive("about-us");
            }}
          >
            {t("see_all")}
          </Link>
          <div className="flex flex-col justify-end">
            <h1 className="text-[32px] font-bold text-[#1E1E2B]">
              {t("aboutus")}
            </h1>
            <p className="text-[#1E1E2B99] text-right text-[14px]">
              {t("home_page_section5_aboutusparagraph")}
            </p>
          </div>
        </div>
        <div className="">
          <div className="relative mt-10 ">
            <Image
              src={bg_img}
              alt="background image"
              className="absolute right-0 lg:w-[519px]"
            />
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}
