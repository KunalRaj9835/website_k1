"use client";

import ServiceHero from "@/components/ServiceHero";
import Footer from "@/components/Footer";

export default function CaseStudyPage() {
  const title = "Aerospace & Defence";
  const bg = "/case/case3.png";

  return (
    <div>
      <ServiceHero title={title} bg={bg} />

      <div className="max-w-6xl mx-auto px-6 py-20">

        <p className="text-xl font-semibold text-gray-800 mb-10">
          Domain : <span className="font-normal">Avionics, Embedded & V&V</span>
        </p>

        <div className="bg-gray-100 rounded-xl p-10 mb-10 shadow-sm">
          <h3 className="text-2xl font-semibold text-[#0e355d] mb-4">
            Problem Statement
          </h3>

          <p className="text-gray-700 leading-relaxed">
            A leading aerospace customer required engineers experienced in
            DO-178C, DO-254, embedded avionics, kernel programming, and V&V
            processes. They needed specialists who could operate within strict
            certification and regulatory frameworks.
          </p>
        </div>

        <div className="bg-gray-100 rounded-xl p-10 shadow-sm">
          <h3 className="text-2xl font-semibold text-[#0e355d] mb-4">
            Keptal's Approach & Solution
          </h3>

          <p className="text-gray-700 leading-relaxed">
            Keptel engaged domain-specific experts with hands-on avionics
            experience. The team conducted DO-178 lifecycle assessments,
            validated system requirements, and supported certification
            documentation. Keptel’s embedded engineers accelerated development
            while ensuring full compliance with aerospace standards.
          </p>
        </div>

      </div>
      <Footer />
    </div>
  );
}
