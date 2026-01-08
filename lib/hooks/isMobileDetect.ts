"use client";
import MobileDetect from "mobile-detect";
import { useState } from "react";

export function useMobileDetectClient() {
  const [isMobile] = useState(() => {
    const md = new MobileDetect(navigator.userAgent);
    return Boolean(md.mobile());
  });

  return isMobile;
}
