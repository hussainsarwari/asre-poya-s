"use client";
import { useEffect } from "react";

export default function LoginModal({ open, onClose }) {
  useEffect(() => {
    // جلوگیری از اسکرول هنگام باز بودن مودال
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-100">
      {/* بک‌دراپ */}
      <div className="absolute inset-0 bg-black/50 " onClick={onClose} />

      {/* باکس اصلی */}
      <div
        dir="rtl"
        className="relative md:w-[500px] md:h-[431px] w-full h-full bg-white rounded-2xl  px-10 py-6 text-center flex  justify-center md:justify-start  animate-fadeIn z-110"
      >
       <div className="fixed -translate-y-1/2 w-[344px] md:w-full top-1/2 md:static md:top-auto md:translate-y-0 ">
        
        <h2 className="mb-4 text-2xl font-bold text-[#1E1E2B] ">ورود</h2>
        <p className="mb-[2px] text-[16px] gray-600 text-[#1E1E2BCC] leading-[180%]">
          به عصرپویـا خوش آمدید
        </p>
        <p className=" mb-4 text-[16px] gray-600 text-[#1E1E2BCC] leading-[180%]">
          لطفا برای ورود ایمیل خود را وارد کنید
        </p>

        {/* فیلد ایمیل */}
        <input
          type="email"
          placeholder="ایمیل :"
          className="md:w-[420px] w-[344px] h-[48px] py-2 px-4 mb-4 text-[12px] border rounded-lg focus:outline-none border-[#06B1FDCC]"
          />

        {/* فیلد رمز */}
        <input
          type="password"
          placeholder="رمز عبور :"
          className="md:w-[420px] w-[344px] h-[48px] py-2 px-4 mb-4 text-[12px] border rounded-lg focus:outline-none border-[#06B1FDCC]"
          />

        {/* چک‌باکس */}
        <label className="flex items-center gap-2 mb-4 text-sm cursor-pointer">
          <input type="checkbox" className="w-4 h-4 accent-blue-600 rounded-[10px]" />
          <span>
            با <span className="text-[#06B1FD]">قوانین عصرپویـا</span> موافقم
          </span>
        </label>
          </div>

        {/* دکمه ورود */}
        <button className="md:w-[420px] w-[344px] fixed md:absolute bottom-6 left-1/2 -translate-x-1/2
 h-[48px] py-3 font-semibold text-white transition bg-[#06B1FD] rounded-lg hover:shadow-xl cursor-pointer">
          ورود
        </button>
      </div>
    </div>
  );
}
