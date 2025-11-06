"use client";

import { useLanguage } from "../../provider/languageProvider";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

import UserIcon from "@/public/icons/user.svg";
import worldIcon from "@/public/icons/world.svg";
import asrepoya from "@/public/icons/AsrePoyaLogoAndName.svg";
import mobileMenuIcon from "@/public/icons/menuIcon.svg";
import user2 from "@/public/icons/user2.svg";

export default function Header() {
  const { t, lang, setLang, dir } = useLanguage();
  const [langBox, setLangBox] = useState(false);
  const [active, setActive] = useState("home");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarDir, setSidebarDir] = useState(dir);

  // هنگام بارگذاری، مقدار فعال از localStorage خوانده شود
  useEffect(() => {
    const savedActive = localStorage.getItem("activeMenu");
    if (savedActive) setActive(savedActive);
  }, []);


  




  
  // localStorage 
  useEffect(() => {
    localStorage.setItem("activeMenu", active);
  }, [active]);

  useEffect(() => {
    if (sidebarOpen) setSidebarDir(dir);
  }, [dir, sidebarOpen]);

  return (
    <>
      {/* موبایل و تبلت */}
      <header className="relative flex items-center justify-between px-6 top-10 md:top-14 md:px-16 lg:hidden">
        <Image src={user2} alt="user icon" className=" w-6 md:w-[37px] h-6 md:h-[37px]" />
        <Link href="/">
          <Image src={asrepoya} alt="Asre Poya Logo" width={130} height={37} />
        </Link>
        <Image
          src={mobileMenuIcon}
          alt="menu icon"
       
          className="cursor-pointer w-6 md:w-[37px] h-6 md:h-[37px]"
          onClick={() => setSidebarOpen(true)}
        />
      </header>

      {/* overlay موبایل و تبلت */}
      {sidebarOpen && (
        <div
          className={`fixed inset-0 z-40 transition-all duration-300 sm:bg-white/30 sm:backdrop-blur-sm`}
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* سایدبار موبایل و تبلت */}
      <div
        dir={sidebarDir}
        className={`fixed top-0 h-full z-50 transform transition-transform duration-300 
          ${sidebarDir === "rtl" ? "right-0" : "left-0"} 
          ${sidebarOpen
            ? "translate-x-0"
            : sidebarDir === "rtl"
            ? "translate-x-full"
            : "-translate-x-full"
          }
          w-full sm:w-[375px]
          bg-white shadow-lg
        `}
      >
        <button className="p-6 text-3xl cursor-pointer" onClick={() => setSidebarOpen(false)}>
          ×
        </button>

        <ul className="flex flex-col gap-4 p-6 ">
          {[
            { id: "home", href: "/", label: t("home") },
            { id: "product", href: "/product", label: t("Product") },
            { id: "business", href: "/business", label: t("business") },
            { id: "about-us", href: "/about-us", label: t("aboutus") },
            { id: "contactus", href: "/contact-us", label: t("contactus") },
          ].map((item) => (
            <li key={item.id}>
              <Link
                href={item.href}
                onClick={() => {
                  setActive(item.id);
                  setSidebarOpen(false);
                }}
                className={`block  text-[16px] font-semibold ${
                  active === item.id ? "font-bold text-blue-500" : ""
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* انتخاب زبان موبایل */}
        <div className="relative">
          <Image
            src={worldIcon}
            alt="world icon"
            width={48}
            height={48}
            className={`absolute cursor-pointer  ${
              dir == "rtl" ? " right-6" : " left-[1.5em]"
            }`}
            onClick={() => setLangBox(!langBox)}
          />
          <div
            className={`absolute top-12 ${
              dir == "rtl" ? " right-[1.5em]" : " left-[1.5em]"
            } mt-2 flex flex-col gap-3 bg-white shadow-2xl w-24 h-28 rounded-md transition-all ${
              langBox ? "flex" : "hidden"
            }`}
          >
            <button
              className="mx-2 rounded cursor-pointer hover:bg-gray-100"
              onClick={() => setLang("fa")}
            >
              {t("persian")}
            </button>
            <button
              className="mx-2 rounded cursor-pointer hover:bg-gray-100"
              onClick={() => setLang("ps")}
            >
              {t("pashto")}
            </button>
            <button
              className="mx-2 rounded cursor-pointer hover:bg-gray-100"
              onClick={() => setLang("en")}
            >
              {t("english")}
            </button>
          </div>
        </div>

        <div className={ `mt-17 flex   justify-center items-center  rounded-xl  mx-auto  shadow-md shadow-[#06B1FD33] h-[48px] gap-2 w-[70%] bg-[#06B1FD] ${ dir == "rtl" ? " flex-row-reverse" : " flex-row"}`}>
          <Link
            href="/login"
            className={` text-white    text-[14px] `}
          >
            {t("LoginBtn")}
            <Image src={UserIcon} alt="login icon" width={22} height={22} className="inline" />

         
          </Link>
        </div>
      </div>

      {/* دسکتاپ */}
      <header className="relative items-center hidden top-12 w-[1056px] h-12 m-auto gap-[134px] lg:flex justify-evenly">
        <div className="relative flex items-center gap-4">
          <Link
            href="/login"
            className="bg-[#06B1FD] rounded-xl text-white px-6 py-3 shadow shadow-[#06B1FD33] w-[166px] h-[46px] flex items-center gap-2"
          >
            <Image src={UserIcon} alt="login icon" width={22} height={22} />
            <span className="flex items-center font-semibold text-[13px] my-auto">

            {t("LoginBtn")}
            </span>
          </Link>

          {/* انتخاب زبان دسکتاپ */}
          <div className="relative">
            <Image
              src={worldIcon}
              alt="world icon"
              width={48}
              height={48}
              className="cursor-pointer"
              onClick={() => setLangBox(!langBox)}
            />
            <div
              className={`absolute top-12 left-[-1.5em] mt-2 flex flex-col gap-3 bg-white shadow-2xl w-24 h-28 rounded-md transition-all ${
                langBox ? "flex" : "hidden"
              }`}
            >
              <button
                className="mx-2 rounded cursor-pointer hover:bg-gray-100"
                onClick={() => setLang("fa")}
              >
                {t("persian")}
              </button>
              <button
                className="mx-2 rounded cursor-pointer hover:bg-gray-100"
                onClick={() => setLang("ps")}
              >
                {t("pashto")}
              </button>
              <button
                className="mx-2 rounded cursor-pointer hover:bg-gray-100"
                onClick={() => setLang("en")}
              >
                {t("english")}
              </button>
            </div>
          </div>
        </div>

        {/* منوی دسکتاپ */}
        <div className="bg-[#1E1E2B0D] w-[410px] h-[43.5px] flex items-center justify-center-safe rounded-lg">
          <ul className="flex justify-around gap-4">
            {[
              { id: "contactus", href: "/contact-us", label: t("contactus") },
              { id: "about-us", href: "/about-us", label: t("aboutus") },
              { id: "business", href: "/business", label: t("business") },
              { id: "product", href: "/product", label: t("Product") },
              { id: "home", href: "/", label: t("home") },
            ].map((item) => (
              <li key={item.id} className="relative group">
                <Link
                  href={item.href}
                  onClick={() => setActive(item.id)}
                  className={`relative text-[12px] transition-colors duration-200 ${
                    active === item.id
                      ? "text-black font-bold"
                      : "text-[#1E1E2B66] hover:text-gray-600"
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute left-1/2 -translate-x-1/2 -bottom-3 h-1 bg-sky-500 rounded-full origin-center transition-transform duration-300 ${
                      active === item.id
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    }`}
                    style={{ width: "26.02px" }}
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* لوگو دسکتاپ */}
        <div>
          <Link href="/">
            <Image
              src={asrepoya}
              alt="Asre Poya Logo"
              width={140}
              height={37}
            />
          </Link>
        </div>
      </header>
    </>
  );
}
