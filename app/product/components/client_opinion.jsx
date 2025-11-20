"use client";
import Image from "next/image";
import { useLanguage } from "../../provider/languageProvider";

import programming_img from "@/public/icons/img_programming.svg";
import Rectangle from "@/public/icons/products/Rectangle.svg";
import star from "@/public/icons/home/Star.svg";
import user_img from "@/public/icons/user_man.svg";
import star_fill from "@/public/icons/home/Star_fill.svg";
import arr from "@/public/icons/products/arrow-circle-right.svg";
export default function client_opinion() {
  const { t } = useLanguage();

  return (
    <div className="w-[360px] md:w-[616px] lg:w-[1056px] m-auto my-20">
      <div className="flex flex-col items-end">
        <h1 className="relative text-[20px] font-bold lg:text-[32px] text-[#1E1E2B]">
          {t("client_opinion_title")}
          <Image
            src={Rectangle}
            alt="Rectangle"
            className="absolute right-0 h-full top-3"
          />
        </h1>
        <p className="text-right text-[14px] text-[#1E1E2B99] mt-1">
          {t("client_opinion_pargraph")}
        </p>
      </div>
      <div className="flex flex-col-reverse justify-between mt-10 md:flex-row">
        {/* image */}
        <div className="md:w-[298px] lg:w-[663px] h-[305px]  relative overflow-hidden  rounded-[16px]">
          <Image
            src={programming_img}
            alt="programming image"
            fill
            style={{
              objectFit: "cover", // تصویر کل container رو پر می‌کنه و اضافات cut می‌شوند
              objectPosition: "center", // تصویر از وسط بریده می‌شه
            }}
          />
        </div>

        {/* text */}
        <div className="lg:w-[305px] w-[298px] flex flex-col items-end justify-around">
          <h4 className="flex  text-[#06B1FD] text-[16px] items-center gap-3">
            {t("doctor_assistant")}
            <Image src={arr} alt="arr" />
          </h4>
          {/* user image */}
          <div className="flex flex-row-reverse gap-3 mt-[14px]">
            <Image src={user_img} alt="user image" className="w-10" />
            <div className="">
              <h5 className="text-[24px] text-[#1E1E2B] font-semibold">
                {t("cleint_name1")}
              </h5>
              <h6 className="text-[12px] text-[#1E1E2B99] text-right ">
                {t("cleint_jobe1")}
              </h6>
            </div>
          </div>
          <p className="text-right text-[16px] mt-[14px] text-[#1E1E2BCC]">
            {t("client_opinion_paragraph")}
          </p>
          <div className="flex justify-between   lg:w-full w-[268px] mt-[70px] my-10 md:my-0">
            <span className="text-[12px] text-[#06B1FD99]">
              {t("client_opition_date")}
            </span>
            <span className="flex ">
              <Image src={star} alt="rating star" />
              <Image src={star} alt="rating star" />
              <Image src={star} alt="rating star" />
              <Image src={star_fill} alt="rating star" />
              <Image src={star_fill} alt="rating star" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
