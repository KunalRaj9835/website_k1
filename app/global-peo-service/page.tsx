"use client";

import ServiceHero from "@/components/ServiceHero";
import ServiceTabs from "@/components/ServiceTabs";
import ServiceSection from "@/components/ServiceSection";
import { useState } from "react";
import Footer from "@/components/Footer";

export default function Page() {
  // 1) PAGE DATA
  const title = "Global PEO Services";
  const bg = "/services-bg.jpg";

  const introLeft ="Global PEO Service- New definition of International Recruitment.";

  const introRight ="Keptel Global constantly looks up for providing innovative services best suited for our client’s needs in an agile business environment. It has helped us in carving futuristic recruitment services of PEO (Professional Employer Organisation) & EOR (Employer of Records) services after a deep industry requirement forecast. Through our Global Professional Employer Organisation (Global PEO), we help our clients to access insights from India’s talent market, which provides advantages in building operations in India. Not just that, but we also act as our client’s India representative, with in-house recruitment, HR, Payroll, and Legal processes that provide assorted benefits. Our Employer of Records or EOR services support our clients to overcome the onus of carrying out complex organisation set up processes, legal compliances & payroll systems, work on the latest payment systems that make employee management activities simple and fully rewarding with efficient working.";

  const bottomText ="Hassle-Free Talent Onboarding, with assured legal compliances and adequate hiring processes without setting up any entity in any country.";

  // --------------------------------------------------------------------
  //  TAB SET 1
  // --------------------------------------------------------------------

  const tabs1 = [
    { id: "fulltime", label: "Hiring, Benefits & Payroll", icon: "/icon/shield.svg" },
    { id: "flexi", label: "Legal & Financial Guidance", icon: "/icon/laptop.svg" },
    {
      id: "strategic",
      label: "Human Resources",
      icon: "/icon/server.svg",
    },
  ];

  const sections1: Record<
    string,
    { title: string; image: string; text: string }
  > = {
    fulltime: {
      title: "Hiring, Benefits & Payroll",
      image: "/global/g3.webp",
      text: `Total legitimate and budgetary direction that guarantees compliance with all in-country administration rules. Our devoted investigate and preparing bunch tracks business law, tax collection, bookkeeping overhauls in-country to guarantee we are continuously compliant.`,
    },
    flexi: {
      title: "Legal & Financial Guidance",
      image: "/global/g4.webp",
      text: `Total legitimate and budgetary direction that guarantees compliance with all in-country administration rules. Our devoted investigate and preparing bunch tracks business law, tax collection, bookkeeping overhauls in-country to guarantee we are continuously compliant.`,
    },
    strategic: {
      title: "Human Resources",
      image: "/global/g5.webp",
      text: `We support your representatives from the point of hire to retirement– covering staffing, work contracts, offer letters, representative handbooks, business law admonitory, recompense and benefits, terminations (when required), and more..`,
    },
  };

  const [currentTab1, setCurrentTab1] = useState<
    "fulltime" | "flexi" | "strategic"
  >("fulltime");

  // --------------------------------------------------------------------
  //  TAB SET 2 (Duplicated)
  // --------------------------------------------------------------------

  const tabs2 = [
    { id: "alpha", label: "International Expansion", icon: "/icon/shield.svg" },
    { id: "beta", label: "International Recruitment", icon: "/icon/laptop.svg" },
    { id: "gamma", label: "EOR", icon: "/icon/server.svg" },
  ];

  const sections2: Record<
    string,
    { title: string; image: string; text: string }
  > = {
    alpha: {
      title: "International Expansion",
      image: "/global/g6.webp",
      text: `When prepared, our worldwide development arrangements move you to your claim legitimate substance whereas we proceed to oversee the compliance, authoritative and operational needs for HR, finance, bookkeeping, charge and more.`,
    },
    beta: {
      title: "International Recruitment",
      image: "/global/g7.webp",
      text: `You’ll be able to build up your worldwide workforce without having to handle any of the complex worldwide employee and onboarding forms yourself.`,
    },
    gamma: {
      title: "EOR",
      image: "/global/g8.webp",
      text: `The lessening of universal business dangers by taking on your PEO as an Employer of Record (EOR), meaning we are lawfully mindful for the installment of worldwide representatives, their benefits, installment of charges, and/or benefits as the nearby law requires.`,
    },
  };

  const [currentTab2, setCurrentTab2] = useState<
    "alpha" | "beta" | "gamma"
  >("alpha");

  // --------------------------------------------------------------------

  return (
    <div>
      {/* Hero */}
      <ServiceHero title={title} bg={bg} />

      {/* Intro Section */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10">
        <div>
          <p className="text-3xl font-semibold leading-snug mb-10">
            {introLeft}
          </p>

          <p className="text-gray-600 text-center md:text-left max-w-sm">
            {bottomText}
          </p>
        </div>

        <p className="text-gray-700 leading-relaxed whitespace-pre-line">
          {introRight}
        </p>
      </div>

      {/* --------------------------------------------------------------- */}
      {/* TAB SET 1 */}
      {/* --------------------------------------------------------------- */}
      <ServiceTabs
        tabs={tabs1}
        onSelect={(id: string) =>
          setCurrentTab1(id as "fulltime" | "flexi" | "strategic")
        }
      />

      <ServiceSection
        index={0}
        title={sections1[currentTab1].title}
        image={sections1[currentTab1].image}
        text={sections1[currentTab1].text}
      />

      {/* --------------------------------------------------------------- */}
      {/* TAB SET 2 (DUPLICATED) */}
      {/* --------------------------------------------------------------- */}
      <div className="mt-20" />

      <ServiceTabs
        tabs={tabs2}
        onSelect={(id: string) =>
          setCurrentTab2(id as "alpha" | "beta" | "gamma")
        }
      />

      <ServiceSection
        index={1}
        title={sections2[currentTab2].title}
        image={sections2[currentTab2].image}
        text={sections2[currentTab2].text}
      />


      <Footer />
    </div>
  );
}
