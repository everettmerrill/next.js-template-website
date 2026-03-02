"use client";

import { useState, useRef, useEffect } from "react";

export default function Header() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header ref={headerRef}>
      {/* Ad Banner */}
      <div className="w-full bg-green-400 text-black text-center py-2 px-4 text-sm font-semibold">
        🎉 Special Offer: Learn Full-Stack Development Today!
      </div>

      {/* Main Header */}
      <div className="w-full bg-green shadow-md py-4 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Logo */}
          <div className="text-2xl font-bold text-green-400">
            EM
          </div>

          {/* Center Dropdown Buttons */}
          <nav className="flex gap-6">
            <div className="relative">
              <button
                onClick={() => toggleDropdown("tutorials")}
                className="font-semibold hover:text-green-600"
              >
                Tutorials ▼
              </button>
              {openDropdown === "tutorials" && (
                <div className="absolute top-full mt-2 bg-gray-1000 border shadow-lg rounded w-48">
                  <a href="#" className="block px-4 py-2 hover:bg-gray-1000">React Basics</a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-1000">Next.js Advanced</a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-1000">TypeScript Tips</a>
                </div>
              )}
            </div>

            <div className="relative">
              <button
                onClick={() => toggleDropdown("projects")}
                className="font-semibold hover:text-green-600"
              >
                Projects ▼
              </button>
              {openDropdown === "projects" && (
                <div className="absolute top-full mt-2 bg-gray-1000 border shadow-lg rounded w-48">
                  <a href="#" className="block px-4 py-2 hover:bg-gray-1000">Portfolio Site</a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-1000">Code Sandbox</a>
                </div>
              )}
            </div>

            <a href="#" className="font-semibold hover:text-green-600">About</a>
          </nav>

          {/* Search Bar */}
          <input
            type="text"
            placeholder="Search..."
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
    </header>
  );
}