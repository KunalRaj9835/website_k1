import Footer from "@/components/Footer";
export default function CloudAnalytics() {
  return (
    <div>
    <section className="max-w-7xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-[#0e355d] mb-6">Cloud & Analytics</h1>

      <p className="text-lg leading-relaxed mb-8">
        Keptel delivers complete cloud and analytics solutions across AWS, Azure, 
        and Google Cloud. We help enterprises modernize data systems, build 
        secure cloud ecosystems, and enable real-time decision-making through 
        powerful analytics platforms.
      </p>

      <h2 className="text-2xl font-semibold text-[#0e355d] mb-3">What We Do</h2>
      <ul className="list-disc pl-6 space-y-2 mb-8">
        <li>Cloud migration & modernization</li>
        <li>Data Lake & Data Warehouse engineering</li>
        <li>End-to-end BI & dashboard development</li>
        <li>Cloud-native ETL/ELT pipeline creation</li>
        <li>Multi-cloud governance & cost optimization</li>
      </ul>

      <h2 className="text-2xl font-semibold text-[#0e355d] mb-3">Technologies</h2>
      <p className="mb-8">
        AWS, Azure, GCP, BigQuery, Snowflake, Hive, Power BI, Tableau, Looker, 
        Qlik, Talend, Informatica, AWS Glue.
      </p>

      <h2 className="text-2xl font-semibold text-[#0e355d] mb-3">Use Cases</h2>
      <ul className="list-disc pl-6 space-y-2 mb-8">
        <li>Real-time analytics dashboards</li>
        <li>Customer behavior & personalization</li>
        <li>End-to-end CI/CD data pipelines</li>
        <li>Predictive forecasting & optimization</li>
      </ul>
    </section>
    <Footer />
    </div>
  );
}
