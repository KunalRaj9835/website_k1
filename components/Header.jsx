"use client";

import { useEffect, useState, useRef } from "react";
import { Menu, X } from "lucide-react";

// Arrow Component (uses your move/up.svg and move/down.svg)
const Arrow = ({ isOpen }) => (
  <img
    src={isOpen ? "/move/up.svg" : "/move/down.svg"}
    alt="arrow"
    className="w-6 h-6 transition-transform duration-300"
  />
);

export default function Header() {
  const [showTop, setShowTop] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const closeTimeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY <= 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleEnter = (menuName) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setOpenMenu(menuName);
  };

  const handleLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setOpenMenu(null);
    }, 200);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 shadow bg-white">
      {/* Top Bar */}
      <div
        className={`transition-all duration-300 overflow-hidden bg-[#f8fafc] border-red-500 border-b
          ${showTop ? "max-h-16 opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <div className="max-w-7xl mx-auto px-6 py-3 flex justify-end gap-6 text-sm text-gray-700">
          <div className="flex items-center gap-2">
            <span>📞</span>
            <span>+918884344442</span>
          </div>
          <div className="flex items-center gap-2">
            <span>✉️</span>
            <span>info@kepteltech.com</span>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center">
            <img src="/logo.svg" alt="Logo" className="h-24 w-auto" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10 font-medium text-[#0e355d]">

            <a href="/" className="hover:text-red-500">Home</a>

            {/* ABOUT US */}
            <div 
              className="relative"
              onMouseEnter={() => handleEnter("about")}
              onMouseLeave={handleLeave}
            >
              <button className="hover:text-red-500 flex items-center gap-1">
                About Us
                <Arrow isOpen={openMenu === "about"} />
              </button>

              <div className={`absolute left-0 mt-2 bg-white shadow-lg rounded p-4 w-44
                transition-all duration-300 origin-top
                ${openMenu === "about"
                  ? "opacity-100 translate-y-0 max-h-40"
                  : "opacity-0 -translate-y-2 max-h-0 pointer-events-none"}
              `}
              >
                <a href="/about" className="block py-2 hover:text-red-500">Who We Are</a>
                <a href="/careers" className="block py-2 hover:text-red-500">Careers</a>
                <a href="/blog" className="block py-2 hover:text-red-500">Blog</a>
              </div>
            </div>

            {/* SERVICES */}
            <div 
              className="relative"
              onMouseEnter={() => handleEnter("services")}
              onMouseLeave={handleLeave}
            >
              <button className="hover:text-red-500 flex items-center gap-1">
                Services
                <Arrow isOpen={openMenu === "services"} />
              </button>

              <div className={`absolute left-0 mt-2 bg-white shadow-lg rounded p-4 w-56 
                transition-all duration-300 origin-top
                ${openMenu === "services"
                  ? "opacity-100 translate-y-0 max-h-96"
                  : "opacity-0 -translate-y-2 max-h-0 pointer-events-none"}
              `}
              >
                <a href="/talent-intelligence" className="block py-2 hover:text-red-500">Talent Intelligence</a>
                <a href="/talent-acquisition" className="block py-2 hover:text-red-500">Talent Acquisition</a>
                <a href="/global-peo-service" className="block py-2 hover:text-red-500">Global PEO Service</a>
                <a href="/rpo" className="block py-2 hover:text-red-500">Recruitment Process Outsourcing</a>
                <a href="/executive-search" className="block py-2 hover:text-red-500">Executive Search</a>
              </div>
            </div>

            {/* Scroll Links */}
            <a href="/#whyus" className="hover:text-red-500">Why Keptel</a>
            <a href="/#industries" className="hover:text-red-500">Industries</a>

            {/* CLIENTS */}
            <div 
              className="relative"
              onMouseEnter={() => handleEnter("clients")}
              onMouseLeave={handleLeave}
            >
              <button className="hover:text-red-500 flex items-center gap-1">
                Clients
                <Arrow isOpen={openMenu === "clients"} />
              </button>

              <div className={`absolute left-0 mt-2 bg-white shadow-lg rounded p-4 w-40 
                transition-all duration-300 origin-top
                ${openMenu === "clients"
                  ? "opacity-100 translate-y-0 max-h-32"
                  : "opacity-0 -translate-y-2 max-h-0 pointer-events-none"}
              `}
              >
                <a href="/case-study" className="block py-2 hover:text-red-500">Case Study</a>
              </div>
            </div>

            <button className="bg-red-500 px-6 py-3 text-white rounded-full font-semibold hover:bg-red-700">
              Speak To An Expert
            </button>
          </div>

          {/* Hamburger Button */}
          <button
            className="md:hidden text-[#0e355d]"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>

        {/* Mobile Menu (Animated) */}
        
        {/* Mobile Menu (Animated) */}
        <div
          className={`
            md:hidden bg-white overflow-hidden 
            transition-all duration-500 ease-in-out
            ${menuOpen ? "max-h-[800px] py-6" : "max-h-0 py-0"}
          `}
        >
          <div className="flex flex-col px-6 gap-4 font-medium text-[#0e355d]">

            {/* Home */}
            <a
              href="/"
              className={`
                hover:text-red-500 transform transition-all duration-500 
                ${menuOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}
              `}
              style={{ transitionDelay: "0ms" }}
            >
              Home
            </a>

            {/* About Us Dropdown */}
            <div
              className={`
                transform transition-all duration-500 
                ${menuOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}
              `}
              style={{ transitionDelay: "70ms" }}
            >
              <button 
                onClick={() => setOpenMenu(openMenu === "about-mobile" ? null : "about-mobile")}
                className="hover:text-red-500 flex items-center gap-1 w-full text-left"
              >
                About Us
                <Arrow isOpen={openMenu === "about-mobile"} />
              </button>
              <div className={`
                overflow-hidden transition-all duration-300 pl-4
                ${openMenu === "about-mobile" ? "max-h-40 mt-2" : "max-h-0"}
              `}>
                <a href="/about" className="block py-2 hover:text-red-500">Who We Are</a>
                <a href="/careers" className="block py-2 hover:text-red-500">Careers</a>
                <a href="/blog" className="block py-2 hover:text-red-500">Blog</a>
              </div>
            </div>

            {/* Services Dropdown */}
            <div
              className={`
                transform transition-all duration-500 
                ${menuOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}
              `}
              style={{ transitionDelay: "140ms" }}
            >
              <button 
                onClick={() => setOpenMenu(openMenu === "services-mobile" ? null : "services-mobile")}
                className="hover:text-red-500 flex items-center gap-1 w-full text-left"
              >
                Services
                <Arrow isOpen={openMenu === "services-mobile"} />
              </button>
              <div className={`
                overflow-hidden transition-all duration-300 pl-4
                ${openMenu === "services-mobile" ? "max-h-96 mt-2" : "max-h-0"}
              `}>
                <a href="/talent-intelligence" className="block py-2 hover:text-red-500">Talent Intelligence</a>
                <a href="/talent-acquisition" className="block py-2 hover:text-red-500">Talent Acquisition</a>
                <a href="/global-peo-service" className="block py-2 hover:text-red-500">Global PEO Service</a>
                <a href="/rpo" className="block py-2 hover:text-red-500">Recruitment Process Outsourcing</a>
                <a href="/executive-search" className="block py-2 hover:text-red-500">Executive Search</a>
              </div>
            </div>

            {/* Why Keptel */}
            <a
              href="/#whyus"
              className={`
                hover:text-red-500 transform transition-all duration-500 
                ${menuOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}
              `}
              style={{ transitionDelay: "210ms" }}
            >
              Why Keptel
            </a>

            {/* Industries */}
            <a
              href="/#industries"
              className={`
                hover:text-red-500 transform transition-all duration-500 
                ${menuOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}
              `}
              style={{ transitionDelay: "280ms" }}
            >
              Industries
            </a>

            {/* Clients Dropdown */}
            <div
              className={`
                transform transition-all duration-500 
                ${menuOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}
              `}
              style={{ transitionDelay: "350ms" }}
            >
              <button 
                onClick={() => setOpenMenu(openMenu === "clients-mobile" ? null : "clients-mobile")}
                className="hover:text-red-500 flex items-center gap-1 w-full text-left"
              >
                Clients
                <Arrow isOpen={openMenu === "clients-mobile"} />
              </button>
              <div className={`
                overflow-hidden transition-all duration-300 pl-4
                ${openMenu === "clients-mobile" ? "max-h-32 mt-2" : "max-h-0"}
              `}>
                <a href="/case-study" className="block py-2 hover:text-red-500">Case Study</a>
              </div>
            </div>

            {/* CTA Button */}
            <button 
              className={`
                bg-red-500 px-6 py-3 text-white rounded-full font-semibold hover:bg-red-700
                transform transition-all duration-500 mt-2
                ${menuOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}
              `}
              style={{ transitionDelay: "420ms" }}
            >
              Speak To An Expert
            </button>

          </div>
        </div>
      </nav>
    </header>
  );
}
