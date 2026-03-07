"use client"

import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";

const beetleDronesMediaAdRight = [
  {
    image: "/beetleDronesMediaSidePanelAd1.png",
    cta: "Ad>",
    href: "https://beetledronesmedia.com",
    textColor: "text-black",
    btnBg: "bg-yellow-600",
    btnText: "text-black",
  },
  {
    image: "/beetleDronesMediaSidePanelAd2.png",
    cta: "Ad>",
    href: "https://beetledronesmedia.com",
    textColor: "text-black",
    btnBg: "bg-yellow-600",
    btnText: "text-black",
  },
];

export default function AdBannerRight () {

    const [currentAd, setCurrentAd] = useState(0);
    const [isFading, setIsFading] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
          setIsFading(true);
          setTimeout(() => {
            setCurrentAd((prev) => (prev + 1) % beetleDronesMediaAdRight.length);
            setIsFading(false);
          }, 500);
        }, 5000);
        return () => clearInterval(interval);
      }, []);

    
const rightAdBanner = beetleDronesMediaAdRight[currentAd];

return (
  <div className={`bg-green-100`}>
    <a href={rightAdBanner.href} target="_blank" rel="noopener noreferrer">
            <Image 
            src={rightAdBanner.image} 
            alt="Beetle Drones Media Ad" 
            height={600}
            width={160}
            className={`transition-opacity duration-500 ${isFading ? "opacity-70" : "opacity-100"}`}
            />
        </a>
  </div>
  );
}