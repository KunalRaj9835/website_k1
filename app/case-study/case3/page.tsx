"use client";

import ServiceHero from "@/components/ServiceHero";
import Footer from "@/components/Footer";

export default function CaseStudy3Page() {
  const title = "Case Study : Global SaaS Solutions Provider";
  const bg = "/services-bg.jpg";

  return (
    <div>
      <ServiceHero title={title} bg={bg} />

      <div className="max-w-6xl mx-auto px-6 py-20">
        <p className="text-xl font-semibold text-gray-800 mb-10">
          Domain : <span className="font-normal">Enterprise SaaS & Cloud Services</span>
        </p>

        <div className="bg-gray-100 rounded-xl p-10 mb-10 shadow-sm">
          <h3 className="text-2xl font-semibold text-[#0e355d] mb-4">
            Problem Statement
          </h3>
          <p className="text-gray-700 leading-relaxed">
            An established SaaS provider sought to strengthen their product 
            development capabilities across multiple verticals. They needed 
            senior engineers and product managers who could drive innovation 
            while maintaining enterprise-grade security and compliance standards. 
            The key challenge was finding talent with both deep technical expertise 
            and understanding of enterprise customer needs, particularly in regulated 
            industries requiring SOC2 and ISO certifications.
          </p>
        </div>

        <div className="bg-gray-100 rounded-xl p-10 shadow-sm">
          <h3 className="text-2xl font-semibold text-[#0e355d] mb-4">
            Keptal Global's Approach & Solution
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Implemented a strategic hiring program focusing on enterprise SaaS 
            veterans and product leaders from Fortune 500 companies. Developed 
            targeted outreach campaigns highlighting the client's growth trajectory 
            and technical challenges. Established a rigorous screening process 
            emphasizing security awareness and compliance knowledge. Built 
            relationships with passive candidates through thought leadership events 
            and technical workshops. Successfully recruited 35 senior professionals 
            including architects, product managers, and security specialists, 
            strengthening the client's enterprise offerings significantly.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}