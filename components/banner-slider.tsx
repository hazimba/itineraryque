"use client";
import React, { useEffect, useState } from "react";

const BannerSlider = () => {
  const bannerMessages = [
    "KEMBARA UMRAH RM8,890!",
    "PROMOSI TERHAD!",
    "DAFTAR SEKARANG!",
  ];
  const [current, setCurrent] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    const fadeOut = setTimeout(() => {
      setShow(false);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % bannerMessages.length);
        setShow(true);
      }, 300);
    }, 2700);
    return () => clearTimeout(fadeOut);
  }, [current, bannerMessages.length]);

  return (
    <div className="bg-blue-400 w-screen p-4 font-semibold md:text-xl text-white flex justify-center gap-4">
      <div
        className={`transition-opacity tracking-widest duration-300 ease-in-out ${
          show ? "opacity-100" : "opacity-0"
        }`}
      >
        {bannerMessages[current]}
      </div>
    </div>
  );
};

export default BannerSlider;
