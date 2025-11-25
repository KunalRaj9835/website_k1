"use client";

import ServiceHero from "@/components/ServiceHero";
import ServiceTabs from "@/components/ServiceTabs";
import ServiceSection from "@/components/ServiceSection";
import { useState } from "react";
import Footer from "@/components/Footer";

export default function Page() {
  // 1) PAGE DATA
  const title = "Recruitment Process Outsourcing";
  const bg = "/services-bg.jpg";

  const introLeft = "We work as an integral system for Strategy and Process, enabling Recruitment Function Delivery of the highest standard.";
  const introRight ="Recruitment challenges are always unique like you. At Keptel Global, we address unique business talent complications through our customized RPO or Recruitment process outsourcing services, which are based on your specific business model backed by data and experience. Our experts evaluate and dissect the talent requirement of our client’s business and provide customized, scalable, cost-effective, and highly proficient recruitment processes resolving clients’ unique recruitment objectives. Our RPO service assists our clients to focus on their core business activities and rely on us with all their business-based recruitment deliverables. Our team provides real-time market insights to ensure you deploy the best industry practices for strengthening the workforce. We deploy innovative technology and further deliver exceptional results ultimately enhancing your operational efficiency.";

  const bottomText = "From start-ups, SMBs to large-scale enterprises, we adopt a project-oriented approach ensuring time and cost efficiency during Recruitment.";

  // 2) TABS
  const tabs = [
    { id: "fulltime", label: "End to End RPO", icon: "/icon/shield.svg" },
    { id: "flexi", label: "Project Recruitment Process Outsourcing", icon: "/icon/laptop.svg" },
    
  ];

  // 3) TAB CONTENT SECTIONS
  const sections: Record<string, { title: string; image: string; text: string }> = {
    fulltime: {
      title: "End to End RPO",
      image: "/rpo/r1.webp",
      text: "End-to-end RPO solutions enable our clients to have the convenience with result-oriented hiring of talent with best industry practices. Keptel Global's RPO ensures Employer Branding, Candidate Engagement, and Process Management. Our RPO Solutions provides accountable program leveraging to cut down the hiring managers' time and is customized towards the hiring problem. Each client problem is specific, and the solution is designed with absolute customization & flexibility to specific needs and timelines.",
    },
    flexi: {
      title: "Project Recruitment Process Outsourcing",
      image: "/rpo/r2.webp",
      text: `Our project RPO services are highly productive and efficient to kickstart the project within the designated and mutually agreed on timelines. Keptel Global's project RPO services closely work with the hiring manager and recruitment team for quick and quality delivery of recruitment.`,
    },

  };

  // CURRENT TAB STATE
  const [currentTab, setCurrentTab] = useState<"fulltime" | "flexi" | "strategic">("fulltime");

  return (
    <div>
      {/* Hero */}
      <ServiceHero title={title} bg={bg} />

      {/* Intro */}
      {/* Intro Section */}
<div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10">
  
  {/* LEFT TEXT (big + bottom small) */}
  <div>
    <p className="text-3xl font-semibold leading-snug mb-10">
      {introLeft}
    </p>

    <p className="text-gray-600 text-center md:text-left max-w-sm">
      {bottomText}
    </p>
  </div>

  {/* RIGHT LONG PARAGRAPH */}
  <p className="text-gray-700 leading-relaxed whitespace-pre-line">
    {introRight}
  </p>

</div>


      {/* Tabs */}
      <ServiceTabs
        tabs={tabs}
        onSelect={(id: string) =>
          setCurrentTab(id as "fulltime" | "flexi" | "strategic")
        }
      />

      {/* Active section */}
      <ServiceSection
        index={0}
        title={sections[currentTab].title}
        image={sections[currentTab].image}
        text={sections[currentTab].text}
      />

      {/* Final Diagram */}
        <Footer />
    </div>
  );
}

