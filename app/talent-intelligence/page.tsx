"use client";

import ServiceHero from "@/components/ServiceHero";
import ServiceTabs from "@/components/ServiceTabs";
import ServiceSection from "@/components/ServiceSection";
import { useState } from "react";
import Footer from "@/components/Footer";

export default function Page() {
  // 1) PAGE DATA
  const title = "Talent Intelligence";
  const bg = "/services-bg.jpg";

  const introLeft = "Access the vital industry insights to soar your business to new heights! Our robust talent research/talent intelligence encompasses skills, location, and organisations.";
  const introRight ="Keptel Global’s professionals delivers on exclusive client’s talent requirements backed by talent intelligence factor. Talent intelligence factor supports in facilitating the identification of the right talent fit after thorough evaluation of comprehensive assessment criteria of industry, skills, location, compensation, career path and experience.";

  const bottomText = "Extensive road mapping and rigorous research allow us to locate the right talent for you.";

  // 2) TABS
  const tabs = [
    { id: "fulltime", label: "Role Mapping", icon: "/icon/shield.svg" },
    { id: "flexi", label: "Talent Advisory", icon: "/icon/laptop.svg" },
    {
      id: "strategic",
      label: "Compensation Benchmarking Services",
      icon: "/icon/server.svg",
    },
  ];

  // 3) TAB CONTENT SECTIONS
  const sections: Record<string, { title: string; image: string; text: string }> = {
    fulltime: {
      title: "Role Mapping",
      image: "/intelligence/a1.webp",
      text: `Keptel Global is engaged in working on defining the competitive talent landscape from the business domain and prospecting the candidate’s profile proactively to turn passive job seekers active. Role mapping ensures to gather the market data of the potential candidates and companies with their skills, knowledge and expertise from the identified market specification. This facilitates a confident restructure of Talent with informed decisions.`,
    },
    flexi: {
      title: "Talent Advisory",
      image: "/intelligence/a2.webp",
      text: `Keptel Global’s talent advisory solutions support our clients with JUST in TIME approach to optimize the process & cost through the talent strategy and recruitment process. Our professionals empower the clients with data driven talent inputs that acts as a catalyst for taking quick and effective hire decision.

As talent experts, our approach stands in providing recent trends, strategies, insights & inputs for rare talent in scaling the hiring ambitions. Our subject matter experts interact with the client’s Hiring Manager will insights on the skill, expertise, experience, knowledge and trait along with other Industry trends for better alignment. Our integrated approach helps in diversity hiring to meet the organisational diversity goals.`,
    },
    strategic: {
      title: "Compensation Benchmarking Services",
      image: "/intelligence/a3.webp",
      text: `Service of actionable insights from industry compensation benchmarking helps in aligning with the market to attract the talent and Retain the Talent.
With changing market dynamic and gap in demand and supply of qualified talent pool availability, the need for talent compensation insights has become a key business driver for attracting and retaining Talent.
Keptel Global provides compensation benchmarking services as a strategic initiative in providing insightful data for each critical role from the required domains and Industries aligning to detailed analysis of Job descriptions. The designed consulting approach enables strategic and operational inputs for designing and enhancing the current compensation policy with uniformity of structure at the organisational level.
The transparent analytical data ensures a rational approach in designing compensation policy for attracting and retaining the Talent in the organisation with Talent Intelligence.`,
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
        <h2 className="text-3xl font-bold">Talent Intelligence Process Flow</h2>
        <img
          src="/intelligence/a4.webp"
          className="w-[980px] mx-auto mt-4"
        />
      </div>
        <Footer />
    </div>
  );
}

