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
        Delivering Deep Domain Expertise Across High-Impact Industries
      </p>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

        <IndustryCard
          title="IT Services & Digital Engineering"
          description="Cloud, Data Engineering, AI/ML, Application Development, BI, and Enterprise Modernization."
          icon="/case/case1i.svg"
          href="/case-study/case1"
          dark={true}
        />

        <IndustryCard
          title="Automotive Engineering"
          description="Embedded Systems, AUTOSAR, ECU Testing, ADAS, Functional Safety (ISO 26262), and IVI."
          icon="/case/case2i.svg"
          href="/case-study/case2"
          dark={false}
        />

        <IndustryCard
          title="Aerospace & Defence"
          description="DO-178 & DO-254 Engineering, Embedded Avionics, Firmware, V&V, and System Certification Support."
          icon="/case/case3i.svg"
          href="/case-study/case3"
          dark={true}
        />

        <IndustryCard
          title="Industrial Automation"
          description="IoT Engineering, Robotics, RTOS, Control Systems, Protocol Development, and Smart Manufacturing."
          icon="/case/case4i.svg"
          href="/case-study/case4"
          dark={false}
        />

        <IndustryCard
          title="Healthcare Technology"
          description="Clinical Data Integration, Healthcare Analytics, Device Data Engineering, and Digital Health Solutions."
          icon="/case/case5i.svg"
          href="/case-study/case5"
          dark={true}
        />

        <IndustryCard
          title="IoT & Embedded Systems"
          description="Firmware, Device Drivers, Hardware Design, Edge Computing, GPS/GIS, and Real-Time Systems."
          icon="/case/case6i.svg"
          href="/case-study/case6"
          dark={false}
        />

      </div>
    </section>
  );
}
