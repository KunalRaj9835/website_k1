"use client";

import { useEffect, useRef, useState } from "react";
import { Lightbulb, ShieldCheck, Users, Award } from "lucide-react";

export default function WhyUs() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(true);

  // Fade-in animation
  

  return (
    <section
      ref={sectionRef}
      className={`max-w-7xl mx-auto px-6 py-24 transition-all duration-1000 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#f9fafb] to-[#ffffff] -z-10"></div>

      {/* Heading */}
      <div className="text-center mb-14">
        <h2 className="text-4xl font-bold text-[#0e355d]">Why Us</h2>
        <div className="h-1 w-20 bg-red-500 mx-auto mt-3 rounded-full"></div>
      </div>

      {/* Mission + Vision */}
      <div className="grid md:grid-cols-2 gap-12 mb-20 text-[#0e355d]">
        <Card title="Our Mission">
          Our mission is to provide quality consultancy and services with
          reliability, development, and timeliness. We ensure quality is
          embedded into everything we deliver and continuously exceed client
          expectations globally.
        </Card>

        <Card title="Our Vision">
          We aim to become one of the leading global consultancy providers in
          software development and technology consulting—driven by innovation,
          passion, and excellence.
        </Card>
      </div>

      {/* Core Values */}
      <SectionTitle title="Our Core Values" />

      <div className="grid md:grid-cols-4 gap-8 mb-24">
        <ValueCard
          icon={<ShieldCheck size={40} className="text-red-500 mx-auto" />}
          title="Quality Excellence"
          desc="Precision, compliance, and consistent delivery define our work ethic."
        />
        <ValueCard
          icon={<Lightbulb size={40} className="text-red-500 mx-auto" />}
          title="Innovation"
          desc="Forward-thinking solutions that accelerate digital transformation."
        />
        <ValueCard
          icon={<Users size={40} className="text-red-500 mx-auto" />}
          title="Customer Focus"
          desc="Strong long-term partnerships built on trust and transparency."
        />
        <ValueCard
          icon={<Award size={40} className="text-red-500 mx-auto" />}
          title="Reputation & Trust"
          desc="A proven track record with global enterprises and OEMs."
        />
      </div>

      {/* KPIs */}
      <div className="grid md:grid-cols-3 gap-8 text-center mb-24">
        <KPI number="150+" label="Global Clients" />
        <KPI number="250+" label="Engineers & Experts" />
        <KPI number="12+" label="Industries Served" />
      </div>

      {/* Why Keptel Stands Out */}
      <SectionTitle title="Why Keptel Stands Out" />

      <div className="grid md:grid-cols-2 gap-8 text-[#0e355d]">
        <AdvantageCard title="Decades of Industry Expertise">
          A highly skilled engineering and consulting team specializing in Data
          Science, AI, ML, Big Data, Cloud, and Embedded Engineering.
        </AdvantageCard>

        <AdvantageCard title="Trusted by Global Brands">
          Preferred by OEMs, Tier-1 suppliers, and enterprise leaders across
          automotive, aerospace, healthcare, and finance.
        </AdvantageCard>

        <AdvantageCard title="ISO 9001:2015 Certified">
          Ensuring world-class processes, delivery excellence, and compliance.
        </AdvantageCard>

        <AdvantageCard title="End-to-End Capability">
          From data engineering to AI, cloud transformation to strategic
          staffing—everything under one roof.
        </AdvantageCard>
      </div>
    </section>
  );
}

/* ----------------- COMPONENTS ------------------ */

function Card({ title, children }) {
  return (
    <div className="bg-white shadow-xl p-10 rounded-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
      <h3 className="text-2xl font-semibold text-red-500 mb-4">{title}</h3>
      <p className="leading-relaxed">{children}</p>
    </div>
  );
}

function SectionTitle({ title }) {
  return (
    <div className="text-center mb-10">
      <h3 className="text-2xl font-semibold text-[#0e355d]">{title}</h3>
      <div className="h-1 w-16 bg-red-500 mx-auto mt-3 rounded-full"></div>
    </div>
  );
}

function ValueCard({ icon, title, desc }) {
  return (
    <div className="bg-white shadow-md p-8 rounded-xl border border-gray-100 text-center hover:shadow-xl transition-all duration-300">
      {icon}
      <h4 className="text-xl font-semibold text-[#0e355d] mt-4 mb-2">{title}</h4>
      <p className="text-sm leading-relaxed">{desc}</p>
    </div>
  );
}

function KPI({ number, label }) {
  return (
    <div className="p-6 bg-white rounded-xl shadow-md border hover:shadow-xl transition-all duration-300">
      <h3 className="text-4xl font-bold text-red-500">{number}</h3>
      <p className="mt-2 text-[#0e355d] font-medium text-lg">{label}</p>
    </div>
  );
}

function AdvantageCard({ title, children }) {
  return (
    <div className="bg-white p-8 rounded-xl border shadow-md hover:shadow-xl transition-all duration-300">
      <h4 className="text-xl font-semibold text-red-500 mb-3">{title}</h4>
      <p className="leading-relaxed">{children}</p>
    </div>
  );
}

