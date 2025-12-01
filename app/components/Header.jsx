"use client";

import { useLanguage } from "../provider/languageProvider";
import { useLoading } from "@/app/provider/LoadingProvider";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import LoginModal from "./login&register";
import UserIcon from "@/public/icons/user.svg";
import worldIcon from "@/public/icons/world.svg";
import asrepoya from "@/public/icons/AsrePoyaLogoAndName.svg";
import mobileMenuIcon from "@/public/icons/menuIcon.svg";
import user2 from "@/public/icons/user2.svg";
import doctor_assistant_icon from "@/public/icons/home/doctor_assistant.svg";
import business_assistant_logo from "@/public/icons/BUSINESS_ASSISTANT_LOGO.png";
import asrepoya_english from "@/public/icons/asrepoya_english.svg";
export default function Header() {
  const { showLoading } = useLoading();
  const { t, lang, setLang, dir } = useLanguage();
  const [openLogin, setOpenLogin] = useState(false);

  const [langBox, setLangBox] = useState(false);
  const [active, setActive] = useState("product"); // پیش‌فرض Product فعال
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const [productOpenMobile, setProductOpenMobile] = useState(false);
  const [productOpenDesktop, setProductOpenDesktop] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("activeMenu");
    if (saved) setActive(saved);

    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSetActive = (id) => {
    setActive(id);
    localStorage.setItem("activeMenu", id);
  };

  const sidebarDir = dir;

  const menuItems = [
    { id: "home", href: "/", label: t("home") },
    { id: "product", href: "/product", label: t("Product") },
    { id: "services", href: "/services", label: t("services") },
    { id: "business", href: "/business", label: t("business") },
    { id: "about-us", href: "/about-us", label: t("aboutus") },
    { id: "contactus", href: "/contact-us", label: t("contactus") },
  ];

  return (
    <>
      {/* موبایل */}
      <header dir={sidebarDir}
        className={`lg:hidden transition-all w-full duration-200 z-50 flex flex-col justify-center ${
          isScrolled
            ? "fixed top-0 left-1/2 -translate-x-1/2 bg-white/90 py-3"
            : "relative top-10 md:top-14"
        }`}
      >
        <div className="w-[350px] md:w-[616px] mx-auto flex items-center justify-between">
          <Image
            src={user2}
            alt="user icon"
            className="w-6 md:w-[37px] h-6 md:h-[37px]"
          />
          <Link href="/">
            <Image
              src={asrepoya}
              alt="Asre Poya Logo"
              width={130}
              height={37}
            />
          </Link>
          <Image
            src={mobileMenuIcon}
            alt="menu icon"
            className="cursor-pointer w-6 md:w-[37px] h-6 md:h-[37px]"
            onClick={() => setSidebarOpen(true)}
          />
        </div>
      </header>

      {/* Overlay موبایل */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-100 bg-white/30 backdrop-blur-sm lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* سایدبار موبایل */}
      <div
        dir={sidebarDir === "rtl" ? "ltr" : "rtl"}
        className={`fixed top-0 z-500 h-full transform transition-transform duration-300  block lg:hidden
           
          ${
            sidebarOpen? "translate-x-0": (sidebarDir === "rtl"? "translate-x-[3000px]" : "-translate-x-[900px]")
          }
          w-full sm:w-[375px] bg-white shadow-lg
        `}
      >
        <button
          className="p-6 text-3xl cursor-pointer"
          onClick={() => setSidebarOpen(false)}
        >
          ×
        </button>
        <ul className="flex flex-col gap-4 p-4 max-h-[80vh] overflow-y-auto scrollbar-thin scrollbar-thumb-blue-300 scrollbar-track-gray-100">
          {menuItems.map((item) =>
            item.id === "product" ? (
              <li key="product" className="flex flex-col">
                {/* Main Product Button */}
                <button
                  onClick={() => setProductOpenMobile(!productOpenMobile)}
                  className={`flex justify-between items-center w-full font-semibold text-[16px] px-4 py-3 rounded-lg transition-all duration-300 shadow-sm
            ${
              active.startsWith("product")
                ? "bg-gray-50 text-black"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
                >
                  {item.label}
                  <span
                    className={`transform transition-transform duration-300 ${
                      productOpenMobile ? "rotate-180" : ""
                    }`}
                  >
                    ▼
                  </span>
                </button>

                {/* Product Submenu */}
                {productOpenMobile && (
                  <div className={`flex flex-col gap-4 px-6 mt-3 text-sm animate-fadeIn ${!productOpenMobile&& "hidden"}`}>
                    {/* Doctor Assistant Section */}
                    <h4 className="flex gap-2 font-semibold text-gray-800">
                       <Image src={doctor_assistant_icon} alt="doctor assistant " />
                      {t("doctor_assistant")}
                    </h4>
                    <ul className="flex flex-col gap-2 list-disc pr-5 text-[#706f6f] marker:text-[#06B1FD]">
                      <Link href="/product/doctor-assistant/hospital">
                        <li
                          className="cursor-pointer px-3 py-1 rounded-lg hover:text-[#06B1FD] hover:bg-blue-50 transition-all"
                          onClick={() => {
                            setSidebarOpen(false);
                            setProductOpenMobile(false);
                            handleSetActive(
                              "product/doctor-assistant/hospital"
                            );
                            showLoading();
                          }}
                        >
                          {t("hospital")}
                        </li>
                      </Link>
                      <Link href="/product/doctor-assistant/clinic">
                        <li
                          className="cursor-pointer px-3 py-1 rounded-lg hover:text-[#06B1FD] hover:bg-blue-50 transition-all"
                          onClick={() => {
                            setSidebarOpen(false);
                            setProductOpenMobile(false);
                            handleSetActive("product/doctor-assistant/clinic");
                            showLoading();
                          }}
                        >
                          {t("clinic")}
                        </li>
                      </Link>
                      <Link href="/product/doctor-assistant/pharmacy">
                        <li
                          className="cursor-pointer px-3 py-1 rounded-lg hover:text-[#06B1FD] hover:bg-blue-50 transition-all"
                          onClick={() => {
                            setSidebarOpen(false);
                            setProductOpenMobile(false);
                            handleSetActive(
                              "product/doctor-assistant/pharmacy"
                            );
                            showLoading();
                          }}
                        >
                          {t("pharmacy")}
                        </li>
                      </Link>
                      <Link href="/product/doctor-assistant/laborator">
                        <li
                          className="cursor-pointer px-3 py-1 rounded-lg hover:text-[#06B1FD] hover:bg-blue-50 transition-all"
                          onClick={() => {
                            setSidebarOpen(false);
                            setProductOpenMobile(false);
                            handleSetActive(
                              "product/doctor-assistant/laborator"
                            );
                            showLoading();
                          }}
                        >
                          {t("laborator")}
                        </li>
                      </Link>
                      <Link href="/product/doctor-assistant/operation">
                        <li
                          className="cursor-pointer px-3 py-1 rounded-lg hover:text-[#06B1FD] hover:bg-blue-50 transition-all"
                          onClick={() => {
                            setSidebarOpen(false);
                            setProductOpenMobile(false);
                            handleSetActive(
                              "product/doctor-assistant/operation"
                            );
                            showLoading();
                          }}
                        >
                          {t("operation")}
                        </li>
                      </Link>
                    </ul>

                    {/* Business Assistant Section */}
                    <h4 className="flex gap-2 mt-4 font-semibold text-gray-800">
                       <Image
                  src={business_assistant_logo}
                  alt="business assistant "
                  width={25}
                />
                      {t("business_assistant")}
                    </h4>
                    <ul className="flex flex-col gap-2 list-disc pr-5 text-[#706f6f] marker:text-[#06B1FD]">
                      <Link href="/product/business-assistant/business_assistant_standerd">
                        <li
                          className="cursor-pointer px-3 py-1 rounded-lg hover:text-[#06B1FD] hover:bg-blue-50 transition-all"
                          onClick={() => {
                            setSidebarOpen(false);
                            setProductOpenMobile(false);
                            handleSetActive(
                              "product/business-assistant/business_assistant_standerd"
                            );
                            showLoading();
                          }}
                        >
                          {t("business_assistant_standard")}
                        </li>
                      </Link>
                      <Link href="/product/business-assistant/business_assistant_proffessional">
                        <li
                          className="cursor-pointer px-3 py-1 rounded-lg hover:text-[#06B1FD] hover:bg-blue-50 transition-all"
                          onClick={() => {
                            setSidebarOpen(false);
                            setProductOpenMobile(false);
                            handleSetActive(
                              "product/business-assistant/business_assistant_proffessional"
                            );
                            showLoading();
                          }}
                        >
                          {t("business_assistant_proffessional")}
                        </li>
                      </Link>
                      <Link href="/product/business-assistant/business_assistant_multi_profile">
                        <li
                          className="cursor-pointer px-3 py-1 rounded-lg hover:text-[#06B1FD] hover:bg-blue-50 transition-all"
                          onClick={() => {
                            setSidebarOpen(false);
                            setProductOpenMobile(false);
                            handleSetActive(
                              "product/business-assistant/business_assistant_multi_profile"
                            );
                            showLoading();
                          }}
                        >
                          {t("business_assistant_multi_profile")}
                        </li>
                      </Link>
                    </ul>
                  </div>
                )}
              </li>
            ) : (
              <li key={item.id}>
                <Link
                  href={item.href}
                  onClick={() => {
                    handleSetActive(item.id);
                    setSidebarOpen(false);
                    setProductOpenMobile(false);
                    showLoading();
                  }}
                  className={`block text-[16px] font-semibold px-4 py-2 rounded-lg transition-all duration-200 ${
                    active === item.id
                      ? "font-bold text-blue-500 bg-blue-50 shadow-inner"
                      : "hover:bg-gray-100"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            )
          )}
        </ul>

        {/* انتخاب زبان موبایل */}
        <div className="relative">
          <Image
            src={worldIcon}
            alt="world icon"
            width={48}
            height={48}
            className={`absolute cursor-pointer ${
              dir === "rtl" ? "left-6" : "right-[1.5em]"
            }`}
            onClick={() => setLangBox(!langBox)}
          />
          <div
            className={`absolute top-12 ${
              dir === "ltr" ? "right-[1.5em]" : "left-[1.5em]"
            } mt-2 flex flex-col gap-3 bg-white shadow-2xl w-34 h-28 rounded-md transition-all ${
              langBox ? "flex" : "hidden"
            }`}
          >
            <button
              className="flex items-center gap-2 mx-2 text-right rounded cursor-pointer w-28 hover:text-sky-300"
              onClick={() =>{ setLang("fa")
                setLangBox(!langBox);
              }}
            >
              <img
                src="/flags/af.png"
                alt="AF"
                className="w-5 h-5 rounded-sm"
              />
              {t("persian")}
            </button>

            <button
              className="flex items-center gap-2 mx-2 text-right rounded cursor-pointer w-28 hover:text-sky-300"
              onClick={() =>{ setLang("ps")
                setLangBox(!langBox);
              }}
            >
              <img
                src="/flags/af.png"
                alt="AF"
                className="w-5 h-5 rounded-sm"
              />
              {t("pashto")}
            </button>

            <button
              className="flex items-center gap-2 mx-2 text-right rounded cursor-pointer w-28 hover:text-sky-300"
              onClick={() =>{ setLang("en")
                setLangBox(!langBox);
              }}
            >
              <img
                src="/flags/us.png"
                alt="US"
                className="w-5 h-5 rounded-sm"
              />
              {t("english")}
            </button>
          </div>
        </div>

        <div
          className={`mt-17 flex justify-center items-center rounded-xl mx-auto shadow-md shadow-[#06B1FD33] h-[48px] gap-2 w-[70%] bg-[#06B1FD] ${
            dir === "rtl" ? "flex-row-reverse" : "flex-row"
          }`}
        >
          <button
            onClick={() => {
              setSidebarOpen(false);
              setOpenLogin(true);
            }}
            className="text-white text-[14px] flex items-center gap-2 justify-center"
          >
            {t("LoginBtn")}
            <Image src={UserIcon} alt="login icon" width={22} height={22} />
          </button>
        </div>
      </div>

      {/* دسکتاپ */}
      <header
        dir={sidebarDir}
        onMouseLeave={() => setProductOpenDesktop(false)}
        className={`hidden lg:flex flex-col w-full m-auto z-90   ${
          isScrolled
            ? productOpenDesktop
              ? "fixed top-0 left-1/2 -translate-x-1/2 opacity-100 h-82 z-90  backdrop-blur-sm shadow-sm"
              : "fixed top-0 left-1/2 -translate-x-1/2 opacity-100 h-17 z-90  backdrop-blur-sm"
            : productOpenDesktop
            ? "absolute h-82 top-12 z-900 bg-white shadow-sm"
            : "absolute h-16 top-10 z-90 bg-white "
        }`}
      >
        <div className="flex items-center justify-between lg:w-[1056px] md:w-[616px] m-auto absolute top-2 left-1/2 -translate-x-1/2">
          <div className="relative flex items-center gap-4">
            <button
              onClick={() => setOpenLogin(true)}
              className={`bg-[#06B1FD] cursor-pointer rounded-xl text-white flex justify-center
               py-3 shadow shadow-[#06B1FD33] w-[166px] h-[46px] flex items-center gap-2`}
            >
              <Image src={UserIcon} alt="login icon" width={22} height={22} />
              <span className="flex items-center font-semibold text-[13px] my-auto">
                {t("LoginBtn")}
              </span>
            </button>

            <div className="relative">
              <Image
                src={worldIcon}
                alt="world icon"
                width={48}
                height={48}
                className="cursor-pointer"
                onClick={() => setLangBox(!langBox)}
              />
              {/* language box */}
              <div
                className={`absolute top-12 left-[-2.5em] mt-2 flex flex-col gap-2 bg-white shadow-2xl w-34 h-28 rounded-md transition-all z-[100000] ${
                  langBox ? "flex items-center justify-center" : "hidden"
                }`}
              >
                <button
                  className="flex flex-row-reverse items-center gap-2 mx-2 text-right rounded cursor-pointer w-28 hover:text-sky-300"
                  onClick={() => {
                    setLang("fa");
                    setLangBox(!langBox);
                  }}
                >
                  <img
                    src="/flags/af.png"
                    alt="AF"
                    className="w-5 h-5 rounded-sm"
                  />
                  {t("persian")}
                </button>

                <button
                  className="flex flex-row-reverse items-center gap-2 mx-2 text-right rounded cursor-pointer w-28 hover:text-sky-300"
                    onClick={() => {
                    setLang("ps");
                    setLangBox(!langBox);
                  }}
                >
                  <img
                    src="/flags/af.png"
                    alt="AF"
                    className="w-5 h-5 rounded-sm"
                  />
                  {t("pashto")}
                </button>

                <button
                  className="flex flex-row-reverse items-center gap-2 mx-2 text-right rounded cursor-pointer w-28 hover:text-sky-300"
                   onClick={() => {
                    setLang("en");
                    setLangBox(!langBox);
                  }}
                >
                  <img
                    src="/flags/us.png"
                    alt="US"
                    className="w-5 h-5 rounded-sm"
                  />
                  {t("english")}
                </button>
              </div>
            </div>
          </div>

          {/* منو دسکتاپ */}
          <div
            dir={sidebarDir}
            className="bg-[#faf9f9] w-[410px] h-[43.5px] flex items-center justify-center rounded-lg opacity-100"
          >
            <ul className="flex flex-row-reverse justify-around gap-4">
              {menuItems.map((item) =>
                item.id === "product" ? (
                  <li
                    key="product"
                    className="relative cursor-pointer group"
                    onMouseEnter={() => setProductOpenDesktop(true)}
                  >
                    <button
                      onClick={() => setActive("item")}
                      className={`relative text-[12px] transition-colors duration-200 cursor-pointer ${
                        active === item.id
                          ? "text-black font-bold"
                          : "text-[#1E1E2B66] hover:text-gray-600"
                      }`}
                    >
                      {item.label}
                      <span
                        className={`absolute left-1/2 top-6 -translate-x-1/2 -bottom-0.5 h-1 bg-sky-500 rounded-full transition-transform duration-300 ${
                          active.startsWith("product")
                            ? "scale-x-100"
                            : "scale-x-0 group-hover:scale-x-100"
                        }`}
                        style={{ width: "26px" }}
                      />
                    </button>
                  </li>
                ) : (
                  <li
                    key={item.id}
                    className="relative group"
                    onMouseEnter={() => {
                      setProductOpenDesktop(false);
                    }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => {
                        handleSetActive(item.id);
                        showLoading();
                      }}
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
                )
              )}
            </ul>
          </div>

          <div>
            <Link href="/">
              {dir === "ltr" ? (
                <Image
                  src={asrepoya}
                  alt="Asre Poya Logo"
                  width={140}
                  height={37}
                />
              ) : (
                <Image
                  src={asrepoya_english}
                  alt="Asre Poya Logo"
                  width={140}
                  height={37}
                />
              )}
            </Link>
          </div>
          {/* submenu desktop */}
        </div>

        {productOpenDesktop && (
          <div
            dir = {dir==="rtl" ? "ltr" : "rtl"}
            className="z-1000 flex items-start justify-start gap-80 w-[1056px] m-auto absolute top-22 left-1/2 -translate-x-1/2"
          >
            {/* doctor assistant */}
            <div>
              <h1 className="flex gap-2 pb-2 text-sm font-bold">
                <Image src={doctor_assistant_icon} alt="doctor assistant " />
                {t("doctor_assistant")}
              </h1>
              <ul className="flex flex-col gap-3 mt-3 text-[#706f6f] list-disc pr-10 marker:text-[#06B1FD]">
                <Link href={"/product/doctor-assistant/hospital"}>
                  <li className="cursor-pointer hover:text-[#06B1FD]">
                    {t("hospital")}
                  </li>
                </Link>
                <Link href={"/product/doctor-assistant/clinic"}>
                  <li className="cursor-pointer hover:text-[#06B1FD]">
                    {t("clinic")}
                  </li>
                </Link>
                <Link href={"/product/doctor-assistant/pharmacy"}>
                  <li className="cursor-pointer hover:text-[#06B1FD]">
                    {t("pharmacy")}
                  </li>
                </Link>
                <Link href={"/product/doctor-assistant/laborator"}>
                  <li className="cursor-pointer hover:text-[#06B1FD]">
                    {t("laborator")}
                  </li>
                </Link>
                <Link href={"/product/doctor-assistant/operation"}>
                  <li className="cursor-pointer hover:text-[#06B1FD]">
                    {t("operation")}
                  </li>
                </Link>
              </ul>
            </div>
            {/* business assistant */}

            <div>
              <h1 className="flex gap-2 pb-2 text-sm font-bold">
                <Image
                  src={business_assistant_logo}
                  alt="business assistant "
                  width={25}
                />
                {t("business_assistant")}
              </h1>
              <ul className="flex flex-col gap-3 mt-3 mr-4 text-[#706f6f] list-disc pr-5 marker:text-[#06B1FD]">
                <Link
                  href={
                    "/product/business-assistant/business_assistant_standerd"
                  }
                >
                  <li className="cursor-pointer hover:text-[#06B1FD]">
                    {t("business_assistant_standard")}
                  </li>
                </Link>
                <Link
                  href={
                    "/product/business-assistant/business_assistant_proffessional"
                  }
                >
                  <li className="cursor-pointer hover:text-[#06B1FD]">
                    {t("business_assistant_proffessional")}
                  </li>
                </Link>
                <Link
                  href={
                    "/product/business-assistant/business_assistant_multi_profile"
                  }
                >
                  <li className="cursor-pointer hover:text-[#06B1FD]">
                    {t("business_assistant_multi_profile")}
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        )}
      </header>

      <LoginModal open={openLogin} onClose={() => setOpenLogin(false)} />
    </>
  );
}
