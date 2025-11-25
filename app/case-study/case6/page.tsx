"use client";

import ServiceHero from "@/components/ServiceHero";
import Footer from "@/components/Footer";

export default function CaseStudyPage() {
  const title = "Case Study : IoT & Embedded Systems";
  const bg = "/services-bg.jpg";

  return (
    <div>
      <ServiceHero title={title} bg={bg} />

      <div className="max-w-6xl mx-auto px-6 py-20">

        <p className="text-xl font-semibold text-gray-800 mb-10">
          Domain : <span className="font-normal">Firmware, Devices & Edge Engineering</span>
        </p>

        <div className="bg-gray-100 rounded-xl p-10 mb-10 shadow-sm">
          <h3 className="text-2xl font-semibold text-[#0e355d] mb-4">
            Problem Statement
          </h3>

          <p className="text-gray-700 leading-relaxed">
            The client required engineers with expertise in firmware development,
            device drivers, kernel-level programming, and real-time systems. The
            challenge was sourcing engineers with hands-on experience across
            multiple hardware environments.
          </p>
        </div>

        <div className="bg-gray-100 rounded-xl p-10 shadow-sm">
          <h3 className="text-2xl font-semibold text-[#0e355d] mb-4">
            Keptel Global's Approach & Solution
          </h3>

          <p className="text-gray-700 leading-relaxed">
            Keptel identified embedded engineers with deep experience in C/C++,
            RTOS, Linux kernel, hardware boards, and edge computing frameworks.
            The team enabled faster prototyping, optimized firmware
            performance, and strengthened device reliability across product
            lines.
          </p>
        </div>

      </div>
      <Footer />
    </div>
  );
}
