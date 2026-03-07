"use client"

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const codeSalmonAdLeft = [
  {
    image: "/CodeSalmonSidePanelAdBanner.png",
    cta: "Ad>",
    href: "https://codesalmon.io/",
    textColor: "text-black",
    btnBg: "bg-yellow-600",
    btnText: "text-black",
  },
  {
    image: "/CodeSalmonSidePanelAdBanner2.png",
    cta: "Ad>",
    href: "https://codesalmon.io/",
    textColor: "text-black",
    btnBg: "bg-yellow-600",
    btnText: "text-black",
  },
];

export default function AdBannerLeft () {

    const [currentAd, setCurrentAd] = useState(0);
    const [isFading, setIsFading] = useState(false);
    const headerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const interval = setInterval(() => {
          setIsFading(true);
          setTimeout(() => {
            setCurrentAd((prev) => (prev + 1) % codeSalmonAdLeft.length);
            setIsFading(false);
          }, 500);
        }, 5000);
        return () => clearInterval(interval);
      }, []);

    
const leftAdBanner = codeSalmonAdLeft[currentAd];

return (
    <div className={`bg-[#ffeea0]`}>
        <a href={leftAdBanner.href} target="_blank" rel="noopener noreferrer">
            <Image 
            src={leftAdBanner.image} 
            alt="Code Salmon Ad" 
            height={600}
            width={160}
            className={`transition-opacity duration-500 ${isFading ? "opacity-70" : "opacity-100"}`}
            />
        </a>
    </div>
  );
}