"use client";

import ServiceHero from "@/components/ServiceHero";
import Footer from "@/components/Footer";

export default function CaseStudyPage() {
  const title = "Healthcare Technology";
  const bg = "/case/case5.webp";

  return (
    <div>
      <ServiceHero title={title} bg={bg} />

      <div className="max-w-6xl mx-auto px-6 py-20">

        <p className="text-xl font-semibold text-gray-800 mb-10">
          Domain : <span className="font-normal">Clinical Data & Health Analytics</span>
        </p>

        <div className="bg-gray-100 rounded-xl p-10 mb-10 shadow-sm">
          <h3 className="text-2xl font-semibold text-[#0e355d] mb-4">
            Problem Statement
          </h3>

          <p className="text-gray-700 leading-relaxed">
            A fast-growing healthcare company required experts in clinical data
            engineering, healthcare analytics, patient data integration, and
            compliance-driven architecture. Finding engineers experienced with
            healthcare data standards was a major challenge.
          </p>
        </div>

        <div className="bg-gray-100 rounded-xl p-10 shadow-sm">
          <h3 className="text-2xl font-semibold text-[#0e355d] mb-4">
            Keptal's Approach & Solution
          </h3>

          <p className="text-gray-700 leading-relaxed">
            Keptel sourced engineers with strong experience across HL7, FHIR,
            healthcare ETL, and advanced analytics. The deployed team built
            unified data pipelines, improved patient-data interoperability, and
            enhanced regulatory compliance. The project significantly improved
            data accuracy and reporting efficiency.
          </p>
        </div>

      </div>
      <Footer />
    </div>
  );
}
