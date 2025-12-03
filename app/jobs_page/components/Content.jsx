"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useLanguage } from "../../provider/languageProvider";

import clock from "@/public/icons/job_page/clock.svg";
import search_icon from "@/public/icons/job_page/search-normal.svg";
import programming_img from "@/public/icons/img_programming.svg";
import bookmark from "@/public/icons/archive-tick.svg";
import location from "@/public/icons/job_page/location-tick.svg";
import usersearch from "@/public/icons/job_page/user-search.svg";
import share from "@/public/icons/job_page/directbox-send.svg";
import thick from "@/public/icons/job_page/archive-tick.svg";

export default function Content() {
  const { t, dir } = useLanguage();

  useEffect(() => {
    import("@dotlottie/player-component");
  },
 []);



      //  [selectedJob.date, selectedJob.job_website, selectedJob.role, selectedJob.location],
      //         ["۱۰ سرطان","asrepoya","graphic designer",selectedJob.address],
      //         [selectedJob.code, selectedJob.percent, selectedJob.remote_or_phisical, selectedJob.time],
      //         ["۸۴۹۴۳۹۴۸۳۹۹۲","50%","remote/phisical","فول تایم"]

  
  const jobs = [
    {
      id: 1,
      title: t("job_title_1"),
      job_details: t("job_details"),
      location: t("job_location"),
      remote_or_phisical: t("remote_or_phisical"),
      type: t("job_type_1"),
      summary: t("job_summary_1"),

      
      asrepoya:t("asrepoya"),
      date: t("job_date_1"),
      percent: t("percent"),
      
      job_title:t("job_title"),
      date_text:t("date_text"),
      fulltimeorparttime:t("fulltimeorparttime"),
      remote_or_phisical_value:t("remote_or_phisical_value"),
      percent_value:t("percent_value"),
      
      
      code: t("job_code"),
      job_website: t("job_website"),
      status: t("job_status_1"),
      address: t("job_address"),
      role: t("job_name"),
      time: t("job_time"),
      desc1: t("job_desc1_1"),
      desc2: t("job_desc2_1"),
      desc3: t("job_desc3_1"),
      overview: "",
    },
  ];

  const [selectedJob, setSelectedJob] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  // detect mobile/tablet
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <div dir={dir=="rtl"?"rtl":"ltr"} className="w-full mt-20">
      {/* HEADER IMAGE + SEARCH */}
      <div className={`md:w-[616px] lg:w-[1056px] w-[360px] h-[188px] relative overflow-hidden rounded-[16px] mt-10 mx-auto`}>
        <Image
          src={programming_img}
          className="blur-[3px]"
          alt={t("programming_image_alt")}
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
        <div className={`absolute inset-0 flex flex-col items-center justify-around gap-2 p-2 text-center text-white lg:gap-4 ${dir==="ltr"?"lg:flex-row":"lg:flex-row-reverse"}`}>
          <h6 className="mb-3 md:mb-0 text-[16px] lg:text-[20px]">{t('search_text')}</h6>
          <div className="relative w-[80%] md:w-[366px]">
            <input
              type="search"
              className="text-[#1E1E2B99] bg-[#FFFFFFCC] w-full h-[46px] pl-12 pr-4 rounded-xl placeholder:text-gray-500"
              placeholder={t('search_job_placeholder')}
            />
            <span className="absolute text-gray-500 -translate-y-1/2 left-4 top-1/2">
              <Image src={search_icon} alt={t("search_icon_alt")} />
            </span>
          </div>
        </div>
      </div>

      {/* MAIN BODY */}
      <div className="mt-10">
        <h4 dir={dir=="ltr"?"rtl":"ltr"} className="mb-6 text-2xl font-bold">{t("search_page_title")}</h4>
        <div className="flex flex-row-reverse gap-6">
          {/* JOB LIST */}
          <div className="lg:w-[330px] w-full flex flex-col gap-4">
            {jobs.map(job => (
              <div
                key={job.id}
                onClick={() => setSelectedJob(job)}
                className="lg:w-[324px] w-full lg:h-[242px] cursor-pointer rounded-[8px] flex flex-col items-end border border-[#1E1E2B1A] shadow-sm px-6 py-5 shadow-[#0000002B]"
              >
                <div className="flex flex-row-reverse justify-between w-full">
                  <h5 className="font-semibold">{job.title}</h5>
                  <Image src={bookmark} alt={t("bookmark_alt")} />
                </div>
                <div className="flex flex-col justify-end w-full gap-2 mt-4" dir={dir==="ltr"?"rtl":"ltr"}>
                  <div className="flex w-full gap-4">
                    <p className="text-[12px] text-[#1E1E2B] flex items-center gap-2">
                      {job.date} <Image src={clock} alt={t("clock_alt")} />
                    </p>
                    <p className="text-[12px] text-[#1E1E2B] flex items-center gap-2">
                      {job.address} <Image src={location} alt={t("location_alt")} />
                    </p>
                  </div>
                  <p className="text-[12px] text-[#1E1E2B] flex items-center gap-2 w-[150px]">
                    {job.type} <Image src={usersearch} alt={t("user_search_alt")} />
                  </p>
                </div>
                <p dir={dir=="ltr"?"rtl":"ltr"} className="mt-4 text-xs text-[#1E1E2BCC]">{job.summary}</p>
                <p className="mt-1 text-[12px] text-[#06B1FD] font-semibold">{t("continue")}</p>
              </div>
            ))}
          </div>

          {/* JOB DETAILS DESKTOP */}
          {!isMobile && (
            <div className="flex-1 min-h-[400px] w-[708px] bg-white shadow rounded-md p-8 border border-[#1E1E2B1A]">
              {!selectedJob ? (
                <div className="relative flex flex-col items-center justify-center text-center">
                  <dotlottie-player src="/animation/Worried.lottie" autoplay loop speed="1" />
                  <h5 className="text-gray-500">{t("no_job_selected")}</h5>
                </div>
              ) : (
                <JobDetails t={t} selectedJob={ selectedJob } dir={dir} />
              )}
            </div>
          )}
        </div>
      </div>

      {/* MOBILE MODAL */}
      {isMobile && selectedJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
          <div className="bg-white rounded-xl w-full max-h-[90vh] overflow-y-auto p-6">
            <button className="mb-4 font-bold text-red-500" onClick={() => setSelectedJob(null)}>✕</button>
            <div className="flex flex-col gap-4">
              <JobDetails t={t} selectedJob={selectedJob} mobile />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* JOB DETAILS COMPONENT */
function JobDetails({ t, selectedJob, mobile ,dir}) {
  if (!selectedJob) return null;

  return (
    <div dir={dir=="rtl"?"rtl":"ltr"} className="flex flex-col">
      {/* HEADER */}
      <div className={`${mobile ? "w-full" : "w-[612px]"} border-b border-[#1E1E2B1A] pb-12`}>
        <div className="flex items-end justify-between">
          <span className={`${mobile ? "text-[9px]" : "text-[10px]"} text-[#06B1FD] flex`}>
            {t("share")} <Image src={share} alt={t("share_alt")} />
          </span>
          <div>
            <h3 dir={dir=="ltr"?"rtl":"ltr"} className={`${mobile ? "text-lg" : "text-xl"}  font-bold`}>{selectedJob.title}</h3>
            <p dir={dir=="ltr"?"rtl":"ltr"} className={`${mobile ? "text-[14px]" : "text-[16px]"} mt-4 text-[#1E1E2B99`}>{selectedJob.job_details}</p>
          </div>
        </div>

        {/* DETAILS GRID */}
        <div className={`mt-[72px] ${mobile ? "flex flex-col gap-6" : "flex justify-between"}`}>
          {/* mobile */}
          {mobile ? (
            <>
              <div className="flex justify-between gap-6">
                {[
                  [selectedJob.date, selectedJob.job_website, selectedJob.role, selectedJob.location],
                  ["۱۰ سرطان", "asrepoya", "graphic designer", selectedJob.address]
                ].map((col, i) => (
                  <div key={i} className="flex flex-col justify-between gap-1 text-[14px]">
                    {col.map((item, idx) => <p key={idx} className="truncate">{item}</p>)}
                  </div>
                ))}
              </div>
              <div className="flex justify-between gap-6">
                {[
                  [selectedJob.code, selectedJob.percent, selectedJob.remote_or_phisical, selectedJob.time],
                  ["۸۴۹۴۳۹۴۸۳۹۹۲", "50%", "remote/phisical", "فول تایم"]
                ].map((col, i) => (
                  <div key={i} className="flex flex-col justify-between gap-1 text-[14px]">
                    {col.map((item, idx) => <p key={idx} className="truncate">{item}</p>)}
                  </div>
                ))}
              </div>
            </>
          ) : (
            // desktop ۴ columns
            [
              ["۱۰ سرطان","asrepoya","graphic designer",selectedJob.address],
              [selectedJob.date, selectedJob.job_website, selectedJob.role, selectedJob.location],
              ["۸۴۹۴۳۹۴۸۳۹۹۲","50%","remote/phisical","فول تایم"],
              [selectedJob.code, selectedJob.percent, selectedJob.remote_or_phisical, selectedJob.time],
            ].map((col, i) => (
              <div dir={dir=="ltr"?"rtl":"ltr"} key={i} className={`  flex flex-col gap-5 justify-between ${i===1 || i===3 ? "text-[#1E1E2B99]" : "text-[#1E1E2B]"} text-[16px]`}>
                {col.map((item, idx) => <p key={idx}>{item}</p>)}
              </div>
            ))
          )}
        </div>
      </div>

      {/* BODY */}
      <div  dir={dir=="ltr"?"rtl":"ltr"} className={`mt-12 ${mobile ? "flex flex-col-reverse gap-10" : "flex justify-between"}`}>
        {/* LEFT */}
        <div className={`lg:w-[227px] lg:h-[586px] w-full rounded-lg p-6 bg-[#1E1E2B08] flex flex-col justify-between`}>
          <h3 className="font-bold text-[#1E1E2B]">{t("left_side_title1")}</h3>
          <p className="text-[#1E1E2BCC]">{t("left_side_paragraph1")}</p>
          <h3 className="font-bold text-[#1E1E2B]">{t("left_side_title2")}</h3>
          <p className="text-[#1E1E2BCC]">{t("left_side_paragraph2")}</p>
        </div>
        {/* RIGHT */}
        <div className="lg:w-[377px] w-full">
          <h2 className="text-[#1E1E2B] font-bold my-4">{t("right_side_title1")}</h2>
          <p className="text-[#1E1E2BCC]">{t("right_side_paragraph1")}</p>
          <h2 className="text-[#1E1E2B] font-bold my-4">{t("right_side_title2")}</h2>
          <p className="text-[#1E1E2BCC]">{t("right_side_paragraph2")}</p>
        </div>
      </div>

      {/* FOOTER */}
      <span className="border-t-2 border-[#1E1E2B1A] mt-12 m-auto"></span>
      <div  dir={dir=="ltr"?"rtl":"ltr"}>
        
        <p className="text-[#1E1E2BCC] mt-12 mb-[32px]">this text will come from database</p>
        <div className="grid grid-cols-2 gap-4 pr-10 border-b border-[#1E1E2B1A] pb-10">
          {Array.from({ length: 8 }).map((_, i) => (
            <h4 key={i} className="flex flex-row-reverse justify-end gap-2 text-[#1E1E2B]">
              {t(`footer_item${i + 1}`)}
              <Image src={thick} alt={t("thick_alt")} />
            </h4>
          ))}
        </div>
        <div className="mt-12">
          <p className="text-[#1E1E2BCC]">
            {t("footer_end_paragraph")}
            <span className="text-[#06B1FD] border-b-2 font-bold border-[#06B1FD]">
              {t("apply_to_this_job")}
            </span>
          </p>
          <button className="w-[105px] h-[46px] bg-[#06B1FD] text-white rounded-[12px] mt-8">
            {t("apply_to_job")}
          </button>
        </div>
      </div>
    </div>
  );
}
