"use client";

import { useState, useRef, useEffect } from "react";
import { useTheme } from "./ThemeContext";

const ads = [
  {
    logo: "/codeSalmonLogoSmall.png",
    text: "See Drift. Stop Bugs. Ship Confidently with Code Salmon.",
    mobileText: "Code Salmon — Detect Contract Drift",
    cta: "View Docs",
    href: "https://codesalmon.io/",
    bg: "bg-yellow-200",
    textColor: "text-black",
    btnBg: "bg-yellow-600",
    btnText: "text-black",
  },
  {
    logo: "beetleDronesMediaLogoSmall.png",
    text: "Bespoke Brand Curation: Identity, Logo, Website, & Content",
    mobileText: "Beetle Drones — From Concept to Content",
    cta: "Contact Now",
    href: "https://www.beetledronesmedia.com",
    bg: "bg-green-400",
    textColor: "text-black",
    btnBg: "bg-black",
    btnText: "text-green-400",
  },
];

export default function Header() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [currentAd, setCurrentAd] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);
  const { theme, toggleTheme } = useTheme();

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setCurrentAd((prev) => (prev + 1) % ads.length);
        setIsFading(false);
      }, 500);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  const ad = ads[currentAd];

  return (
    <header ref={headerRef}>
      {/* Ad Banner */}
      <div className={`w-full ${ad.bg} transition-colors duration-500`}>
        <a
          href={ad.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`w-full ${ad.textColor} py-2 px-4 block transition-opacity duration-500 touch-manipulation ${
            isFading ? "opacity-0" : "opacity-100"
          }`}
        >
          {/* Desktop Ad */}
          <div className="hidden sm:flex max-w-7xl mx-auto items-center justify-center gap-3 text-sm font-semibold">
            <img src={ad.logo} alt="Sponsor" className="h-8" />
            <span>{ad.text}</span>
            <span className={`${ad.btnBg} ${ad.btnText} px-3 py-1 rounded-full text-xs font-bold`}>
              {ad.cta}
            </span>
          </div>
          {/* Mobile Ad */}
          <div className="flex sm:hidden max-w-7xl mx-auto items-center justify-center gap-2 text-xs font-semibold">
            <img src={ad.logo} alt="Sponsor" className="h-5" />
            <span>{ad.mobileText}</span>
            <span className={`${ad.btnBg} ${ad.btnText} px-2 py-0.5 rounded-full text-xs font-bold whitespace-nowrap`}>
              {ad.cta}
            </span>
          </div>
        </a>
      </div>

      {/* Main Header */}
      <div className="w-full bg-white dark:bg-gray-800 shadow-md py-4 px-6 transition-colors duration-300">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Logo */}
          <div className="text-2xl font-bold text-green-400">
            EM
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-6">
            <div className="relative">
              <button
                onClick={() => toggleDropdown("tutorials")}
                className="font-semibold text-gray-800 dark:text-gray-200 hover:text-green-600 dark:hover:text-green-400"
              >
                Tutorials ▼
              </button>
              {openDropdown === "tutorials" && (
                <div className="absolute top-full mt-2 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 shadow-lg rounded w-48 z-50">
                  <a href="#" className="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600">React Basics</a>
                </div>
              )}
            </div>

            <div className="relative">
              <button
                onClick={() => toggleDropdown("projects")}
                className="font-semibold text-gray-800 dark:text-gray-200 hover:text-green-600 dark:hover:text-green-400"
              >
                Projects ▼
              </button>
              {openDropdown === "projects" && (
                <div className="absolute top-full mt-2 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 shadow-lg rounded w-48 z-50">
                  <a href="#" className="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600">Project 1</a>
                </div>
              )}
            </div>

            <a href="#" className="font-semibold text-gray-800 dark:text-gray-200 hover:text-green-600 dark:hover:text-green-400">About</a>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleTheme}
              className="relative w-14 h-7 rounded-full bg-gray-300 dark:bg-green-400 transition-colors duration-300 focus:outline-none"
              aria-label="Toggle dark mode"
            >
              <span
                className={`absolute top-0.5 left-0.5 w-6 h-6 rounded-full bg-white shadow-md transition-transform duration-300 ${
                  theme === "dark" ? "translate-x-7" : "translate-x-0"
                }`}
              />
            </button>

            {/* Search Bar */}
            <input
              type="text"
              placeholder="Search..."
              className="px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex flex-col justify-center items-center gap-1.5 p-3 min-w-[44px] min-h-[44px]"
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-gray-800 dark:bg-gray-200 transition-transform duration-300 ${mobileMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-gray-800 dark:bg-gray-200 transition-opacity duration-300 ${mobileMenuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-gray-800 dark:bg-gray-200 transition-transform duration-300 ${mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 border-t border-gray-200 dark:border-gray-600 pt-4">
            <nav className="flex flex-col gap-4">
              <div>
                <button
                  onClick={() => toggleDropdown("tutorials")}
                  className="font-semibold text-gray-800 dark:text-gray-200 hover:text-green-600 dark:hover:text-green-400 w-full text-left"
                >
                  Tutorials ▼
                </button>
                {openDropdown === "tutorials" && (
                  <div className="mt-2 ml-4">
                    <a href="#" className="block py-3 text-gray-800 dark:text-gray-200 hover:text-green-400 min-h-[44px]">React Basics</a>
                  </div>
                )}
              </div>

              <div>
                <button
                  onClick={() => toggleDropdown("projects")}
                  className="font-semibold text-gray-800 dark:text-gray-200 hover:text-green-600 dark:hover:text-green-400 w-full text-left"
                >
                  Projects ▼
                </button>
                {openDropdown === "projects" && (
                  <div className="mt-2 ml-4">
                    <a href="#" className="block py-3 text-gray-800 dark:text-gray-200 hover:text-green-400 min-h-[44px]">Project 1</a>
                  </div>
                )}
              </div>

              <a href="#" className="font-semibold text-gray-800 dark:text-gray-200 hover:text-green-600 dark:hover:text-green-400">About</a>

              {/* Mobile Search */}
              <input
                type="text"
                placeholder="Search..."
                className="px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              {/* Mobile Dark Mode Toggle */}
              <div className="flex items-center justify-between">
                <span className="text-gray-800 dark:text-gray-200 font-semibold">Dark Mode</span>
                <button
                  onClick={toggleTheme}
                  className="relative w-14 h-7 rounded-full bg-gray-300 dark:bg-green-400 transition-colors duration-300 focus:outline-none"
                  aria-label="Toggle dark mode"
                >
                  <span
                    className={`absolute top-0.5 left-0.5 w-6 h-6 rounded-full bg-white shadow-md transition-transform duration-300 ${
                      theme === "dark" ? "translate-x-7" : "translate-x-0"
                    }`}
                  />
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}