"use client";
import Image from 'next/image'
import { useLanguage } from "../../provider/languageProvider";
import playerIcon from "@/public/icons/player_icon.svg"
import Clipboardblack from "@/public/icons/clipboard-black.svg"

export default function Section1() {
    const { t } = useLanguage();

    return (
        <>
            <div className='flex flex-col-reverse md:flex-row w-[340px] mx-auto lg:justify-between z-90 md:w-[744px] lg:w-[1056px]'>

                {/* video box */}
                <div className="lg:w-[375px] lg:h-[359px] w-[300px] h-[285px] m-auto rounded-[80px] bg-[#1E1E2B0D] md:w-[335px] md:h-[349px]">

                    {/* player icon */}
                    <div className='flex flex-col items-center justify-center h-full '>

                        <Image src={playerIcon} alt='player icon' className='m-auto cursor-pointer' />
                    </div>
                      {/* buttons */}
                    <div className='flex flex-row-reverse mt-10 md:hidden'>
                        <button className=' duration-300     bg-[#06B1FD] py-3 px-0  rounded-xl w-[290px] text-white text-[14px] cursor-pointer hover:bg-white hover:border-[#06B1FD] border h-[46px] hover:text-[#06B1FD]'>
                            {t("businesspageSartnowBtn")}
                        </button>
                        <button className=' duration-300     border mx-[14.5px] border-[#06B1FD] text-[#06B1FD] py-3 px-0 rounded-xl text-[14px] cursor-pointer hover:bg-[#06B1FD] hover:text-white w-[290px] h-[46px]'>
                            {t("FreeOnlineConsultation")}

                        </button>
                    </div>



                </div>


                {/* text */}
                <div className='lg:w-[601px] w-[302px]  md:w-[341px] my-4 md:my-0' dir='rtl'>
                    <h1 className='lg:text-[14px] md:text-[10px]  text-[#06B1FD] h-[22px] text-[#1E1E2B]'>
                        {t("businessPageTitle")}

                    </h1>
                    <h2 className='flex font-bold text-[28px] gap-3  items-center mt-4'>
                        <Image src={Clipboardblack} alt='clipboard' className='w-6' />
                        <span className='flex items-center md:text-[24px] lg:text-[28px]'>

                            {t("businessPageTitle2")}
                        </span>
                    </h2>
                    <p className='font-semibold md:text-[16px] lg:text-[20px] text-[#1E1E2B] mt-4'>
                        {t("businessPageParaghraph")}
                    </p>
                    <p className='md:text-[14px] lg:text-[16px] text-[#1E1E2B99] mt-4'>
                        {t("businesspageparagraph2")}
                    </p>
                    {/* buttons */}
                    <div className='hidden mt-10 md:block'>
                        <button className=' duration-300     bg-[#06B1FD] py-3 px-4 lg:px-6 rounded-xl lg:w-[137px] lg:h-[46px] text-white text-[14px] cursor-pointer hover:bg-white hover:border-[#06B1FD] border hover:text-[#06B1FD]'>
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