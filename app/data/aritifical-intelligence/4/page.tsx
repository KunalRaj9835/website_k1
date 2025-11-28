"use client";

import Image from "next/image";
import Footer from "@/components/Footer";
import SideBySideCard from "@/components/SideBySideCard";

export default function Page() {
  const title = "Generative AI Solutions";
  const bg = "/photo/42.avif";

  const introHeading = "Build customised generative AI solutions that accelerate transformation";
  const introPara =
    "Generative AI is changing how organisations innovate, operate, and engage customers. Keptel helps you deploy tailored generative AI solutions that automate workflows, enhance creativity, power intelligent search, and elevate customer interactions. Our frameworks ensure safety, governance, and scalability from day one.";

  const midTitle = "Enterprise-grade generative AI engineered for real impact";
  const midPara =
    "Keptel designs, trains, and integrates generative AI models that align with your business goals. From RAG systems to custom LLMs to automated content generation, we build solutions that plug directly into your workflows while maintaining security and trust.";

  return (
    <div>
      {/* HERO */}
      <div className="relative h-[650px] w-full overflow-hidden">
        <Image src={bg} alt={title} fill className="object-cover opacity-70" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-transparent flex items-center px-6 md:px-20">
          <div>
            <h1 className="text-4xl md:text-6xl font-semibold">{title}</h1>
            <p className="mt-4 text-gray-700 text-lg max-w-xl">
              Build secure, scalable, production-ready generative AI systems.
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
          title="RAG & enterprise search systems"
          text="Enable accurate, context-rich answers using retrieval-augmented generation tailored to your data."
          image="/photo/43.jpg"
          color="#ffffff"
        />
        <SideBySideCard
          title="Custom model development"
          text="Train or fine-tune LLMs specifically for your workflows, industries, and proprietary datasets."
          image="/photo/44.jpg"
          color="#f9f9f9"
        />
        <SideBySideCard
          title="AI content automation"
          text="Automate content creation for marketing, operations, documentation, and customer engagement."
          image="/photo/45.jpg"
          color="#eaeaea"
        />
        <SideBySideCard
          title="Responsible AI & governance"
          text="Ensure model integrity, safety, bias control, and regulatory-ready governance frameworks."
          image="/photo/46.webp"
          color="#d6d7d9"
        />
      </div>

      <Footer />
    </div>
  );
}
