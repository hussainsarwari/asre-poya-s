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

  const Loader = () => (
    <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
      <div className="w-6 h-6 border-4 border-gray-300 rounded-full border-t-gray-600 animate-spin"></div>
    </div>
  );

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
      {/* 🔙 دکمه چپ */}
      <button
        onClick={handleLeft}
        className="absolute -left-6 sm:left-[-10] top-1/2 -translate-y-1/2 cursor-pointer z-40"
      >
        <Image src={ArrowKey} alt="left" className="w-15 sm:w-0" />
      </button>

      {/* 📱 موبایل */}
      <div className="flex items-stretch justify-center w-full gap-3 md:hidden">
        {/* ستون چپ */}
        <div className="flex flex-col justify-between gap-2 w-[62px] relative">
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className="relative w-full overflow-hidden bg-gray-100 rounded-[8px] aspect-square shrink-0"
            >
              {!loadedImages[`img${i + 1}`] && <Loader />}
              <Image
                src={images[i]}
                alt={`img${i + 1}`}
                fill
                className={`object-cover transition-opacity duration-300 ${
                  loadedImages[`img${i + 1}`] ? "opacity-100" : "opacity-0"
                }`}
                onLoadingComplete={() => handleImageLoad(i)}
              />
            </div>
          ))}

         
        </div>

        {/* ستون راست */}
        <div className="relative flex-1 overflow-hidden bg-gray-100 rounded-xl w-[434px] aspect-4/4">
          {!loadedImages[`img${bigImageIndex + 1}`] && <Loader />}
          <Image
            src={images[bigImageIndex]}
            alt="big-image"
            fill
            className={`object-cover transition-opacity duration-300 ${
              loadedImages[`img${bigImageIndex + 1}`]
                ? "opacity-100"
                : "opacity-0"
            }`}
            onLoadingComplete={() => handleImageLoad(bigImageIndex)}
          />
           {/* 🔜 دکمه راست */}
          <button
            onClick={handleRight}
            className="absolute right-[-23px] top-1/2 -translate-y-1/2 cursor-pointer rotate-180 z-40 w-15 sm:w-0"
          >
            <Image src={ArrowKey} alt="right" />
          </button>
        </div>
      </div>

      {/* 💻 دسکتاپ */}
      <div className="relative hidden grid-cols-2 grid-rows-2 gap-4 md:grid">
        <button
          onClick={handleLeft}
          className="absolute z-40 -translate-y-1/2 cursor-pointer -left-10 top-1/2"
        >
          <Image src={ArrowKey} alt="left" className="w-15 sm:w-17" />
        </button>
       
          
        {[0, 1, 2, 3].map((i) => (
          <div
          key={i}
          className="relative overflow-hidden bg-gray-100 aspect-square lg:aspect-4/3 md:w-[149px] lg:w-[295px] md:h-[136px] lg:h-[189px] rounded-2xl"
          >
            {!loadedImages[`img${i + 1}`] && <Loader />}
            <Image
              src={images[i]}
              alt={`img${i + 1}`}
              fill
              className={`object-cover transition-opacity duration-300 ${
                loadedImages[`img${i + 1}`] ? "opacity-100" : "opacity-0"
              }`}
              onLoadingComplete={() => handleImageLoad(i)}
              />
          </div>
        ))}
        
      </div>

      {/* عکس بزرگ در دسکتاپ */}
      <div className="relative items-center justify-center hidden overflow-hidden bg-gray-100 aspect-square md:flex md:w-[305px] md:h-[287px] md:rounded-lg lg:rounded-2xl lg:w-[434px] lg:h-[394px]">
        {!loadedImages[`img${bigImageIndex + 1}`] && <Loader />}
        <Image
          src={images[bigImageIndex]}
          alt="gallery-big"
          fill
          className={`object-cover transition-opacity duration-300 ${
            loadedImages[`img${bigImageIndex + 1}`]
              ? "opacity-100"
              : "opacity-0"
          }`}
          onLoadingComplete={() => handleImageLoad(bigImageIndex)}
        />

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
