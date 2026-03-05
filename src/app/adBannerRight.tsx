"use client"

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
    <div>
        <a href={rightAdBanner.href} target="_blank" rel="noopener noreferrer">
            <img 
            src={rightAdBanner.image} 
            alt="Beetle Drones Media Ad" 
            className={`transition-opacity duration-500 ${isFading ? "opacity-0" : "opacity-100"}`}
            />
        </a>
    </div>
);
}