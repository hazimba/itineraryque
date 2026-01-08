"use client";
import { useEffect, useState } from "react";
import MobileDetect from "mobile-detect";

export function useMobileDetectClient() {
  const [isMobile] = useState(() => {
    const md = new MobileDetect(navigator.userAgent);
    return Boolean(md.mobile());
  });

  return isMobile;
}
