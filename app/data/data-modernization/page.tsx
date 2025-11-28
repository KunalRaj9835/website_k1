"use client";

import Image from "next/image";
import Footer from "@/components/Footer";
import SideBySideCard from "@/components/SideBySideCard";

export default function Page() {
  // PAGE DATA
  const title = "Data Modernization";
  const bg = "/photo/main.jpg";

  const introHeading =
    "Outdated data systems stall growth — Keptel builds for the future";

  const introPara =
    "Legacy systems, fragmented data sources, and slow pipelines directly limit your organisation’s ability to innovate. As AI adoption accelerates, outdated architectures create bottlenecks that delay insights and inflate operational costs. Keptel modernises your ecosystem end-to-end—transforming scattered data into a trusted, governed, and highly scalable enterprise asset. With automation-first design, enriched metadata, and cloud-native flexibility, your data foundation evolves from reactive maintenance to proactive innovation.";

  const midTitle = "A future-ready platform for AI, speed, and scale";

  const midPara =
    "Modern businesses must deliver insights at the pace of customer expectation. Teams need immediate access to accurate data to drive decisions, power AI models, and accelerate digital initiatives. Keptel enables this with robust cloud-native accelerators, pre-built frameworks, and consistent operational governance. We automate critical data operations, identify issues early, and ensure pipeline reliability across the ecosystem—helping you ship new models faster, reduce downstream failures, and maintain a continuously high-performing data platform.";

  return (
    <div>
      {/* -------------------------------------------------- */}
      {/* HERO SECTION */}
      {/* -------------------------------------------------- */}
      <div className="relative h-[650px] w-full overflow-hidden">
        <Image src={bg} alt={title} fill className="object-cover opacity-70" />

        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-transparent flex items-center px-6 md:px-20">
          <div>
            <h1 className="text-4xl md:text-6xl font-semibold">{title}</h1>
            <p className="mt-4 text-gray-700 text-lg max-w-xl">
              Transform legacy architectures into scalable, AI-ready data ecosystems.
            </p>
          </div>
        </div>
      </div>

      {/* -------------------------------------------------- */}
      {/* INTRO */}
      {/* -------------------------------------------------- */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-semibold leading-snug">{introHeading}</h2>

        <div className="w-16 h-1 bg-red-600 mt-4"></div>

        <p className="mt-8 text-gray-700 leading-relaxed">{introPara}</p>
      </div>

      {/* -------------------------------------------------- */}
      {/* MID BLOCK */}
      {/* -------------------------------------------------- */}
      <div className="py-20" style={{ backgroundColor: "#e6edf4" }}>
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-4xl font-semibold leading-snug text-red-600">
            {midTitle}
          </h3>

          <div className="w-16 h-1 bg-red-600 mt-4"></div>

          <p className="mt-8 text-gray-700 leading-relaxed">{midPara}</p>
        </div>
      </div>


      <div className="max-w-7xl mx-auto px-6 py-16 bg-white">
        <h3 className="text-3xl font-semibold">What we do</h3>
        <div className="w-16 h-[3px] bg-red-500 mt-3"></div>
      </div>

      {/* -------------------------------------------------- */}
      {/* CARD GRID */}
      {/* -------------------------------------------------- */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">

        <SideBySideCard
          title="Enterprise data strategy"
          text="Assess your data maturity and create a strategic roadmap that connects business outcomes with governance, AI integration, and long-term platform scalability."
          image="/photo/1.jpeg"
          color="#ffffff"
          href="/data/data-modernization/1"
        />

        <SideBySideCard
          title="Data platform modernization"
          text="Upgrade legacy environments or modernize cloud platforms using automated code conversion, governed lakehouse architecture, and AI-driven orchestration across AWS, Azure, GCP, Databricks, or Snowflake."
          image="/photo/2.jpeg"
          color="#f9f9f9"
          href="/data/data-modernization/2"
        />

        <SideBySideCard
          title="Data management"
          text="Implement automated governance, quality controls, security safeguards, and privacy-first pipelines. Strengthen AI readiness with reliable, high-performance data management."
          image="/photo/3.avif"
          color="#eaeaea"
          href="/data/data-modernization/3"
        />

        <SideBySideCard
          title="Managed services and data operations"
          text="From cloud setup to ongoing operations, we monitor, maintain, and optimize your data pipelines—so teams focus on insights, not incidents."
          image="/photo/4.avif"
          color="#d6d7d9"
          href="/data/data-modernization/4"
        />

      </div>

      <Footer />
    </div>
  );
}
