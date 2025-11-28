"use client";

import Footer from "@/components/Footer";

export default function CaseStudyPage() {
  const title = "Automotive Engineering";
  const bg = "/case/c.jpeg";

  return (
    <div>

      {/* HERO */}
      <div className="relative w-full h-[450px] md:h-[550px] lg:h-[650px]">
        <img
          src={bg}
          alt="Case Study Hero"
          className="w-full h-full object-cover brightness-75"
        />

        <div className="absolute inset-0 flex items-end md:items-center justify-center pb-16 md:pb-0">
          <h1
            className="text-[#e5170f] text-3xl md:text-5xl font-bold tracking-wide text-center"
            style={{
              WebkitTextStroke: "2px black",
              WebkitTextFillColor: "#ffffffff",
            }}
          >
            {title}
          </h1>
        </div>
      </div>

      {/* MAIN SECTION */}
      <div className="min-h-screen bg-[#E7EEF3] text-black pt-20 pb-32">
        <div className="max-w-5xl mx-auto px-6">

          {/* Domain */}
          <h1 className="text-4xl font-bold mb-4">
            Embedded Systems & Functional Safety
          </h1>

          <p className="text-black leading-relaxed max-w-3xl">
            A deep-dive into how Keptel enabled an automotive OEM to scale
            engineering for AUTOSAR, ADAS, ECU validation, and ISO 26262 safety programs.
          </p>

          {/* Feature Block 1 — Gradient */}
          <div className="mt-12 p-6 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-950 to-black border border-slate-700 shadow-xl">
            <h2 className="text-2xl text-red-500 font-semibold mb-4">
              Problem Statement
            </h2>

            <p className="text-gray-300 text-sm leading-relaxed">
              The OEM required engineers with niche expertise in AUTOSAR BSW,
              ADAS systems, ECU validation, and functional safety engineering.
              Meeting strict compliance, testing, and delivery timelines required
              rapid onboarding of specialists who could work on advanced vehicle
              electronics and next-gen automotive platforms.
            </p>
          </div>

          {/* Feature Block 2 — White Card */}
          <div className="mt-10 p-6 rounded-3xl bg-white border border-slate-300 shadow-sm">
            <h3 className="text-xl font-semibold mb-3">
              Keptel's Approach & Solution
            </h3>

            <p className="text-gray-700 text-sm leading-relaxed">
              Keptel built a targeted talent pipeline covering AUTOSAR BSW,
              ADAS algorithm testing, HIL/SIL validation, ECU diagnostics, and
              ISO 26262 expertise. Engineers were evaluated via competency-based
              assessments and real-world project benchmarks. The deployment
              enabled the OEM to accelerate development of safety-critical systems
              and next-gen automotive architectures.
            </p>
          </div>

          {/* Feature Block 3 — White Card */}
          <div className="mt-10 p-6 rounded-3xl bg-white border border-slate-300 shadow-sm">
            <h3 className="text-xl font-semibold mb-3">Business Outcomes</h3>

            <p className="text-gray-700 text-sm leading-relaxed">
              The collaboration improved the OEM’s ability to deliver advanced
              ADAS, functional safety, and embedded systems programs. Time-to-hire
              reduced significantly, validation cycles improved, and engineering
              throughput increased across vehicle electronics and software domains.
            </p>
          </div>

          {/* Use Cases Grid */}
          <div className="mt-10 grid md:grid-cols-2 gap-6">

            <div className="p-6 rounded-3xl bg-white border border-slate-300 shadow-sm">
              <h4 className="font-semibold mb-2">Key Engineering Contributions</h4>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• AUTOSAR BSW & MCAL engineering</li>
                <li>• ADAS validation & testing</li>
                <li>• ECU testing, diagnostics & integration</li>
                <li>• ISO 26262 functional safety engineering</li>
                <li>• HIL/SIL test automation</li>
              </ul>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-slate-300 shadow-sm">
              <h4 className="font-semibold mb-2">Ideal For</h4>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• OEMs building next-gen vehicle platforms</li>
                <li>• Tier-1 suppliers scaling embedded engineering</li>
                <li>• Mobility companies focused on ADAS & safety</li>
              </ul>
            </div>

          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
}
