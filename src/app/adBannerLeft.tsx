"use client"

import { useState, useRef, useEffect } from "react";

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
    <div>
        <a href={leftAdBanner.href} target="_blank" rel="noopener noreferrer">
            <img 
            src={leftAdBanner.image} 
            alt="Code Salmon Ad" 
            className={`transition-opacity duration-500 ${isFading ? "opacity-0" : "opacity-100"}`}
            />
        </a>
    </div>
);
}