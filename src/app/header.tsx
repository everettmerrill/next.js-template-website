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
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          
          {/* Logo */}
          <a href="/" className="text-3xl font-black text-green-400 hover:opacity-80 transition-opacity leading-none">
            EM
          </a>

          {/* Desktop Nav - Centered */}
          <nav className="hidden md:flex gap-16">
            <a href="/about" className="font-extrabold text-gray-800 dark:text-gray-200 hover:text-green-600 dark:hover:text-green-400">About</a>

            <div className="relative">
              <button
                onClick={() => toggleDropdown("resources")}
                className="font-extrabold text-gray-800 dark:text-gray-200 hover:text-green-600 dark:hover:text-green-400"
              >
                Resources
              </button>
              {openDropdown === "resources" && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 shadow-lg rounded w-48 z-50">
                  <a href="/tutorials" className="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600">Tutorials</a>
                  <a href="/articles" className="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600">Articles</a>
                  <a href="/mars" className="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600">Visit Mars</a>
                  <a href="/snake" className="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600">Play Snake</a>
                </div>
              )}
            </div>

            <div className="relative">
              <button
                onClick={() => toggleDropdown("contact")}
                className="font-extrabold text-gray-800 dark:text-gray-200 hover:text-green-600 dark:hover:text-green-400"
              >
                Contact
              </button>
              {openDropdown === "contact" && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 shadow-lg rounded w-48 z-50">
                  <a href="https://github.com/everettmerrill" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600">GitHub</a>
                  <a href="https://www.linkedin.com/in/everett-merrill/" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600">LinkedIn</a>
                  <a href="mailto:your@email.com" className="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600">Email</a>
                </div>
              )}
            </div>
          </nav>

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleTheme}
            className="hidden md:block relative w-14 h-7 rounded-full bg-gray-300 dark:bg-green-400 transition-colors duration-300 focus:outline-none"
            aria-label="Toggle dark mode"
          >
            <span
              className={`absolute top-0.5 left-0.5 w-6 h-6 rounded-full bg-white shadow-md transition-transform duration-300 ${
                theme === "dark" ? "translate-x-7" : "translate-x-0"
              }`}
            />
          </button>

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
              <a href="/about" className="font-semibold text-gray-800 dark:text-gray-200 hover:text-green-600 dark:hover:text-green-400">About</a>

              <div>
                <button
                  onClick={() => toggleDropdown("resources")}
                  className="font-semibold text-gray-800 dark:text-gray-200 hover:text-green-600 dark:hover:text-green-400 w-full text-left"
                >
                  Resources
                </button>
                {openDropdown === "resources" && (
                  <div className="mt-2 ml-4 flex flex-col gap-1">
                    <a href="/tutorials" className="block py-3 text-gray-800 dark:text-gray-200 hover:text-green-400 min-h-[44px]">Tutorials</a>
                    <a href="/articles" className="block py-3 text-gray-800 dark:text-gray-200 hover:text-green-400 min-h-[44px]">Articles</a>
                    <a href="/mars" className="block py-3 text-gray-800 dark:text-gray-200 hover:text-green-400 min-h-[44px]">Visit Mars</a>
                    <a href="/snake" className="block py-3 text-gray-800 dark:text-gray-200 hover:text-green-400 min-h-[44px]">Play Snake</a>
                  </div>
                )}
              </div>

              <div>
                <button
                  onClick={() => toggleDropdown("contact")}
                  className="font-semibold text-gray-800 dark:text-gray-200 hover:text-green-600 dark:hover:text-green-400 w-full text-left"
                >
                  Contact
                </button>
                {openDropdown === "contact" && (
                  <div className="mt-2 ml-4 flex flex-col gap-1">
                    <a href="https://github.com/everettmerrill" target="_blank" rel="noopener noreferrer" className="block py-3 text-gray-800 dark:text-gray-200 hover:text-green-400 min-h-[44px]">GitHub</a>
                    <a href="https://www.linkedin.com/in/everett-merrill/" target="_blank" rel="noopener noreferrer" className="block py-3 text-gray-800 dark:text-gray-200 hover:text-green-400 min-h-[44px]">LinkedIn</a>
                    <a href="mailto:your@email.com" className="block py-3 text-gray-800 dark:text-gray-200 hover:text-green-400 min-h-[44px]">Email</a>
                  </div>
                )}
              </div>

               {/* Mobile Dark Mode Toggle */}
              <div className="flex items-center justify-between">
                <span className="text-gray-800 dark:text-gray-200 font-semibold">
                  {theme === "dark" ? "Light Mode" : "Dark Mode"}
                </span>
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