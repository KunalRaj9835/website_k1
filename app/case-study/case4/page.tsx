"use client";

import Footer from "@/components/Footer";

export default function CaseStudyPage() {
  const title = "Industrial Automation";
  const bg = "/case/case4.jpg";

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
            IoT, Robotics & Control Systems
          </h1>

          <p className="text-black leading-relaxed max-w-3xl">
            A summary of how Keptel enabled an industrial automation customer to
            scale IoT-driven control systems, robotics engineering, PLC development,
            and real-time embedded platforms for next-generation manufacturing.
          </p>

          {/* Feature Block 1 — Gradient */}
          <div className="mt-12 p-6 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-950 to-black border border-slate-700 shadow-xl">
            <h2 className="text-2xl text-red-500 font-semibold mb-4">
              Problem Statement
            </h2>

            <p className="text-gray-300 text-sm leading-relaxed">
              The customer required multi-disciplinary engineers capable of
              designing IoT-based control systems, robotics applications, PLC and
              SCADA programming, real-time embedded architectures, and industrial
              communication protocols. Sourcing specialists with strong technical
              depth across automation frameworks was a major challenge.
            </p>
          </div>

          {/* Feature Block 2 — White Card */}
          <div className="mt-10 p-6 rounded-3xl bg-white border border-slate-300 shadow-sm">
            <h3 className="text-xl font-semibold mb-3">
              Keptel's Approach & Solution
            </h3>

            <p className="text-gray-700 text-sm leading-relaxed">
              Keptel assembled a diverse engineering team skilled in industrial IoT,
              embedded C/C++, RTOS, robotics platforms, PLC/SCADA systems, and
              communication protocols such as CAN, SPI, UART, and Modbus. Engineers
              supported end-to-end automation development—from system architecture
              to integration and testing—enabling higher efficiency and next-gen
              manufacturing readiness.
            </p>
          </div>

          {/* Feature Block 3 — White Card */}
          <div className="mt-10 p-6 rounded-3xl bg-white border border-slate-300 shadow-sm">
            <h3 className="text-xl font-semibold mb-3">Business Outcomes</h3>

            <p className="text-gray-700 text-sm leading-relaxed">
              The engagement improved automation reliability, accelerated delivery of
              robotics and control systems, and strengthened the customer’s ability to
              deploy smart manufacturing solutions. Engineering cycles became faster,
              more predictable, and aligned with Industry 4.0 transformation goals.
            </p>
          </div>

          {/* Use Cases Grid */}
          <div className="mt-10 grid md:grid-cols-2 gap-6">

            <div className="p-6 rounded-3xl bg-white border border-slate-300 shadow-sm">
              <h4 className="font-semibold mb-2">Key Engineering Contributions</h4>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Industrial IoT architecture development</li>
                <li>• Robotics control & automation engineering</li>
                <li>• PLC, SCADA & HMI programming</li>
                <li>• Embedded C/C++ & RTOS engineering</li>
                <li>• Protocol development: CAN, SPI, UART, Modbus</li>
              </ul>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-slate-300 shadow-sm">
              <h4 className="font-semibold mb-2">Ideal For</h4>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Industrial automation OEMs</li>
                <li>• Robotics & smart manufacturing companies</li>
                <li>• Enterprises adopting Industry 4.0 solutions</li>
              </ul>
            </div>

          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
}
