"use client";

import ServiceHero from "@/components/ServiceHero";
import Footer from "@/components/Footer";

export default function CaseStudy6Page() {
  const title = "Case Study : Renewable Energy Company";
  const bg = "/services-bg.jpg";

  return (
    <div>
      <ServiceHero title={title} bg={bg} />

      <div className="max-w-6xl mx-auto px-6 py-20">
        <p className="text-xl font-semibold text-gray-800 mb-10">
          Domain : <span className="font-normal">Clean Energy & IoT Solutions</span>
        </p>

        <div className="bg-gray-100 rounded-xl p-10 mb-10 shadow-sm">
          <h3 className="text-2xl font-semibold text-[#0e355d] mb-4">
            Problem Statement
          </h3>
          <p className="text-gray-700 leading-relaxed">
            A renewable energy company building smart grid management systems 
            needed engineers with expertise in IoT, embedded systems, and energy 
            management software. They required talent who understood both the 
            technical complexity of distributed energy systems and the mission-driven 
            nature of clean energy work. The challenge was competing with high-paying 
            tech companies while finding candidates genuinely committed to sustainability, 
            and who possessed the unique blend of hardware, software, and energy 
            domain expertise needed for smart grid innovation.
          </p>
        </div>

        <div className="bg-gray-100 rounded-xl p-10 shadow-sm">
          <h3 className="text-2xl font-semibold text-[#0e355d] mb-4">
            Keptal Global's Approach & Solution
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Leveraged the company's environmental mission as a key differentiator 
            in attracting purpose-driven talent. Targeted engineers from automotive, 
            industrial IoT, and energy sectors looking for meaningful impact. 
            Developed partnerships with clean energy forums and sustainability-focused 
            tech communities. Created technical assessments focusing on real-world 
            energy optimization problems. Highlighted the challenging technical 
            problems around grid stability and renewable integration. Successfully 
            recruited 32 engineers including embedded systems specialists, IoT 
            architects, and energy management experts, enabling the client to 
            deploy their smart grid solution across five regions and attract 
            strategic partnerships with major utilities.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}