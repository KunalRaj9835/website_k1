"use client";

import Footer from "@/components/Footer";

export default function CaseStudyPage() {
  const title = "IoT & Embedded Systems";
  const bg = "/case/case6.webp";

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
            Firmware, Devices & Edge Engineering
          </h1>

          <p className="text-black leading-relaxed max-w-3xl">
            A detailed view into how Keptel supported the client in scaling
            firmware development, device engineering, and real-time embedded
            systems across diverse hardware and edge environments.
          </p>

          {/* Feature Block 1 — Gradient */}
          <div className="mt-12 p-6 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-950 to-black border border-slate-700 shadow-xl">
            <h2 className="text-2xl text-red-500 font-semibold mb-4">
              Problem Statement
            </h2>

            <p className="text-gray-300 text-sm leading-relaxed">
              The client required engineers specializing in firmware engineering,
              device driver development, real-time operating systems, and
              kernel-level programming. Identifying talent with multi-platform
              hardware experience and deep embedded expertise was a major
              challenge for scaling complex product development.
            </p>
          </div>

          {/* Feature Block 2 — White Card */}
          <div className="mt-10 p-6 rounded-3xl bg-white border border-slate-300 shadow-sm">
            <h3 className="text-xl font-semibold mb-3">
              Keptel's Approach & Solution
            </h3>

            <p className="text-gray-700 text-sm leading-relaxed">
              Keptel deployed embedded engineers experienced in C/C++, RTOS,
              Linux kernel development, hardware interfacing, and edge computing
              frameworks. The team improved firmware performance, accelerated
              prototyping cycles, and strengthened device reliability across
              product lines through rigorous engineering and optimization.
            </p>
          </div>

          {/* Feature Block 3 — White Card */}
          <div className="mt-10 p-6 rounded-3xl bg-white border border-slate-300 shadow-sm">
            <h3 className="text-xl font-semibold mb-3">Business Outcomes</h3>

            <p className="text-gray-700 text-sm leading-relaxed">
              The collaboration enabled faster firmware release cycles,
              enhanced device stability, and improved hardware–software
              integration. Overall product reliability increased, and time-to-market
              improved across multiple embedded and IoT product categories.
            </p>
          </div>

          {/* Use Cases Grid */}
          <div className="mt-10 grid md:grid-cols-2 gap-6">

            <div className="p-6 rounded-3xl bg-white border border-slate-300 shadow-sm">
              <h4 className="font-semibold mb-2">Key Engineering Contributions</h4>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Firmware development & optimization</li>
                <li>• Linux kernel & device driver engineering</li>
                <li>• RTOS-based embedded systems</li>
                <li>• Hardware–software integration</li>
                <li>• Edge computing & device performance tuning</li>
              </ul>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-slate-300 shadow-sm">
              <h4 className="font-semibold mb-2">Ideal For</h4>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• IoT device manufacturers</li>
                <li>• Embedded hardware product companies</li>
                <li>• Organizations requiring low-level engineering</li>
              </ul>
            </div>

          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
}
