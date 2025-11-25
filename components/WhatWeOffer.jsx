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

      {/* TECHNOLOGY EXPERTISE GRID */}
      <div
        className="
          grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
          gap-10
        "
      >
        <OfferCard
          icon="tech/cloud-platforms.svg"
          title="Cloud Platforms"
          description="AWS, Azure, Google Cloud—enterprise-grade scalable cloud infrastructure"
          href="#"
        />

        <OfferCard
          icon="tech/cloud-analytics.svg"
          title="Cloud Analytics & BI"
          description="Looker, Power BI, Qlik, Tableau, Oracle Analytics for data-driven insights"
          href="#"
        />

        <OfferCard
          icon="tech/frameworks.svg"
          title="Frameworks"
          description="Spring Boot, Kafka, modern backend frameworks for robust engineering"
          href="#"
        />

        <OfferCard
          icon="tech/infrastructure.svg"
          title="Infrastructure"
          description="RedHat, SUSE, Ubuntu Linux—enterprise OS and infrastructure support"
          href="#"
        />

        <OfferCard
          icon="tech/orchestration.svg"
          title="Orchestration Platforms"
          description="Apache Spark, Airflow for automation, data pipelines & scheduling"
          href="#"
        />

        <OfferCard
          icon="tech/onprem-analytics.svg"
          title="On-Premises Analytics"
          description="Oracle BI, IBM Cognos for private, secured enterprise data analytics"
          href="#"
        />

        <OfferCard
          icon="tech/backend.svg"
          title="Backend Layer"
          description="Java, .NET, Python—high-performance software and service development"
          href="#"
        />

        <OfferCard
          icon="tech/cloud-storage.svg"
          title="Cloud Storage"
          description="BigQuery, Azure Data Lake, Snowflake, Hive—modern cloud data warehousing"
          href="#"
        />

        <OfferCard
          icon="tech/etl.svg"
          title="ETL Tools"
          description="ODI, Informatica, Talend, Tableau—data extraction, transformation & loading"
          href="#"
        />

        <OfferCard
          icon="tech/crm.svg"
          title="CRM Platforms"
          description="Salesforce, HubSpot, Zoho CRM—customer relationship and engagement solutions"
          href="#"
        />

        <OfferCard
          icon="tech/cloud-integration.svg"
          title="Cloud Integration Tools"
          description="Informatica, Talend, Matillion, AWS Glue—enterprise data integration pipelines"
          href="#"
        />

        <OfferCard
          icon="tech/onprem-storage.svg"
          title="On-Premises Storage"
          description="SQL Server, PostgreSQL, MySQL, Oracle—secure enterprise data storage"
          href="#"
        />
      </div>
    </section>
  );
}
