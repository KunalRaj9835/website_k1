import Footer from "@/components/Footer";
export default function StorageDatabases() {
  return (
    <div>
    <section className="max-w-7xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-[#0e355d] mb-6">Storage & Databases</h1>

      <p className="text-lg leading-relaxed mb-8">
        Keptel designs, deploys, and manages enterprise-grade storage and database 
        systems optimized for performance, analytics, and secure data operations.
      </p>

      <h2 className="text-2xl font-semibold text-[#0e355d] mb-3">What We Do</h2>
      <ul className="list-disc pl-6 space-y-2 mb-8">
        <li>Database design & architecture</li>
        <li>High availability & disaster recovery</li>
        <li>Metadata management & governance</li>
        <li>Query tuning and optimization</li>
        <li>Secure data warehousing</li>
      </ul>

      <h2 className="text-2xl font-semibold text-[#0e355d] mb-3">Technologies</h2>
      <p className="mb-8">
        Oracle, PostgreSQL, MySQL, SQL Server, Snowflake, BigQuery.
      </p>
    </section>
    <Footer />
    </div>
  );
}
