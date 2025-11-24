"use client";

import Image from "next/image";
import { useLanguage } from "../../provider/languageProvider";
import Rectangle from "@/public/icons/products/Rectangle.svg";
import arrow from "@/public/icons/home/arrow.svg";
import bg_image2 from "@/public/icons/services/desktop_box2.svg";
import bg_image_mobile from "@/public/icons/services/mobile_box2.svg";

export default function Software_development_lifecycle() {
  const { t } = useLanguage();

  const boxes = [
    {
      title: t("ask_price_box1_title"),
      items: [
        t("ask_price_box1_itme1"),
        t("ask_price_box1_itme2"),
        t("ask_price_box1_itme3"),
        t("ask_price_box1_itme4"),
      ],
    },
    {
      title: t("ask_price_box2_title"),
      items: [
        t("ask_price_box2_itme1"),
        t("ask_price_box2_itme2"),
        t("ask_price_box2_itme3"),
        t("ask_price_box2_itme4"),
      ],
    },
    {
      title: t("ask_price_box3_title"),
      items: [
        t("ask_price_box3_itme1"),
        t("ask_price_box3_itme2"),
        t("ask_price_box3_itme3"),
        t("ask_price_box3_itme4"),
      ],
    },
    {
      title: t("ask_price_box4_title"),
      items: [
        t("ask_price_box4_itme1"),
        t("ask_price_box4_itme2"),
        t("ask_price_box4_itme3"),
        t("ask_price_box4_itme4"),
      ],
    },
  ];

  return (
    <div className="w-[360px] md:w-[616px] lg:w-[1056px] m-auto my-10">
      
      {/* Title */}
      <div className="relative mb-12 text-right">
        <h5 className="mt-12 text-2xl font-bold text-[#1E1E2B] relative inline-block">
          {t("ask_price_title")}
          <Image
            src={Rectangle}
            alt="Rectangle"
            className="absolute right-0 h-full top-3"
          />
        </h5>

        <p className="text-[16px] text-[#1E1E2B99] mt-1">
          {t("ask_price_paragraph")}
        </p>
      </div>

      {/* Questions Grid */}
      <div className="grid lg:grid-cols-2 gap-14" dir="rtl">
        {boxes.map((box, idx) => (
          <div key={idx}>
            <h6 className="font-bold text-[#1E1E2B] pr-4 relative">
              <span className="absolute top-13 md:top-0 right-0 h-[82px] border-r border-[#06B1FD99]"></span>
              {box.title}
            </h6>

            {/* Radio List */}
            <div className="grid grid-cols-2 grid-rows-2 gap-6 pr-4 mt-8 text-sm text-gray-600 md:flex">
              {box.items.map((item, i) => (
                <label key={`${idx}-${i}`} className="flex items-center gap-2 cursor-pointer">
                  
                  <input
                    type="radio"
                    name={`q${idx + 1}`}
                    className="appearance-none w-4 h-4 rounded-full border-2 cursor-pointer checked:bg-[#06B1FD] checked:border-[#06B1FD]"
                    style={{ borderColor: "#06B1FD66" }}
                  />

                  {item}
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Submit Button */}
      <div className="flex justify-center mt-12 lg:text-right md:justify-end lg:justify-start" dir="rtl">
        <button className="w-[157px] h-[46px] flex items-center justify-center cursor-pointer gap-1 text-sm text-white font-bold rounded-[12px] bg-[#06B1FD] shadow-md shadow-[#06B1FD33]">
          {t("ask_price_submit")}
          <Image src={arrow} alt="arrow" />
        </button>
      </div>

      {/* Desktop BG Image */}
      <div className="relative mt-30">
        {/* desktop and tablet */}
        <Image alt="bg image 2 " src={bg_image2} className="hidden md:inline"/>
        {/* mobile */}
        <Image alt="bg image 2 " src={bg_image_mobile} className="md:hidden"/>
        <div className="absolute top-0 p-4 text-white lg:py-12 lg:px-8">
          <h6 className="text-xl font-bold text-right lg:text-2xl ">
            {t("ask_price_bg_image2_title")}
          </h6>
          <p className="text-right text-[#FFFFFFCC] lg:text-[16px] text-[12px]  mt-4">
            {t("ask_price_bg_image2_pragraph")}
          </p>
        </div>
      </div>

    </div>
  );
}
