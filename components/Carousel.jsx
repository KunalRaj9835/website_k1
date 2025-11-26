"use client";

import { useEffect, useCallback, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import YellowButton from "./YellowButton";
// YellowButton Component

export default function Carousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  const SLIDES = [
    {
      id: 1,
      title: "Industrial Automation",
      text: "Powering smart manufacturing with robotics, IoT, and intelligent automation systems.",
      bg: "/carousel/Automation.gif",
      href: "/banner/banner4",
    },
    {
      id: 2,
      title: "Healthcare Digital Transformation",
      text: "Enabling patient-centric, data-driven care with AI, telemedicine, and cloud technologies.",
      bg: "/carousel/healthcare.gif",
      href: "/banner/banner3",
    },
    {
      id: 3,
      title: "IT Services & Digital Engineering",
      text: "Accelerating enterprise transformation through cloud, AI/ML, and scalable digital platforms.",
      bg: "/carousel/server.gif",
      href: "/banner/banner1",
    },
    {
      id: 4,
      title: "IoT & Embedded Systems",
      text: "Driving renewable energy, smart infrastructure, and edge intelligence through embedded innovation.",
      bg: "/carousel/windmill.gif",
      href: "/banner/banner2",
    },
    {
      id: 5,
      title: "Aerospace & Defence",
      text: "Engineering mission-critical avionics, autonomous systems, and next-generation defense technologies.",
      bg: "/carousel/aerospace.gif",
      href: "/banner/banner6",
    },
    {
      id: 6,
      title: "Automotive Engineering",
      text: "Shaping electric, autonomous, and software-defined vehicles with advanced automotive innovation.",
      bg: "/carousel/car.gif",
      href: "/banner/banner5",
    },
  ];

  const autoplay = useCallback(() => {
    if (!emblaApi) return;
    const nextIndex = emblaApi.selectedScrollSnap() + 1;
    emblaApi.scrollTo(nextIndex);
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setProgress(0);
    const interval = setInterval(autoplay, 5000);
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 0;
        return prev + (100 / 50); // 30 steps over 3 seconds
      });
    }, 100);
    return () => {
      clearInterval(interval);
      clearInterval(progressInterval);
    };
  }, [emblaApi, autoplay, selectedIndex]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi]);

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  return (
    <div className="relative overflow-hidden h-[81vh]">
      <div className="overflow-hidden h-full" ref={emblaRef}>
        <div className="flex h-full">
          {SLIDES.map((slide) => (
            <div
              key={slide.id}
              className="min-w-full h-full relative flex items-center justify-start"
            >
              {/* BACKGROUND GIF */}
              <img
                src={slide.bg}
                alt={slide.title}
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* DARK OVERLAY */}
              <div className="absolute inset-0 bg-black/40"></div>

              {/* TEXT CONTENT */}
              <div className="relative z-10 text-white max-w-2xl px-10 md:px-20 mt-45">
                <h2 className="text-5xl font-bold mb-4">{slide.title}</h2>
                <p className="text-xl leading-relaxed mb-8">{slide.text}</p>
                <YellowButton text="Know More" href={slide.href} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* LARGE WHITE LEFT ARROW */}
      <button
        onClick={scrollPrev}
        className="absolute left-5 top-1/2 -translate-y-1/2 z-20 text-white text-6xl font-bold opacity-80 hover:opacity-100"
      >
        &#8249;
      </button>

      {/* LARGE WHITE RIGHT ARROW */}
      <button
        onClick={scrollNext}
        className="absolute right-5 top-1/2 -translate-y-1/2 z-20 text-white text-6xl font-bold opacity-80 hover:opacity-100"
      >
        &#8250;
      </button>

      {/* PROGRESS BAR INDICATORS */}
      <div className="absolute bottom-6 w-full flex justify-start gap-1.5 z-20 px-10 pl-22">
  {SLIDES.map((_, index) => (
    <div
      key={index}
      onClick={() => {
        emblaApi && emblaApi.scrollTo(index);
        setProgress(0);
      }}
      className="cursor-pointer flex-1 max-w-[120px] h-3 bg-white/30 rounded-none overflow-hidden"
    >
      <div
        className="h-full bg-red-500 rounded-none transition-all duration-100 ease-linear"
        style={{
          width:
            selectedIndex === index
              ? `${progress}%`
              : selectedIndex > index
              ? "100%"
              : "0%",
        }}
      ></div>
    </div>
  ))}
</div>

    </div>
  );
}