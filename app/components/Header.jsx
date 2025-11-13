"use client";

import { useLanguage } from "../provider/languageProvider";
import { useLoading } from "@/app/provider/LoadingProvider";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

import UserIcon from "@/public/icons/user.svg";
import worldIcon from "@/public/icons/world.svg";
import asrepoya from "@/public/icons/AsrePoyaLogoAndName.svg";
import mobileMenuIcon from "@/public/icons/menuIcon.svg";
import user2 from "@/public/icons/user2.svg";

export default function Header() {
  const { showLoading } = useLoading();
  const { t, lang, setLang, dir } = useLanguage();
  const [langBox, setLangBox] = useState(false);
  const [active, setActive] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("activeMenu") || "home";
    }
    return "home";
  });
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // state برای scroll
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSetActive = (id) => {
    setActive(id);
    if (typeof window !== "undefined") localStorage.setItem("activeMenu", id);
  };

  const sidebarDir = dir;

  return (
    <>
      {/* موبایل */}
      <header
        className={`lg:hidden w-full transition-all duration-200 z-50 ${isScrolled ? "fixed top-0 bg-white/90 py-3" : "relative top-10 md:top-14"}`}
      >
        <div className="flex items-center justify-between px-[20px] md:px-0 w-[372px] md:w-[616px] mx-auto">
          <Image src={user2} alt="user icon" className="w-6 md:w-[37px] h-6 md:h-[37px]" />
          <Link href="/">
            <Image src={asrepoya} alt="Asre Poya Logo" width={130} height={37} />
          </Link>
          <Image
            src={mobileMenuIcon}
            alt="menu icon"
            className="cursor-pointer w-6 md:w-[37px] h-6 md:h-[37px]"
            onClick={() => setSidebarOpen(true)}
          />
        </div>
      </header>

      {/* tablet*/}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-100 bg-white/30 backdrop-blur-sm"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* سایدبار موبایل */}
      <div
        dir={sidebarDir}
        className={`fixed top-0 z-500 h-full transform transition-transform duration-300
          ${sidebarDir === "rtl" ? "right-0" : "left-0"} 
          ${sidebarOpen ? "translate-x-0" : sidebarDir === "rtl" ? "translate-x-full" : "-translate-x-full"}
          w-full sm:w-[375px] bg-white shadow-lg
        `}
      >
        <button className="p-6 text-3xl cursor-pointer" onClick={() => setSidebarOpen(false)}>×</button>

        <ul className="flex flex-col gap-4 p-6">
          {[{ id: "home", href: "/", label: t("home") },
            { id: "product", href: "/product", label: t("Product") },
            { id: "business", href: "/business", label: t("business") },
            { id: "about-us", href: "/about-us", label: t("aboutus") },
            { id: "contactus", href: "/contact-us", label: t("contactus") },
          ].map((item) => (
            <li key={item.id}>
              <Link
                href={item.href}
                onClick={() => { handleSetActive(item.id); setSidebarOpen(false); showLoading(); }}
                className={`block text-[16px] font-semibold ${active === item.id ? "font-bold text-blue-500" : ""}`}
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
            className={`absolute cursor-pointer ${dir === "rtl" ? "right-6" : "left-[1.5em]"}`}
            onClick={() => setLangBox(!langBox)}
          />
          <div
            className={`absolute top-12 ${dir === "rtl" ? "right-[1.5em]" : "left-[1.5em]"} mt-2 flex flex-col gap-3 bg-white shadow-2xl w-24 h-28 rounded-md transition-all ${langBox ? "flex" : "hidden"}`}
          >
            <button className="mx-2 rounded hover:bg-gray-100" onClick={() => setLang("fa")}>{t("persian")}</button>
            <button className="mx-2 rounded hover:bg-gray-100" onClick={() => setLang("ps")}>{t("pashto")}</button>
            <button className="mx-2 rounded hover:bg-gray-100" onClick={() => setLang("en")}>{t("english")}</button>
          </div>
        </div>

        <div className={`mt-17 flex justify-center items-center rounded-xl mx-auto shadow-md shadow-[#06B1FD33] h-[48px] gap-2 w-[70%] bg-[#06B1FD] ${dir === "rtl" ? "flex-row-reverse" : "flex-row"}`}>
          <Link href="/login" className="text-white text-[14px] flex items-center gap-2 justify-center">
            {t("LoginBtn")}
            <Image src={UserIcon} alt="login icon" width={22} height={22} />
          </Link>
        </div>
      </div>

      {/* دسکتاپ */}
      <header
        className={`hidden lg:flex items-center justify-between w-[1056px] m-auto  z-90
          ${isScrolled ? "fixed top-10 left-1/2 -translate-x-1/2  opacity-100 py-6 h-10" : "relative h-12 top-12"}
        `}
      >
        <div className="relative flex items-center gap-4">
          <Link
            href="/login"
            className="bg-[#06B1FD] rounded-xl text-white px-6 py-3 shadow shadow-[#06B1FD33] w-[166px] h-[46px] flex items-center gap-2"
          >
            <Image src={UserIcon} alt="login icon" width={22} height={22} />
            <span className="flex items-center font-semibold text-[13px] my-auto">{t("LoginBtn")}</span>
          </Link>

          <div className="relative">
            <Image src={worldIcon} alt="world icon" width={48} height={48} className="cursor-pointer" onClick={() => setLangBox(!langBox)} />
            <div className={`absolute top-12 left-[-1.5em] mt-2 flex flex-col gap-3 bg-white shadow-2xl w-24 h-28 rounded-md transition-all ${langBox ? "flex" : "hidden"}`}>
              <button className="mx-2 rounded hover:bg-gray-100" onClick={() => setLang("fa")}>{t("persian")}</button>
              <button className="mx-2 rounded hover:bg-gray-100" onClick={() => setLang("ps")}>{t("pashto")}</button>
              <button className="mx-2 rounded hover:bg-gray-100" onClick={() => setLang("en")}>{t("english")}</button>
            </div>
          </div>
        </div>

        <div className="bg-[#faf9f9]   w-[410px] h-[43.5px] flex items-center justify-center rounded-lg opacity-100">
          <ul className="flex justify-around gap-4">
            {[{ id: "contactus", href: "/contact-us", label: t("contactus") },
              { id: "about-us", href: "/about-us", label: t("aboutus") },
              { id: "business", href: "/business", label: t("business") },
              { id: "product", href: "/product", label: t("Product") },
              { id: "home", href: "/", label: t("home") },
            ].map((item) => (
              <li key={item.id} className="relative group">
                <Link
                  href={item.href}
                  onClick={() => { handleSetActive(item.id); showLoading(); }}
                  className={`relative text-[12px] transition-colors duration-200 ${active === item.id ? "text-black font-bold" : "text-[#1E1E2B66] hover:text-gray-600"}`}
                >
                  {item.label}
                  <span
                    className={`absolute left-1/2 -translate-x-1/2 -bottom-3 h-1 bg-sky-500 rounded-full origin-center transition-transform duration-300 ${active === item.id ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}
                    style={{ width: "26.02px" }}
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <Link href="/">
            <Image src={asrepoya} alt="Asre Poya Logo" width={140} height={37} />
          </Link>
        </div>
      </header>
    </>
  );
}
