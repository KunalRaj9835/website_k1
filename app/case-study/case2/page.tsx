"use client";

import ServiceHero from "@/components/ServiceHero";
import Footer from "@/components/Footer";

export default function CaseStudyPage() {
  const title = "Case Study : Automotive Engineering";
  const bg = "/services-bg.jpg";

  return (
    <div>
      <ServiceHero title={title} bg={bg} />

      <div className="max-w-6xl mx-auto px-6 py-20">

        <p className="text-xl font-semibold text-gray-800 mb-10">
          Domain : <span className="font-normal">Embedded Systems & Functional Safety</span>
        </p>

        <div className="bg-gray-100 rounded-xl p-10 mb-10 shadow-sm">
          <h3 className="text-2xl font-semibold text-[#0e355d] mb-4">
            Problem Statement
          </h3>

          <p className="text-gray-700 leading-relaxed">
            A global automotive OEM required engineers with deep expertise in
            AUTOSAR, ADAS, ECU validation, and functional safety engineering.
            Their challenge was finding specialists who could work on advanced
            automotive electronics while meeting strict delivery and compliance
            timelines.
          </p>
        </div>

        <div className="bg-gray-100 rounded-xl p-10 shadow-sm">
          <h3 className="text-2xl font-semibold text-[#0e355d] mb-4">
            Keptel Global's Approach & Solution
          </h3>

          <p className="text-gray-700 leading-relaxed">
            Keptel curated a niche talent pool with AUTOSAR BSW, ADAS, HIL
            testing, and ISO 26262 skill sets. Through targeted sourcing,
            competency-based interviews, and real-time project assessments,
            Keptel deployed engineers capable of handling safety-critical
            systems. The engagement strengthened the OEM’s capability to deliver
            next-generation automotive platforms.
          </p>
        </div>

      </div>
      <Footer />
    </div>
  );
}
