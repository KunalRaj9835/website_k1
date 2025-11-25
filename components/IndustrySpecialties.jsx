import IndustryCard from "./IndustryCard";

export default function IndustrySpecialties() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">

      {/* Heading */}
      <div className="text-center mb-4">
        <h2 className="text-3xl font-bold text-[#0e355d]">Industry Specialties</h2>
        <div className="h-1 w-20 bg-red-500 mx-auto mt-3 rounded-full"></div>
      </div>

      <p className="text-center text-gray-600 mb-10">
        Mapping is Our DNA and Acquisition is our Expertise
      </p>

      {/* Smaller Cards Grid */}
      {/* INDUSTRY CARD STYLE CASE STUDIES */}
<section className="max-w-7xl mx-auto px-6 py-10">


  {/* Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

    <IndustryCard
      title="Stealth Mode Bigdata Management Company"
      description="Data Pipelines, Lakehouse Modernization, Advanced ETL..."
      icon="/case/case1i.svg"
      href="/case-study/case1"
      dark={true}
    />

    <IndustryCard
      title="Leading E-commerce Platform"
      description="Customer Analytics, Recommendation Systems, Demand Forecasting..."
      icon="/case/case2i.svg"
      href="/case-study/case2"
      dark={false}
    />

    <IndustryCard
      title="Global SaaS Solutions Provider"
      description="Cloud Migration, Data Warehousing, Billing Analytics..."
      icon="/case/case3i.svg"
      href="/case-study/case3"
      dark={true}
    />

    <IndustryCard
      title="Innovative Fintech Startup"
      description="Fraud Detection, Real-Time Scoring, Risk Modeling..."
      icon="/case/case4i.svg"
      href="/case-study/case4"
      dark={false}
    />

    <IndustryCard
      title="Healthcare Technology Firm"
      description="Clinical Data Integration, Patient Data Insights..."
      icon="/case/case5i.svg"
      href="/case-study/case5"
      dark={true}
    />

    <IndustryCard
      title="Renewable Energy Company"
      description="IoT Data Engineering, Predictive Grid Analytics..."
      icon="/case/case6i.svg"
      href="/case-study/case6"
      dark={false}
    />

  </div>
</section>

    </section>
  );
}
