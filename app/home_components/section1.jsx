"use client";
import Image from "next/image";
import bg_img from "@/public/icons/home/IMG_98241.svg"
import Headphone from "@/public/icons/home/Headphone.svg"
import whatsappwhite from "@/public/icons/home/whatsapp.svg"
import { useLanguage } from "../provider/languageProvider";
import asrepoya from "@/public/icons/home/asrepoya.svg"
import vector from "@/public/icons/home/vector2.svg"
import business_assistant from "@/public/icons/home/business_log.svg"
import doctor_assistant from "@/public/icons/home/doctor_assistant.svg"
export default function section1() {
  const { t } = useLanguage();
  return (
    <div className="flex flex-col-reverse items-center mx-auto lg:flex-row lg:h-[550px] ">
      {/* section 1 */}
      <div className="">

        <Image src={bg_img} alt="background image" className="md:w-[616px] w-[376px] lg:w-full"/>
        {/* description box */}
        <div className="bg-[#1E1E2B] hidden lg:flex w-[619px] h-[91px] py-7 px-10 rounded-2xl  flex-row-reverse items-center ">
          <div className="flex flex-row-reverse items-center justify-center ">
            <Image src={Headphone} alt="Headphone" width={18} />
            <div>

              <h2 className="font-bold text-[12px] text-white">{t("do_you_need_consultation")}</h2>
              <p className="text-[#FFFFFFCC] text-[8px] mt-1">{t("we_are_here")}</p>
            </div>
          </div>

          <form method="post" className="flex items-center gap-2 mr-8" dir="rtl">
            <input type="text" name="name_lastname" id="name and lastname" placeholder={`${t("name_and_lastname")}`} className="text-white border border-[#FFFFFF66]  w-[120px] h-7 rounded-lg py-2 px-3 text-[8px]" />
            <input type="text" name="description" id="description" className="text-white border border-[#FFFFFF66]   w-[120px] h-7 rounded-lg py-2 px-3 text-[8px]" placeholder={`${t("description")}`} />
            <button className="bg-[#06B1FD] rounded-lg w-[76px] h-[35px] text-center text-white text-[12px] flex flex-row-reverse items-center justify-center gap-1 mr-8">
              {t("send")}
              <Image src={whatsappwhite} alt="whatsapp icon" />
            </button>
          </form>



        </div>

      </div>
      <div className="w-[380px] relative" dir="rtl">
        {/* section 2 */}
    <div className="mb-30">
      
        <h1 className="bg-[#06B1FD0D] rounded-3xl text-[12px] m-auto lg:m-0 lg:text-[20px] text-[#0972A0] text-center  flex items-center justify-center w-[202px] lg:w-[289px] h-[42px] lg:h-[46px]">
          {t("online_marketing_company")}
        </h1>
        <Image src={asrepoya} alt="asrepoya" className="mx-auto mt-8 lg:mx-0 w-[187px] lg:w-full" />
        <Image src={vector} alt="vector" className="lg:mr-[190.9px] mr-40 mt-5 w-[183px]  lg:w-[208px]" />
        <p className="lg:text-[14px] text-[12px] text-[#1E1E2B] my-4">
          {t("home_paragraph")}
        </p>
        {/*  btn */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button className="w-[160px] lg:w-[181px] h-[43px] lg:h-[46px] cursor-pointer rounded-xl py-3  bg-[#06B1FD] shadow-md shadow-[#06B1FD33] text-white flex justify-center items-center  gap-2 ">
            <Image src={business_assistant} alt="business assistant" />
            {t("business_assistant")}

          </button>
          <button className="w-[160px] lg:w-[181px] h-[43px] lg:h-[46px] cursor-pointer rounded-xl border border-[#06B1FD] text-[#06B1FD] flex justify-center items-center">
            <Image src={doctor_assistant} alt="doctor assistant" />
            {t("doctor_assistant")}</button>
        </div>

    </div>
        <div className="h-[70px] flex mt-[166px] absolute md:top-[660px] top-[500px] lg:top-[260px]">
          <div className="border-r flex items-center justify-center px-3.5 border-[#1E1E2B33]">
            <span className="text-2xl font-bold">
              +1000
            </span>
          <h1 className="text-[#1E1E2B99]">
              {t("active_clients")}
            </h1>
          </div>
          <div className="border-r flex items-center justify-center px-3.5 border-[#1E1E2B33]">
            <span className="text-xl font-bold">
              +6
            </span>
       <h1 className="text-[#1E1E2B99]">
        
            {t("exprence")}
        </h1> 
          </div>

        </div>

      </div>

    </div>
  );
}
