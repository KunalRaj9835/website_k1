"use client";

import Footer from "@/components/Footer";

const Box = ({ title, text }) => (
  <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
    <h3 className="text-xl font-semibold text-[#D60000] leading-snug">{title}</h3>
    <p className="text-gray-700 mt-3 text-sm leading-relaxed">{text}</p>
  </div>
);

export default function KeptelAIPage() {
  return (
    <div className="w-full bg-white text-gray-900">

      {/* ================= HERO ================= */}
      <section className="w-full bg-[#F4F7FB] py-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT TEXT */}
          <div>
            <h1 className="text-5xl font-bold mb-4">Why Keptel ?</h1>

            <div className="h-[3px] w-16 bg-[#D60000] mb-6"></div>

            <p className="text-gray-700 leading-relaxed max-w-md">
              Keptel orchestrates AI models, engineering expertise, and analytics  
              to drive measurable transformation across industries.  
              Unlike traditional solutions, Keptel.AI integrates seamlessly into  
              enterprise workflows for real, scalable outcomes.
            </p>
          </div>

          {/* RIGHT GRID */}
          <div className="grid grid-cols-2 gap-6">
            <Box title="100+ AI accelerators" text="to optimize and automate operations end-to-end." />
            <Box title="AI agents tailored by industry" text="built for automotive, aerospace, IT, and automation." />
            <Box title="Open cloud architecture" text="smooth integration with AWS, Azure, GCP, and Fabric." />
            <Box title="Full observability dashboards" text="track cost, model drift, compliance, and performance." />
          </div>

        </div>
      </section>

      {/* ================= KEY BENEFITS ================= */}
      <section className="w-full py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold">Key benefits of Keptel</h2>
          <div className="h-[3px] w-16 bg-[#D60000] mt-3 mb-12"></div>

          <div className="grid md:grid-cols-4 gap-10">

            <div>
              <h3 className="text-xl font-semibold text-[#D60000]">Seamless AI integration</h3>
              <p className="text-gray-700 mt-3 leading-relaxed">
                Integrates into existing workflows with cloud-agnostic design.  
                No disruptive overhauls — deploy AI instantly across hybrid environments.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[#D60000]">Efficiency & cost savings</h3>
              <p className="text-gray-700 mt-3 leading-relaxed">
                Automate processes, reduce delays, eliminate human error,  
                and streamline operations with built-in governance.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[#D60000]">Analytics at your fingertips</h3>
              <p className="text-gray-700 mt-3 leading-relaxed">
                Leverage Keptel’s domain-specific datasets + third-party data  
                for real-time insights and faster decision-making.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[#D60000]">Personalized experiences</h3>
              <p className="text-gray-700 mt-3 leading-relaxed">
                AI tools adapt to customer needs, enhancing user experience  
                while reducing operational effort and increasing satisfaction.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= IMPACT ================= */}
      <section className="w-full py-24 bg-[#1F2937] text-white">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold">Keptel impact</h2>
          <div className="h-[3px] w-16 bg-[#D60000] mt-3 mb-10"></div>

          <p className="max-w-3xl text-gray-300 leading-relaxed">
            Keptel.AI empowers organizations to scale AI with control, speed,  
            and measurable business results — across automotive, aerospace,  
            embedded, and digital transformation programs.
          </p>

          <div className="grid md:grid-cols-4 gap-8 mt-14">

            <ImpactCard metric="100+" text="AI accelerators and industry-ready agents" />
            <ImpactCard metric="27%" text="reduction in process turnaround time" />
            <ImpactCard metric="40%" text="boost in customer satisfaction scores" />
            <ImpactCard metric="20%" text="productivity increase through AI automation" />

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function ImpactCard({ metric, text }) {
  return (
    <div className="bg-white text-gray-900 rounded-xl p-6 shadow-md border border-gray-200">
      <h3 className="text-4xl font-bold text-[#D60000]">{metric}</h3>
      <p className="mt-3 text-gray-700 leading-relaxed text-sm">{text}</p>
    </div>
  );
}
