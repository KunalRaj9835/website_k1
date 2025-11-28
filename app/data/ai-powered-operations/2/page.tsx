"use client";

import Image from "next/image";
import Footer from "@/components/Footer";
import SideBySideCard from "@/components/SideBySideCard";

export default function Page() {
  const title = "Customer Operations";
  const bg = "/photo/51.webp";

  const introHeading = "Deliver seamless customer experiences with data, intelligence, and speed";
  const introPara =
    "Customer expectations have never been higher. Keptel transforms customer operations by integrating AI-driven insights, automated workflows, and omnichannel orchestration. We help you deliver fast, personalised, high-quality experiences that strengthen loyalty and reduce service friction.";

  const midTitle = "Customer operations designed for immediate, relevant, and predictive engagement";
  const midPara =
    "Keptel enables enterprises to unify customer data, infuse intelligent recommendations, and streamline every touchpoint. From onboarding to service to retention, we help organisations engage customers more effectively using data-led strategies and powerful AI tools.";

  return (
    <div>
      {/* HERO */}
      <div className="relative h-[650px] w-full overflow-hidden">
        <Image src={bg} alt={title} fill className="object-cover opacity-70" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-transparent flex items-center px-6 md:px-20">
          <div>
            <h1 className="text-4xl md:text-6xl font-semibold">{title}</h1>
            <p className="mt-4 text-gray-700 text-lg max-w-xl">
              Create personalised, connected customer experiences at scale.
            </p>
          </div>
        </div>
      </div>

      {/* INTRO */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-semibold">{introHeading}</h2>
        <div className="w-16 h-1 bg-red-600 mt-4"></div>
        <p className="mt-8 text-gray-700 leading-relaxed">{introPara}</p>
      </div>

      {/* MID */}
      <div className="py-20" style={{ backgroundColor: "#e6edf4" }}>
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-4xl font-semibold text-red-600">{midTitle}</h3>
          <div className="w-16 h-1 bg-red-600 mt-4"></div>
          <p className="mt-8 text-gray-700 leading-relaxed">{midPara}</p>
        </div>
      </div>

      {/* WHAT WE DO */}
      <div className="max-w-7xl mx-auto px-6 py-16 bg-white">
        <h3 className="text-3xl font-semibold">What we do</h3>
        <div className="w-16 h-[3px] bg-red-500 mt-3"></div>
      </div>

      {/* CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
        <SideBySideCard
          title="Customer journey optimisation"
          text="Design frictionless customer journeys supported by intelligence and automation."
          image="/photo/52.avif"
          color="#ffffff"
        />
        <SideBySideCard
          title="AI-assisted service"
          text="Enable agents and customers with real-time recommendations and automated resolutions."
          image="/photo/53.jpg"
          color="#f9f9f9"
        />
        <SideBySideCard
          title="Omnichannel orchestration"
          text="Deliver consistent experiences across chat, email, voice, self-service, and mobile."
          image="/photo/54.jpeg"
          color="#eaeaea"
        />
        <SideBySideCard
          title="Customer insights & analytics"
          text="Turn customer signals into predictive insights that drive engagement and loyalty."
          image="/photo/55.webp"
          color="#d6d7d9"
        />
      </div>

      <Footer />
    </div>
  );
}
