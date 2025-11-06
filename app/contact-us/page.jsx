"use client";

import { useLanguage } from "../provider/languageProvider";
import Image from "next/image";
import sms from "@/public/icons/footer/sms.svg";
import call from "@/public/icons/footer/call.svg";
import location from "@/public/icons/footer/location.svg";

export default function ContactUs() {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col gap-8  mx-auto my-[142px]  w-[1056px] " dir="rtl">
      {/* عنوان */}
      <h2 className="text-[32px] font-bold text-[#1E1E2B]">{t("contactus")}</h2>
      <p className="text-[#1E1E2B99] text-[14px] ">{t("contactustext")}</p>

      {/* کانتینر نقشه و اطلاعات تماس */}
   
      <div className="flex flex-col-reverse lg:flex-row-reverse gap-8 bg-[#1E1E2B08] p-4 rounded-2xl lg:h-[22em]">
        
        {/* Google Map */}
        <div className="w-full sm:w-[18em] lg:w-[20em] xl:w-[25em] 2xl:w-[30em] aspect-square rounded-lg overflow-hidden shadow-md mx-auto lg:mx-0">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57595.56404421492!2d67.06186!3d36.42272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38d94f8a6d1f0107%3A0x5e9b245b504b2aa0!2sMazar-e%20Sharif%2C%20Afghanistan!5e0!3m2!1sen!2saf!4v1730597710217!5m2!1sen!2saf"
            className="w-full h-full"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Contact Info */}
        <div className="w-full lg:w-[65%] flex flex-col gap-4 lg:gap-6 overflow-auto">
          <h2 className="text-[16px] md:text-[20px] lg:text-[24px] font-semibold border-b border-[#1E1E2B33] m-5 pb-5">
            {t("contactuswithasrepoya")}
          </h2>

          <div className="flex flex-col gap-4 px-5 md:gap-14">
            {/* Location */}
            <div className="flex items-center gap-3">
              <Image src={location} alt="location" width={24} height={24} />
           
                <h3 className="font-semibold text-black">{t("location")}</h3>
                <p className="text-[#1E1E2B99]">Mazar-e-Sharif, Afghanistan</p>
           
            </div>

            {/* Phone */}
            <div className="flex items-center gap-3">
              <Image src={call} alt="phone" width={24} height={24} />
          
                <h3 className="font-semibold text-black">{t("call")}</h3>
                <p className="text-[#1E1E2B99]">+9377777777777</p>
            
            </div>

            {/* Email */}
            <div className="flex items-center gap-3">
              <Image src={sms} alt="email" width={24} height={24} />
             
                <h3 className="font-semibold text-black">{t("email")}</h3>
                <p className="text-[#1E1E2B99]">email@asrepoya.com</p>
        
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
