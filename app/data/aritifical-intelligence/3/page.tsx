"use client";

import Image from "next/image";
import Footer from "@/components/Footer";
import SideBySideCard from "@/components/SideBySideCard";

export default function Page() {
  const title = "Data-led Marketing";
  const bg = "/photo/38.jpg";

  const introHeading = "Drive intelligent growth by activating your customer data";
  const introPara =
    "Great marketing depends on understanding customers deeply. Keptel helps organisations harness data, analytics, and AI to target the right customers, personalise experiences, and improve acquisition and retention. With unified data and predictive intelligence, your marketing becomes smarter, faster, and more effective.";

  const midTitle = "Transform marketing with real-time insights and AI-driven targeting";
  const midPara =
    "Keptel integrates customer data, builds predictive models, and deploys performance frameworks that optimise marketing spend. From segmentation to personalisation to attribution, we help you build customer experiences that convert and scale.";

  return (
    <div>
      {/* HERO */}
      <div className="relative h-[650px] w-full overflow-hidden">
        <Image src={bg} alt={title} fill className="object-cover opacity-70" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-transparent flex items-center px-6 md:px-20">
          <div>
            <h1 className="text-4xl md:text-6xl font-semibold">{title}</h1>
            <p className="mt-4 text-gray-700 text-lg max-w-xl">
              Unlock customer value with data-driven marketing intelligence.
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
          title="Customer segmentation"
          text="Build precise, behaviour-driven segments powered by predictive analytics."
          image="/photo/39.avif"
          color="#ffffff"
        />
        <SideBySideCard
          title="Personalisation engines"
          text="Deliver personalised experiences across channels using AI-driven recommendations."
          image="/photo/40.png"
          color="#f9f9f9"
        />
        <SideBySideCard
          title="Campaign optimisation"
          text="Optimise performance with intelligent attribution, spend allocation, and forecasting."
          image="/photo/41.webp"
          color="#eaeaea"
        />
        <SideBySideCard
          title="Customer lifetime value intelligence"
          text="Use predictive lifecycle modelling to maximise retention, loyalty, and revenue."
          image="/photo/42.avif"
          color="#d6d7d9"
        />
      </div>

      <Footer />
    </div>
  );
}
