"use client";

import Image from "next/image";
import Footer from "@/components/Footer";
import SideBySideCard from "@/components/SideBySideCard";

export default function Page() {
  const title = "Analytics & AI";
  const bg = "/photo/30.jpg";

  const introHeading = "Turn data into intelligence and intelligence into business impact";
  const introPara =
    "Modern enterprises rely on analytics and AI to unlock growth, optimize operations, and deliver personalised customer experiences. Keptel helps you transform raw data into actionable insights by combining advanced analytics, predictive modelling, and intelligent automation. Our solutions empower leaders to make confident decisions and move faster in competitive markets.";

  const midTitle = "A powerful analytics foundation for real-time, informed decisions";
  const midPara =
    "Keptel builds scalable analytics environments that integrate seamlessly across the enterprise. Using AI-driven intelligence, automated workflows, and contextual insights, we help teams accelerate decision-making and deliver measurable outcomes across operations, finance, customer experience, and more.";

  return (
    <div>
      {/* HERO */}
      <div className="relative h-[650px] w-full overflow-hidden">
        <Image src={bg} alt={title} fill className="object-cover opacity-70" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-transparent flex items-center px-6 md:px-20">
          <div>
            <h1 className="text-4xl md:text-6xl font-semibold">{title}</h1>
            <p className="mt-4 text-gray-700 text-lg max-w-xl">
              Build intelligent systems that accelerate transformation.
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
          title="Advanced analytics"
          text="Leverage predictive and prescriptive models to uncover trends, behaviours, and high-value opportunities."
          image="/photo/31.png"
          color="#ffffff"
          
        />
        <SideBySideCard
          title="AI-driven automation"
          text="Automate decision flows and operational tasks with intelligent AI systems that improve speed and accuracy."
          image="/photo/32.jpeg"
          color="#f9f9f9"
          
        />
        <SideBySideCard
          title="Real-time intelligence"
          text="Transform live data into actionable insights with streaming analytics and real-time dashboards."
          image="/photo/33.avif"
          color="#eaeaea"
          
        />
        <SideBySideCard
          title="Model development & governance"
          text="Build, deploy, and manage machine learning models with strong governance and lifecycle controls."
          image="/photo/34.jpg"
          color="#d6d7d9"
          
        />
      </div>

      <Footer />
    </div>
  );
}
