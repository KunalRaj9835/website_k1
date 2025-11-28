"use client";

import Image from "next/image";
import Footer from "@/components/Footer";
import SideBySideCard from "@/components/SideBySideCard";

export default function Page() {
  const title = "Risk and Compliance";
  const bg = "/photo/58.jpeg";

  const introHeading = "Strengthen resilience with AI-driven risk management and compliance frameworks";
  const introPara =
    "Organisations face increasing regulatory demands and operational risks. Keptel helps you modernise risk and compliance by integrating analytics, AI, automation, and governance. We enable real-time visibility, improve control effectiveness, and ensure your organisation operates confidently across global regulatory environments.";

  const midTitle = "Proactive, predictive, and intelligent risk management";
  const midPara =
    "With automated surveillance, risk scoring models, audit-ready documentation, and intelligent compliance monitoring, Keptel helps organisations reduce exposure and strengthen resilience. Our frameworks ensure accuracy, transparency, and trust at every level.";

  return (
    <div>
      {/* HERO */}
      <div className="relative h-[650px] w-full overflow-hidden">
        <Image src={bg} alt={title} fill className="object-cover opacity-70" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-transparent flex items-center px-6 md:px-20">
          <div>
            <h1 className="text-4xl md:text-6xl font-semibold">{title}</h1>
            <p className="mt-4 text-gray-700 text-lg max-w-xl">
              Build compliance and risk resilience powered by intelligence.
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
          title="Risk analytics & modelling"
          text="Prediction-driven risk modelling that strengthens early detection and preventive action."
          image="/photo/59.avif"
          color="#ffffff"
        />
        <SideBySideCard
          title="Compliance automation"
          text="Automate monitoring, documentation, and reporting to reduce manual work and errors."
          image="/photo/60.jpg"
          color="#f9f9f9"
        />
        <SideBySideCard
          title="Regulatory intelligence"
          text="Stay ahead of evolving global regulations with AI-assisted insights and change tracking."
          image="/photo/61.jpeg"
          color="#eaeaea"
        />
        <SideBySideCard
          title="Control & audit management"
          text="Strengthen internal controls with real-time auditing, automated checks, and transparent dashboards."
          image="/photo/62.jpeg"
          color="#d6d7d9"
        />
      </div>

      <Footer />
    </div>
  );
}
