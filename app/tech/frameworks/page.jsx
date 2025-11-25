import Footer from "@/components/Footer";
export default function Frameworks() {
  return (
    <div>
    <section className="max-w-7xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-[#0e355d] mb-6">Frameworks</h1>

      <p className="text-lg leading-relaxed mb-8">
        Keptel builds scalable, high-performance enterprise applications using 
        modern backend frameworks such as Spring Boot, Kafka, and microservices. 
        These frameworks power mission-critical workloads and distributed systems.
      </p>

      <h2 className="text-2xl font-semibold text-[#0e355d] mb-4">What We Do</h2>
      <ul className="list-disc pl-6 space-y-2 mb-8">
        <li>Microservices architecture design</li>
        <li>Event-driven backend development</li>
        <li>Building REST / GraphQL APIs</li>
        <li>High-throughput data processing systems</li>
        <li>Legacy-to-modern framework migration</li>
      </ul>

      <h2 className="text-2xl font-semibold text-[#0e355d] mb-4">Technologies</h2>
      <p className="mb-8">
        Spring Boot, Kafka, Java, .NET, Python, Event Streaming, API Gateways, 
        Kubernetes-based runtime environments.
      </p>
    </section>
    <Footer />
    </div>
  );
}
