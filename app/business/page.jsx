"use client";

import Section1 from './components/section1';
import Section2 from './components/section2';
import Section3 from './components/section3';
import Section4 from './components/section4';

import { useState, useEffect } from "react";
import { useLoading } from "@/app/provider/LoadingProvider";

export default function Business() {
  const { isLoading, showLoading, hideLoading } = useLoading();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // ابتدا لودینگ رو فعال کن
    showLoading();

    // بعد با timeout جدا از render اصلی، لودینگ رو hide کن و state تغییر بده
    const timer = setTimeout(() => {
      hideLoading();
      setLoaded(true);
    }, 500); // زمان شبیه‌سازی لودینگ

    return () => clearTimeout(timer);
  }, [showLoading, hideLoading]);

  return (
    <div className='flex flex-col mt-[102px] md:w-[744px] lg:w-[1056px] mx-auto'>


      {loaded && (
        <>
          <Section1 />
          <Section2 />
          <Section3 />
          <Section4 />
        </>
      )}
    </div>
  );
}
