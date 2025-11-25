import Footer from "@/components/Footer";
export default function BackendEngineering() {
  return (
    <div>
    <section className="max-w-7xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-[#0e355d] mb-6">Backend Engineering</h1>

      <p className="text-lg leading-relaxed mb-8">
        Keptel builds stable, scalable, and secure backend systems that power 
        enterprise applications. Our backend engineering focuses on high 
        performance, robust integration, and clean architecture.
      </p>

      <h2 className="text-2xl font-semibold text-[#0e355d] mb-3">What We Do</h2>
      <ul className="list-disc pl-6 space-y-2 mb-8">
        <li>Enterprise backend development</li>
        <li>REST & GraphQL API development</li>
        <li>Integration with ERP, CRM, and Cloud services</li>
        <li>Performance tuning & optimization</li>
        <li>DevOps-enabled CI/CD deployments</li>
      </ul>

      <h2 className="text-2xl font-semibold text-[#0e355d] mb-3">Technologies</h2>
      <p className="mb-8">
        Java, .NET, Python, Microservices, Docker, Kubernetes, API Gateways.
      </p>
    </section>

    <Footer />
    </div>
  );
}
