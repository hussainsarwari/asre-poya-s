"use client";

import { useState, useEffect } from "react";
import { useLoading } from "@/app/provider/LoadingProvider";


export default function Product(){
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
        <>
        comming soon
        </>
    )
}