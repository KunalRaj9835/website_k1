"use client";

import ServiceHero from "@/components/ServiceHero";
import ServiceTabs from "@/components/ServiceTabs";
import ServiceSection from "@/components/ServiceSection";
import { useState } from "react";
import Footer from "@/components/Footer";

export default function Page() {
  // 1) PAGE DATA
  const title = "Talent Acquisition";
  const bg = "/services-bg.jpg";

  const introLeft =
    "To hire the best, we ensure your business is able to capitalise on the competency and competitive advantages using Keptel Global Talent Acquisition";
  const introRight =
    "Talent acquisition service is an ideal as well as optimum, formulated to keep our client’s recruitment process simple, quick, and efficient. Qualified professionals at Keptel Global follow the recruitment approach of not only finding the right talent from the domain but also keeping the recruitment function seamless. We deploy various tools to judge the competence of the candidate and help you make an intelligent and quality selection.Our streamlined recruitment approach provides diverse benefits and engages in a proven recruiting process. Keptel Global's team carefully assesses the talent acquisition activities of the client's business and further optimizes it to deliver desired results.";

  const bottomText =
    "Elevate your core competency through our cohesive triple play sourcing, that delivers assured Recruitment Success";

  // 2) TABS
  const tabs = [
    { id: "fulltime", label: "Full-Time Staffing", icon: "/icon/shield.svg" },
    { id: "flexi", label: "Flexi Staffing", icon: "/icon/laptop.svg" },
    {
      id: "strategic",
      label: "Strategic or Critical Hiring",
      icon: "/icon/server.svg",
    },
  ];

  // 3) TAB CONTENT SECTIONS
  const sections: Record<string, { title: string; image: string; text: string }> = {
    fulltime: {
      title: "Full-Time Staffing",
      image: "/talent/t1.webp",
      text: `Businesses can grow if organizations are built with the right people who stand as one unit to achieve the results. The talent need for any business at any stage is always about knowledge, skills, and the right attitude. At Keptel Global, we bridge the gap between potential employer and prospective talent through our full-time or permanent hiring solutions.

Our inhouse talent consultants act as a medium to get instant talent through around the-clock staffing service.`,
    },
    flexi: {
      title: "Flexi Staffing",
      image: "/talent/t2.webp",
      text: `Keptel Global’s Flexi or Contingent staffing services allow you to get quick recruitment solutions with highly qualified and efficient candidates for Business Contingency on a project basis. Temporary staffing enables clients to have resources on-demand and timelines basis for the projects/ assignments of the short term.`,
    },
    strategic: {
      title: "Strategic or Critical Hiring",
      image: "/talent/t3.webp",
      text: `We believe in being our client’s talent partner by utilizing our expertise and experience to deliver the required talent needs. Keptel Global offers Strategic and Critical Hiring solutions that provide a positive impact on the business & address the client’s unique solutions.

Keptel Global specializes in deploying a framework, which creates business value for talent acquisition and makes the entire process swift and leveraging.

Contact talent acquisition experts at Keptel Global and start a streamlined process of recruitment immediately.`,
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
      <div className="py-16 text-center">
        <h2 className="text-3xl font-bold">Our Unique Triple Play Model Sourcing</h2>
        <img
          src="/talent/t4.webp"
          className="w-[450px] mx-auto mt-4"
        />
      </div>
        <Footer />
    </div>
  );
}

