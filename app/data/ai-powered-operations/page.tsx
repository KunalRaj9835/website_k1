"use client";

import Image from "next/image";
import Footer from "@/components/Footer";
import SideBySideCard from "@/components/SideBySideCard";

export default function Page() {
  // PAGE DATA
  const title = "AI-Powered Operations";
  const bg = "/photo/pre.jpg"; // replace with your hero image

  const introHeading =
    "Lay the foundation for operational excellence – improving outcomes and sustainability";

  const introPara =
    "Establishing a strong data foundation and a clear digital strategy is essential for long-term operational success. But the real transformation happens when that strategy is executed through a customer-centric operating model that elevates efficiency, strengthens consistency, and unlocks sustainable business value. Keptel brings deep industry and functional expertise to help you embed intelligence into every layer of your operations—from sharpening back-office precision to elevating customer experiences, optimizing financial processes, and reinforcing regulatory compliance. We ensure that digital capabilities don’t just exist, but work in harmony with your strategic aspirations to deliver operational excellence where milliseconds matter.";

  const midTitle = "Streamlining complex, interconnected operations";

  const midPara =
    "One Keptel client operating in the title services industry faced an extremely complex operational model involving thousands of agents and county-level verifications across the U.S. Manual processes, siloed communication, and fragmented workflows drove delays and inconsistency. Keptel introduced digital operations solutions that strengthened resilience, unlocked new data-driven revenue streams, and positioned the organization as an innovation leader. This transformation demonstrates how intelligent operations can shift an entire industry forward.";

  return (
    <div>
      {/* -------------------------------------------------- */}
      {/* HERO */}
      {/* -------------------------------------------------- */}
      <div className="relative h-[650px] w-full overflow-hidden">
        <Image src={bg} alt={title} fill className="object-cover opacity-70" />

        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-transparent flex items-center px-6 md:px-20">
          <div>
            <h1 className="text-4xl md:text-6xl font-semibold">{title}</h1>
            <p className="mt-4 text-gray-700 text-lg max-w-xl">
              Operational intelligence that sharpens workflows and elevates value.
            </p>
          </div>
        </div>
      </div>

      {/* -------------------------------------------------- */}
      {/* INTRO */}
      {/* -------------------------------------------------- */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-semibold leading-snug">{introHeading}</h2>

        <div className="w-16 h-1 bg-red-600 mt-4"></div>

        <p className="mt-8 text-gray-700 leading-relaxed">{introPara}</p>
      </div>

      {/* -------------------------------------------------- */}
      {/* MID SECTION */}
      {/* -------------------------------------------------- */}
      <div className="py-20" style={{ backgroundColor: "#e6edf4" }}>
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-4xl font-semibold leading-snug text-red-600">
            {midTitle}
          </h3>

          <div className="w-16 h-1 bg-red-600 mt-4"></div>

          <p className="mt-8 text-gray-700 leading-relaxed">{midPara}</p>
        </div>
      </div>

      {/* -------------------------------------------------- */}
      {/* WHAT WE DO SECTION (RED VERSION) */}
      {/* -------------------------------------------------- */}
      <div className="max-w-7xl mx-auto px-6 py-16 bg-white">
        <h3 className="text-3xl font-semibold">What we do</h3>
        <div className="w-16 h-[3px] bg-red-500 mt-3"></div>
      </div>

      {/* -------------------------------------------------- */}
      {/* 4-CARD GRID */}
      {/* -------------------------------------------------- */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">

        <SideBySideCard
          title="Business Operations"
          text="Break down silos and embed real-time intelligence into your workflows as you reimagine, automate, and optimize operations across the enterprise."
          image="/photo/9.jpg"
          color="#ffffff"
          href="/data/ai-powered-operations/1"
        />

        <SideBySideCard
          title="Customer operations"
          text="Adapt quickly to evolving customer needs with AI-powered insights that deliver fast, relevant, and personalized interactions at scale."
          image="/photo/10.avif"
          color="#f9f9f9"
          href="/data/ai-powered-operations/2"
        />

        <SideBySideCard
          title="Finance and accounting"
          text="Improve profitability by modernizing financial workflows, automating decision paths, and integrating digital tools that strengthen accuracy and control."
          image="/photo/11.webp"
          color="#eaeaea"
          href="/data/ai-powered-operations/3"
        />

        <SideBySideCard
          title="Risk and compliance"
          text="Use data and AI to strengthen resilience, reduce risk exposure, and ensure global compliance while streamlining complex regulatory processes."
          image="/photo/12.jpeg"
          color="#d6d7d9"
          href="/data/ai-powered-operations/4"
        />

      </div>

      <Footer />
    </div>
  );
}
