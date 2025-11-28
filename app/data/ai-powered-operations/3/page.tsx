"use client";

import Image from "next/image";
import Footer from "@/components/Footer";
import SideBySideCard from "@/components/SideBySideCard";

export default function Page() {
  const title = "Finance and Accounting";
  const bg = "/photo/55.webp";

  const introHeading = "Strengthen financial performance with intelligent, automated operations";
  const introPara =
    "Finance leaders need accuracy, agility, and real-time visibility. Keptel modernises financial operations by integrating automation, advanced analytics, and AI-assisted workflows. We help enterprises streamline compliance, reduce cycle times, and improve financial forecasting while reducing operational complexity.";

  const midTitle = "Digitally powered finance built for resilience and growth";
  const midPara =
    "From accounts payable to revenue management to FP&A, Keptel designs intelligent workflows that empower finance teams to focus on strategy—not routine processing. Your organisation benefits from higher accuracy, better control, and predictive financial insights.";

  return (
    <div>
      {/* HERO */}
      <div className="relative h-[650px] w-full overflow-hidden">
        <Image src={bg} alt={title} fill className="object-cover opacity-70" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-transparent flex items-center px-6 md:px-20">
          <div>
            <h1 className="text-4xl md:text-6xl font-semibold">{title}</h1>
            <p className="mt-4 text-gray-700 text-lg max-w-xl">
              Streamline finance with automation, analytics, and intelligent controls.
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
          title="Accounts payable automation"
          text="Reduce manual work and accelerate billing cycles using AI-driven workflow automation."
          image="/photo/56.avif"
          color="#ffffff"
        />
        <SideBySideCard
          title="Accounts receivable acceleration"
          text="Improve cash flow with intelligent collections, prioritisation, and risk-based segmentation."
          image="/photo/57.webp"
          color="#f9f9f9"
        />
        <SideBySideCard
          title="Financial planning & forecasting"
          text="Enhance forecasting accuracy with predictive analytics and scenario modelling."
          image="/photo/58.jpeg"
          color="#eaeaea"
        />
        <SideBySideCard
          title="Compliance & audit readiness"
          text="Strengthen internal controls with automated checks, transparent reporting, and audit-proof workflows."
          image="/photo/59.avif"
          color="#d6d7d9"
        />
      </div>

      <Footer />
    </div>
  );
}
