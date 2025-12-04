"use client";

import { useEffect, useState, useRef } from "react";
import { Menu, X } from "lucide-react";

import { useRouter, usePathname } from "next/navigation";
interface ArrowProps {
  isOpen: boolean;
}

const Arrow = ({ isOpen }: ArrowProps) => (
  <img
    src={isOpen ? "/move/up.svg" : "/move/down.svg"}
    alt="arrow"
    className="w-6 h-6 transition-transform duration-300"
  />
);

type MenuKey =
  | "tech"
  | "domain"
  | "services"
  | "company"
  | "tech-mobile"
  | "domain-mobile"
  | "services-mobile"
  | "company-mobile"
  | null;

export default function Header() {
  const [showTop, setShowTop] = useState<boolean>(true);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [openMenu, setOpenMenu] = useState<MenuKey>(null);

  // Copy System
  const phoneRef = useRef<HTMLSpanElement>(null!);
  const emailRef = useRef<HTMLSpanElement>(null!);
  const containerRef = useRef<HTMLDivElement>(null);

  const [activeCopy, setActiveCopy] = useState<"phone" | "email" | null>(null);

  const selectText = (ref: React.RefObject<HTMLSpanElement>, key: "phone" | "email") => {
    const el = ref.current;
    if (!el) return;

    const range = document.createRange();
    range.selectNodeContents(el);

    const sel = window.getSelection();
    sel?.removeAllRanges();
    sel?.addRange(range);

    setActiveCopy(key);
  };

  const copyText = async (value: string) => {
    await navigator.clipboard.writeText(value);

    window.getSelection()?.removeAllRanges();
    setActiveCopy(null);
  };

  // Close copy overlay if clicked outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (!containerRef.current) return;
      if (!containerRef.current.contains(e.target as Node)) {
        setActiveCopy(null);
        window.getSelection()?.removeAllRanges();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Header hide on scroll
  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY <= 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Desktop menu hover timer
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleEnter = (menuName: MenuKey) => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    setOpenMenu(menuName);
  };

  const handleLeave = () => {
    closeTimeoutRef.current = setTimeout(() => setOpenMenu(null), 200);
  };
const router = useRouter();
  const pathname = usePathname();

  const handleLogoClick = () => {
    // 1. If not on home → go to home
    if (pathname !== "/") {
      router.push("/");
      return;
    }

    // 2. If on home → check scroll position
    if (window.scrollY > 10) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    // 3. If already at top → do nothing
  };
  const handleMobileNavigate = () => {
  setOpenMenu(null);        // closes dropdowns
  setMenuOpen(false);       // closes full mobile menu
};


  return (
    <div className="fixed top-0 left-0 w-full z-50">
      {/* TOP BAR - Collapsible */}
      <div
        className={`transition-all duration-300 overflow-hidden bg-white shadow
          ${showTop ? "max-h-16 opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <div
          ref={containerRef}
          className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-end gap-6 text-gray-700"
        >
          {/* PHONE */}
          <div className="relative inline-flex items-center gap-2">
            <img src="/header/phone2.svg" alt="phone" className="w-5 h-5" />

            <span
              ref={phoneRef}
              className="cursor-pointer select-text relative"
              onClick={() => selectText(phoneRef, "phone")}
            >
              +918884344442
            </span>

            {activeCopy === "phone" && (
              <button
  className="
    absolute top-0 left-0
    h-full
    w-[calc(100%+20px)]
    bg-black text-white text-xs 
    flex items-center justify-center
    rounded z-20
  "
  onClick={() => copyText("+918884344442")}
>
  Copy
</button>

            )}
          </div>

          {/* EMAIL */}
          <div className="relative inline-flex items-center gap-2">
            <img src="/header/email.svg" alt="email" className="w-5 h-5" />

            <span
              ref={emailRef}
              className="cursor-pointer select-text relative"
              onClick={() => selectText(emailRef, "email")}
            >
              info@kepteltech.com
            </span>

            {activeCopy === "email" && (
              <button
                className="
                  absolute top-0 left-0
    h-full
    w-[calc(100%+20px)]
    bg-black text-white text-xs 
    flex items-center justify-center
    rounded z-20
                "
                onClick={() => copyText("info@kepteltech.com")}
              >
                Copy
              </button>
            )}
          </div>
        </div>
      </div>

      {/* NAVIGATION - Always Visible */}
      <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <button onClick={handleLogoClick} className="flex items-center -ml-12">
            <img src="/logo.svg" alt="Logo" className="h-28 w-auto" />
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6 font-medium text-[#0e355d] text-sm">
            <a href="/#whyus" className="hover:text-red-500">Why Us</a>

            {/* TECH */}
            <div
              className="relative"
              onMouseEnter={() => handleEnter("tech")}
              onMouseLeave={handleLeave}
            >
              <button className="hover:text-red-500 flex items-center gap-1">
                Technology Expertise <Arrow isOpen={openMenu === "tech"} />
              </button>

              <div
                className={`absolute right-0 mt-2 bg-white shadow-lg rounded p-4 w-64 transition-all duration-300 origin-top
                  ${
                    openMenu === "tech"
                      ? "opacity-100 translate-y-0 max-h-96"
                      : "opacity-0 -translate-y-2 max-h-0 pointer-events-none"
                  }
                `}
              >
                <a href="/data/data-modernization" className="block py-2 hover:text-red-500">Data Modernization</a>
                <a href="/data/aritifical-intelligence" className="block py-2 hover:text-red-500">Artificial Intelligence</a>
                <a href="/data/ai-powered-operations" className="block py-2 hover:text-red-500">AI Powered Operations</a>
              </div>
            </div>

            {/* DOMAIN */}
            <div
              className="relative"
              onMouseEnter={() => handleEnter("domain")}
              onMouseLeave={handleLeave}
            >
              <button className="hover:text-red-500 flex items-center gap-1">
                Domain <Arrow isOpen={openMenu === "domain"} />
              </button>

              <div
                className={`absolute right-0 mt-2 bg-white shadow-lg rounded p-4 w-72 transition-all duration-300 origin-top
                  ${
                    openMenu === "domain"
                      ? "opacity-100 translate-y-0 max-h-96"
                      : "opacity-0 -translate-y-2 max-h-0 pointer-events-none"
                  }
                `}
              >
                <a href="/case-study/case1" className="block py-2 hover:text-red-500">IT Services & Digital Engineering</a>
                <a href="/case-study/case2" className="block py-2 hover:text-red-500">Automotive Engineering</a>
                <a href="/case-study/case3" className="block py-2 hover:text-red-500">Aerospace & Defence</a>
                <a href="/case-study/case4" className="block py-2 hover:text-red-500">Industrial Automation</a>
                <a href="/case-study/case5" className="block py-2 hover:text-red-500">Healthcare Technology</a>
                <a href="/case-study/case6" className="block py-2 hover:text-red-500">IoT & Embedded Systems</a>
              </div>
            </div>

            {/* SERVICES */}
            <div
              className="relative"
              onMouseEnter={() => handleEnter("services")}
              onMouseLeave={handleLeave}
            >
              <button className="hover:text-red-500 flex items-center gap-1">
                Services <Arrow isOpen={openMenu === "services"} />
              </button>

              <div
                className={`absolute right-0 mt-2 bg-white shadow-lg rounded p-4 w-80 transition-all duration-300 origin-top
                  ${
                    openMenu === "services"
                      ? "opacity-100 translate-y-0 max-h-96"
                      : "opacity-0 -translate-y-2 max-h-0 pointer-events-none"
                  }
                `}
              >
                <a href="/talent-intelligence" className="block py-2 hover:text-red-500">Talent Intelligence</a>
                <a href="/talent-acquisition" className="block py-2 hover:text-red-500">Talent Acquisition</a>
                <a href="/global-peo-service" className="block py-2 hover:text-red-500">Global PEO Service</a>
                <a href="/rpo" className="block py-2 hover:text-red-500">Recruitment Process Outsourcing</a>
                <a href="/executive-search" className="block py-2 hover:text-red-500">Executive Search</a>
              </div>
            </div>

            {/* COMPANY */}
            <div
              className="relative"
              onMouseEnter={() => handleEnter("company")}
              onMouseLeave={handleLeave}
            >
              <button className="hover:text-red-500 flex items-center gap-1">
                Company <Arrow isOpen={openMenu === "company"} />
              </button>

              <div
                className={`absolute right-0 mt-2 bg-white shadow-lg rounded p-4 w-44 transition-all duration-300 origin-top
                  ${
                    openMenu === "company"
                      ? "opacity-100 translate-y-0 max-h-52"
                      : "opacity-0 -translate-y-2 max-h-0 pointer-events-none"
                  }
                `}
              >
                <a href="/about" className="block py-2 hover:text-red-500">About Us</a>
                <a href="/careers" className="block py-2 hover:text-red-500">Careers</a>
                <a href="/blog" className="block py-2 hover:text-red-500">Blog</a>
                <a href="/contact-us" className="block py-2 hover:text-red-500">Contact</a>
              </div>
            </div>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden text-[#0e355d]"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {/* MOBILE MENU */}
<div
  className={`md:hidden bg-white overflow-hidden transition-all duration-500
    ${menuOpen ? "max-h-[900px] py-6" : "max-h-0 py-0"}
  `}
>
  <div className="flex flex-col px-6 gap-4 font-medium text-[#0e355d] text-sm">
    <a href="/#whyus" onClick={handleMobileNavigate} className="hover:text-red-500">
      Why Us
    </a>

    {/* TECH MOBILE */}
    <div>
      <button
        onClick={() =>
          setOpenMenu(openMenu === "tech-mobile" ? null : "tech-mobile")
        }
        className="hover:text-red-500 flex items-center gap-1 w-full text-left"
      >
        Technology Expertise <Arrow isOpen={openMenu === "tech-mobile"} />
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 pl-4
          ${openMenu === "tech-mobile" ? "max-h-80 mt-2" : "max-h-0"}
        `}
      >
        <a href="/data/data-modernization" className="block py-2" onClick={handleMobileNavigate}>
          Data Modernization
        </a>
        <a href="/data/aritifical-intelligence" className="block py-2" onClick={handleMobileNavigate}>
          Artificial Intelligence
        </a>
        <a href="/data/ai-powered-operations" className="block py-2" onClick={handleMobileNavigate}>
          AI Powered Operations
        </a>
      </div>
    </div>

    {/* DOMAIN MOBILE */}
    <div>
      <button
        onClick={() =>
          setOpenMenu(openMenu === "domain-mobile" ? null : "domain-mobile")
        }
        className="hover:text-red-500 flex items-center gap-1 w-full text-left"
      >
        Domain <Arrow isOpen={openMenu === "domain-mobile"} />
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 pl-4
          ${openMenu === "domain-mobile" ? "max-h-96 mt-2" : "max-h-0"}
        `}
      >
        <a href="/case-study/case1" className="block py-2" onClick={handleMobileNavigate}>IT Services</a>
        <a href="/case-study/case2" className="block py-2" onClick={handleMobileNavigate}>Automotive Engineering</a>
        <a href="/case-study/case3" className="block py-2" onClick={handleMobileNavigate}>Aerospace & Defence</a>
        <a href="/case-study/case4" className="block py-2" onClick={handleMobileNavigate}>Industrial Automation</a>
        <a href="/case-study/case5" className="block py-2" onClick={handleMobileNavigate}>Healthcare Technology</a>
        <a href="/case-study/case6" className="block py-2" onClick={handleMobileNavigate}>IoT & Embedded Systems</a>
      </div>
    </div>

    {/* SERVICES MOBILE */}
    <div>
      <button
        onClick={() =>
          setOpenMenu(openMenu === "services-mobile" ? null : "services-mobile")
        }
        className="hover:text-red-500 flex items-center gap-1 w-full text-left"
      >
        Services <Arrow isOpen={openMenu === "services-mobile"} />
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 pl-4
          ${openMenu === "services-mobile" ? "max-h-96 mt-2" : "max-h-0"}
        `}
      >
        <a href="/talent-intelligence" className="block py-2" onClick={handleMobileNavigate}>Talent Intelligence</a>
        <a href="/talent-acquisition" className="block py-2" onClick={handleMobileNavigate}>Talent Acquisition</a>
        <a href="/global-peo-service" className="block py-2" onClick={handleMobileNavigate}>Global PEO Service</a>
        <a href="/rpo" className="block py-2" onClick={handleMobileNavigate}>Recruitment Process Outsourcing</a>
        <a href="/executive-search" className="block py-2" onClick={handleMobileNavigate}>Executive Search</a>
      </div>
    </div>

    {/* COMPANY MOBILE */}
    <div>
      <button
        onClick={() =>
          setOpenMenu(openMenu === "company-mobile" ? null : "company-mobile")
        }
        className="hover:text-red-500 flex items-center gap-1 w-full text-left"
      >
        Company <Arrow isOpen={openMenu === "company-mobile"} />
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 pl-4
          ${openMenu === "company-mobile" ? "max-h-60 mt-2" : "max-h-0"}
        `}
      >
        <a href="/about" className="block py-2" onClick={handleMobileNavigate}>About Us</a>
        <a href="/careers" className="block py-2" onClick={handleMobileNavigate}>Careers</a>
        <a href="/blog" className="block py-2" onClick={handleMobileNavigate}>Blog</a>
        <a href="/contact-us" className="block py-2" onClick={handleMobileNavigate}>Contact</a>
      </div>
    </div>

  </div>
</div>

      </nav>
    </div>
  );
}