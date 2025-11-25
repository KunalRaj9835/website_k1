import Footer from "@/components/Footer";
export default function Infrastructure() {
  return (
    <div>
    <section className="max-w-7xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-[#0e355d] mb-6">Infrastructure</h1>

      <p className="text-lg leading-relaxed mb-8">
        Keptel engineers secure, scalable enterprise infrastructure using 
        industry-leading Linux platforms and hybrid cloud environments. Our 
        infrastructure services ensure reliability, performance, and compliance.
      </p>

      <h2 className="text-2xl font-semibold text-[#0e355d] mb-3">What We Do</h2>
      <ul className="list-disc pl-6 space-y-2 mb-8">
        <li>Linux server provisioning & configuration</li>
        <li>Infrastructure automation (IaC)</li>
        <li>Enterprise-grade security & OS-hardening</li>
        <li>Hybrid cloud infrastructure setup</li>
        <li>Monitoring, observability & log management</li>
      </ul>

      <h2 className="text-2xl font-semibold text-[#0e355d] mb-3">Technologies</h2>
      <p className="mb-8">
        RedHat, SUSE, Ubuntu, VMware, Hyper-V, Terraform, Ansible, CI/CD Tooling.
      </p>
    </section>
    <Footer />
    </div>
  );
}
