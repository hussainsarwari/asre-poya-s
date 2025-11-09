"use client";
import Image from 'next/image'
import { useLanguage } from "../../provider/languageProvider";
import feedbackbox from "@/public/icons/box_desktop.svg"
import feedbackbox2 from "@/public/icons/box_tab.svg"
import feedbackbox3 from "@/public/icons/box_mobile.svg"
import img from "@/public/images/img5.svg"

export default function Section2() {
    const { t } = useLanguage();
    return (
        <>
            <div className='z-0 -mt-14'>
                {/* feedback box */}
                {/*  Desktop box */}
                <div className="relative hidden mx-auto lg:block w-fit">
                    <Image src={feedbackbox} alt="feedback box desktop" />


                    <div className="absolute w-[1056px] h-[232px] top-32.5 px-8 pt-11 pb-12">
                        <h1 className='text-right text-white font-bold text-[24px]'>
                            {t("feedbackboxTitle")}
                            <span className="inline-block ml-2 align-middle">
                                <Image
                                    src={img}
                                    alt="user icon"
                                    className="inline-block w-8 h-8 rounded-full"
                                />
                            </span>
                        </h1>
                        <p className='text-[16px] text-white pt-4 text-right'>
                            {t("businessparagraph")}
                        </p>
                    </div>
                </div>

                {/*  Tablet box */}
                <div className="relative hidden mx-auto md:block lg:hidden w-fit">
                    <Image src={feedbackbox2} alt="feedback box tablet" />
                   
                    <div className="absolute w-[617px] h-[236px]  top-34 px-8 pt-11 pb-12">
                        <h1 className='text-right text-white font-bold text-[20px]'>
                            {t("feedbackboxTitle")}
                            <span className="inline-block ml-2 align-middle">
                                <Image
                                    src={img}
                                    alt="user icon"
                                    className="inline-block w-8 h-8 rounded-full"
                                />
                            </span>
                        </h1>
                        <p className='text-[14px] text-white pt-4 text-right'>
                            {t("businessparagraph")}
                        </p>
                    </div>
                </div>

                {/*  Mobile box */}
                <div className="relative mx-auto md:hidden w-fit    mt-[150px]">
                    <Image src={feedbackbox3} alt="feedback box mobile" className='w-[302px] h-[332px]' />
                     
                    <div className="absolute pb-12 mx-auto px-[32px]  pt-1 top-13 ">
                        <h1 className='text-right text-white font-bold text-[16px]'>
                            {t("feedbackboxTitle")}
                            <span className="inline-block ml-2 align-middle">
                                <Image
                                    src={img}
                                    alt="user icon"
                                    className="inline-block w-8 h-8 rounded-full"
                                />
                            </span>
                        </h1>
                        <p className='text-[12px] text-white pt-4 text-right'>
                            {t("businessparagraph")}
                        </p>
                    </div>
                </div>


            </div>
        </>
    )
}