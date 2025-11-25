"use client";

import { useEffect, useCallback, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import YellowButton from "./YellowButton";

export default function Carousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const SLIDES = [
    {
  id: 1,
  title: "Industrial Automation",
  text: "Powering smart manufacturing with robotics, IIoT, and intelligent automation systems.",
  bg: "/carousel/Automation.gif",
  href: "/banner/banner1",
},
{
  id: 2,
  title: "Healthcare Digital Transformation",
  text: "Enabling patient-centric, data-driven care with AI, telemedicine, and cloud technologies.",
  bg: "/carousel/healthcare.gif",
  href: "/banner/banner2",
},
{
  id: 3,
  title: "IT Services & Digital Engineering",
  text: "Accelerating enterprise transformation through cloud, AI/ML, and scalable digital platforms.",
  bg: "/carousel/server.gif",
  href: "/banner/banner3",
},
{
  id: 4,
  title: "IoT & Embedded Systems",
  text: "Driving renewable energy, smart infrastructure, and edge intelligence through embedded innovation.",
  bg: "/carousel/windmill.gif",
  href: "/banner/banner4",
},

  ];

  const autoplay = useCallback(() => {
    if (!emblaApi) return;
    const nextIndex = emblaApi.selectedScrollSnap() + 1;
    emblaApi.scrollTo(nextIndex);
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const interval = setInterval(autoplay, 50000);
    return () => clearInterval(interval);
  }, [emblaApi, autoplay]);

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
              <div className="relative z-10 text-white max-w-2xl px-10 md:px-20 mt-60">
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

      {/* RING INDICATORS */}
      <div className="absolute bottom-6 w-full flex justify-center gap-4 z-20">
        {SLIDES.map((_, index) => (
          <div
            key={index}
            onClick={() => emblaApi && emblaApi.scrollTo(index)}
            className="cursor-pointer flex items-center justify-center"
          >
            <div
              className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition
                ${selectedIndex === index ? "border-white" : "border-white/50"}`}
            >
              {/* ACTIVE INNER DOT */}
              {selectedIndex === index && (
                <div className="w-3 h-3 rounded-full bg-white"></div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
