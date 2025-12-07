'use client';

import Header from "./Header";
import Footer from "./Footer";
import { LanguageProvider } from "../provider/languageProvider";
import { LoadingProvider } from "../provider/LoadingProvider";
import Image from "next/image";
import whatsapp from "@/public/icons/home/whatsapp_green.svg";
import { usePathname } from "next/navigation";

export default function ClientLayout({ children }) {
  const pathname = usePathname();
  const isDashboard = pathname.startsWith("/dashboard");

  return (
    <LanguageProvider>
      <LoadingProvider>
        {!isDashboard && <Header />}
        <main className="grow">{children}</main>
     {!isDashboard&&   <Image
          src={whatsapp}
          alt="whatsapp"
          className="fixed z-30 w-12 h-12 cursor-pointer bottom-3 right-3 sm:w-14 sm:h-14 md:w-16 md:h-16"
        />}
        {!isDashboard && <Footer />}
      </LoadingProvider>
    </LanguageProvider>
  );
}
