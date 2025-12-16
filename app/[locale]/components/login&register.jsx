"use client";
import { useEffect, useState } from "react";

import arrow from "@/public/icons/products/arrow-left_black.svg"
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";

export default function LoginModal({ open, onClose }) {
   const t = useTranslations();
   const locale = useLocale();
 
   const dir = locale === "fa" || locale === "ps" ? "ltr" : "rtl";
 
  const [flag, setFlag] = useState(false);
  useEffect(() => {
    // جلوگیری از اسکرول هنگام باز بودن مودال
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  }, [open]);

  if (!open) return null;

  return (
    // login box
    <>
      <div dir={dir=="rtl"?"ltr":"rtl"}
        className={`fixed inset-0 flex items-center justify-center z-100 ${
          !flag ? "fixed" : "hidden"
        }`}
      >
        {/* بک‌دراپ */}
        <div className="absolute inset-0 bg-black/50 " onClick={onClose} />

        {/* باکس اصلی */}
        <div
         
          className="relative md:w-[500px] md:h-[431px] w-full h-full bg-white rounded-2xl  px-10 py-6 text-center flex  justify-center md:justify-start  animate-fadeIn z-110"
        >
          <Image src={arrow} alt="arrow back btn"  className="fixed left-5 md:hidden" onClick={onClose}/>
          <div
           
            className="fixed -translate-y-1/2 w-[344px] md:w-full top-1/2 md:static md:top-auto md:translate-y-0 "
          >
            <h2 className="mb-4 text-2xl font-bold text-[#1E1E2B] ">
              {t("login")}
            </h2>
            <p className="mb-[2px] text-[16px] gray-600 text-[#1E1E2BCC] leading-[180%]">
              {t("welcome_to_asrepoya")}
            </p>
            <p className=" mb-4 text-[16px] gray-600 text-[#1E1E2BCC] leading-[180%]">
              {t("enter_your_email")}
            </p>

            {/* فیلد ایمیل */}
            <input
              type="email"
              placeholder={t("email_input")}
              className="md:w-[420px] w-[344px] h-[48px] py-2 px-4 mb-4 text-[12px] border rounded-lg focus:outline-none border-[#06B1FDCC]"
            />

            {/* فیلد رمز */}
            <input
              type="password"
              placeholder={t("Password_input")}
              className="md:w-[420px] w-[344px] h-[48px] py-2 px-4 mb-4 text-[12px] border rounded-lg focus:outline-none border-[#06B1FDCC]"
            />

            {/* چک‌باکس */}
            <label className="flex items-center gap-2 mb-2 text-sm cursor-pointer">
              <input
                type="checkbox"
                className="w-4 h-4 accent-[#06B1FD] rounded-[10px]  cursor-pointer"
              />
              <span>
                {t("agree_with")}{" "}
                <span className="text-[#06B1FD]">{t("asrepoya_rulls")}</span>
                {t("agree_end")}
              </span>
            </label>
            <h6 className={`my-3 mb-5 text-sm ${dir=='ltr'?"text-right":"text-left"}`}>
              {t("i_dont_have_account")}
              <button
                className="text-[#06B1FD] cursor-pointer"
                onClick={() => {
                  setFlag(true);
                
                }}
              >
                {t("register")}
              </button>
            </h6>
          </div>

          <button
            className="md:w-[420px] w-[344px] fixed md:absolute bottom-10 left-1/2 -translate-x-1/2
 h-[48px] py-3 font-semibold text-white transition bg-[#06B1FD] rounded-lg hover:shadow-xl cursor-pointer"
          >
            {t("login")}
          </button>
        </div>
      </div>

      {/* ===========================  reigster box ======================================*/}
      <div dir={dir=="rtl"?"ltr":"rtl"} className={`fixed inset-0 flex items-center justify-center z-100 ${
          flag ? "fixed" : "hidden"
        }`}>
        {/* بک‌دراپ */}
        <div className="absolute inset-0 bg-black/50 " onClick={onClose} />

        {/* باکس اصلی */}
        <div
         
          className="relative md:w-[500px] md:h-[431px] w-full h-full bg-white rounded-2xl  px-10 py-6 text-center flex  justify-center md:justify-start  animate-fadeIn z-110"
        >
           <Image src={arrow} alt="arrow back btn"  className="fixed left-5 md:hidden" onClick={onClose}/>
         
          <div
           
            className="fixed -translate-y-1/2 w-[344px] md:w-full top-1/2 md:static md:top-auto md:translate-y-0 "
          >
            <h2 className="mb-4 text-2xl font-bold text-[#1E1E2B] ">
              {t("register_form")}
            </h2>
            <p className="mb-[2px] text-[16px] gray-600 text-[#1E1E2BCC] leading-[180%]">
              {t("welcome_to_asrepoya")}
            </p>
            <p className=" mb-4 text-[16px] gray-600 text-[#1E1E2BCC] leading-[180%]">
              {t("enter_your_email")}
            </p>

            {/* فیلد ایمیل */}
            <input
              type="email"
              placeholder={t("email_input")}
              className="md:w-[420px] w-[344px] h-[48px] py-2 px-4 mb-4 text-[12px] border rounded-lg focus:outline-none border-[#06B1FDCC]"
            />

            {/* فیلد رمز */}
            <input
              type="password"
              placeholder={t("Password_input")}
              className="md:w-[420px] w-[344px] h-[48px] py-2 px-4 mb-4 text-[12px] border rounded-lg focus:outline-none border-[#06B1FDCC]"
            />

            {/* چک‌باکس */}
            <label className="flex items-center gap-2 mb-2 text-sm cursor-pointer">
              <input
                type="checkbox"
                className="w-4 h-4 accent-[#06B1FD] rounded-[10px]  cursor-pointer"
              />
              <span>
                {t("agree_with")}{" "}
                <span className="text-[#06B1FD]">{t("asrepoya_rulls")}</span>
                {t("agree_end")}
              </span>
            </label>
            <h6 className={`my-3 mb-5 text-sm ${dir=='ltr'?"text-right":"text-left"}`}>
              {t("i_have_account")}
               <button
                className="text-[#06B1FD] cursor-pointer px-1"
                onClick={() => {
                  setFlag(false);
                
                }}
              >
                {t("login")}
              </button>
            </h6>
          </div>

          <button
            className="md:w-[420px] w-[344px] fixed md:absolute bottom-10 left-1/2 -translate-x-1/2
 h-[48px] py-3 font-semibold text-white transition bg-[#06B1FD] rounded-lg hover:shadow-xl cursor-pointer"
          >
            {t("register_form")}
          </button>
        </div>
      </div>
    </>
  );
}
