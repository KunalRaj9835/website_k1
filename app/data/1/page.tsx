"use client";

import Image from "next/image";
import Footer from "@/components/Footer";
import SideBySideCard from "@/components/SideBySideCard";

export default function Page() {
  // PAGE DATA
  const title = "Artificial Intelligence";
  const bg = "/photo/tab.avif"; 

  const introHeading =
    "The key to unlocking business growth and innovation";

  const introPara =
    "From smarter decision-making to improved customer experiences, AI has the power to transform how organisations operate and compete. Yet many companies struggle to harness their data, extract meaningful insights, and act on them in real time. Data silos, inconsistent quality, and organisational complexity often slow progress—while the rapid rise of generative AI raises expectations even higher. Keptel enables organisations to turn their data foundation into a long-term advantage, accelerating insight generation and empowering teams to make confident, high-impact decisions.";

  const midTitle = "Get on the fast track to highly customized generative AI";

  const midPara =
    "Generative AI delivers measurable value only when aligned with real business needs. Keptel helps organisations build custom AI solutions by focusing on five key success factors—from data readiness and governance to workflow integration, orchestration, and responsible AI practices. This ensures faster deployment, greater accuracy, and secure enterprise-wide scalability.";

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
              Build intelligent systems that transform decisions, experiences, and outcomes.
            </p>
          </div>
        </div>
      </div>

      {/* -------------------------------------------------- */}
      {/* INTRO SECTION */}
      {/* -------------------------------------------------- */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-semibold leading-snug">{introHeading}</h2>

        <div className="w-16 h-1 bg-red-600 mt-4"></div>

        <p className="mt-8 text-gray-700 leading-relaxed">{introPara}</p>
      </div>

      {/* -------------------------------------------------- */}
      {/* MID SECTION */}
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

      {/* -------------------------------------------------- */}
      {/* WHAT WE DO HEADER */}
      {/* -------------------------------------------------- */}
      <div className="max-w-7xl mx-auto px-6 py-16 bg-white">
        <h3 className="text-3xl font-semibold">What we do</h3>
        <div className="w-16 h-[3px] bg-red-500 mt-3"></div>
      </div>

      {/* -------------------------------------------------- */}
      {/* 4 CARD GRID */}
      {/* -------------------------------------------------- */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">

        <SideBySideCard
          title="Analytics & AI"
          text="Produce actionable insights and enable confident, data-driven decisions across your enterprise with advanced analytics, machine learning, and AI engineering."
          image="/photo/5.jpg"
          color="#ffffff"
        />

        <SideBySideCard
          title="Data management"
          text="Make sense of data—wherever it lives—with modern data architecture, governance frameworks, and end-to-end enterprise data management."
          image="/photo/6.jpg"
          color="#f9f9f9"
        />

        <SideBySideCard
          title="Data-led marketing"
          text="Identify, target, and convert high-value customers using analytics-powered marketing solutions designed to drive measurable business growth."
          image="/photo/7.jpg"
          color="#eaeaea"
        />

        <SideBySideCard
          title="Generative AI solutions"
          text="Deploy customised generative AI applications that streamline operations, enhance customer experiences, and enable rapid innovation across your business."
          image="/photo/8.jpg"
          color="#d6d7d9"
        />

      </div>

      <Footer />
    </div>
  );
}
