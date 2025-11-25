import OfferCard from "./OfferCard";

export default function WhatWeOffer() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">

      {/* Heading */}
      <div className="text-center mb-14">
        <h2 className="text-3xl font-bold text-[#0e355d]">
          Technology Expertise
        </h2>
        <div className="h-1 w-20 bg-red-400 mx-auto mt-3 rounded-full"></div>
      </div>

      {/* GRID — ONLY 6 CARDS */}
      <div
        className="
          grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
          gap-10
        "
      >

        {/* 1. CLOUD (MERGED) */}
        <OfferCard
          icon="tech/cloud.svg"
          title="Cloud & Analytics"
          description="AWS, Azure, GCP, BigQuery, Snowflake, Power BI, Tableau, Looker, Qlik — complete cloud & BI ecosystem."
          href="#"
        />

        {/* 2. FRAMEWORKS */}
        <OfferCard
          icon="tech/frameworks.svg"
          title="Frameworks"
          description="Spring Boot, Kafka, Microservices and high-performance backend architectures."
          href="#"
        />

        {/* 3. INFRASTRUCTURE */}
        <OfferCard
          icon="tech/infrastructure.svg"
          title="Infrastructure"
          description="RedHat, SUSE, Ubuntu Linux and enterprise-grade infrastructure ecosystems."
          href="#"
        />

        {/* 4. ORCHESTRATION */}
        <OfferCard
          icon="tech/orchestration.svg"
          title="Orchestration Platforms"
          description="Apache Spark, Airflow — automation, data pipelines, workflow scheduling."
          href="#"
        />

        {/* 5. BACKEND */}
        <OfferCard
          icon="tech/backend.svg"
          title="Backend Engineering"
          description="Java, .NET, Python — scalable and reliable application development."
          href="#"
        />

        {/* 6. STORAGE */}
        <OfferCard
          icon="tech/storage.svg"
          title="Storage & Databases"
          description="Oracle, MySQL, PostgreSQL, SQL Server — secure on-premise & hybrid data storage."
          href="#"
        />

      </div>
    </section>
  );
}
