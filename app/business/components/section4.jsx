"use client";
import Image from 'next/image'
import { useLanguage } from "../../provider/languageProvider";
import activeuserman from "@/public/icons/user_man.svg"
import activeusergirl from "@/public/icons/user_girl.svg"

export default function Section4() {
    const { t } = useLanguage()
    return (

        <div dir='rtl' className='mt-24'>
            <h3 className='text-[24px] font-semibold'>
                {t("business_page_section4")}
            </h3>
            <div className='grid grid-cols-2 grid-rows-3 gap-6 mt-6'>
                <div className='bg-[#1E1E2B0D] w-[516px] h-[134px] rounded-2xl'>
                    <h1 className='pt-6  px-6 text-[#1E1E2B]  text-[18px] font-bold'>{t("box1")}</h1>

                    <p className='text-[16px] text-[#1E1E2BCC] px-6 '>{t("description1")}</p>
                </div>
                <div className='bg-[#1E1E2B0D] w-[516px] h-[134px] rounded-2xl'>
                    <h1 className='pt-6  px-6 text-[#1E1E2B]  text-[18px] font-bold'>{t("box2")}</h1>

                    <p className='text-[16px] text-[#1E1E2BCC] px-6'>{t("description2")}</p>
                </div>
                <div className='bg-[#1E1E2B0D] w-[516px] h-[134px] rounded-2xl'>
                    <h1 className='pt-6  px-6 text-[#1E1E2B]  text-[18px] font-bold'>{t("box3")}</h1>

                    <p className='text-[16px] text-[#1E1E2BCC] px-6'>{t("description3")}</p>
                </div>
                <div className='bg-[#1E1E2B0D] w-[516px] h-[134px] rounded-2xl'>
                    <h1 className='pt-6  px-6 text-[#1E1E2B]  text-[18px] font-bold'>{t("box4")}</h1>

                    <p className='text-[16px] text-[#1E1E2BCC] px-6'>{t("description4")}</p>
                </div>
                <div className='bg-[#1E1E2B0D] w-[516px] h-[134px] rounded-2xl'>
                    <h1 className='pt-6  px-6 text-[#1E1E2B]  text-[18px] font-bold'>{t("box5")}</h1>

                    <p className='text-[16px] text-[#1E1E2BCC] px-6'>{t("description5")}</p>
                </div>
                <div className='bg-[#1E1E2B0D] w-[516px] h-[134px] rounded-2xl'>
                    <h1 className='pt-6  px-6 text-[#1E1E2B]  text-[18px] font-bold'>{t("box6")}</h1>

                    <p className='text-[16px] text-[#1E1E2BCC] px-6'>{t("description6")}</p>
                </div>

            </div>
            <div>
                {/* active users */}
                <h1 className='font-bold text-[24px] text-[#1E1E2B] mt-[134px]'>
                    {t("active_users")}
                </h1>
                    {/* active_users_imgs */}
                    <div className='flex gap-2 pt-6'>
                        <Image src={ activeuserman} alt='active users' className='w-20 h-20 rounded-full'/>
                        <Image src={activeusergirl } alt='active users' className='w-20 h-20 rounded-full'/>
                        <Image src={ activeuserman} alt='active users' className='w-20 h-20 rounded-full'/>
                        <Image src={activeusergirl } alt='active users' className='w-20 h-20 rounded-full'/>
                        <Image src={ activeuserman} alt='active users' className='w-20 h-20 rounded-full'/>
                        <Image src={activeusergirl } alt='active users' className='w-20 h-20 rounded-full'/>
                        <Image src={activeuserman } alt='active users' className='w-20 h-20 rounded-full'/>
                        <Image src={activeusergirl } alt='active users' className='w-20 h-20 rounded-full'/>
                        <Image src={activeuserman } alt='active users' className='w-20 h-20 rounded-full'/>
                        <Image src={activeusergirl } alt='active users' className='w-20 h-20 rounded-full'/>
                        <Image src={ activeuserman} alt='active users' className='w-20 h-20 rounded-full'/>
                        <Image src={activeusergirl } alt='active users' className='w-20 h-20 rounded-full'/>
                    </div>
            </div>
        </div>

    )
}