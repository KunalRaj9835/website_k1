"use client";

import { useEffect, useCallback, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Link from "next/link";
import YellowButton from "./YellowButton";

export default function Carousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const SLIDES = [
    {
      id: 1,
      title: "Talent Intelligence",
      text: "Achieving edge with actionable talent insights backed by strong market research by domain & location",
      img: "/banner/Banner-images-01.svg",
      href: "/talent-intelligence",
    },
    {
      id: 2,
      title: "Talent Acquisition",
      text: "Identifying the right talent fit for your organization with Competitive advantages",
      img: "/banner/Banner-images-02.svg",
      href: "/talent-acquisition",
    },
    {
      id: 3,
      title: "Executive Search & Board Room Hiring",
      text: "Getting impactful leaders according to business and cultural needs",
      img: "/banner/Banner-images-03.png",
      href: "/executive-search",
    },
    {
      id: 4,
      title: "Recruitment Process Outsourcing",
      text: "Data backed human approach to deliver exceptional results with cost & time efficiency.",
      img: "/banner/Banner-images-04.svg",
      href: "/rpo",
    },
    {
      id: 5,
      title: "Global PEO Service",
      text: "Building Remote Talent pool in India with all Legal compliances & people processes.",
      img: "/banner/Banner-images-05.svg",
      href: "/global-peo-service",
    },
  ];

  const autoplay = useCallback(() => {
    if (!emblaApi) return;
    const nextIndex = emblaApi.selectedScrollSnap() + 1;
    emblaApi.scrollTo(nextIndex);
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const interval = setInterval(autoplay, 3000);
    return () => clearInterval(interval);
  }, [emblaApi, autoplay]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi]);

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  return (
    <div className="relative overflow-hidden bg-[#0e355d]">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">

          {/* SLIDES */}
          {SLIDES.map((slide) => (
            <div
              key={slide.id}
              className="min-w-full flex items-center justify-center gap-8 px-10 md:px-20 py-8"
            >
              {/* LEFT TEXT */}
              <div className="text-white max-w-lg">
                <h2 className="text-5xl font-bold mb-4">{slide.title}</h2>
                <p className="text-xl leading-relaxed mb-8">{slide.text}</p>
                <YellowButton text="Know More" href={slide.href} />
              </div>

              {/* RIGHT IMAGE */}
              <div className="hidden md:flex justify-center">
                <img src={slide.img} alt={slide.title} className="w-[480px]" />
              </div>
            </div>
          ))}

        </div>
      </div>

      {/* LEFT ARROW */}
      <button
        onClick={scrollPrev}
        className="absolute left-5 top-1/2 -translate-y-1/2 text-white text-4xl"
      >
        ‹
      </button>

      {/* RIGHT ARROW */}
      <button
        onClick={scrollNext}
        className="absolute right-5 top-1/2 -translate-y-1/2 text-white text-4xl"
      >
        ›
      </button>

      {/* DOTS */}
      <div className="absolute bottom-6 w-full flex justify-center gap-3">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => emblaApi?.scrollTo(i)}
            className={`w-3 h-3 rounded-full ${
              selectedIndex === i ? "bg-white" : "border border-white"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}
