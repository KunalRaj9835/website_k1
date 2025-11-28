"use client";
import Footer from "@/components/Footer";

export default function DataModernizationPage() {
  return (
    <div>
      <div className="min-h-screen bg-[#E7EEF3] text-black pt-24 pb-32">
        <div className="max-w-5xl mx-auto px-6">

          {/* Title */}
          <h1 className="text-4xl font-bold mb-4">Data Modernization</h1>

          {/* Intro */}
          <p className="text-black leading-relaxed max-w-3xl">
            Modernize legacy environments, simplify complex data ecosystems,
            and rebuild your enterprise data foundation for scale. Our modernization
            approach enables seamless migration to cloud-native platforms, unified
            access layers, real-time data availability, and AI-ready architectures.
          </p>

          {/* Feature Block 1 */}
          <div className="mt-12 p-6 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-950 to-black border border-slate-700 shadow-xl">

            <h2 className="text-2xl text-red-500 font-semibold mb-4">Core Modernization Capabilities</h2>

            <ul className="space-y-3 text-gray-400 text-sm">
              <li>• Legacy warehouse re-engineering and schema redesign</li>
              <li>• Migration from on-prem to cloud-native data platforms</li>
              <li>• Data lake / lakehouse architecture implementation</li>
              <li>• ETL-to-ELT transformation using modern engines</li>
              <li>• API-first data access and service layers</li>
              <li>• Data quality, lineage, governance and cataloging automation</li>
              <li>• Real-time ingestion frameworks and change-data-capture (CDC)</li>
              <li>• Enterprise semantic layers for unified analytics</li>
              <li>• Metadata enrichment and automated classification</li>
            </ul>
          </div>

          {/* Feature Block 2 */}
          <div className="mt-10 p-6 rounded-3xl bg-white border border-slate-300 shadow-sm">

            <h3 className="text-xl font-semibold mb-3">Modern Architecture Patterns</h3>

            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Data mesh for distributed domain ownership</li>
              <li>• Lakehouse for unified BI and ML workflows</li>
              <li>• Serverless pipelines for elastic scaling</li>
              <li>• Zero-copy analytics across compute engines</li>
              <li>• Hybrid and multi-cloud data fabrics</li>
            </ul>
          </div>

          {/* Outcomes */}
          <div className="mt-10 p-6 rounded-3xl bg-white border border-slate-300 shadow-sm">

            <h3 className="text-xl font-semibold mb-3">Business Outcomes</h3>

            <p className="text-gray-700 text-sm leading-relaxed">
              A modernized data environment unlocks agility, reduces operational cost,
              improves reliability, and enables enterprises to adopt generative AI,
              automation, and advanced analytics without architectural barriers.
            </p>
          </div>

          {/* Use Cases */}
          <div className="mt-10 grid md:grid-cols-2 gap-6">

            <div className="p-6 rounded-3xl bg-white border border-slate-300 shadow-sm">
              <h4 className="font-semibold mb-2">Modernization Use Cases</h4>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Legacy BI platform replacement</li>
                <li>• Cloud-first data strategy transformation</li>
                <li>• Warehouse-to-lakehouse migrations</li>
                <li>• Removal of redundant data systems</li>
                <li>• Enterprise data consolidation programs</li>
              </ul>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-slate-300 shadow-sm">
              <h4 className="font-semibold mb-2">Ideal For</h4>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Enterprises with fragmented legacy systems</li>
                <li>• Organizations requiring real-time access layers</li>
                <li>• Teams building AI and analytics modernization roadmaps</li>
              </ul>
            </div>

          </div>

        </div>
      </div>
      <Footer />
    </div>
  );
}
