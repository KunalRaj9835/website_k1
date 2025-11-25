"use client";

import ServiceHero from "@/components/ServiceHero";
import Footer from "@/components/Footer";
export default function CaseStudyPage() {
  const title = "Case Study : Stealth Mode Bigdata Management Company";
  const bg = "/services-bg.jpg";

  return (
    <div>
      {/* HERO */}
      <ServiceHero title={title} bg={bg} />

      {/* CONTENT */}
      <div className="max-w-6xl mx-auto px-6 py-20">

        {/* Domain */}
        <p className="text-xl font-semibold text-gray-800 mb-10">
          Domain : <span className="font-normal">Startup Hiring Solutions</span>
        </p>

        {/* SECTION 1 */}
        <div className="bg-gray-100 rounded-xl p-10 mb-10 shadow-sm">
          <h3 className="text-2xl font-semibold text-[#0e355d] mb-4">
            Problem Statement
          </h3>

          <p className="text-gray-700 leading-relaxed">
            The Client wants to build its strong Technology resources at the 
            Start-Up stage while keeping the company name and brand kept 
            confidential till the initial discussion. Have to build 30 people 
            team as Stealth Mode Company with IIT, BIT and NIT Engineers 
            specialist in NFS and Technology R & D Guys.
          </p>
        </div>

        {/* SECTION 2 */}
        <div className="bg-gray-100 rounded-xl p-10 shadow-sm">
          <h3 className="text-2xl font-semibold text-[#0e355d] mb-4">
            Keptal Global's Approach & Solution
          </h3>

          <p className="text-gray-700 leading-relaxed">
            Understood from the India and US team about the challenges and 
            Business demands of Stealth Mode. Mapped Companies and handpicked 
            the talent pool across India. Started engaging with the Candidates 
            by providing market insights and opportunities with a soft pitch 
            for a coffee meeting enabling the candidates convert as active 
            candidate for selection process. Success is about trust and 
            confidence on approach by client and consistency in efforts made 
            the numbers achieved.
          </p>
        </div>

      </div>
        <Footer />
    </div>
  );
}
