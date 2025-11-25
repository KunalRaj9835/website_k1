"use client";

import ServiceHero from "@/components/ServiceHero";
import Footer from "@/components/Footer";

export default function CaseStudy5Page() {
  const title = "Case Study : Healthcare Technology Firm";
  const bg = "/services-bg.jpg";

  return (
    <div>
      <ServiceHero title={title} bg={bg} />

      <div className="max-w-6xl mx-auto px-6 py-20">
        <p className="text-xl font-semibold text-gray-800 mb-10">
          Domain : <span className="font-normal">Healthcare IT & Medical Technology</span>
        </p>

        <div className="bg-gray-100 rounded-xl p-10 mb-10 shadow-sm">
          <h3 className="text-2xl font-semibold text-[#0e355d] mb-4">
            Problem Statement
          </h3>
          <p className="text-gray-700 leading-relaxed">
            A healthcare technology company developing AI-powered diagnostic tools 
            needed specialized talent at the intersection of healthcare, machine 
            learning, and regulatory compliance. They required data scientists, 
            ML engineers, and healthcare domain experts who understood HIPAA 
            requirements and FDA approval processes. The unique challenge was 
            finding candidates who combined technical AI expertise with genuine 
            passion for healthcare outcomes and patience for the rigorous validation 
            processes required in medical technology.
          </p>
        </div>

        <div className="bg-gray-100 rounded-xl p-10 shadow-sm">
          <h3 className="text-2xl font-semibold text-[#0e355d] mb-4">
            Keptal Global's Approach & Solution
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Developed a targeted sourcing strategy focusing on professionals from 
            medical device companies, research institutions, and healthcare analytics 
            firms. Partnered with medical conferences and AI healthcare summits to 
            identify passionate candidates. Created specialized interview processes 
            evaluating both technical skills and healthcare domain knowledge. 
            Emphasized the meaningful impact of the work in candidate conversations. 
            Built strong relationships with university research labs and hospital 
            innovation centers. Successfully recruited 40 professionals including 
            ML researchers, clinical data scientists, and regulatory specialists, 
            helping the client advance two products into clinical trials.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
