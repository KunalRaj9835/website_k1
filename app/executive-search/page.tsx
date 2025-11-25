"use client";

import ServiceHero from "@/components/ServiceHero";
import ServiceTabs from "@/components/ServiceTabs";
import ServiceSection from "@/components/ServiceSection";
import { useState } from "react";
import Footer from "@/components/Footer";

export default function Page() {
  // 1) PAGE DATA
  const title = "Executive Search & Board Room Hiring";
  const bg = "/services-bg.jpg";

  const introLeft = "We solve the puzzle of complex leadership building both at the level of executive management as well as the Board.";
  const introRight ="The existence of a qualified and effective board is critical for the success of an organisation, varying sizes and types including Start-Ups, Midsize, and MNCs. On the other hand, the need for exceptional as well as high-performing executives to lead the organisation remains constant and pressing. Our experience, research, and deep industry functional expertise have helped us in garnering valuable insights. Our network of Executive Search professionals is qualified experts from different domains, who assist us identifying the most suitable executives and board members with the right talent, expertise, and capabilities to address the unique requirements of clients through our executive search and board room hiring services.";

  const bottomText = "Our sector-specific Talent Insights, allows us to identify Talent that fits like a glove in the cultural, intellectual, and hierarchical environment";

  // 2) TABS
  const tabs = [
    { id: "fulltime", label: "Executive Search", icon: "/icon/shield.svg" },
    { id: "flexi", label: "CXO Mapping", icon: "/icon/laptop.svg" },
    {
      id: "strategic",
      label: "Director/ Board Member Hiring",
      icon: "/icon/server.svg",
    },
  ];

  // 3) TAB CONTENT SECTIONS
  const sections: Record<string, { title: string; image: string; text: string }> = {
    fulltime: {
      title: "Executive Search",
      image: "/executive/e1.webp",
      text: "Keptel Global aligns with the leadership team or founder members of the client’s organisation to understand the business problem and vision of the organisation. This helps us integrate ourselves into their recruitment process and find executives with the right leadership qualities and approaches to contribute to the success of the company. The methodology involves a robust assessment of the leadership role through Role & Skill mapping for correct recruitment.",
    },
    flexi: {
      title: "CXO Mapping",
      image: "/executive/e2.webp",
      text: `To make your business appealing in front of your customers which will clients and take your organisation through a process of transformation to achieve growth. Our services include CXO mapping that enables us to determine the experience & role management aspect of the candidates for internal restructuring and building the CXO role in the organisation.`,
    },
    strategic: {
      title: "Director/ Board Member Hiring",
      image: "/executive/e3.webp",
      text: `Board members perform the crucial business function of turning an organisation’s vision into reality. Our experts at Keptel Global responsibly research executives engaged in contributing, advising, and mentoring members along with diversity inclusion at the board level. This ensures that our client’s Top management have the right leaders to leads`,
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

