"use client";

import Image from "next/image";
import Footer from "@/components/Footer";
import SideBySideCard from "@/components/SideBySideCard";

export default function Page() {
  const title = "Data Platform Modernization";
  const bg = "/photo/17.avif";

  const introHeading = "Modernize your data platform to unlock speed, scale, and AI readiness";
  const introPara =
    "Legacy data systems slow innovation and restrict your ability to deliver insights at scale. Keptel modernizes your data platform with cloud-native architectures, automated orchestration, and next-generation integration frameworks. We help you migrate, optimize, and operationalize platforms that support real-time intelligence and enterprise-wide AI.";

  const midTitle = "Transform outdated systems into agile, high-performance platforms";
  const midPara =
    "Through automated code conversion, governed lakehouse models, event-driven pipelines, and multi-cloud flexibility, Keptel eliminates technical debt and future-proofs your environment. Your teams gain a reliable, modern foundation that accelerates analytics, reduces cost, and supports continuous innovation.";

  return (
    <div>
      {/* HERO */}
      <div className="relative h-[650px] w-full overflow-hidden">
        <Image src={bg} alt={title} fill className="object-cover opacity-70" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-transparent flex items-center px-6 md:px-20">
          <div>
            <h1 className="text-4xl md:text-6xl font-semibold">{title}</h1>
            <p className="mt-4 text-gray-700 text-lg max-w-xl">
              Build a resilient, scalable, cloud-native data platform.
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
          title="Legacy platform assessment"
          text="Evaluate technical debt, performance gaps, and modernization opportunities to determine the fastest migration path."
          image="/photo/18.avif"
          color="#ffffff"
        />
        <SideBySideCard
          title="Cloud migration & automation"
          text="Automate data movement, schema conversion, and orchestration across AWS, Azure, GCP, Databricks, and Snowflake."
          image="/photo/19.webp"
          color="#f9f9f9"
        />
        <SideBySideCard
          title="Lakehouse architecture"
          text="Implement governed data lakehouses for unified analytics, AI workloads, and near real-time processing."
          image="/photo/20.webp"
          color="#eaeaea"
        />
        <SideBySideCard
          title="Platform performance optimization"
          text="Optimize compute, storage, pipelines, and workloads to reduce cost and scale seamlessly with business needs."
          image="/photo/21.avif"
          color="#d6d7d9"
        />
      </div>

      <Footer />
    </div>
  );
}
