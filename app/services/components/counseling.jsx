"use client";
import Image from "next/image";
import { useState } from "react";

import { useLanguage } from "../../provider/languageProvider";
import client1 from "@/public/icons/home/Frame1.svg";
import client2 from "@/public/icons/home/Frame2.svg";
import client3 from "@/public/icons/home/Frame3.svg";
import client4 from "@/public/icons/home/Frame4.svg";
import client5 from "@/public/icons/home/Frame5.svg";
import client6 from "@/public/icons/home/Frame6.svg";
import client7 from "@/public/icons/home/Frame7.svg";
import client8 from "@/public/icons/home/Frame8.svg";
import client9 from "@/public/icons/home/Frame9.svg";

import Rectangle from "@/public/icons/products/Rectangle.svg";

export default function FreeConsultation() {
  const { t } = useLanguage();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    // add your submit logic here
  };

  const steps = [
    t("step_contact_expert"),
    t("step_sign_nda"),
    t("step_receive_proposal"),
  ];

  const clients = [client1, client2, client3, client4, client5, client6,client7,client8,client9];

  return (
    <div className="flex flex-col mx-auto w-[380px] md:w-[616px] lg:w-[1059px] md:flex md:gap-16 mt-20">
      <div className="flex flex-col items-end">
        <h2 className="mb-4 text-2xl text-[#1E1E2B] relative font-bold">
          {t("free_counseling")}

          <Image
            src={Rectangle}
            alt="Rectangle"
            className="absolute right-0 h-full top-3"
          />
        </h2>
        <p className="mb-6 text-[#1E1E2B99] text-[16px]">
          {t("form_description")}
        </p>
      </div>

      {/* Left: Form */}
      <div className="flex justify-between ">
        <form
          onSubmit={handleSubmit}
          className="lg:w-[415px] lg:h-[364px] bg-[#1E1E2B08] rounded-2xl px-10"
        >
          <input
            type="text"
            name="name"
            placeholder={t("placeholder_name")}
            value={form.name}
            onChange={handleChange}
            className="border-b border-[#1E1E2B1A] w-full h-10 text-right mt-5 focus:outline-0"
            dir="rtl"
          />
          <input
            type="email"
            name="email"
            placeholder={t("placeholder_email")}
            value={form.email}
            onChange={handleChange}
            className="border-b border-[#1E1E2B1A] w-full h-10 text-right mt-5 focus:outline-0"
            dir="rtl"
          />
          <input
            type="text"
            name="phone"
            placeholder={t("placeholder_phone")}
            value={form.phone}
            onChange={handleChange}
            className="border-b border-[#1E1E2B1A] w-full h-10 text-right mt-5 focus:outline-0"
            dir="rtl"
          />
          <textarea
            name="message"
            placeholder={t("placeholder_message")}
            value={form.message}
            onChange={handleChange}
            className="border-b border-[#1E1E2B1A] w-full h-8 text-right mt-5 focus:outline-0"
            dir="rtl"
          />

          <button
            type="submit"
            className="w-[334px]  h-10 text-white transition bg-[#06B1FD] rounded-[8px] mt-10 "
          >
            {t("submit_request")}
          </button>
        </form>

        {/* Right: Steps + Clients */}
        <div className="flex flex-col justify-between  lg:h-[354px] " dir="rtl">
          <div className="flex flex-col gap-6">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="flex flex-row-reverse items-center justify-end gap-4 "
              >
                <p className=" text-[#1E1E2BCC] text-[16px]">{step}</p>
                <span className="rounded-full w-8  h-8 bg-[#06B1FD1A] flex justify-center items-center text-[#06B1FD] text-[18px]">
                  {t(`number${idx + 1}`)}
                </span>
              </div>
            ))}
          </div>

          <div className="mb-3">
            <h3 className="mb-4 font-semibold">{t("trusted_clients")}</h3>
            <div className="flex flex-wrap gap-4">
              {clients.map((client, idx) => (
                <div key={idx} className="w-12 h-12 rounded-full">
                  <Image src={client} alt={`${t("client")} ${idx + 1}`} className="w-12 h-12 rounded-full" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
