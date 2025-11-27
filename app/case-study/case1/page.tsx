"use client";

import ServiceHero from "@/components/ServiceHero";
import Footer from "@/components/Footer";

export default function CaseStudyPage() {
  const title = "IT Services & Digital Engineering";
  const bg = "/case/case1.webp";

  return (
    <div>
      {/* HERO */}
      <ServiceHero title={title} bg={bg} />

      {/* CONTENT */}
      <div className="max-w-6xl mx-auto px-6 py-20">

        {/* Domain */}
        <p className="text-xl font-semibold text-gray-800 mb-10">
          Domain : <span className="font-normal">Cloud, Data Engineering & Application Services</span>
        </p>

        {/* SECTION 1 */}
        <div className="bg-gray-100 rounded-xl p-10 mb-10 shadow-sm">
          <h3 className="text-2xl font-semibold text-[#0e355d] mb-4">
            Problem Statement
          </h3>

          <p className="text-gray-700 leading-relaxed">
            The client needed to scale its cloud and data engineering workforce
            rapidly to support multiple transformation initiatives across AWS,
            Azure, and Google Cloud. They faced challenges finding experts with
            strong experience in ETL, orchestration, modern data stacks, and
            enterprise application development.
          </p>
        </div>

        {/* SECTION 2 */}
        <div className="bg-gray-100 rounded-xl p-10 shadow-sm">
          <h3 className="text-2xl font-semibold text-[#0e355d] mb-4">
            Keptal's Approach & Solution
          </h3>

          <p className="text-gray-700 leading-relaxed">
            Keptel mapped cloud-native talent across India with expertise in
            data engineering, analytics, application modernization, and DevOps.
            A competency-based evaluation framework ensured the selection of
            engineers with multi-cloud exposure. The team was deployed in
            phases, enabling the client to accelerate digital programs while
            ensuring stability, governance, and high delivery quality.
          </p>
        </div>

      </div>
      <Footer />
    </div>
  );
}
