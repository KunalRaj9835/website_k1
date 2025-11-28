"use client";

import Image from "next/image";
import Footer from "@/components/Footer";
import SideBySideCard from "@/components/SideBySideCard";

export default function Page() {
  const title = "Data Management";
  const bg = "/photo/34.jpg";

  const introHeading = "Build a trusted, secure, high-quality data ecosystem";
  const introPara =
    "Enterprises depend on accurate, compliant, and accessible data to operate effectively. Keptel helps modernise your data management with automated governance, privacy controls, lineage intelligence, and AI-driven quality monitoring. We turn fragmented datasets into reliable assets that power operations, analytics, and enterprise AI.";

  const midTitle = "Stronger governance, higher quality, deeper trust";
  const midPara =
    "Keptel’s automated frameworks enforce quality rules, security protocols, metadata standards, and compliance requirements across your entire ecosystem. With end-to-end visibility and proactive monitoring, your teams always work with accurate, complete, and trustworthy data.";

  return (
    <div>
      {/* HERO */}
      <div className="relative h-[650px] w-full overflow-hidden">
        <Image src={bg} alt={title} fill className="object-cover opacity-70" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-transparent flex items-center px-6 md:px-20">
          <div>
            <h1 className="text-4xl md:text-6xl font-semibold">{title}</h1>
            <p className="mt-4 text-gray-700 text-lg max-w-xl">
              Build governance and quality into your data from day one.
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
          title="Automated governance"
          text="Apply enterprise-wide rules, access policies, and compliance controls with automation."
          image="/photo/35.jpg"
          color="#ffffff"
        />
        <SideBySideCard
          title="Metadata & lineage visibility"
          text="Track every transformation, dataset, and dependency with AI-enhanced lineage mapping."
          image="/photo/36.jpg"
          color="#f9f9f9"
        />
        <SideBySideCard
          title="Security & privacy frameworks"
          text="Protect your data with encryption, masking, and regulatory-ready privacy operations."
          image="/photo/37.avif"
          color="#eaeaea"
        />
        <SideBySideCard
          title="AI-driven quality monitoring"
          text="Detect anomalies, score data quality, and automate remediation with intelligent validation."
          image="/photo/38.jpg"
          color="#d6d7d9"
        />
      </div>

      <Footer />
    </div>
  );
}
