"use client";

import Footer from "@/components/Footer";
import ExlTallCard from "@/components/ExlCard";

export default function KeptelAILeadershipPage() {
  return (
    <div className="w-full bg-white text-gray-900">

      {/* ================= HERO ================= */}
      <section className="w-full bg-[#E7EEF3] py-20 md:py-28 relative overflow-hidden">
        {/* Background mountain graphic */}
        <img
          src="/carousel/wave.gif"   // replace with your image
          className="absolute inset-0 w-full h-full object-cover opacity-60"
          alt="Background"
        />

        <div className="relative max-w-6xl mx-auto px-6">
          <p className="uppercase tracking-[0.25em] text-sm text-red-500 mb-4">
            AI Leadership Report
          </p>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight max-w-3xl">
            A proven leader in AI innovation and data modernization
          </h1>

          <p className="text-lg text-gray-700 max-w-3xl mt-6">
            Keptel recognized for its excellence in AI engineering, scalable data platforms,
            and enterprise-wide modernization solutions across industries.
          </p>

          <button className="mt-8 px-6 py-3 border border-gray-700 hover:border-red-500 rounded-md transition text-gray-900 hover:text-red-600">
            Download report →
          </button>
        </div>
      </section>
      <section className="w-full py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-4 gap-12">

        {/* LEFT TITLE SECTION */}
        <div className="col-span-1 flex flex-col justify-start">
          <p className="text-lg font-medium text-[#e5170f]">
            Our solutions
          </p>

          <h2 className="mt-6 text-4xl font-bold leading-tight">
            Orchestrating data, AI <br /> and human expertise <br /> in enterprise workflows
          </h2>
        </div>

        {/* RIGHT CONTENT GRID */}
        <div className="col-span-3 space-y-14">

          {/* TOP ROW — 3 CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            <ExlTallCard
              title="Data modernization"
              desc="Drive enterprise transformation with an AI-ready data foundation"
              image="/demo/data.jpg"
              href="/data-modernization"
            />

            <ExlTallCard
              title="Artificial intelligence"
              desc="Sharpen your competitive edge with AI and real-time analytics"
              image="/demo/Air.jpg"
              href="/ai"
            />

            <ExlTallCard
              title="AI-powered operations"
              desc="Deliver results at speed and scale with AI in the workflow"
              image="/demo/Aip.avif"
              href="/ai-ops"
            />
          </div>


          
        </div>

      </div>
    </section>

      {/* ================= ABOUT THE REPORT ================= */}
      <section className="w-full bg-white py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">

          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-3xl font-bold mb-6">About the report</h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              Keptel has been recognized as a top innovator in data engineering, AI lifecycle
              management, and enterprise modernization. This assessment evaluates leading AI
              solution providers on their ability to scale AI, deliver measurable results, and
              drive transformation across industries.
            </p>

            <p className="text-gray-700 leading-relaxed">
              The report highlights Keptel’s differentiated approach to:
            </p>

            <ul className="list-disc ml-6 mt-4 text-gray-700 space-y-2">
              <li>Building scalable cloud and data foundations</li>
              <li>Operationalizing AI across workflows</li>
              <li>Domain-led engineering and industry accelerators</li>
              <li>End-to-end governance, observability, and quality</li>
            </ul>
          </div>

          {/* RIGHT — IMAGE / GRAPH */}
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img
              src="/banner1/ail.png"   // replace with your chart image
              alt="AI Leadership Chart"
              className="w-full"
            />
          </div>
        </div>
      </section>

      {/* ================= KEY FINDINGS ================= */}
      <section className="w-full bg-[#1F2937] text-white py-20">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-bold mb-10">Key findings</h2>

          <p className="text-gray-300 mb-10 max-w-4xl">
            Based on in-depth evaluation of leading AI and data transformation providers,
            the report identifies Keptel’s strengths in delivering enterprise-grade AI.
          </p>

          <div className="space-y-6">
            <FindingCard
              number="01"
              title="Accelerated Time-to-Value Through Proprietary Solutions"
              body="Keptel’s accelerators shorten deployment timelines and enable rapid, measurable AI outcomes across industries."
            />
            <FindingCard
              number="02"
              title="Real-World Results, Not Just Pilots"
              body="Keptel excels at scaling AI from experimental pilots to production systems through high-discipline delivery frameworks."
            />
            <FindingCard
              number="03"
              title="Industry-Driven Design"
              body="Solutions are tailored for automotive, aerospace, healthcare, retail, and enterprise operations—embedding AI into core workflows."
            />
            <FindingCard
              number="04"
              title="Strong Cloud & AI Ecosystem Partnerships"
              body="Strategic collaborations with AWS, Azure, Nvidia, and GCP enable performance, reliability, and large-scale AI deployment."
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

/* ==========================================================
   COMPONENT: FINDING CARD (01 / 02 / 03 / 04 blocks)
   Matches EXL style
========================================================== */

function FindingCard({ number, title, body }) {
  return (
    <div className="flex bg-[#F8FAFC] text-gray-900 rounded-xl overflow-hidden border border-gray-300">
      <div className="w-20 flex items-center justify-center bg-white border-r border-gray-300">
        <span className="text-red-500 text-3xl font-semibold">{number}</span>
      </div>
      <div className="p-6">
        <h3 className="text-lg font-semibold mb-1">{title}</h3>
        <p className="text-sm text-gray-700">{body}</p>
      </div>
    </div>
  );
}
