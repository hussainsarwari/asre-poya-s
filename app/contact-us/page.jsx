"use client";

import { useLanguage } from "../provider/languageProvider";
import Image from "next/image";
import sms from "@/public/icons/footer/sms.svg";
import call from "@/public/icons/footer/call.svg";
import location from "@/public/icons/footer/location.svg";

export default function ContactUs() {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col gap-0 lg:gap-8    mx-auto    my-[89px]  lg:my-[142px] w-[300px] md:w-[616px]  lg:w-[1056px]" dir="rtl">
      {/* عنوان */}
 
      <h2 className="text-[20px] lg:text-[32px] font-bold text-[#1E1E2B]">{t("contactus")}</h2>
      <p className="text-[#1E1E2B99] text-[12px] lg:text-[14px] ">{t("contactustext")}</p>


      {/* کانتینر نقشه و اطلاعات تماس */}
   
      <div className="flex flex-col-reverse md:flex-row-reverse gap-8 relative bg-[#1E1E2B08] mt-9 p-6 rounded-2xl md:h-[299px] lg:h-[340px] w-full md:w-[616px] lg:w-[1056px]">
        
        {/* Google Map */}
        <div className="w-full md:w-[351px] lg:w-[20em] xl:w-[292px] xl:h-[292px]  aspect-square border border-[#CBCBCB] rounded-sm overflow-hidden  m-auto ">
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
        <div className="w-full lg:w-[65%] flex flex-col   overflow-auto ">
          <h2 className="text-[16px] md:text-[20px] lg:text-[24px] font-bold border-b border-[#1E1E2B33] m-5 pb-5">
            {t("contactuswithasrepoya")}
          </h2>

          <div className="flex flex-col top-[126px]">
            {/* Location */}
            <div className="flex items-center gap-2 h-[50px]  lg:h-14">
              <Image src={location} alt="location" className="w-4" />
           
                <h3 className="font-semibold text-black text-[14px] lg:text-[16px]">{t("location")}:</h3>
                <p className="text-[#1E1E2B99] text-[14px] lg:text-[16px]">Mazar-e-Sharif, Afghanistan</p>
           
            </div>

            {/* Phone */}
            <div className="flex items-center gap-2 h-[50px] lg:h-14">
              <Image src={call} alt="phone" width={16} height={16} />
          
                <h3 className="font-semibold text-black text-[14px] lg:text-[16px]">{t("call")}:</h3>
                <p className="text-[#1E1E2B99] text-[14px] lg:text-[16px]">+9377777777777</p>
            
            </div>

            {/* Email */}
            <div className="flex items-center gap-2 h-[50px] lg:h-14">
              <Image src={sms} alt="email" className="w-5"  />
             
                <h3 className="font-semibold text-black text-[14px] lg:text-[16px]">{t("email")}:</h3>
                <p className="text-[#1E1E2B99] text-[14px] lg:text-[16px]">email@asrepoya.com</p>
        
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
