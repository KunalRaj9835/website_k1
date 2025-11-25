"use client";

import ServiceHero from "@/components/ServiceHero";
import Footer from "@/components/Footer";

export default function CaseStudy4Page() {
  const title = "Case Study : Innovative Fintech Startup";
  const bg = "/services-bg.jpg";

  return (
    <div>
      <ServiceHero title={title} bg={bg} />

      <div className="max-w-6xl mx-auto px-6 py-20">
        <p className="text-xl font-semibold text-gray-800 mb-10">
          Domain : <span className="font-normal">Financial Technology & Digital Payments</span>
        </p>

        <div className="bg-gray-100 rounded-xl p-10 mb-10 shadow-sm">
          <h3 className="text-2xl font-semibold text-[#0e355d] mb-4">
            Problem Statement
          </h3>
          <p className="text-gray-700 leading-relaxed">
            A fintech startup disrupting the digital payments space needed to 
            rapidly build their core technology team while navigating strict 
            regulatory requirements. They required engineers with expertise in 
            payment gateways, blockchain technology, and financial compliance. 
            The challenge was attracting top talent away from established financial 
            institutions while competing with well-funded competitors in a hot 
            talent market, all while maintaining confidentiality around their 
            innovative payment solution.
          </p>
        </div>

        <div className="bg-gray-100 rounded-xl p-10 shadow-sm">
          <h3 className="text-2xl font-semibold text-[#0e355d] mb-4">
            Keptal Global's Approach & Solution
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Crafted a compelling narrative around the startup's vision and market 
            opportunity to attract risk-taking innovators. Targeted professionals 
            from banking, payment processors, and crypto companies seeking greater 
            impact. Developed a confidential recruitment process with phased 
            information disclosure to protect IP. Created technical challenges 
            that showcased the interesting problems candidates would solve. 
            Successfully built a 25-member team including blockchain developers, 
            payment specialists, and compliance experts within four months, enabling 
            the client to launch their MVP and secure Series A funding.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}