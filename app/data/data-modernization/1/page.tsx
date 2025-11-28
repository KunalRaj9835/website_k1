"use client";

import Image from "next/image";
import Footer from "@/components/Footer";
import SideBySideCard from "@/components/SideBySideCard";

export default function Page() {
  const title = "Enterprise Data Strategy";
  const bg = "/photo/13.jpg";

  const introHeading = "Build a strategic data foundation that accelerates transformation";
  const introPara =
    "Organisations often collect vast amounts of data but struggle to convert it into meaningful, measurable value. Keptel helps you design a data strategy that aligns governance, architecture, business priorities, and AI readiness. The result is a long-term roadmap that enables scalability, reduces operational friction, and supports smarter decision-making across the enterprise.";

  const midTitle = "A unified roadmap for clarity, governance, and AI-enabled growth";
  const midPara =
    "Keptel partners with organisations to assess maturity, identify capability gaps, and define the frameworks needed to enable enterprise-wide intelligence. When you establish a clear data operating model—supported by governance, ownership, and quality management—your teams gain the confidence to innovate at speed.";

  return (
    <div>
      {/* HERO */}
      <div className="relative h-[650px] w-full overflow-hidden">
        <Image src={bg} alt={title} fill className="object-cover opacity-70" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-transparent flex items-center px-6 md:px-20">
          <div>
            <h1 className="text-4xl md:text-6xl font-semibold">{title}</h1>
            <p className="mt-4 text-gray-700 text-lg max-w-xl">
              Align business goals, governance, and technology with a unified data vision.
            </p>
          </div>
        </div>
      </div>

      {/* INTRO */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-semibold">{introHeading}</h2>
        <div className="w-16 h-1 bg-red-600 mt-4"></div>
        <p className="mt-8 text-gray-700 leading-relaxed">{introPara}</p>
      </div>

      {/* MID */}
      <div className="py-20" style={{ backgroundColor: "#e6edf4" }}>
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-4xl font-semibold text-red-600">{midTitle}</h3>
          <div className="w-16 h-1 bg-red-600 mt-4"></div>
          <p className="mt-8 text-gray-700 leading-relaxed">{midPara}</p>
        </div>
      </div>

      {/* WHAT WE DO */}
      <div className="max-w-7xl mx-auto px-6 py-16 bg-white">
        <h3 className="text-3xl font-semibold">What we do</h3>
        <div className="w-16 h-[3px] bg-red-500 mt-3"></div>
      </div>

      {/* CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
        <SideBySideCard
          title="Data maturity assessment"
          text="Evaluate current data capabilities, identify gaps, and determine readiness for large-scale transformation and AI adoption."
          image="/photo/13.jpg"
          color="#ffffff"
        />
        <SideBySideCard
          title="Data operating model design"
          text="Define ownership, roles, workflows, and governance structures that create accountability and efficiency across the organisation."
          image="/photo/14.avif"
          color="#f9f9f9"
        />
        <SideBySideCard
          title="Enterprise data architecture"
          text="Blueprint future-ready architecture including data lakes, warehouses, lakehouses, and integration frameworks."
          image="/photo/15.webp"
          color="#eaeaea"
        />
        <SideBySideCard
          title="Roadmap and execution planning"
          text="Convert strategy into actionable phases, enabling scalable implementation with minimal operational disruption."
          image="/photo/17.avif"
          color="#d6d7d9"
        />
      </div>

      <Footer />
    </div>
  );
}
