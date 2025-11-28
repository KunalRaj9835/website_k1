"use client";
import Footer from "@/components/Footer";

export default function ArtificialIntelligencePage() {
  return (
    <div>
      <div className="min-h-screen bg-[#E7EEF3] text-black pt-24 pb-32">
        <div className="max-w-5xl mx-auto px-6">

          {/* Title */}
          <h1 className="text-4xl font-bold mb-4">Artificial Intelligence</h1>

          {/* Intro */}
          <p className="text-black leading-relaxed max-w-3xl">
            Deploy next-generation intelligence across your enterprise using
            machine learning, generative AI, and automation. Our AI approach spans
            model engineering, LLM integration, intelligent automation, and
            decision engines designed to accelerate performance and transform
            workflows.
          </p>

          {/* Feature Block 1 */}
          <div className="mt-12 p-6 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-950 to-black border border-slate-700 shadow-xl">

            <h2 className="text-2xl text-red-500 font-semibold mb-4">AI & ML Capabilities</h2>

            <ul className="space-y-3 text-gray-400 text-sm">
              <li>• Machine learning model development & optimization</li>
              <li>• Generative AI pipelines: LLMs, embeddings, fine-tuning</li>
              <li>• Retrieval-augmented generation (RAG) architectures</li>
              <li>• Intelligent automation with multi-agent systems</li>
              <li>• Computer vision for document and media intelligence</li>
              <li>• Forecasting, anomaly detection & risk scoring engines</li>
              <li>• Real-time inference pipelines across cloud and edge</li>
              <li>• Responsible AI, governance frameworks & bias mitigation</li>
            </ul>
          </div>

          {/* Feature Block 2 */}
          <div className="mt-10 p-6 rounded-3xl bg-white border border-slate-300 shadow-sm">

            <h3 className="text-xl font-semibold mb-3">AI System Architecture Patterns</h3>

            <ul className="space-y-2 text-sm text-gray-700">
              <li>• LLM + vector database ecosystems</li>
              <li>• Agentic workflows with task orchestration</li>
              <li>• Hybrid ML deployment: cloud, on-prem, and edge</li>
              <li>• Multi-model ensembles for higher accuracy</li>
              <li>• Real-time inference with GPU-accelerated pipelines</li>
            </ul>
          </div>

          {/* Outcomes */}
          <div className="mt-10 p-6 rounded-3xl bg-white border border-slate-300 shadow-sm">

            <h3 className="text-xl font-semibold mb-3">Business Outcomes</h3>

            <p className="text-gray-700 text-sm leading-relaxed">
              AI amplifies workforce productivity, accelerates decision-making,
              and reduces operational cost by enabling prediction, automation,
              summarization, and fully autonomous workflows across the enterprise.
            </p>
          </div>

          {/* Use Cases */}
          <div className="mt-10 grid md:grid-cols-2 gap-6">

            <div className="p-6 rounded-3xl bg-white border border-slate-300 shadow-sm">
              <h4 className="font-semibold mb-2">AI Use Cases</h4>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Intelligent copilots for employees</li>
                <li>• RAG-powered chat & document automation</li>
                <li>• Predictive maintenance and supply chain forecasting</li>
                <li>• Fraud detection and risk modeling</li>
                <li>• Automated customer operations</li>
              </ul>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-slate-300 shadow-sm">
              <h4 className="font-semibold mb-2">Ideal For</h4>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Enterprises adopting AI-first transformation</li>
                <li>• Teams building LLM-native applications</li>
                <li>• Organizations seeking automation & decision intelligence</li>
              </ul>
            </div>

          </div>

        </div>
      </div>
      <Footer />
    </div>
  );
}
