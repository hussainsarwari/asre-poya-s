"use client";
import Image from 'next/image'
import { useLanguage } from "../../provider/languageProvider";
import playerIcon from "@/public/icons/player_icon.svg"
import Clipboardblack from "@/public/icons/clipboard-black.svg"

export default function Section1() {
    const { t } = useLanguage();

    return (
        <>
            <div className='flex lg:justify-between z-90'>

                {/* video box */}
                <div className="lg:w-[375px] lg:h-[359px] lg:rounded-[80px] bg-[#1E1E2B0D]">

                    {/* player icon */}
                    <div className='flex flex-col items-center justify-center h-full'>

                        <Image src={playerIcon} alt='player icon' className='m-auto' />
                    </div>



                </div>


                {/* text */}
                <div className='lg:w-[601px]  ' dir='rtl'>
                    <h1 className='text-[14px] text-[#06B1FD] h-[22px] text-[#1E1E2B]'>
                        {t("businessPageTitle")}

                    </h1>
                    <h2 className='flex font-bold text-[28px] gap-3  items-center mt-4'>
                        <Image src={Clipboardblack} alt='clipboard' className='w-6' />
                        <span className='flex items-center'>

                            {t("businessPageTitle2")}
                        </span>
                    </h2>
                    <p className='font-semibold text-[20px] text-[#1E1E2B] mt-4'>
                        {t("businessPageParaghraph")}
                    </p>
                    <p className='text-[16px] text-[#1E1E2B99] mt-4'>
                        {t("businesspageparagraph2")}
                    </p>
                    {/* buttons */}
                    <div className='mt-10 '>
                        <button className=' duration-300     bg-[#06B1FD] py-3 px-6 rounded-xl lg:w-[137px] lg:h-[46px] text-white text-[14px] cursor-pointer hover:bg-white hover:border-[#06B1FD] border hover:text-[#06B1FD]'>
                            {t("businesspageSartnowBtn")}
                        </button>
                        <button className=' duration-300     border mx-[24.5px] border-[#06B1FD] text-[#06B1FD] py-3 px-6 rounded-xl text-[14px] cursor-pointer hover:bg-[#06B1FD] hover:text-white lg:w-[178.5px] lg:h-[46px]'>
                            {t("FreeOnlineConsultation")}

                        </button>
                    </div>
                </div>


            </div>
        </>
    )
}