"use client";

import Image from "next/image";
import Footer from "@/components/Footer";
import SideBySideCard from "@/components/SideBySideCard";

export default function Page() {
  const title = "Data Management";
  const bg = "/photo/21.avif";

  const introHeading = "Transform data into a trusted, governed, high-value enterprise asset";
  const introPara =
    "Strong data management is the backbone of every modern digital and AI strategy. Keptel ensures that your data is accurate, secure, compliant, and accessible across the enterprise. With automated governance, metadata enrichment, quality monitoring, and privacy enforcement, we help you build an ecosystem of trust that empowers consistent and reliable insight generation.";

  const midTitle = "A governed, high-quality, always-on data ecosystem";
  const midPara =
    "Through automation-first governance, lineage transparency, role-based access control, and AI-augmented quality monitoring, Keptel strengthens the reliability of your entire data lifecycle. This ensures that every dataset is secure, compliant, and ready for analytics, modelling, and operational use.";

  return (
    <div>
      {/* HERO */}
      <div className="relative h-[650px] w-full overflow-hidden">
        <Image src={bg} alt={title} fill className="object-cover opacity-70" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-transparent flex items-center px-6 md:px-20">
          <div>
            <h1 className="text-4xl md:text-6xl font-semibold">{title}</h1>
            <p className="mt-4 text-gray-700 text-lg max-w-xl">
              Ensure your data is secure, compliant, and ready for intelligent use.
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
          title="Data governance automation"
          text="Deploy automated policies, quality rules, and validations that improve accuracy and minimise risk."
          image="/photo/22.avif"
          color="#ffffff"
        />
        <SideBySideCard
          title="Metadata & lineage intelligence"
          text="Build transparency with end-to-end lineage tracking and enriched metadata for analytics and compliance."
          image="/photo/23.webp"
          color="#f9f9f9"
        />
        <SideBySideCard
          title="Privacy, security & compliance"
          text="Implement enterprise-grade controls, encryption, masking, and privacy frameworks that protect sensitive data."
          image="/photo/24.jpg"
          color="#eaeaea"
        />
        <SideBySideCard
          title="Data quality engineering"
          text="Enhance reliability with AI-driven anomaly detection, scoring models, and automated remediation workflows."
          image="/photo/25.jpg"
          color="#d6d7d9"
        />
      </div>

      <Footer />
    </div>
  );
}
