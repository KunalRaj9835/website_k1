"use client";
import Footer from "@/components/Footer";

export default function AIPoweredOperationsPage() {
  return (
    <div>
      <div className="min-h-screen bg-[#E7EEF3] text-black pt-24 pb-32">
        <div className="max-w-5xl mx-auto px-6">

          {/* Title */}
          <h1 className="text-4xl font-bold mb-4">AI-Powered Operations</h1>

          {/* Intro */}
          <p className="text-black leading-relaxed max-w-3xl">
            Integrate AI into operational workflows to automate manual processes,
            improve accuracy, reduce latency, and enable real-time decision-making
            across enterprise systems. We help organizations evolve from reactive
            operations to intelligent, proactive, and autonomous ecosystems.
          </p>

          {/* Feature Block 1 */}
          <div className="mt-12 p-6 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-950 to-black border border-slate-700 shadow-xl">

            <h2 className="text-2xl text-red-500 font-semibold mb-4">Operational AI Capabilities</h2>

            <ul className="space-y-3 text-gray-400 text-sm">
              <li>• Intelligent workflow automation and optimization</li>
              <li>• Real-time monitoring, insights & automated alerting</li>
              <li>• SLA-aware task allocation and workforce automation</li>
              <li>• AI-driven process mining and bottleneck detection</li>
              <li>• Multi-agent systems for autonomous operations</li>
              <li>• Dynamic routing, scheduling & load balancing</li>
              <li>• RPA augmentation with decision intelligence</li>
              <li>• Cross-platform orchestration powered by AI</li>
            </ul>
          </div>

          {/* Feature Block 2 */}
          <div className="mt-10 p-6 rounded-3xl bg-white border border-slate-300 shadow-sm">

            <h3 className="text-xl font-semibold mb-3">Operational Architecture Patterns</h3>

            <ul className="space-y-2 text-sm text-gray-700">
              <li>• AI-first operations control towers</li>
              <li>• Real-time streaming architectures</li>
              <li>• Workflow agents & automated decision trees</li>
              <li>• Self-healing operational systems</li>
              <li>• Multi-system orchestration layers</li>
            </ul>
          </div>

          {/* Outcomes */}
          <div className="mt-10 p-6 rounded-3xl bg-white border border-slate-300 shadow-sm">

            <h3 className="text-xl font-semibold mb-3">Business Outcomes</h3>

            <p className="text-gray-700 text-sm leading-relaxed">
              AI-driven operations significantly reduce cycle times, remove manual
              bottlenecks, improve SLA adherence, and enable organizations to achieve
              always-on, resilient, and intelligent operational environments.
            </p>
          </div>

          {/* Use Cases */}
          <div className="mt-10 grid md:grid-cols-2 gap-6">

            <div className="p-6 rounded-3xl bg-white border border-slate-300 shadow-sm">
              <h4 className="font-semibold mb-2">Operational Use Cases</h4>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Automated service operations & ticket triage</li>
                <li>• Real-time anomaly detection & resolution</li>
                <li>• AI-powered workforce routing & load balancing</li>
                <li>• Intelligent scheduling & capacity management</li>
                <li>• End-to-end process automation with AI</li>
              </ul>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-slate-300 shadow-sm">
              <h4 className="font-semibold mb-2">Ideal For</h4>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Enterprises scaling operational automation</li>
                <li>• Teams reducing manual overhead and human error</li>
                <li>• Organizations targeting real-time decision intelligence</li>
              </ul>
            </div>

          </div>

        </div>
      </div>
      <Footer />
    </div>
  );
}
