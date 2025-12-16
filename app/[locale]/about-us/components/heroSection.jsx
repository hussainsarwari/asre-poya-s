"use client";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
export default function heroSection() {

  const t = useTranslations();
  const locale = useLocale();

  const dir = locale === "fa" || locale === "ps" ? "rtl" : "ltr";
  
  return (
    <>
      <div dir={dir}>
            <h1
              className={`font-bold  lg:text-[32px] text-[20px] md:text-[24px]`}
            >
              {t("aboutus")}
            </h1>
    
            <p
              className={` text-[#1E1E2B99] text-[12px] lg:text-[14px] my-5`}
            >
              {t("aboutUsParagraph")}
            </p>
          </div>
    </>
    );
}
