"use client";

import ServiceHero from "@/components/ServiceHero";
import Footer from "@/components/Footer";

export default function CaseStudyPage() {
  const title = "Industrial Automation";
  const bg = "/case/case4.jpg";

  return (
    <div>
      <ServiceHero title={title} bg={bg} />

      <div className="max-w-6xl mx-auto px-6 py-20">

        <p className="text-xl font-semibold text-gray-800 mb-10">
          Domain : <span className="font-normal">IoT, Robotics & Control Systems</span>
        </p>

        <div className="bg-gray-100 rounded-xl p-10 mb-10 shadow-sm">
          <h3 className="text-2xl font-semibold text-[#0e355d] mb-4">
            Problem Statement
          </h3>

          <p className="text-gray-700 leading-relaxed">
            A major industrial automation customer required engineers capable of
            designing IoT-driven control systems, robotics, PLC programming, and
            real-time embedded architectures. They struggled to source
            specialists with deep experience across protocols and automation
            frameworks.
          </p>
        </div>

        <div className="bg-gray-100 rounded-xl p-10 shadow-sm">
          <h3 className="text-2xl font-semibold text-[#0e355d] mb-4">
            Keptal's Approach & Solution
          </h3>

          <p className="text-gray-700 leading-relaxed">
            Keptel built a diverse engineering team proficient in industrial IoT,
            embedded C/C++, RTOS, CAN, SPI, UART, and robotics platforms. The
            specialists supported end-to-end solutions—covering architecture,
            integration, and testing. The engagement improved automation
            efficiency and enabled next-gen manufacturing capabilities.
          </p>
        </div>

      </div>
      <Footer />
    </div>
  );
}
