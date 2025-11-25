import Footer from "@/components/Footer";
export default function Orchestration() {
  return (
    <div>
    <section className="max-w-7xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-[#0e355d] mb-6">Orchestration Platforms</h1>

      <p className="text-lg leading-relaxed mb-8">
        Keptel automates complex workflows and distributed data operations using 
        industry-leading orchestration platforms such as Apache Spark and 
        Apache Airflow. Our automation systems improve reliability and speed.
      </p>

      <h2 className="text-2xl font-semibold text-[#0e355d] mb-3">What We Do</h2>
      <ul className="list-disc pl-6 space-y-2 mb-8">
        <li>End-to-end workflow orchestration</li>
        <li>Distributed data processing</li>
        <li>Real-time streaming pipelines</li>
        <li>Automated ETL/ELT scheduling</li>
        <li>DAG design, error handling & monitoring</li>
      </ul>

      <h2 className="text-2xl font-semibold text-[#0e355d] mb-3">Technologies</h2>
      <p className="mb-8">
        Apache Spark, Apache Airflow, Python, Cloud Schedulers, Glue Workflows.
      </p>
    </section>
    <Footer />
    </div>
  );
}
