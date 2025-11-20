"use client";
import { useLanguage } from "../../provider/languageProvider";

export default function AboutUs() {
  const { t, dir } = useLanguage();

  
  return (
    <>
      <div>
            <h1
              className={`${dir === "rtl" ? "flex flex-row-reverse" : "flex flex-row"} font-bold  lg:text-[32px] text-[20px] md:text-[24px]`}
            >
              {t("aboutus")}
            </h1>
    
            <p
              className={`${dir === "rtl" ? "flex flex-row-reverse" : "flex flex-row"} text-[#1E1E2B99] text-[12px] lg:text-[14px] my-5`}
            >
              {t("aboutUsParagraph")}
            </p>
          </div>
    </>
    );
}
