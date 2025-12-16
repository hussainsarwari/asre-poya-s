"use client";

import { useLoading } from "@/app/[locale]/provider/LoadingProvider";
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
import { useTranslations } from 'next-intl';
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import {
Home,
Store,
ClipboardCheck,
Hospital,
GraduationCap
} from "lucide-react";
export default  function Header({params}) {
  
  const { showLoading } = useLoading();
    const t = useTranslations();
  const [openLogin, setOpenLogin] = useState(false);

  const [langBox, setLangBox] = useState(false);
  const [active, setActive] = useState("products"); // پیش‌فرض Product فعال
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const [productOpenMobile, setProductOpenMobile] = useState(false);
  const [productOpenDesktop, setProductOpenDesktop] = useState(false);
  const [businessesOpenMobile, setbusinessesOpenMobile] = useState(false);
  const [businessesOpen, setbusinessesOpen] = useState(false);

  const locale = useLocale();

   const dir = locale === "fa" || locale === "ps" ? "ltr" : "rtl";

  const router = useRouter();

  const switchLocale = (newLocale) => {
  const segments = window.location.pathname.split("/");
  segments[1] = newLocale;  // جایگزینی locale فعلی با جدید
  const newPath = segments.join("/");

  
  router.push(newPath);
};


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


  const categoriesData = [
{
id: 1,
title: "mobile_electronics",
items: [
{ id: 1, label: "mobile_shops", href: `/${locale}/business/mobile_shops`, icon: <Home size={15} /> },
{ id: 2, label: "computer_shops", href: `/${locale}/business/computer_shops`, icon: <Store size={15} /> },
{ id: 3, label: "electrical_supplies", href: `/${locale}/business/electrical_supplies`, icon: <ClipboardCheck size={15} /> }
]
},
{
id: 2,
title: "food_grocery",
items: [
{ id: 1, label: "rice_flour_shops", href: `/${locale}/business/rice_flour_shop`, icon: <Home size={15} /> },
{ id: 2, label: "supermarkets", href: `/${locale}/business/supermarkets`, icon: <Store size={15} /> }
]
},
{
id: 3,
title: "home_services",
items: [
{ id: 1, label: "furniture_stores", href: `/${locale}/business/furniture_stores`, icon: <Home size={15} /> },
{ id: 2, label: "cleaning_services", href: `/${locale}/business/cleaning_services`, icon: <ClipboardCheck size={15} /> }
]
},
{
id: 4,
title: t("health_section"),
items: [
{ id: 1, label: "clinic", href: `/${locale}/business/clinics`, icon: <Store size={15} /> },
{ id: 2, label: "hospital", href: `/${locale}/business/hospitals`, icon: <Hospital size={15} /> },
{ id: 3, label: "pharmacy", href: `/${locale}/business/pharmacies`, icon: <ClipboardCheck size={15} /> },
{ id: 4, label: "operation", href: `/${locale}/business/operations`, icon: <GraduationCap size={15} /> },
{ id: 5, label: "laborator", href: `/${locale}/business/laboratories`, icon: <ClipboardCheck size={15} /> }
]
}
];

  const menuItems = [
    { id: "home", href: `/${locale}`, label: t("home") },
    { id: "products", href: `/${locale}/products`, label: t("Product") },
    { id: "services", href: `/${locale}/services`, label: t("services") },
    { id: "business", href: `/${locale}/business`, label: t("business") },
    { id: "about-us", href: `/${locale}/about-us`, label: t("aboutus") },
    { id: "contactus", href: `/${locale}/contact-us`, label: t("contactus") },
  ];

  return (
    <>
    
      {/* موبایل */}
      <header
      
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
          <Link href={`/${locale}`}>
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
        className={`fixed top-0 z-500  h-full transform transition-transform duration-300  block lg:hidden
           
          ${
            sidebarOpen
              ? "translate-x-0"
              : sidebarDir === "rtl"
              ? "translate-x-[3000px] "
              : "-translate-x-[900px] "
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
          {menuItems.map((item) => {
            if (item.id === "products") {
              return (
                <li key="products" className="flex flex-col">
                  {/* Product Main Button */}
                  <button
                    onClick={() => setProductOpenMobile(!productOpenMobile)}
                    className={`flex justify-between items-center w-full font-semibold text-[16px] px-4 py-3 rounded-lg transition-all duration-300 shadow-sm
            ${
              active.startsWith("products")
                ? "bg-gray-50 text-black"
                : "bg-gray-50 "
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
                    <div className="flex flex-col gap-4 px-6 mt-3 text-sm animate-fadeIn">
                      {/* Doctor Assistant Section */}
                      <h4 className="flex gap-2 font-semibold text-gray-800">
                        <Image
                          src={doctor_assistant_icon}
                          alt="doctor assistant"
                        />
                        {t("doctor_assistant")}
                      </h4>
                      <ul className="flex flex-col gap-2 list-disc pr-5 text-[#706f6f] marker:text-[#06B1FD]">
                        {[
                          "hospital",
                          "clinic",
                          "pharmacy",
                          "laborator",
                          "operation",
                        ].map((sub) => (
                          <Link
                            key={sub}
                            href={`/${locale}/products/doctor-assistant/${sub}`}
                          >
                            <li
                              className="cursor-pointer px-3 py-1 rounded-lg hover:text-[#06B1FD] hover:bg-blue-50 transition-all"
                              onClick={() => {
                                setSidebarOpen(false);
                                setProductOpenMobile(false);
                                handleSetActive(
                                  `products/doctor-assistant/${sub}`
                                );
                                showLoading();
                              }}
                            >
                              {t(sub)}
                            </li>
                          </Link>
                        ))}
                      </ul>

                      {/* Business Assistant Section */}
                      <h4 className="flex gap-2 mt-4 font-semibold text-gray-800">
                        <Image
                          src={business_assistant_logo}
                          alt="business assistant"
                          width={25}
                        />
                        {t("business_assistant")}
                      </h4>
                      <ul className="flex flex-col gap-2 list-disc pr-5 text-[#706f6f] marker:text-[#06B1FD]">
                        {[
                          "business-assistant-standerd",
                          "business-assistant-proffessional",
                          "business-assistant-multi-profile",
                        ].map((sub) => (
                          <Link
                            key={sub}
                            href={`/${locale}/products/business-assistant/${sub}`}
                          >
                            <li
                              className="cursor-pointer px-3 py-1 rounded-lg hover:text-[#06B1FD] hover:bg-blue-50 transition-all"
                              onClick={() => {
                                setSidebarOpen(false);
                                setProductOpenMobile(false);
                                handleSetActive(
                                  `products/business-assistant/${sub}`
                                );
                                showLoading();
                              }}
                            >
                              {t(sub)}
                            </li>
                          </Link>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              );
            } else if (item.id === "business") {
              return (
                <li key="business" className="flex flex-col">
                  {/* Business Main Button */}
                  <button
                    onClick={() =>
                      setbusinessesOpenMobile(!businessesOpenMobile)
                    }
                    className={`flex justify-between items-center w-full font-semibold text-[16px] px-4 py-3 rounded-lg transition-all duration-300 shadow-sm
            ${
              active.startsWith("business")
                ? "bg-gray-50 text-black"
                : "bg-gray-50 "
            }`}
                  >
                    {item.label}
                    <span
                      className={`transform transition-transform duration-300 ${
                        businessesOpenMobile ? "rotate-180" : ""
                      }`}
                    >
                      ▼
                    </span>
                  </button>

                  {/* Business Submenu */}
                  {businessesOpenMobile && (
                    <div className="flex flex-col gap-4 px-2 mt-3 text-sm animate-fadeIn">
                      {categoriesData.map((category) => (
                        <div key={category.id}>
                          {/* عنوان دسته */}
                          <h4 className="flex gap-2 font-semibold text-gray-800">
                            {t(category.title)}
                          </h4>

                          {/* زیرمنوها */}
                          <ul className="flex flex-col gap-2  pr-5 text-[#706f6f]  ">
                            {category.items.map((sub) => (
                              <Link key={sub.id} href={sub.href}>
                                <li
                                  className="cursor-pointer px-3 py-1  rounded-lg hover:text-[#06B1FD] hover:bg-blue-50 transition-all"
                                  onClick={() => {
                                    setSidebarOpen(false);
                                    setbusinessesOpenMobile(false);
                                    handleSetActive(sub.href);
                                    showLoading();
                                  }}
                                >
                                  <span>{sub.icon}
                                    
                                  {t(sub.label)}
                                  </span>
                                </li>
                              </Link>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </li>
              );
            } else {
              // سایر آیتم‌ها
              return (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    onClick={() => {
                      handleSetActive(item.id);
                      setSidebarOpen(false);
                      setProductOpenMobile(false);
                      setbusinessesOpenMobile(false);
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
              );
            }
          })}
        </ul>

        {/* انتخاب زبان موبایل موبایل */}
        <div  className="relative">
          <Image
            src={worldIcon}
            alt="world icon"
            width={48}
            height={48}
            className={`absolute cursor-pointer ${
              dir === "ltr" ? "left-6" : "right-[1.5em]"
            }`}
            onClick={() => setLangBox(!langBox)}
          />
          <div
            className={`absolute top-12 ${
              dir === "ltr" ? "right-[1.5em]" : "left-[1.5em]"
            } mt-2 flex flex-col gap-3 bg-white shadow-2xl w-34 h-28 z-4000 rounded-md transition-all ${
              langBox ? "flex" : "hidden"
            }`}
          >
            <button
              className="flex items-center gap-2 mx-2 text-right rounded cursor-pointer w-28 hover:text-sky-300"
              onClick={() => {
                  switchLocale("fa")
          
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
              onClick={() => {
                  switchLocale("ps")
      
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
              onClick={() => {
                  switchLocale("en")
       
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
      
        onMouseLeave={() => {
          setProductOpenDesktop(false), setbusinessesOpen(false);
        }}
     className={`hidden lg:flex flex-col w-full m-auto z-90 ${
  (() => {
    if (isScrolled) {
      if (productOpenDesktop ) {
        return "fixed top-0 left-1/2 -translate-x-1/2 opacity-100 h-82 z-90 backdrop-blur-sm shadow-sm";
      }
      else if(businessesOpen){
        return "fixed top-0 left-1/2 -translate-x-1/2 opacity-100 h-122 z-90 backdrop-blur-sm shadow-sm";
        
      }else if(businessesOpen && productOpenDesktop){
        
        return "fixed top-0 left-1/2 -translate-x-1/2 opacity-100 h-0 z-90 backdrop-blur-sm";
      }else{
        
      return "fixed top-0 left-1/2 -translate-x-1/2 opacity-100 h-17 z-90 backdrop-blur-sm";
      }
    }

    if (productOpenDesktop ) {
      return "absolute h-82 top-12 z-900 bg-white shadow-sm";
    }
    if(businessesOpen){
      return "absolute h-122 top-12 z-900 bg-white shadow-sm";
      
    }

    return "absolute h-16 top-12 z-90 bg-white";
  })()
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
                onMouseLeave={() => setLangBox(false)}
                height={48}
                className="cursor-pointer"
                onClick={() => setLangBox(!langBox)}
              />
              {/* language box */}
              <div
              onMouseEnter={()=>setLangBox(true)}
              onMouseLeave={()=>setLangBox(false)}
                className={`absolute top-10 left-[-2.5em] mt-2 flex flex-col gap-2 bg-white shadow-2xl w-34 h-28 rounded-md transition-all z-100000 ${
                  langBox ? "flex items-center justify-center" : "hidden"
                }`}
              >
                <button
                  className="flex flex-row-reverse items-center gap-2 mx-2 text-right rounded cursor-pointer w-28 hover:text-sky-300"
                  onClick={() => {
                    switchLocale("fa")
               
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
                    switchLocale("ps")
          
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
                      switchLocale("en")
             
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
         
            className="bg-[#faf9f9] w-[410px] h-[43.5px] flex items-center justify-center rounded-lg opacity-100"
          >
            <ul className="flex flex-row-reverse justify-around gap-4">
              {menuItems.map((item) =>
                // business
                item.id === "business" ? (
                  <li
                    key="business"
                    className="relative cursor-pointer group"
                    onMouseEnter={() => {
                      setbusinessesOpen(true), setProductOpenDesktop(false);
                    }}
                  >
                    <button
                      className={`relative text-[12px] transition-colors duration-200 cursor-pointer
                       text-[#1E1E2B66] hover:text-gray-600
                      `}
                    >
                      {item.label}
                      <span
                        className={`absolute left-1/2 top-6 -translate-x-1/2 h-1 bg-sky-500 rounded-full transition-transform duration-300 ${
                          active.startsWith("item")
                            ? "scale-x-100"
                            : "scale-x-0 group-hover:scale-x-100"
                        }`}
                        style={{ width: "26px" }}
                      />
                    </button>
                  </li>
                ) : // product section
                item.id === "products" ? (
                  <li
                    key="products"
                    className="relative group"
                    onMouseEnter={() => {
                      setbusinessesOpen(false), setProductOpenDesktop(true);
                    }}
                  >
                    <button
                      className={`relative text-[12px] transition-colors duration-200 cursor-pointer text-[#1E1E2B66] hover:text-gray-600`}
                    >
                      {item.label}
                    <span
                        className={`absolute left-1/2 top-6 -translate-x-1/2 h-1 bg-sky-500 rounded-full transition-transform duration-300 ${
                          active.startsWith("broducts")
                            ? "scale-x-100"
                            : "scale-x-0 group-hover:scale-x-100"
                        }`}
                        style={{ width: "26px" }}
                      />
                    </button>
                  </li>
                ) : (
                  // other items
                  <li
                    key={item.id}
                    className="relative group"
                    onMouseEnter={() => {
                      setProductOpenDesktop(false);
                      setbusinessesOpen(false);
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
                        style={{ width: "26px" }}
                      />
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <Link href={`/${locale}`}>
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

        {/* product submenu section */}

        {productOpenDesktop && (
          <div
          dir={dir === "rtl" ? "ltr" : "rtl"}
            className="z-1000 flex items-start justify-start gap-80 w-[1056px] m-auto absolute top-22 left-1/2 -translate-x-1/2"
          >
            {/* doctor assistant */}
            <div>
              <h1 className="flex gap-2 pb-2 text-sm font-bold">
                <Image src={doctor_assistant_icon} alt="doctor assistant " />
                {t("doctor_assistant")}
              </h1>
              <ul className="flex flex-col gap-3 mt-3 mx-4 text-[#706f6f] list-disc px-5 marker:text-[#06B1FD]">
                <Link
                  onClick={handleSetActive("products")}
                  href={`/${locale}/products/doctor-assistant/hospital`}
                >
                  <li className="cursor-pointer hover:text-[#06B1FD]">
                    {t("hospital")}
                  </li>
                </Link>
                <Link
                  onClick={handleSetActive("products")}
                  href={`/${locale}/products/doctor-assistant/clinic`}
                >
                  <li className="cursor-pointer hover:text-[#06B1FD]">
                    {t("clinic")}
                  </li>
                </Link>
                <Link
                  onClick={handleSetActive("products")}
                  href={`/${locale}/products/doctor-assistant/pharmacy`}
                >
                  <li className="cursor-pointer hover:text-[#06B1FD]">
                    {t("pharmacy")}
                  </li>
                </Link>
                <Link
                  onClick={handleSetActive("products")}
                  href={`/${locale}/products/doctor-assistant/laborator`}
                >
                  <li className="cursor-pointer hover:text-[#06B1FD]">
                    {t("laborator")}
                  </li>
                </Link>
                <Link
                  onClick={handleSetActive("products")}
                  href={`/${locale}/products/doctor-assistant/operation`}
                >
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
              <ul className="flex flex-col gap-3 mt-3 mx-4 text-[#706f6f] list-disc px-5 marker:text-[#06B1FD]">
                <Link
                  onClick={handleSetActive("products")}
                  href={
                    `/${locale}/products/business-assistant/business-assistant-standard`
                  }
                >
                  <li className="cursor-pointer hover:text-[#06B1FD]">
                    {t("business_assistant_standard")}
                  </li>
                </Link>
                <Link
                  onClick={handleSetActive("products")}
                  href={
                    `/${locale}/products/business-assistant/business-assistant-profesional`
                  }
                >
                  <li className="cursor-pointer hover:text-[#06B1FD]">
                    {t("business_assistant_proffessional")}
                  </li>
                </Link>
                <Link
                  onClick={handleSetActive("products")}
                  href={
                    `/${locale}/products/business-assistant/business-assistant-multiProfile`
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

        {/* businesses submenu  */}
        {businessesOpen && (
          <div
            dir={dir === "rtl" ? "ltr" : "rtl"}
            className="z-1000 grid grid-cols-2  w-[1000px] gap-2 m-auto absolute top-22 left-1/2 -translate-x-1/2"
          >
            {categoriesData.map((category) => (
              <div key={category.id} className="">
                <h1 className="flex gap-2 pb-2 text-sm font-bold border-b border-gray-300 w-[250px]">
                  {t(category.title)}
                </h1>
                <ul className="flex flex-col gap-3 mt-3 mx-4 text-[#706f6f] px-5  ">
                  {category.items.map((item) => (
                    <Link
                      key={item.id}
                      onClick={() => setActive("business")}
                      href={item.href}
                    >
                      <li className="cursor-pointer hover:text-[#06B1FD]  w-[200px]">
                        <span className="flex items-center gap-2">
                          {item.icon}
                        {t(item.label)}
                        </span>
                      </li>
                    </Link>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </header>

      <LoginModal open={openLogin} onClose={() => setOpenLogin(false)} />
    </>
  );
}
