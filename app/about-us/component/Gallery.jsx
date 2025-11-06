"use client";

import { useState } from "react";
import Image from "next/image";
import img1 from "@/public/images/img1.svg";
import img2 from "@/public/images/img2.svg";
import img3 from "@/public/images/img3.svg";
import img4 from "@/public/images/img4.svg";
import img5 from "@/public/images/img5.svg";
import ArrowKey from "@/public/icons/arrow.svg";

export default function Gallery() {
  const [images, setImages] = useState([img1, img2, img3, img4, img5]);
  const [loadedImages, setLoadedImages] = useState(
    [0, 1, 2, 3, 4].reduce((acc, i) => ({ ...acc, [`img${i + 1}`]: false }), {})
  );
  const [bigImageIndex, setBigImageIndex] = useState(4);

  const handleImageLoad = (index) => {
    setLoadedImages((prev) => ({
      ...prev,
      [`img${index + 1}`]: true,
    }));
  };

  const fetchImages = async () => {
    return [img1, img2, img3, img4, img5];
  };

  const handleLeft = async () => {
    setLoadedImages(
      [0, 1, 2, 3, 4].reduce((acc, i) => ({ ...acc, [`img${i + 1}`]: false }), {})
    );
    const newImages = await fetchImages();
    const rotated = [...newImages];
    const first = rotated.shift();
    rotated.push(first);
    setImages(rotated);
  };

  const handleRight = async () => {
    setLoadedImages(
      [0, 1, 2, 3, 4].reduce((acc, i) => ({ ...acc, [`img${i + 1}`]: false }), {})
    );
    const newImages = await fetchImages();
    const rotated = [...newImages];
    const last = rotated.pop();
    rotated.unshift(last);
    setImages(rotated);
  };

  return (
    <div
      className="
        relative
        grid
        grid-cols-1
        md:grid-cols-[1.5fr_1fr]
        gap-3
        w-full
      "
    >
      <button
          onClick={handleLeft}
          className="absolute -left-6 sm:left-[-10] top-1/2 -translate-y-1/2 cursor-pointer z-40"
        >
          <Image src={ArrowKey} alt="left"  className="w-15 sm:w-0"/>
        </button>
      {/* 📱 ساختار مخصوص موبایل */}
      <div className="flex md:hidden items-stretch justify-center gap-3 w-full">
        {/* ستون چپ: ۴ عکس مربع کوچک */}
        <div className="flex flex-col justify-between gap-2 w-[25%]">
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className="relative w-full aspect-square rounded-xl overflow-hidden bg-gray-100 shrink-0"
            >
              <Image
                src={images[i]}
                alt={`img${i + 1}`}
                fill
                className="object-cover"
                onLoadingComplete={() => handleImageLoad(i)}
              />
            </div>
          ))}
            <button
          onClick={handleRight}
          className="absolute right-[-23px] top-1/2 -translate-y-1/2 cursor-pointer rotate-180 z-40 w-15 sm:w-0"
        >
          <Image src={ArrowKey} alt="right" />
        </button>
        </div>

        {/* ستون راست: عکس بزرگ تراز با چپ */}
        <div className="relative flex-1 rounded-xl overflow-hidden bg-gray-100">
          <Image
            src={images[bigImageIndex]}
            alt="big-image"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* 💻 ساختار دسکتاپ و تبلت */}
      <div className="hidden md:grid grid-cols-2 grid-rows-2 gap-2">
           <button
          onClick={handleLeft}
          className="absolute -left-10 top-1/2 -translate-y-1/2 cursor-pointer z-40"
        >
          <Image src={ArrowKey} alt="left"  className="w-15 sm:w-17"/>
        </button>
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            className="relative aspect-4/3 rounded-xl overflow-hidden bg-gray-100"
          >
            <Image
              src={images[i]}
              alt={`img${i + 1}`}
              fill
              className="object-cover"
              onLoadingComplete={() => handleImageLoad(i)}
            />
          </div>
        ))}
      </div>

      <div className="hidden md:flex relative rounded-xl overflow-hidden items-center justify-center bg-gray-100">
        <Image
          src={images[bigImageIndex]}
          alt="gallery-big"
          fill
          className="object-cover"
        />

        {/* فلش‌ها */}
        
        <button
          onClick={handleRight}
          className="absolute right-[-33px] top-1/2 -translate-y-1/2 cursor-pointer rotate-180 z-40"
        >
          <Image src={ArrowKey} alt="right" />
        </button>
      </div>
    </div>
  );
}
