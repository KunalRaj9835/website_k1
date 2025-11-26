"use client";

import ServiceHero from "@/components/ServiceHero";
import ServiceTabs from "@/components/ServiceTabs";
import ServiceSection from "@/components/ServiceSection";
import { useState } from "react";
import Footer from "@/components/Footer";

export default function Page() {
  // 1) PAGE DATA
  const title = "Recruitment Process Outsourcing";
  const bg = "/bg3.jpeg";

  const introLeft =
    "We integrate strategy, technology, and process excellence to deliver a recruitment function that operates with precision and global standards.";

  const introRight =
    "Talent challenges vary across organisations, industries, and stages of growth. Keptel Global delivers tailored Recruitment Process Outsourcing (RPO) solutions built on deep market intelligence, proven hiring frameworks, and a data-driven methodology. Our experts analyse talent gaps, role competencies, and business objectives to build scalable, cost-effective, and highly efficient recruitment engines. With our RPO model, organisations can shift focus to core business priorities while we drive end-to-end talent delivery—ensuring agility, speed, and accuracy. We equip enterprises with market insights, advanced recruitment technologies, and seamless execution, enabling them to achieve strategic workforce transformation.";

  const bottomText =
    "From start-ups to large enterprises, we deploy project-oriented RPO frameworks designed for speed, cost efficiency, and measurable hiring impact.";

  // 2) TABS
  const tabs = [
    { id: "fulltime", label: "End to End RPO", icon: "/icon/shield.svg" },
    {
      id: "flexi",
      label: "Project Recruitment Process Outsourcing",
      icon: "/icon/laptop.svg",
    },
  ];

  // 3) TAB CONTENT SECTIONS
  const sections: Record<
    string,
    { title: string; image: string; text: string }
  > = {
    fulltime: {
      title: "End to End RPO",
      image: "/rpo/r1.webp",
      text:
        "Keptel’s End-to-End RPO delivers a comprehensive recruitment ecosystem—from employer branding and sourcing strategy to candidate engagement, assessment, and onboarding. Our model reduces hiring manager workload, accelerates talent acquisition, and embeds best industry practices tailored to each client’s challenge. Every engagement is designed with full customization and operational flexibility, ensuring consistent high-quality hiring outcomes aligned to business growth.",
    },
    flexi: {
      title: "Project Recruitment Process Outsourcing",
      image: "/rpo/r2.webp",
      text:
        "Our Project RPO model supports organisations during expansion phases, new product launches, or sudden hiring surges. We collaborate closely with hiring managers and internal recruitment teams to deliver swift, high-quality hiring within agreed timelines. This model ensures agility, improved time-to-fill, and consistent delivery across short-term or high-volume recruitment needs.",
    },
  };

  // CURRENT TAB STATE
  const [currentTab, setCurrentTab] = useState<
    "fulltime" | "flexi" | "strategic"
  >("fulltime");

  return (
    <div>
      {/* Hero */}
      <ServiceHero title={title} bg={bg} />

      {/* Intro Section */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10">
        {/* LEFT TEXT */}
        <div>
          <p className="text-3xl font-semibold leading-snug mb-10">
            {introLeft}
          </p>

          <p className="text-gray-600 text-center md:text-left max-w-sm">
            {bottomText}
          </p>
        </div>

        {/* RIGHT PARAGRAPH */}
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

      <Footer />
    </div>
  );
}

