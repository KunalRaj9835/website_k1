"use client";

import { useEffect, useCallback, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import YellowButton from "./YellowButton";


export default function Carousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  const SLIDES = [
    {
      id: 1,
      title: "Keptal :  Make your data AI-ready",
      text: "Powering smart manufacturing with robotics, IoT, and intelligent automation systems.",
      bg: "/carousel/liquid.mp4",
      href: "/banner/banner7",
    },
    {
      id: 2,
      title: "Making your data AI-ready, from edge to enterprise.",
      text: "Keptel combines deep engineering, cloud, and analytics expertise to turn fragmented data into AI-ready, governed, and actionable intelligence across your business.",
      bg: "/carousel/ai.avif",
      href: "/banner/banner8"
    },
    {
      id: 3,
      title: "A proven leader in AI innovation and data modernization",
      text: "Keptel recognized for its excellence in AI engineering, scalable data platforms, and enterprise-wide modernization solutions across industries.",
      bg: "/carousel/wave.gif",
      href: "/banner/banner9",
    },
    {
      id: 4,
      title: "Why Keptel ?",
      text: "Keptel orchestrates AI models, engineering expertise, and analytics to drive measurable transformation across industries. Unlike traditional solutions",
      bg: "/carousel/light.webp",
      href: "/banner/banner10",
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
        return prev + (100 / 50);
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

  const isVideo = (url) => url.toLowerCase().endsWith('.mp4');

  return (
    <div className="relative overflow-hidden h-[95vh]">
      <div className="overflow-hidden h-full" ref={emblaRef}>
        <div className="flex h-full">
          {SLIDES.map((slide) => {
            const isMP4 = isVideo(slide.bg);

            return (
              <div
                key={slide.id}
                className={`min-w-full h-full relative flex items-center ${
                  isMP4 ? 'bg-black' : 'justify-start'
                }`}
              >
                {isMP4 ? (
                  // MP4 Layout: Video on left, content on right
                  <>
                    {/* Video on Left Side */}
                    <div className="w-1/2 h-full flex items-center justify-center p-10">
                      <video
                        src={slide.bg}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>

                    {/* Text Content on Right Side */}
                    <div className="w-1/2 h-full flex items-center px-10 md:px-20">
                      <div className="text-white max-w-2xl">
                        <h2 className="text-5xl font-bold mb-4">{slide.title}</h2>
                        <p className="text-xl leading-relaxed mb-8">{slide.text}</p>
                        <YellowButton text="Know More" href={slide.href} />
                      </div>
                    </div>
                  </>
                ) : (
                  // GIF/Image Layout: Full background with overlay
                  <>
                    {/* BACKGROUND IMAGE */}
                    <img
                      src={slide.bg}
                      alt={slide.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />

                    {/* DARK OVERLAY */}
                    <div className="absolute inset-0 bg-black/40"></div>

                    {/* TEXT CONTENT */}
                    <div className="relative z-10 text-white max-w-2xl px-10 md:px-20">
                      <h2 className="text-5xl font-bold mb-4">{slide.title}</h2>
                      <p className="text-xl leading-relaxed mb-8">{slide.text}</p>
                      <YellowButton text="Know More" href={slide.href} />
                    </div>
                  </>
                )}
              </div>
            );
          })}
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