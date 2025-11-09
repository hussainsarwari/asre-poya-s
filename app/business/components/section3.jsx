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
            <div dir='rtl' className='lg:-mt-[118px] md:-my-18 mx-auto lg:w-[1056px] w-[302px] md:w-[616px]'>

                <div className='hidden lg:block'>

                    <Image src={barcodeImg} alt='barcode image' className='w-[137px] ' />
                    <h3 className='text-[24px] font-bold py-4 pl-6 '>
                        {t("justscanit")}
                    </h3>
                    <p className='text-[16px] text-[#1E1E2B] '>
                        {t("business_section3_paragraph")}
                    </p>
                </div>
                <div className='flex flex-col gap-6 lg:my-12 md:my-50] '>

                    <p className='md:text-[20px] text-[16px] lg:text-[24px] text-[#1E1E2B] flex gap-[16.5px]'>

                        <Image src={clipboard} className='w-6' alt='clipboard' />
                        {t("business_section3_1")}
                    </p>
                    <p className='md:text-[20px] text-[16px] lg:text-[24px] text-[#1E1E2B] flex gap-[16.5px]'>
                        <Image src={clipboard} className='w-6' alt='clipboard' />
                        {t("business_section3_2")}
                    </p>
                    <p className='md:text-[20px] text-[16px] lg:text-[24px] text-[#1E1E2B] flex gap-[16.5px]'>
                        <Image src={clipboard} className='w-6' alt='clipboard' />
                        {t("business_section3_3")}
                    </p>
                    <p className='md:text-[20px] text-[16px] lg:text-[24px] text-[#1E1E2B] flex gap-[16.5px]'>
                        <Image src={clipboard} className='w-6' alt='clipboard' />
                        {t("business_section3_4")}
                    </p>
                    <p className='md:text-[20px] text-[16px] lg:text-[24px] text-[#1E1E2B] flex gap-[16.5px]'>
                        <Image src={clipboard} className='w-6' alt='clipboard' />
                        {t("business_section3_5")}
                    </p>
                </div>

                <div className='lg:w-[1056px]  lg:h-[327px] md:w-[568px] md:h-[128px] w-[302px] h-[128px] rounded-2xl my-9 md:my-18'>

                    <Image src={programmingImg} alt='programming img' />
                </div>
                <div className='block lg:hidden'>

                    <Image src={barcodeImg} alt='barcode image' className='w-[137px] mx-auto md:mx-0' />
                    <h3 className='text-[20px]  lg:text-[24px] font-bold py-4 pl-6 '>
                        {t("justscanit")}
                    </h3>
                    <p className='text-[12px] lg:text-[16px] text-[#1E1E2B99] '>
                        {t("business_section3_paragraph")}
                    </p>
                </div>


            </div>
        </>
    )
}