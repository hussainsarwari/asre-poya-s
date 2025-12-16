"use client";
import Image from "next/image";
import bg_img from "@/public/icons/home/IMG_98241.svg";
import Headphone from "@/public/icons/home/Headphone.svg";
import whatsappwhite from "@/public/icons/home/whatsapp.svg";
import asrepoya from "@/public/icons/home/asrepoya.svg";
import vector from "@/public/icons/home/vector2.svg";
import business_assistant from "@/public/icons/home/business_log.svg";
import doctor_assistant from "@/public/icons/home/doctor_assistant.svg";
import asrepoya_text_englsih from "@/public/icons/AsrePoya_english_title.svg";
import { useTranslations } from 'next-intl';
import { useLocale } from "next-intl";
export default function HeroSection() {
  
   const t = useTranslations();
      const locale = useLocale();
     
   const dir = locale === "fa" || locale === "ps" ? "ltr" : "rtl";

 const sidebardir=dir;
  return (
    <div dir={sidebardir} className="flex flex-col-reverse items-center mx-auto lg:flex-row lg:h-[550px] ">
      {/* section 1 */}
      <div className="">
        <Image
          src={bg_img}
          alt="background image"
          className="md:w-[616px] w-[366px] lg:w-full"
        />
        {/* description box */}
        <div dir={sidebardir} className="bg-[#1E1E2B] hidden lg:flex  h-[91px] py-7 w-[619px] rounded-2xl  flex-row-reverse items-center justify-around">
          <div className="flex flex-row-reverse items-center justify-center w-fit " >
            <Image src={Headphone} alt="Headphone" width={18} />
            <div dir={sidebardir} className={` ${dir=="ltr" ? "":"w-40"}`} >
              <h2 dir={sidebardir} className="font-bold text-[12px] text-end text-white w-full ">
                {t("do_you_need_consultation")}
              </h2>
              <p dir={sidebardir} className="text-[#FFFFFFCC] text-[8px] mt-1 w-full text-end ">
                {t("we_are_here")}
              </p>
            </div>
          </div>

          <form
            method="post"
            className="flex items-center justify-between gap-2 "
          dir={sidebardir=="rtl"?"ltr":"rtl"}
          >
            <input
              type="text"
              name="name_lastname"
              id="name and lastname"
              placeholder={`${t("name_and_lastname")}`}
              className="text-white border border-[#FFFFFF66]  w-[120px] h-7 rounded-lg py-2 px-3 text-[8px] focus:border-sky-400 outline-0"
            />
            <input
              type="text"
              name="description"
              id="description"
              className="text-white border border-[#FFFFFF66]   w-[120px] h-7 rounded-lg py-2 px-3 text-[8px] focus:border-sky-400 outline-0"
              placeholder={`${t("description")}`}
            />
            <button className={`bg-[#06B1FD] rounded-lg w-[76px] hover:scale-105 duration-100 cursor-pointer h-[35px] text-center text-white text-[12px] flex flex-row-reverse items-center justify-center gap-1 ${dir=="rlt" ? "ml-8 bg-amber-400":"mx-8" }`}>
              {t("send")}
              <Image src={whatsappwhite} alt="whatsapp icon" />
            </button>
          </form>
        </div>
      </div>
      <div dir={sidebardir =="rtl"?"ltr":"rtl"} className="w-[350px] relative flex justify-center">
        {/* section 2 */}
        <div className="mb-30">
          {/* what should i do  */}
          <h1 className={`bg-[#06B1FD0D] rounded-3xl text-[12px] m-auto lg:m-0 lg:text-[20px] text-[#0972A0] text-center  flex items-center justify-center  px-5 h-[42px] lg:h-[46px]     w-fit`}>
            {t("online_marketing_company")}
          </h1>
          {dir==="ltr"? 
            
            <Image
            src={asrepoya}
            alt="asrepoya"
            className="mx-auto mt-8 lg:mx-0 w-[187px] lg:w-full"
            />
            
          :
          <Image
            src={asrepoya_text_englsih}
            alt="asrepoya"
            className="mx-auto mt-8 lg:mx-0 w-[187px] lg:w-full"
            />}
          <Image
            src={vector}
            alt="vector"
            className="lg:mr-[190.9px]  mx-40 mt-5 w-[183px]  lg:w-52"
          />
          <p className="lg:text-[14px] text-[12px] text-[#1E1E2B] my-4">
            {t("home_paragraph")}
          </p>
          {/*  btn */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button className="hover:bg-[#009cdf]  hover:scale-105 duration-150 w-40 lg:w-[181px] h-[43px] lg:h-[46px] cursor-pointer rounded-xl py-3  bg-[#06B1FD] shadow-md shadow-[#06B1FD33] text-white flex justify-center items-center  gap-2 ">
              <Image src={business_assistant} alt="business assistant" />
              {t("business_assistant")}
            </button>
            <button className="hover:scale-105 w-40  lg:w-[181px] duration-150 h-[43px] lg:h-[46px] cursor-pointer rounded-xl border border-[#06B1FD] text-[#06B1FD] flex justify-center items-center">
              <Image src={doctor_assistant} alt="doctor assistant" />
              {t("doctor_assistant")}
            </button>
          </div>
        </div>
        <div className={`h-[70px] flex mt-[166px] absolute md:top-[660px] top-[500px]  ${dir=="rtl"?"lg:top-60  left-0":"lg:top-[260px] right-0"} `}>
          <div dir={sidebardir} className={` flex items-center justify-center px-3.5 border-[#1E1E2B33] ${dir=="rtl"?"border-l flex-col-reverse w-40 md:w-50":"border-r flex-row"}`}>
            <span className="mx-1 text-2xl font-bold">+1000</span>
            <h1 className="text-[#1E1E2B99] w-fit">{t("active_clients")}</h1>
          </div>
<div dir={sidebardir} className={` flex items-center justify-center px-3.5 border-[#1E1E2B33] ${dir=="rtl"?"border-l flex-col-reverse w-50":"border-r"}`}>
            <span className="mx-1 text-xl font-bold">+6</span>
            <h1 className="text-[#1E1E2B99]">{t("exprence")}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
