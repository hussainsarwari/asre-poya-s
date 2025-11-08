"use client";
import Image from 'next/image'
import { useLanguage } from "../../provider/languageProvider";
import barcodeImg from "@/public/icons/barcode.svg"
import clipboard from "@/public/icons/clipboard-white.svg"
import programmingImg from "@/public/icons/img_programming.svg"
export default function Section3() {
    const { t } = useLanguage();
    return (
        <>
            <div dir='rtl' className='-mt-[118px]'>

                <Image src={barcodeImg} alt='barcode image' className='w-[137px] ' />
                <h3 className='text-[24px] font-bold py-4 pl-6 '>
                    {t("justscanit")}
                </h3>
                <p className='text-[16px] text-[#1E1E2B] '>
                    {t("business_section3_paragraph")}
                </p>
                <div className='flex flex-col gap-6 my-12'>

                    <p className='text-[24px] text-[#1E1E2B] flex gap-[16.5px]'>

                        <Image src={clipboard} className='w-6' alt='clipboard' />
                        {t("business_section3_1")}
                    </p>
                    <p className='text-[24px] text-[#1E1E2B] flex gap-[16.5px]'>
                        <Image src={clipboard} className='w-6' alt='clipboard' />
                        {t("business_section3_2")}
                    </p>
                    <p className='text-[24px] text-[#1E1E2B] flex gap-[16.5px]'>
                        <Image src={clipboard} className='w-6' alt='clipboard' />
                        {t("business_section3_3")}
                    </p>
                    <p className='text-[24px] text-[#1E1E2B] flex gap-[16.5px]'>
                        <Image src={clipboard} className='w-6' alt='clipboard' />
                        {t("business_section3_4")}
                    </p>
                    <p className='text-[24px] text-[#1E1E2B] flex gap-[16.5px]'>
                        <Image src={clipboard} className='w-6' alt='clipboard' />
                        {t("business_section3_5")}
                    </p>
                </div>

                <div className='w-[1056px] h-[327px] rounded-2xl'>
                   
                    <Image src={programmingImg} alt='programming img'/>
                </div>
                

            </div>
        </>
    )
}