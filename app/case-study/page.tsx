"use client";

import ServiceHero from "@/components/ServiceHero";
import BlogCard from "@/components/BlogCard";

import Footer from "@/components/Footer";

export default function Page() {
  // Hero Section Data
  const title = "Case Study";
  const bg = "/services-bg.jpg";

  return (
    <>
      {/* HERO */}
      <ServiceHero title={title} bg={bg} />

      {/* BLOG GRID */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        {/* Grid of blogs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

          <BlogCard
                    image="/case/case1.png"
                    title="Stealth Mode Bigdata Management Company"
                    href="/case-study/case1"
                  />
          <BlogCard
                    image="/case/case2.jpeg"
                    title="Leading E-commerce Platform"
                    href="/case-study/case2"
                  />
          <BlogCard
                    image="/case/case3.webp"
                    title="Global SaaS Solutions Provider"
                    href="/case-study/case3"
                  />
          <BlogCard
                    image="/case/case4.jpg"
                    title="Innovative Fintech Startup"
                    href="/case-study/case4"
                  />
          <BlogCard
                    image="/case/case5.webp"
                    title="Healthcare Technology Firm"
                    href="/case-study/case5"
                  />
          <BlogCard
                    image="/case/case6.jpg"
                    title="Renewable Energy Company"
                    href="/case-study/case6"
                  />
                  

          {/* Duplicate more BlogCard entries here */}
        </div>

        {/* Load More / Know More Button */}
      </section>

      <Footer />
    </>
  );
}
