"use client";

import ServiceHero from "@/components/ServiceHero";
import Footer from "@/components/Footer";

export default function CaseStudy2Page() {
  const title = "Case Study : Leading E-commerce Platform";
  const bg = "/services-bg.jpg";

  return (
    <div>
      <ServiceHero title={title} bg={bg} />

      <div className="max-w-6xl mx-auto px-6 py-20">
        <p className="text-xl font-semibold text-gray-800 mb-10">
          Domain : <span className="font-normal">E-commerce & Retail Technology</span>
        </p>

        <div className="bg-gray-100 rounded-xl p-10 mb-10 shadow-sm">
          <h3 className="text-2xl font-semibold text-[#0e355d] mb-4">
            Problem Statement
          </h3>
          <p className="text-gray-700 leading-relaxed">
            A rapidly growing e-commerce platform needed to scale their technology 
            team to support expansion into new markets. They required specialized 
            talent in cloud architecture, microservices, and data analytics while 
            maintaining their competitive edge. The challenge was finding candidates 
            who understood both the technical complexity and the fast-paced nature 
            of e-commerce operations, with expertise in handling peak loads during 
            sale events.
          </p>
        </div>

        <div className="bg-gray-100 rounded-xl p-10 shadow-sm">
          <h3 className="text-2xl font-semibold text-[#0e355d] mb-4">
            Keptal Global's Approach & Solution
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Developed a comprehensive talent mapping strategy targeting professionals 
            from top e-commerce and retail tech companies. Created a specialized 
            assessment framework focusing on scalability challenges and real-time 
            system design. Leveraged our network to identify candidates with proven 
            track records in handling high-traffic scenarios. Successfully placed 
            45 professionals across engineering, DevOps, and analytics roles within 
            six months, enabling the client to launch in three new markets ahead 
            of schedule.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}