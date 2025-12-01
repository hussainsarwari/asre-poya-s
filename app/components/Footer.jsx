"use client";
import { useLanguage } from "../provider/languageProvider";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/icons/footer/asrepoyaLogo.png";
import asrepoyatext from "@/public/icons/footer/asrepoyatext.svg";
import sms from "@/public/icons/footer/sms.svg";
import call from "@/public/icons/footer/call.svg";
import location from "@/public/icons/footer/location.svg";

export default function Footer() {
  const { t, dir } = useLanguage();
  const sidebarDir = dir;
  return (
    
    <footer dir={sidebarDir=='ltr'? "ltr":"rtl"} className="bg-[#1E1E2B] w-full   mt-20 py-10 h-[591px] md:h-[587px] lg:h-[430px]  relative overflow-y-hidden">
      {/* it should be cetner */}
      <div className="flex flex-col items-center gap-5 justify-evenly w-[360px] md:w-[616px] lg:w-[1056px] absolute left-1/2 -translate-x-1/2 ">
        
      {/* section 1 */}
      <div
        className={`m-auto flex  flex-col-reverse items-end gap-0  justify-between lg:flex-row border-b border-[#06B1FD99] mt-[110px] h-[50px] pb-[50px] w-full`}
      >
        <div className="w-full lg:w-[70%]">
          <p
            className={`text-[#FFFFFFCC] text-sm sm:text-md ${
              dir === "ltr"
                ? "flex-row-reverse text-right"
                : "flex-row text-left"
            }`}
          >
            {t("footer.paragraph")}
          </p>
        </div>
        <div>
          <Link href="/" className="flex items-center gap-2 text-white">
            <Image src={asrepoyatext} alt="Logo" width={110} />
            <Image src={logo} alt="Logo" width={50} />
          </Link>
        </div>
      </div>

      {/* section 2 */}
      <div className="flex flex-col items-end w-full gap-5 justify-betweem lg:flex-row-reverse lg:justify-center lg:items-start">
        <h2 className=" text-end text-white lg:w-100 text-[20px] lg:text-[24px]">
          {t("contact_info")}
        </h2>
        <div className={`grid w-full grid-cols-2  grid-rows-2 gap-4  text-sm text-white lg:gap-1 lg:grid-cols-4 lg:grid-rows-1 `}>
          <div className={`w-full text-sm h-30 lg:h-15  ${dir=='rtl'&&"border-[#06B1FD33] border-l pl-2"}`}>
            <h3  className="flex items-center justify-end pb-4">
              {t("job")}
                <Image src={sms} alt="jobs" width={20} />
            </h3>
              <Link href={"/jobs_page"}>
            <p className="text-[#FFFFFF99] px-2" dir = {dir==="rtl" ? "ltr" : "rtl"}>{t("jobList")}</p>
              </Link>
          </div>
          {/* <div className="border-l h-30 lg:h-15 w-full text-sm border-[#06B1FD33]"> */}
        <div  className={`w-full text-sm h-30 lg:h-15  ${dir=='rtl'?"border-[#06B1FD33] lg:border-l lg:pl-8":"border-[#06B1FD33] border-l "}`}>
            <h3 className="flex items-center justify-end gap-1 pb-4">
              {t("email")}
              <span>
                <Image src={sms} alt="email" width={20} />
              </span>
            </h3>
            <p className="text-[#FFFFFF99] " dir = {dir==="rtl" ? "ltr" : "rtl"}>email@asrepoya.com</p>
          </div>
         <div  className={`w-full text-sm h-30 lg:h-15  ${dir=='rtl'?"border-[#06B1FD33] border-l pl-8":"lg:border-[#06B1FD33] lg:border-l "}`}>
           <h3 className="flex items-center justify-end gap-1 pb-4">
              {t("call")}
              <span>
                <Image src={call} alt="phone_number" width={20} />
              </span>
            </h3>
            <p className="text-[#FFFFFF99] " dir = {dir==="rtl" ? "ltr" : "rtl"}>+9377777777777</p>
          </div>
         <div  className={`w-full  text-sm h-30 lg:h-15  ${dir=='rtl'?"":"border-[#06B1FD33] border-l "}`}>
           <h3 className="flex justify-end gap-1 pb-4">
              {t("location")}
              <span>
                <Image src={location} alt="location" width={20} />
              </span>
            </h3>
            <p className="text-[#FFFFFF99] " dir = {dir==="rtl" ? "ltr" : "rtl"}>{t("addressmazar")}</p>
            <p className="text-[#FFFFFF99] " dir = {dir==="rtl" ? "ltr" : "rtl"}>{t("addresskabul")}</p>
          </div>
        </div>
      </div>

      {/* section 3 */}
      <div className=" md:flex bg-[#06B1FD33] py-[5px] rounded-lg w-full   items-center justify-center mt-0 lg:mt-16 ">
        <h1 className="text-center text-white text-[8px] md:text-[12px]">
          {t("all_right_of_this_website")}
        </h1>
      </div>
      </div>
    </footer>
  );
}
