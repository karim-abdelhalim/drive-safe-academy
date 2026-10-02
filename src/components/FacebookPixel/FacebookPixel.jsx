"use client";

import { usePathname } from "next/navigation";
import Script from "next/script";
import { useEffect, useState } from "react";
import * as pixel from "@/lib/fpixel";

const FacebookPixel = () => {
  const [loaded, setLoaded] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (!loaded) return;
    if (typeof window.fbq !== "function") return;

    window.fbq("init", pixel.FB_PIXEL_ID);
    window.fbq("track", "PageView");
  }, [pathname, loaded]);

  return (
    <Script
      id="fb-pixel"
      src="/scripts/pixel.js"
      strategy="afterInteractive"
      onLoad={() => setLoaded(true)}
    />
  );
};

export default FacebookPixel;